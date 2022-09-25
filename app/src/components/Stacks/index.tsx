import { Container } from "./styles";
import { useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";


type Bullet = {
  bullet: Phaser.Physics.Matter.Image;
  life: number;
}

export function Stacks() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

  async function Init() {
    const Phaser = await import("phaser");

    class Language {
      language: Phaser.Physics.Matter.Image;

      constructor(world: Phaser.Scene, pointer: any) {
        const spritePhysics = world.cache.json.get("physics");
        const sortLanguage = Object.keys(spritePhysics)[Math.floor(Math.random()*9)];

        console.log("Matter: ", world.matter);
        this.language = world.matter.add.image(
          pointer.x,
          pointer.y,
          "languages",
          sortLanguage,
          { 
            shape: spritePhysics[sortLanguage], 
            mass: 1, 
            ignorePointer: true,
          }).setOrigin(0.5, 0.5).setScale(0.3);

      }

      dead() {
        this.language.destroy();
        this.language.setActive(false);
      }
    }

    class MyGame extends Phaser.Scene {
      private spaceShip: Phaser.Physics.Matter.Image;
      private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

      private bullets: Bullet[];
      private shotDelay: number;
      private shotReleased: boolean;

    	private minimap: Phaser.Cameras.Scene2D.Camera;

      private allLanguages: Language[];


      createSpaceShipParticles() {
        const particle = this.add.particles("space-ship-particle");

        const emitterParticle = particle.createEmitter({
          frame: "blue",
          speed: {
            onEmit: () => {
              return this.spaceShip.body.speed;
            }
          },
          lifespan: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed as number, 0, 300) * 20000;
            }
          },
          alpha: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed as number, 0, 300) * 1000
            }
          },
          scale: { start: 1.0, end: 0 },
          blendMode: "ADD"
        });


        emitterParticle.startFollow(this.spaceShip);
      }

      createSpaceShip() {
        this.spaceShip = this.matter.add.image(300, 300, "space-ship", undefined, {
          shape: this.cache.json.get("space-ship-physics")["space-ship"],
          label: "space-ship"
        });

        this.spaceShip.setFrictionAir(0.05);
        this.spaceShip.setMass(30);
        this.spaceShip.setDepth(2);

        this.shotDelay = 0;
        this.shotReleased = false;
        this.bullets = [];
      }

      createBullet() {
        this.shotReleased = false;

        const newBullet: Bullet = {
          bullet: this.matter.add.image(
            this.spaceShip.x, 
            this.spaceShip.y, 
            "bullet", 
            undefined, 
            { isSensor: true, label: "bullet", id: uuid()}),
          life: 50,
        }

        newBullet.bullet.setAngle(this.spaceShip.angle);
        newBullet.bullet.thrust(0.06);

        this.bullets.push(newBullet);
      }

      destroyBullet(bullet: Phaser.Physics.Matter.Image | undefined, index: number | undefined) {
        if (index) {
          console.log("removing from index");
          this.bullets[index].bullet.setActive(false);
          this.bullets[index].bullet.destroy();
          this.bullets.splice(index, 1);
        } else {
          for (let c = 0; c < this.bullets.length; c++) {
            if (this.bullets[c].bullet.id === bullet?.id) {
              console.log("id: ", this.bullets[c].bullet);
              console.log("bullet: ", bullet);

              // this.bullets[c].bullet.setActive(false);
              this.bullets[c].bullet.destroy();
              this.bullets.splice(c, 1);
              break;
            }
          }
        }
      }

      updateBullets() {
        for (let c = 0; c < this.bullets.length; c++) {
          if (this.bullets[c].life == 0) {
            this.destroyBullet(undefined, c);
            break;
          }

          this.bullets[c].life--;
        }

        if (this.shotDelay == 0) {
          this.shotDelay = 10;
          this.shotReleased = true;
        } else {
          this.shotDelay--;
        }
      }

      updateKeysAction() {
        const { left, right, up, down, space } = this.cursors;

        if (left.isDown) {
          this.spaceShip.setAngle(this.spaceShip.angle - 3);
        }
        else if (right.isDown) {
          this.spaceShip.setAngle(this.spaceShip.angle + 3);
        }
        else { // RESET VELOCITY
          this.spaceShip.setAngularVelocity(0);
        }

        if (up.isDown) {
          this.spaceShip.thrust(0.1);
        } 
        else if (down.isDown) {
          this.spaceShip.thrust(-0.1);
        }

        if (space.isDown && this.shotReleased) {
          this.createBullet()
        }        
      }

      preload() {
        // Sprites and shape of languages
        this.load.atlas("languages", "/collisionAssets/sprites.png", "/collisionAssets/sprites.json");
        this.load.json("physics", "/collisionAssets/physics.json");

        this.load.image("sun", "/images/sun.png"); // Sun Image
        this.load.image("marte", "/images/marte.png"); // Sun Image

        this.load.image("background", "/images/background.png");

        this.load.image(
          "space-ship", 
          "/images/space-ship.png"
        ); // spaceship image

        this.load.json(
          "space-ship-physics", 
          "/collisionAssets/space-ship.json"
        ); // spaceship shape

        this.load.atlas(
          "space-ship-particle", 
          "/particles/space-ship.png", 
          "/particles/space-ship.json"
        ); // Particles

        this.load.image("bullet", "/collisionAssets/bullet.png"); // Bullet image
      }
      
      sun: Phaser.Physics.Matter.Image;

      create() {
        this.add.tileSprite(1500, 1500, 3000, 3000, "background");
        this.matter.world.setBounds(0, 0, 3000, 3000);

        this.createSpaceShip();
        this.createSpaceShipParticles();

        this.cameras.main.startFollow(this.spaceShip).setName("main");
        this.cameras.main.setBounds(0, 0, 3000, 3000);

        this.minimap = this.cameras.add(0, 0, 200, 200).setName("mini-map").setZoom(0.1).setBackgroundColor("red");
        this.minimap.startFollow(this.spaceShip);
        this.minimap.inputEnabled = false;

        // Planets
        // this.sun = this.matter.add.image(200, 200, "sun", undefined, { shape: "circle" }).setScale(0.8)
        // var planet1 = this.matter.add.image(200, 200, "marte", undefined, { shape: "circle" }).setScale(0.8)
        // var planet2 = this.matter.add.image(200, 200, "marte", undefined, { shape: "circle" }).setScale(0.8)



        // Collisions


        function isLanguage(label: string) {
          return ["javascript", "next", "postgre", "css", "html", "node", "react", "native"].indexOf(label) !== -1;
        }

        this.matter.world.on("collisionstart", (event: any, bodyA: any, bodyB: any) => {
          const labelA = bodyA.label;
          const labelB = bodyB.label;

          if (labelA === "bullet" && isLanguage(labelB)) {
            console.log("destroing: ", bodyA);
            this.destroyBullet(bodyA, undefined);

          } else if (labelB === "bullet" && isLanguage(labelA)) {
            console.log("destroing: ", bodyB);
            this.destroyBullet(bodyB, undefined);
          }
          

          // console.log(bodyA.label, bodyB.label);
          // console.log("A: ", bodyA);
          // console.log("B: ", bodyB);
        });



        // this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });
        
        this.sun = this.matter.add.image(200, 200, "sun", undefined, {
          shape: "circle",
          label: "sun",
          // plugin: {
          //   attractors: [
          //     (bodyA: any, bodyB: any) => {
          //       // bodyB is the sun
          //       const x1 = bodyA.position.x
          //       const y1 = bodyA.position.y

          //       const x2 = bodyB.position.x
          //       const y2 = bodyB.position.y

          //       // d=√((x2 – x1)² + (y2 – y1)²).

          //       const distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

          //       if (distance < 2000) {
          //         return {
          //           x: (bodyA.position.x - bodyB.position.x) * 0.00002,
          //           y: (bodyA.position.y - bodyB.position.y) * 0.00002
          //         };
          //       }
  
          //     }
          //   ]
          // }
        } as any).setScale(0.75);

        this.sun.setBounce(1);
        this.sun.thrust(0.1);
        this.sun.setMass(20);

        this.allLanguages = [];

				this.input.on("pointerdown", (pointer: any) => {
          const language = new Language(this, pointer)
          this.allLanguages.push(language);
				});
      
        this.cursors = this.input.keyboard.createCursorKeys();
      }

      update() {
        // Keys
        this.updateKeysAction();

        this.updateBullets();

        this.sun.setRotation(this.sun.rotation+=0.005)
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
