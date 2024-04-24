import 'package:flame/components.dart';

class LifeHeart extends SpriteComponent {
  Sprite heartSprite;

  // Player Init
  LifeHeart({required position, required this.heartSprite}) : super(
    position: position,
    size: Vector2.all(24),
    anchor: Anchor.topLeft,
  );

  @override
  Future<void> onLoad() async {
    super.onLoad();
    // Sprite Image
    sprite = heartSprite;
  }
}