import 'package:flame/components.dart';
import 'package:flame/events.dart';

class MoveButton extends SpriteComponent with TapCallbacks {
  Sprite moveButtonSprite;
  Function(bool) onTapMoveButton; // Click Event
  // Button Init
  MoveButton({
    required String direction, // Button Location
    required position,
    required this.moveButtonSprite,
    required this.onTapMoveButton,
  }) : super(
    position: position,
    size: Vector2.all(64),
    anchor: direction == 'left' ? Anchor.bottomLeft : Anchor.bottomRight,
  );


  @override
  Future<void> onLoad() async {
    super.onLoad();
    sprite = moveButtonSprite;
  }

  @override
  void onTapDown(TapDownEvent event) {
    // Button Click
    onTapMoveButton.call(true);
  }

  @override
  void onTapUp(TapUpEvent event) {
    // Button No-Click
    onTapMoveButton.call(false);
  }
}