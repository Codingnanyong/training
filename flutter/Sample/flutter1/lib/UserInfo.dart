import 'package:flutter/material.dart';

import 'User.dart';
import 'UserJob.dart';
import 'enum.dart';

class UserInfo extends User with UserJob{
  UserInfo(super.name, super.age, this.gender,this.job);
  final Gender gender;
  final String job;

  set gender(Gender _gender){
    this.gender = _gender;
  }
  set job(String _job){
    this.job = _job;
  }
  @override
  void Introduction(){
    print('Extend My Name Is ${this.name}.And Age is ${this.age} years.');
  }

  void Info(){
    print("My Gender is ${this.gender}");
    work();
  }
}