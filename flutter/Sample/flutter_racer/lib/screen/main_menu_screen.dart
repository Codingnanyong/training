import 'package:flutter/material.dart';
import 'package:flutter_racer/screen/game_screen.dart';

class MainMenuScreen extends StatelessWidget {
  const MainMenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(fit: StackFit.expand, children: [
        Image.asset(
          'assets/images/racing_main.png',
          fit: BoxFit.cover,
          opacity: AlwaysStoppedAnimation(0.7),
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            /// Title Text
            Text(
              'Flutter Racer',
              style: TextStyle(
                fontSize: 60,
                fontWeight: FontWeight.bold,
              ),
            ),

            /// Start Button
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.black,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(4),
                  )),
              onPressed: () {
                /// Button click then Game Start
                Navigator.push(context, MaterialPageRoute(builder: (context) => GameScreen()));

              },
              child: Text(
                'GAME START',
                style: TextStyle(
                  fontSize: 32,
                  color: Colors.white,
                ),
              ),
            ),
          ],
        )
      ]),
    );
  }
}