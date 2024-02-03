import 'package:flutter/material.dart';
import 'package:flutter1/Cache.dart';
import 'package:flutter1/User.dart';
import 'package:flutter1/UserAddr.dart';
import 'package:flutter1/UserInfo.dart';
import 'package:flutter1/enum.dart';

enum Status{
  approved,
  pending,
  rejected,
}
void main() {
  User ryu = User('ryu',30);
  ryu.Introduction();

  User ryuRe = User('ryu',20)
    ..Introduction();

  User Kim = User.fromMap({'name': 'kim', 'age' : 15});
  Kim.Introduction();

  //refactoring before
  UserInfo ryuInfo = UserInfo('ryu',30,Gender.Male,'Developer');
  ryuInfo.Introduction();
  ryuInfo.Info();

  UserAddr userAddr = UserAddr('ryu', 10);
  userAddr.Introduction();

  final cache = Cache<List<int>>(data : [1,2,3],);
  print (cache.data.reduce((value, element) => value+element));
}
