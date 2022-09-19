import { Container } from "./styles";
import { useEffect, useRef } from "react";

export function Stacks() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  async function Init() {
    const Phaser = await import("phaser");

    class MyGame extends Phaser.Scene {

      preload() {
        this.load.image("javascript", "/images/javascript.png");
				this.load.image("click-here", "/images/click-here.png");

        this.load.atlas("languages", "/collisionAssets/sprites.png", "/collisionAssets/sprites.json");
        this.load.json("physics", "/collisionAssets/physics.json");
				
      }

      create() {
        this.matter.world.setBounds();
				this.add.image(140, 140, "click-here").setRotation(-0.5).alpha = 0.3;
        const spritePhysics = this.cache.json.get("physics");

        this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });


				this.input.on("pointerdown", (pointer: any) => {
					const sortLanguage = Object.keys(spritePhysics)[Math.floor(Math.random()*9)];
					console.log("sorted: ", sortLanguage);
					this.matter.add.sprite(pointer.x, pointer.y, "languages", sortLanguage, { shape: spritePhysics[sortLanguage] }).setOrigin(0.5, 0.5).setScale(0.3);
				});
      }

      update() {

      }
    }

    new Phaser.Game({
      type: Phaser.CANVAS,
      width: window.innerWidth-100,
      height: window.innerHeight-100,
      canvas: canvasRef.current as HTMLCanvasElement,
			backgroundColor: "#0c101a",
      physics: {
        default: "matter",
        matter: {
          // debug: true
        }
      },
      scene: MyGame
    });

  }



  useEffect(() => {
    Init();
  }, []);

  return (
    <Container>
      <canvas
        id={"canvasElement"}
        ref={canvasRef}
      ></canvas>
    </Container>
  );
}
