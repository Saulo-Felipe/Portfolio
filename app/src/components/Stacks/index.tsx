import { Container } from "./styles";
import { useEffect, useRef } from "react";

export function Stacks() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  async function Init() {
    const Phaser = await import("phaser");

    class Language {
      life: number;
      language: Phaser.Physics.Matter.Image;
      isDead: boolean;

      constructor(spritePhysics: any, matter: Phaser.Physics.Matter.MatterPhysics, pointer: any) {
        const sortLanguage = Object.keys(spritePhysics)[Math.floor(Math.random()*9)];

        this.life = 60;
        this.language = matter.add.image(
          pointer.x, 
          pointer.y, 
          "languages", 
          sortLanguage, 
          { shape: spritePhysics[sortLanguage], mass: 1, ignorePointer: true }).setOrigin(0.5, 0.5).setScale(0.3)

        this.isDead = false;
      }

      dead() {
        // this.language.destroy();
        // this.isDead = true;
      }

      update() {
        if (this.life == 0) {
          this.dead();
        } else {
          this.life--;
        }
      }
    }

    class MyGame extends Phaser.Scene {
      preload() {
        this.load.image("javascript", "/images/javascript.png");

        this.load.atlas("languages", "/collisionAssets/sprites.png", "/collisionAssets/sprites.json");
        this.load.json("physics", "/collisionAssets/physics.json");

        this.load.image("sun", "/images/sun2.png");
      }

      create() {
        this.matter.world.setBounds();
        const spritePhysics = this.cache.json.get("physics");

        this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });


        this.matter.add.image(200, 200, "sun", undefined, {
          shape: spritePhysics.javascript,
          plugin: {
            attractors: [
              (bodyA: any, bodyB: any) => {
                // bodyB is the sun
                const x1 = bodyA.position.x
                const y1 = bodyA.position.y

                const x2 = bodyB.position.x
                const y2 = bodyB.position.y

                // d=√((x2 – x1)² + (y2 – y1)²).

                const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

                if (distance > 300) {
                  return {
                    x: (bodyA.position.x - bodyB.position.x) * 0.00002,
                    y: (bodyA.position.y - bodyB.position.y) * 0.00002
                  };
                } else {
                  return {
                    x: (bodyB.position.x - bodyA.position.x) * 0.00002,
                    y: (bodyB.position.y - bodyA.position.y) * 0.00002
                  };
                }
              }
            ]
          }
        }).setScale(0.75);


        this.allLanguages = [];

				this.input.on("pointerdown", (pointer: any) => {
          const language = new Language(spritePhysics, this.matter, pointer)
          this.allLanguages.push(language);
				});
      }

      update() {
        this.allLanguages = this.allLanguages.filter(element => {
          element.update();

          if (!element.isDead) return element;
        });
      }
    }

    new Phaser.Game({
      type: Phaser.CANVAS,
      width: window.innerWidth-100,
      height: window.innerHeight-100,
      canvas: canvasRef.current as HTMLCanvasElement,
			backgroundColor: "black",
      physics: {
        default: "matter",
        matter: {
          gravity: {
            x: 0,
            y: 0
          },
          "plugins.attractors": true,
          debug: true
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
