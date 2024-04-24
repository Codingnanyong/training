import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';

import 'obstacle.dart';

/// Racing Car Object
class Player extends SpriteComponent with CollisionCallbacks {
  Sprite playerSprite;
  final VoidCallback damageCallback;

  Player(
      {required position,
      required this.playerSprite,
      required this.damageCallback})
      : super(
          position: position,
          size: Vector2.all(48),
          anchor: Anchor.bottomCenter,
        );
  
  @override
  Future<void> onLoad() async {
    super.onLoad();
    sprite = playerSprite;
    add(RectangleHitbox());
  }

  @override
  void onCollisionStart(Set<Vector2> intersectionPoints, PositionComponent other) {
    if (other is Obstacle){
      damageCallback.call();
    }
    else{
      super.onCollisionStart(intersectionPoints, other);
    }
  }
}
