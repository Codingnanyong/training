import 'package:flutter/material.dart';

class User{
  final String name;
  final int age;

  User(String name,int age)
      : this.name =name,this.age=age;

  User.fromMap(Map<String,dynamic>map)
      : this.name = map['name'],
        this.age = map['age'];

  void Introduction(){
      print('My Name Is ${this.name}.And Age is ${this.age} years.');
  }
}