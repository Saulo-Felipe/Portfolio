import { Container } from "./styles";
import { useEffect, useRef } from "react";

export function Stacks() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  async function Init() {
    const Phaser = await import("phaser");

    class MyGame extends Phaser.Scene {

      preload() {
        this.load.image("javascript", "/images/javascript.png");
      }

      create() {
        let sprite = this.add.image(100, 100, "javascript");
        sprite.setScale(0.1);

        // sprite.setCollideWorldBounds(true);
        // sprite.setBounce(0.4, 0.4);
        sprite.setInteractive();

        this.input.setDraggable(sprite);

        this.input.on("drag", (pointer: any, gameObject: any, dragX: any, dragY: any) => {
          gameObject.x = dragX;
          gameObject.y = dragY;
        });
      }

      update() {

      }
    }

    const gameConfig = {
      type: Phaser.CANVAS,
      width: "100%",
      height: window.innerHeight,
      canvas: canvasRef.current as HTMLCanvasElement,
      physics: {
        default: "arcade",
        arcade: {
          debug: true,
          gravity: { y: 300 }
        },
      },
      scene: MyGame
    }

    new Phaser.Game(gameConfig);

  }



  useEffect(() => {
    Init();
  }, []);

  return (
    <Container>
      <canvas
        id="canvasElement"
        ref={canvasRef}
      ></canvas>
    </Container>
  );
}