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
      spaceShip: Phaser.Physics.Matter.Image;
      cursors: Phaser.Types.Input.Keyboard.CursorKeys;

      preload() {
        this.load.image("javascript", "/images/javascript.png");

        this.load.atlas("languages", "/collisionAssets/sprites.png", "/collisionAssets/sprites.json");
        this.load.json("physics", "/collisionAssets/physics.json");

        this.load.image("sun", "/images/sun2.png");
        // this.load.image("background", "/images/background.jpg");

        this.load.image("space-ship", "/images/space-ship.png");
        this.load.json("space-ship-physics", "/collisionAssets/space-ship.json");

        // Particles
        this.load.atlas("space-ship-particle", "/particles/space-ship.png", "/particles/space-ship.json");

        this.load.image("bullet", "/collisionAssets/bullet.png");
      }

      create() {
        // Space ship
        this.spaceShip = this.matter.add.image(300, 300, "space-ship", undefined, {
          shape: this.cache.json.get("space-ship-physics")["space-ship"]
        });

        this.spaceShip.setFrictionAir(0.05);
        this.spaceShip.setMass(30);
        this.spaceShip.setDepth(2);

        this.cursors = this.input.keyboard.createCursorKeys();


        const particles = this.add.particles("space-ship-particle");

        const emitter = particles.createEmitter({
          frame: "blue",
          speed: {
            onEmit: () => {
              return this.spaceShip.body.speed;
            }
          },
          lifespan: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed, 0, 300) * 20000;
            }
          },
          alpha: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed, 0, 300) * 1000
            }
          },
          scale: { start: 1.0, end: 0 },
          blendMode: "ADD"
        });


        emitter.startFollow(this.spaceShip);




        const spritePhysics = this.cache.json.get("physics");

        // this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });


        // this.matter.add.image(200, 200, "sun", undefined, {
        //   shape: spritePhysics.javascript,
        //   plugin: {
        //     attractors: [
        //       (bodyA: any, bodyB: any) => {
        //         // bodyB is the sun
        //         const x1 = bodyA.position.x
        //         const y1 = bodyA.position.y

        //         const x2 = bodyB.position.x
        //         const y2 = bodyB.position.y

        //         // d=√((x2 – x1)² + (y2 – y1)²).

        //         const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

        //         if (distance > 300) {
        //           return {
        //             x: (bodyA.position.x - bodyB.position.x) * 0.00002,
        //             y: (bodyA.position.y - bodyB.position.y) * 0.00002
        //           };
        //         } else {
        //           return {
        //             x: (bodyB.position.x - bodyA.position.x) * 0.00002,
        //             y: (bodyB.position.y - bodyA.position.y) * 0.00002
        //           };
        //         }
        //       }
        //     ]
        //   }
        // }).setScale(0.75);


        // this.allLanguages = [];

				// this.input.on("pointerdown", (pointer: any) => {
        //   const language = new Language(spritePhysics, this.matter, pointer)
        //   this.allLanguages.push(language);
				// });
      }

      update() {
        // Keys
        if (this.cursors.left.isDown) {
          this.spaceShip.setAngle(this.spaceShip.angle - 3);
        }
        else if (this.cursors.right.isDown) {
          this.spaceShip.setAngle(this.spaceShip.angle + 3);
        }
        else {
          this.spaceShip.setAngularVelocity(0);
        }

        if (this.cursors.up.isDown) {
          this.spaceShip.thrust(0.1);
        } else if (this.cursors.down.isDown) {
          this.spaceShip.thrust(-0.1);
        }

        if (this.cursors.space.isDown) {
          const bullet = this.matter.add.image(this.spaceShip.x, this.spaceShip.y, "bullet");
          bullet.setAngle(this.spaceShip.angle);
          bullet.thrust(0.15);
        }



        // this.allLanguages = this.allLanguages.filter(element => {
        //   element.update();

        //   if (!element.isDead) return element;
        // });
      }
    }

    new Phaser.Game({
      type: Phaser.CANVAS,
      width: window.innerWidth-30,
      height: window.innerHeight-30,
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
