import { Container, MiniMap } from "./styles";
import { useEffect, useRef } from "react";


export function Stacks() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  
  
  async function Init() {
    const Phaser = await import("phaser");


    class MyGame extends Phaser.Scene {
      private spaceShip: Phaser.Physics.Matter.Image;
      private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

      private shotDelay: number;
      private shotReleased: boolean;

    	private minimap: Phaser.Cameras.Scene2D.Camera;

      private allLanguages: Phaser.Physics.Matter.Image[];
      private allBullets: Phaser.Physics.Matter.Image[];
      private deadBullets: Phaser.Physics.Matter.Image[];

      private particles: Phaser.GameObjects.Particles.ParticleEmitterManager;

      private languagePhysics: any;

      sun: Phaser.Physics.Matter.Image;

      createSpaceShip() {
        this.spaceShip = this.matter.add.image(300, 300, "space-ship", undefined, {
          shape: this.cache.json.get("space-ship-physics")["space-ship"],
          label: "space-ship"
        } as any);

        this.spaceShip.setFrictionAir(0.05);
        this.spaceShip.setMass(50);
        this.spaceShip.setDepth(3);

        this.shotDelay = 0;
        this.shotReleased = true;

        this.particles.createEmitter({
          frame: "red",
          speed: {
            onEmit: () => {
              return this.spaceShip.body.speed;
            }
          },
          lifespan: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed as number, 0, 300) * 2000;
            }
          },
          alpha: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed as number, 0, 300) * 100000
            }
          },
          scale: { start: 1.0, end: 0 },
          blendMode: "ADD"
        }).startFollow(this.spaceShip);
      }

      isLanguage(label: string) {
        return ["code", "javascript", "next", "postgre", "css", "html", "node", "react", "native"].indexOf(label) !== -1;
      }


      createBullet() {
        this.shotReleased = false;

        let bullet = this.matter.add.image(this.spaceShip.x, this.spaceShip.y, "bullet", undefined, {
          label: "bullet"
        });

        bullet.setSensor(true);

        bullet.setAngle(this.spaceShip.angle);
        bullet.thrust(0.1);

        let time = setTimeout(() => {
          bullet.destroy(true);
          clearTimeout(time);
        }, 400);
      }




      changeLanguagePosition(id: number) {
        for (let c = 0; c < this.allLanguages.length; c++) {
          if (this.allLanguages[c].body.id == id) {
            this.allLanguages[c].setPosition(
              Math.floor(Math.random() * (5000 - 100 + 1) + 100), 
              Math.floor(Math.random() * (5000 - 100 + 1) + 100)
            );
          }
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

        if (up.isDown) {
          this.spaceShip.thrust(0.1);
        }
        else if (down.isDown) {
          this.spaceShip.thrustBack(0.1);
        }

        if (space.isDown && this.shotReleased) {
          this.createBullet();
        }
      }

      bulletCollidesWithLanguage(language: any) {
        let particle = this.particles.createEmitter({
          frame: "red",
          x: language.position.x,
          y: language.position.y,
          speed: {min: -800, max: 800},
          blendMode: "SCREEN",
          lifespan: 500,
          scale: {
            start: 1,
            end: 0
          }
        });
        particle.explode(20, language.position.x, language.position.y);

        particle.onParticleDeath(() => particle.remove(), this);

        this.changeLanguagePosition(language.parent.id);
      }

      preload() {
        this.load.image("background", "/images/background.png");
        this.load.image("bullet", "/collisionAssets/bullet.png");


        // Languages
        this.load.atlas(
          "languages",
          "/languages/languages.png",
          "/languages/languages.json"
        );
        this.load.json("languagePhysics", "/languages/physics.json");
        // ------------------------------------------------------------------------

        // Planets
        this.load.atlas(
          "planets",
          "/planets/sprite.png",
          "/planets/sprite.json"
        );
        this.load.json("planetsPhysics", "/planets/physics.json");
        // ------------------------------------------------------------------------

        // spaceship
        this.load.image(
          "space-ship",
          "/images/space-ship.png"
        );
        this.load.json(
          "space-ship-physics",
          "/collisionAssets/space-ship.json"
        );
        // ------------------------------------------------------------------------

        // Particles
        this.load.atlas(
          "space-ship-particle",
          "/particles/space-ship.png",
          "/particles/space-ship.json"
        );        
      }

      create() {
        this.add.tileSprite(1500, 1500, 5000, 5000, "background");
        this.matter.world.setBounds(0, 0, 5000, 5000);
        this.particles = this.add.particles("space-ship-particle").setDepth(2);
        this.languagePhysics = this.cache.json.get("languagePhysics");

        this.createSpaceShip();

        this.cameras.main.startFollow(this.spaceShip).setName("main");
        this.cameras.main.setBounds(0, 0, 5000, 5000);

        this.minimap = this.cameras.add(0, 0, 200, 200).setName("mini-map").setZoom(0.1).setBackgroundColor("red");
        this.minimap.startFollow(this.spaceShip);
        this.minimap.inputEnabled = false;

        this.allLanguages = [];
        this.allBullets = [];
        this.deadBullets = [];

        const planetPhysics = this.cache.json.get("planetsPhysics");


        // Collisions
        function isLanguage(label: string) {
          return ["code", "javascript", "next", "postgre", "css", "html", "node", "react", "native"].indexOf(label) !== -1;
        }

        this.matter.world.on("collisionstart", (event: any, bodyA: any, bodyB: any) => {
          if (bodyB.label === "bullet") {
            console.log("bodyb: ", bodyA);
            if (isLanguage(bodyA.label)) {
              this.bulletCollidesWithLanguage(bodyA);
            } else if (bodyA.parent.label !== "space-ship") {
              let particle = this.particles.createEmitter({
                frame: "red",
                x: bodyB.position.x,
                y: bodyB.position.y,
                speed: {min: 0, max: 800},
                blendMode: "SCREEN",
                lifespan: 250,
                scale: {
                  start: 0.5,
                  end: 0
                }
              });
              particle.explode(10, bodyB.position.x, bodyB.position.y);
      
              particle.onParticleDeath(() => particle.remove(), this);
              bodyB.destroy(true);
            }
          }
        });

        this.sun = this.matter.add.image(1500, 1500, "planets", "sun", {
          shape: planetPhysics.sun,
          isStatic: true,
          label: "sun"
        } as any);

        this.matter.add.image(600, 500, "planets", "mars", {
          shape: planetPhysics.mars,
          label: "mars",
          isStatic: true
        }).setScale(0.4).setRotation(45);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.matter.world.disableGravity();

        // Create languages
        for (let c = 0; c < 25; c++) {
          let sortLanguage = Object.keys(this.languagePhysics)[Math.floor(Math.random()*9)];
          let x = Math.floor(Math.random() * (5000 - 100 + 1) + 100);
          let y = Math.floor(Math.random() * (5000 - 100 + 1) + 100);
    
          let language = this.matter.add.image(x, y, "languages", sortLanguage, {
            shape: this.languagePhysics[sortLanguage],
            label: "language"
          } as any).setOrigin(0.5);

          language.setFriction(0);
          language.setFrictionAir(0);
          language.setFrictionStatic(0);
          language.setBounce(1);
          language.setVelocity(Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? 3 : -3)
          language.thrust(
            Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? -0.2 : 0.2
          );
  
          language.setMass(50);
  
          this.allLanguages.push(language);
        }
      }

      update() {
        // Keys
        this.updateKeysAction();

        if (this.shotDelay == 0) {
          this.shotDelay = 10;
          this.shotReleased = true;
        } else {
          this.shotDelay--;
        }

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
      <MiniMap></MiniMap>
    </Container>
  );
}
