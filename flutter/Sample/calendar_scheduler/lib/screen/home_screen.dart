import 'package:calendar_scheduler/screen/banner_ad_widget.dart';
import 'package:flutter/material.dart';
import 'package:calendar_scheduler/component/main_calendar.dart';
import 'package:calendar_scheduler/component/schedule_card.dart';
import 'package:calendar_scheduler/component/today_banner.dart';
import 'package:calendar_scheduler/component/schedule_bottom_sheet.dart';
import 'package:calendar_scheduler/const/colors.dart';
import 'package:get_it/get_it.dart';
import 'package:calendar_scheduler/database/drift_database.dart';
import 'package:provider/provider.dart';
import 'package:calendar_scheduler/provider/schedule_provider.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:calendar_scheduler/model/schedule_model.dart';

//class HomeScreen extends StatelessWidget {
 class HomeScreen extends StatefulWidget {
   @override
   State<HomeScreen> createState() => _HomeScreen();
 }

class _HomeScreen extends State<HomeScreen>{
  DateTime selectedDate = DateTime.utc(
    DateTime.now().year,
    DateTime.now().month,
    DateTime.now().day,
  );

  @override
  Widget build(BuildContext context) {
    //final provider = context.watch<ScheduleProvider>();
    //final selectedDate = provider.selectedDate;
    //final schedules = provider.cache[selectedDate] ?? [];

    return Scaffold(
      floatingActionButton: FloatingActionButton(
        backgroundColor: PRIMARY_COLOR,
        onPressed: () {
          showModalBottomSheet(
            context: context,
            isDismissible: true,
            isScrollControlled: true,
            builder: (_) => ScheduleBottomSheet(
              selectedDate: selectedDate,
            ),
          );
        },
        child: Icon(
          Icons.add,
        ),
      ),
      body: SafeArea(
        child: Column(
          children: [
            MainCalendar(
              selectedDate: selectedDate, 
              onDaySelected: (selectedDate, focusedDate) =>
                  onDaySelected(selectedDate, focusedDate, context),
            ),
            SizedBox(height: 8.0),
            TodayBanner(
              selectedDate: selectedDate,
              count: 0,
            ),
            SizedBox(height: 8.0),
            Expanded(

              child: StreamBuilder<QuerySnapshot>(
                stream: FirebaseFirestore.instance.collection('schedule')
                    .where('date',isEqualTo: '${selectedDate.year}${selectedDate.month}${selectedDate.day}' ,
                ).snapshots(),
                builder: (context, snapshot){
                  if(snapshot.hasError){
                    return TodayBanner(
                        selectedDate: selectedDate, count: snapshot.data?.size ?? 0);
                  }
                  if(snapshot.connectionState == ConnectionState.waiting){
                    return Container();
                  }
                  final schedules = snapshot.data!.docs.map(
                      (QueryDocumentSnapshot e) => ScheduleModel.fromJson(
                          json: (e.data() as Map<String,dynamic>)),
                  ).toList();
                  return ListView.separated(
                    itemCount: schedules.length,
                    separatorBuilder: (context,index){
                      return BannerAdWidget();
                    },
                    itemBuilder: (context, index) {
                      final schedule = schedules[index];

                      return Dismissible(
                        key: ObjectKey(schedule.id),
                        direction: DismissDirection.startToEnd,
                        onDismissed: (DismissDirection direction) {
                          FirebaseFirestore.instance
                              .collection('schedule')
                              .doc(schedule.id)
                              .delete();
                          ;
                        },
                        child: Padding(
                          padding: const EdgeInsets.only(
                              bottom: 8.0, left: 8.0, right: 8.0),
                          child: ScheduleCard(
                            startTime: schedule.startTime,
                            endTime: schedule.endTime,
                            content: schedule.content,
                          ),
                        ),
                      );
                    },
                  );
                },
              ),

              /*
              child: ListView.builder(
                itemCount: schedules.length,
                itemBuilder: (context, index) {
                  final schedule = schedules[index];

                  return Dismissible(
                    key: ObjectKey(schedule.id),
                    direction: DismissDirection.startToEnd,
                    onDismissed: (DismissDirection direction) {
                      provider.deleteSchedule(date: selectedDate, id: schedule.id);  
                    },
                    child: Padding(
                      padding: const EdgeInsets.only(
                          bottom: 8.0, left: 8.0, right: 8.0),
                      child: ScheduleCard(
                        startTime: schedule.startTime,
                        endTime: schedule.endTime,
                        content: schedule.content,
                      ),
                    ),
                  );
                },
              ),*/
            ),
          ],
        ),
      ),
    );
  }

  void onDaySelected(
      DateTime selectedDate,
      DateTime focusedDate,
      BuildContext context,
      ) {
    setState(() {
      this.selectedDate = selectedDate;
    });

    /*final provider = context.read<ScheduleProvider>();
    provider.changeSelectedDate(
      date: selectedDate,
    );
    provider.getSchedules(date: selectedDate);*/
  }
}
