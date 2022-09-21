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
				this.load.image("click-here", "/images/click-here.png");

        this.load.atlas("languages", "/collisionAssets/sprites.png", "/collisionAssets/sprites.json");
        this.load.json("physics", "/collisionAssets/physics.json");
      }

      create() {
        this.matter.world.setBounds();
				this.add.image(140, 140, "click-here").setRotation(-0.5).alpha = 0.3;
        const spritePhysics = this.cache.json.get("physics");

        this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });

        var teste = this.add.group();

        this.matter.add.image(200, 200, "languages", "javascript", {
          shape: spritePhysics.javascript,
          plugin: {
            attractors: (bodyA, bodyB) => {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 0.000001,
                y: (bodyA.position.y - bodyB.position.y) * 0.000001
              };
            }
          }
        }).setScale(0.3);

        this.allLanguages = [];

				this.input.on("pointerdown", (pointer: any) => {
          const language = new Language(spritePhysics, this.matter, pointer)
          this.allLanguages.push(language);

          // language.language.isDead =
          // teste.add(language.language);

          console.log("group: ", teste);
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
			backgroundColor: "#0c101a",
      physics: {
        default: "matter",
        matter: {
          plugins: {
            attractors: true
          },
          gravity: {
            scale: 0
          }
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
