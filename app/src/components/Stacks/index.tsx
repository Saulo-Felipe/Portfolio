import { Container } from "./styles";
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

      private allLanguages: Phaser.GameObjects.Group;
      private allBullets: Phaser.GameObjects.Group;

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
        this.shotReleased = false;

        this.particles.createEmitter({
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
        }).startFollow(this.spaceShip);
      }

      createBullet() {
        let bullet = this.matter.add.image(this.spaceShip.x, this.spaceShip.y, "bullet", undefined, {
          isSensor: true,
          label: "bullet",
        }).setAngle(this.spaceShip.angle)//.thrust(0.06),

        this.allBullets.add(bullet.thrust(0.1));

        this.shotReleased = false;
      }

      createLanguage() {
        const sortLanguage = Object.keys(this.languagePhysics)[Math.floor(Math.random()*9)];
        const x = Math.floor(Math.random() * (3000 - 100 + 1) + 100);
        const y = Math.floor(Math.random() * (3000 - 100 + 1) + 100);

        console.log("x: ", x, " y: ", y);

        let language = this.matter.add.image(x, y, "languages", sortLanguage, {
          shape: this.languagePhysics[sortLanguage]
        } as any).setOrigin(0.5);

        language.setMass(50);

        this.allLanguages.add(language);
      }

      updateBullets() {
        const bullets: Phaser.Physics.Matter.Image[] = this.allBullets.getChildren() as Phaser.Physics.Matter.Image[];
        for (let c = 0; c < bullets.length; c++) {
          let { x, y } = this.spaceShip;
          if (
            bullets[c].x > x+window.innerWidth/2 ||
            bullets[c].x < x-window.innerWidth/2 ||
            bullets[c].y < y-window.innerHeight/2 ||
            bullets[c].y > y+window.innerHeight/2
          ) {
            this.allBullets.remove(bullets[c], true, true);
          }
        }

        if (this.shotDelay == 0) {
          this.shotDelay = 10;
          this.shotReleased = true;
        } else {
          this.shotDelay--;
        }
      }

      removeLanguage(id: number) {
        let childrens: any = this.allLanguages.getChildren();

        for (let c = 0; c < childrens.length; c++) {
          if (childrens[c].body.id == id) {
            this.allLanguages.remove(childrens[c], true, true);
          }
        }
      }

      removeBullet(id: number) {
        let childrens: any = this.allBullets.getChildren();

        for (let c = 0; c < childrens.length; c++) {
          if (childrens[c].body.id == id) {
            this.allBullets.remove(childrens[c], true, true);
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
          this.createBullet();
        }
      }

      bulletCollidesWithLanguage(language: any, bullet: any) {
        this.removeLanguage(language.parent.id);
        this.removeBullet(bullet.parent.id);


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
        this.add.tileSprite(1500, 1500, 3000, 3000, "background");
        this.matter.world.setBounds(0, 0, 3000, 3000);
        this.particles = this.add.particles("space-ship-particle").setDepth(2);
        this.languagePhysics = this.cache.json.get("languagePhysics");

        this.createSpaceShip();

        this.cameras.main.startFollow(this.spaceShip).setName("main");
        this.cameras.main.setBounds(0, 0, 3000, 3000);

        this.minimap = this.cameras.add(0, 0, 200, 200).setName("mini-map").setZoom(0.1).setBackgroundColor("red");
        this.minimap.startFollow(this.spaceShip);
        this.minimap.inputEnabled = false;

        this.allLanguages = this.add.group();
        this.allBullets = this.add.group();

        const planetPhysics = this.cache.json.get("planetsPhysics");


        // Collisions
        function isLanguage(label: string) {
          return ["code", "javascript", "next", "postgre", "css", "html", "node", "react", "native"].indexOf(label) !== -1;
        }

        this.matter.world.on("collisionstart", (event: any, bodyA: any, bodyB: any) => {
          if (bodyA.label === "bullet" && isLanguage(bodyB.label)) {
            this.bulletCollidesWithLanguage(bodyB, bodyA);

          } else if (bodyB.label === "bullet" && isLanguage(bodyA.label)) {
            this.bulletCollidesWithLanguage(bodyA, bodyB);
          }
        });



        



        this.sun = this.matter.add.image(1500, 1500, "planets", "sun", {
          shape: planetPhysics.sun,
          isStatic: true,
          label: "sun",
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

                if (distance < 2000) {
                  return {
                    x: (bodyA.position.x - bodyB.position.x) * 0.0000004,
                    y: (bodyA.position.y - bodyB.position.y) * 0.0000004
                  };
                }

              }
            ]
          },
        } as any);

        // this.sun.setBounce(1);

				this.input.on("pointerdown", () => {
          this.createLanguage();
				});

        this.cursors = this.input.keyboard.createCursorKeys();
      }

      update() {
        // Keys
        this.updateKeysAction();

        if (this.allLanguages.getLength() < 40) {
          this.createLanguage();
        }

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
