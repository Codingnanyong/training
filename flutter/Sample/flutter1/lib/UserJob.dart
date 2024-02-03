import 'package:flutter1/User.dart';
import 'package:flutter1/UserInfo.dart';

mixin UserJob on User{

  void work(){
    print('${this.name} is work');
  }
}