import 'package:flutter1/AbstractUser.dart';

class UserAddr implements AbstractUser{
  final String name;
  final int age;

  UserAddr (this.name,this.age);

  @override
  void Introduction() {
    print('My Name is ${this.name}. and ${this.age} years.');
  }
}