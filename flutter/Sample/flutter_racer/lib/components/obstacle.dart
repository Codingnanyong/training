import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flutter_racer/components/player.dart';

class Obstacle extends SpriteComponent with HasGameRef, CollisionCallbacks {
  Sprite obstacleSprite;

  Obstacle({required position, required this.obstacleSprite})
      : super(
            position: position,
            size: Vector2.all(64),
            anchor: Anchor.bottomCenter);

  @override
  Future<void> onLoad() async {
    super.onLoad();
    sprite = obstacleSprite;
    add(RectangleHitbox());
  }

  @override
  void update(double dt) async {
    super.update(dt);
    position.y = position.y + 5;
    if (position.y - size.y > gameRef.size.y) {
      removeFromParent();
    }
  }

  @override
  void onCollisionStart(
      Set<Vector2> intersectionPoints, PositionComponent other) {
    if (other is Player) {
      removeFromParent();
    } else {
      super.onCollisionStart(intersectionPoints, other);
    }
  }
}
