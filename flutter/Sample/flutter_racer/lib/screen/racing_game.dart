import 'dart:math';
import 'dart:ui';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/game.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flutter_racer/components/obstacle.dart';
import 'package:flame/text.dart';
import '../components/life_heart.dart';
import '../components/move_button.dart';
import '../components/player.dart';

class RacingGame extends FlameGame with TapCallbacks, HasCollisionDetection {
  /// Object Class
  late Player player;

  late MoveButton leftMoveBtn, rightMoveBtn;
  List<LifeHeart> lifeHeartList = [];

  /// Loaded Image Values
  late Sprite playerSprite;
  late Sprite obstacleSprite;
  late Sprite leftMoveButtonSprite;
  late Sprite rightMoveButtonSprite;

  int currentScore = 0; // Score
  late TextComponent scoreText; // Score Text

  double nextSpawnSeconds = 0; // Create Obstacle Time
  Function onGameOver; // GameOver Callback
  int playerDirection = 0; // Player Move (0: Stop, 1: Right, -1: Left)

  RacingGame({required this.onGameOver});

  @override
  Color backgroundColor() {
    return Color(0xffa2a2a2);
  }

  @override
  Future<void> onLoad() async {
    // 1. Sprite Image Load
    Image playerImg = await images.load('racing_car.png');
    Image obstacleImg = await images.load('barrier.png');
    Image heartImg = await images.load('heart.png');
    Image leftMoveImg = await images.load('left.png');
    Image rightMoveImg = await images.load('right.png');

    // 2. Sprite Object
    playerSprite = Sprite(playerImg);
    obstacleSprite = Sprite(obstacleImg);
    leftMoveButtonSprite = Sprite(leftMoveImg);
    rightMoveButtonSprite = Sprite(rightMoveImg);

    lifeHeartList.add(
      LifeHeart(
        position: Vector2(30, 60),
        heartSprite: Sprite(heartImg),
      ),
    );

    lifeHeartList.add(
      LifeHeart(
        position: Vector2(60, 60),
        heartSprite: Sprite(heartImg),
      ),
    );

    lifeHeartList.add(
      LifeHeart(
        position: Vector2(90, 60),
        heartSprite: Sprite(heartImg),
      ),
    );

    /// Score Context
    scoreText = TextComponent(
      text: '0',
      textRenderer: TextPaint(
        style: TextStyle(
          fontSize: 32,
          color: Color(0xff000000),
          fontWeight: FontWeight.bold,
        ),
      ),
      anchor: Anchor.topRight,
      position: Vector2(size.x - 60, 50),
    );

    // 3. Create Player
    player = Player(
      position: Vector2(size.x * 0.25, size.y - 20),
      playerSprite: playerSprite,
      damageCallback: onDamage,
    );

    // 4. Create Move Button
    leftMoveBtn = MoveButton(
      direction: 'left',
      position: Vector2(30, size.y - 80),
      moveButtonSprite: leftMoveButtonSprite,
      onTapMoveButton: (isTapping) {
        if (isTapping) {
          playerDirection = -1;
        } else {
          playerDirection = 0;
        }
      },
    );

    rightMoveBtn = MoveButton(
      direction: 'right',
      position: Vector2(size.x - 30, size.y - 80),
      moveButtonSprite: rightMoveButtonSprite,
      onTapMoveButton: (isTapping) {
        if (isTapping) {
          playerDirection = 1;
        } else {
          playerDirection = 0;
        }
      },
    );

    // 5. Add Component
    add(scoreText);
    add(player);
    add(leftMoveBtn);
    add(rightMoveBtn);
    for (LifeHeart lifeHeart in lifeHeartList) {
      add(lifeHeart);
    }


    // 6. Background Music
    startBgmMusic();

  }

  @override
  void onDispose() {
    stopBgmMusic();
    super.onDispose();
  }


  @override
  void onTapUp(TapUpEvent event) {
    if (paused) {
      // GameOver Logic
      onGameOver.call();
    }
    super.onTapUp(event);
  }

  @override
  void update(double dt) {
    super.update(dt);

    /// Obstacle Randoom
    nextSpawnSeconds -= dt;
    if (nextSpawnSeconds < 0) {
      add(Obstacle(
          position: Vector2(size.x * Random().nextDouble() * 1, 0),
          obstacleSprite: obstacleSprite));
    }
    nextSpawnSeconds = 0.3 * Random().nextDouble() * 2;

    /// Score Logic
    if (!paused) {
      currentScore++;
      scoreText.text = currentScore.toString();
    }

    /// Player Move Logic
    if (playerDirection == 1) {
      // Right Move
      player.position = Vector2(
        player.position.x >= size.x - 30
            ? player.position.x
            : player.position.x + 7,
        player.position.y,
      );
    } else if (playerDirection == -1) {
      // Left Move
      player.position = Vector2(
        player.position.x <= 30
            ? player.position.x
            : player.position.x - 7,
        player.position.y,
      );
    } else {
      // Stop
      player.position = Vector2(player.position.x, player.position.y);
    }
  }

  void onDamage() {
    // Player Damage, Life Decrease
    print('onDamage');
    if (lifeHeartList.isNotEmpty) {
      FlameAudio.play('sfx/car_crash.ogg');
      remove(lifeHeartList[lifeHeartList.length - 1]);
      lifeHeartList.removeLast();
      return;
    }

    // GameOver
    add(
      TextComponent(
        text: 'GAME OVER\nTouch To Main',
        textRenderer: TextPaint(
          style: TextStyle(
            fontSize: 32,
            color: Color(0xff000000),
            fontWeight: FontWeight.bold,
          ),
        ),
        anchor: Anchor.center,
        position: Vector2(size.x / 2, size.y / 2),
      ),
    );

    // Holding to Delay
    Future.delayed(
      Duration(milliseconds: 500),
          () {
        paused = true;
      },
    );
  }

  void startBgmMusic() {
    // Background Music Start
    FlameAudio.bgm.initialize();
    FlameAudio.bgm.play('music/level2.wav');
  }

  void stopBgmMusic() {
    // Background Music Stop
    FlameAudio.bgm.stop();
    FlameAudio.bgm.dispose();
  }
}