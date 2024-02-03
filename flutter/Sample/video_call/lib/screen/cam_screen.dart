import 'package:agora_rtc_engine/agora_rtc_engine.dart';
import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import 'package:video_call/const/agora.dart';

class CamScreen extends StatefulWidget {
  const CamScreen({Key? key}) : super(key: key);

  @override
  _CamScreenState createState() => _CamScreenState();
}

class _CamScreenState extends State<CamScreen> {
  RtcEngine? engine;
  int? uid;
  int? otherUid;

  Future<bool> init() async {
    final resp = await [Permission.camera, Permission.microphone].request();

    final cameraPermission = resp[Permission.camera];
    final micPermission = resp[Permission.microphone];

    if (cameraPermission != PermissionStatus.granted ||
        micPermission != PermissionStatus.granted) {
      throw 'You do not have camera or microphone permission.';
    }
    if (engine == null) {

      engine = createAgoraRtcEngine();

      await engine!.initialize(
        RtcEngineContext(
          appId: APP_ID,
          channelProfile: ChannelProfileType.channelProfileLiveBroadcasting,
        ),
      );

      engine!.registerEventHandler(
        RtcEngineEventHandler(
          onJoinChannelSuccess: (RtcConnection connection, int elapsed) {
            print('You have entered the channel. uid : ${connection.localUid}');
            setState(() {
              this.uid = connection.localUid;
            });
          },
          onLeaveChannel: (RtcConnection connection, RtcStats stats) {
            print('leave channel');
            setState(() {
              uid = null;
            });
          },
          onUserJoined: (RtcConnection connection, int remoteUid, int elapsed) {
            print('The other person has entered the channel. uid : $remoteUid');
            setState(() {
              otherUid = remoteUid;
            });
          },
          onUserOffline: (RtcConnection connection, int remoteUid,
              UserOfflineReasonType reason) {
            print('The other person has left the channel. uid : $uid');
            setState(() {
              otherUid = null;
            });
          },
        ),
      );

      await engine!.setClientRole(role: ClientRoleType.clientRoleBroadcaster);
      await engine!.enableVideo();
      await engine!.startPreview();
      await engine!.joinChannel(
        token: TEMP_TOKEN,
        channelId: CHANNEL_NAME,
        options: ChannelMediaOptions(),
        uid: 0,
      );
    }

    return true;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('LIVE'),
      ),
      body: FutureBuilder(
        future: init(),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasError) {
            return Center(
              child: Text(
                snapshot.error.toString(),
              ),
            );
          }

          if (!snapshot.hasData) {
            return Center(
              child: CircularProgressIndicator(),
            );
          }

          return Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: Stack(
                  children: [
                    renderMainView(),
                    Align(
                      alignment: Alignment.topLeft,
                      child: Container(
                        color: Colors.grey,
                        height: 160,
                        width: 120,
                        child: renderSubView(),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 8.0),
                child: ElevatedButton(
                  onPressed: () async {
                    if (engine != null) {
                      await engine!.leaveChannel();
                    }

                    Navigator.of(context).pop();
                  },
                  child: Text('Leave channel'),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget renderSubView() {
    if (uid != null) {
      return AgoraVideoView(
        controller: VideoViewController(
          rtcEngine: engine!,

          canvas: const VideoCanvas(uid: 0),
        ),
      );
    } else {
      return CircularProgressIndicator();
    }
  }

  Widget renderMainView() {
    if (otherUid != null) {
      return AgoraVideoView(
        controller: VideoViewController.remote(
          rtcEngine: engine!,

          canvas: VideoCanvas(uid: otherUid),
          connection: const RtcConnection(channelId: CHANNEL_NAME),
        ),
      );
    } else {
      return Center(
        child: const Text(
          'Please wait until other users enter.',
          textAlign: TextAlign.center,
        ),
      );
    }
  }
}
