import {
  GameContainer,
  MiniMap,
  DestroyedLanguages,
  Option,
  Css, Html, Javascript, Node, Postgre, React, ReactNative, Typescript, LangTitle,
  Title
} from "./styles";
import { useEffect, useRef, useState } from "react";


export function Game() {
  const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);
  const [destroyedLanguages, setDestroyedLanguages] = useState({
    javascript: 0,
    react: 0,
    node: 0,
    html: 0,
    css: 0,
    postgre: 0,
    native: 0,
    typescript: 0
  });
  const destroyedLanguagesRef: any = useRef(destroyedLanguages);

  async function Init() {
    const Phaser = await import("phaser");

    class MyGame extends Phaser.Scene {
      cursors: Phaser.Types.Input.Keyboard.CursorKeys;
      shotDelay: number;
      shotReleased: boolean;
    	minimap: Phaser.Cameras.Scene2D.Camera;
      particles: Phaser.GameObjects.Particles.ParticleEmitterManager;
      languagePhysics: any;
      health: HealthBar;

      allLanguages: Phaser.Physics.Matter.Image[];
      spaceShip: Phaser.Physics.Matter.Image;
      sun: Phaser.Physics.Matter.Image;
      mars: Phaser.Physics.Matter.Image;
      moon: Phaser.Physics.Matter.Image;
      earth: Phaser.Physics.Matter.Image;
      jupiter: Phaser.Physics.Matter.Image;


      createSpaceShip() {
        this.spaceShip = this.matter.add.image(300, 300, "space-ship", undefined, {
          // shape: this.cache.json.get("space-ship-physics")["space-ship"],
          label: "space-ship"
        } as any);

        this.spaceShip.setFrictionAir(0.05);
        this.spaceShip.setMass(50);
        this.spaceShip.setDepth(3);
        this.spaceShip.setScale(0.8);

        // this.spaceShip.setRotation(-90)

        this.shotDelay = 0;
        this.shotReleased = true;

        this.particles.createEmitter({
          frame: "blue",
          speed: {
            onEmit: () => {
              return this.spaceShip.body.speed;
            }
          },
          lifespan: {
            onEmit: () => {
              return Phaser.Math.Percent(this.spaceShip.body.speed as number, 0, 300) * 6000;
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

        this.health = new HealthBar(this, this.spaceShip);
      }

      isLanguage(label: string) {
        return ["typescript", "javascript", "next", "postgre", "css", "html", "node", "react", "native"].indexOf(label) !== -1;
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

      createPlanets() {
        this.sun = this.matter.add.image(3000/2, 3000/2, "planets", "sun", {
          label: "sun"
        }).setCircle(155) as any;
        this.sun.setStatic(true);

        this.mars = this.matter.add.image(3000/2, 3000/2, "planets", "mars", {
          label: "mars"
        }).setCircle(135) as any;
        this.mars.setMass(500);
        this.mars.setRotation(-55);
        this.mars.setDensity(300);
        this.mars.setBounce(1);

        this.earth = this.matter.add.image(3000/2, 3000/2, "planets", "earth", {
          label: "earth"
        }).setCircle(145) as any;
        this.earth.setMass(500);
        this.earth.setRotation(-55);
        this.earth.setDensity(300);
        this.earth.setBounce(1);

        this.moon = this.matter.add.image(3000/2, 3000/2, "planets", "moon", {
          label: "moon"
        }).setCircle(75) as any;
        this.moon.setMass(500);
        this.moon.setDensity(300);
        this.moon.setBounce(1);

        this.jupiter = this.matter.add.image(3000/2, 3000/2, "planets", "jupiter", {
          label: "jupiter"
        }).setCircle(155) as any;
        this.jupiter.setMass(500);
        this.jupiter.setDensity(300);
        this.jupiter.setBounce(1);
      }

      changeLanguagePosition(id: number) {
        for (let c = 0; c < this.allLanguages.length; c++) {
          if (this.allLanguages[c].body.id == id) {
            this.allLanguages[c].setPosition(
              Math.floor(Math.random() * (3000 - 100 + 1) + 100),
              Math.floor(Math.random() * (3000 - 100 + 1) + 100)
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


      updateLanguagePoints(label: any) {
        destroyedLanguagesRef.current[label] += 1;

        setDestroyedLanguages({ ...destroyedLanguagesRef.current });
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
        this.updateLanguagePoints(language.label);
      }

      preload() {
        this.load.image("background", "/StacksGameAssets/images/background.png");
        this.load.image("bullet", "/StacksGameAssets/images/bullet.png");

        // Languages
        this.load.atlas(
          "languages",
          "/StacksGameAssets/languages/languages.png",
          "/StacksGameAssets/languages/languages.json"
        );
        this.load.json("languagePhysics", "/StacksGameAssets/languages/physics.json");
        // ------------------------------------------------------------------------

        // Planets
        this.load.atlas(
          "planets",
          "/StacksGameAssets/planets/sprite.png",
          "/StacksGameAssets/planets/sprite.json"
        );
        // ------------------------------------------------------------------------

        // spaceship
        this.load.image(
          "space-ship",
          "/StacksGameAssets/space-ship/space-ship.webp"
        );
        this.load.json(
          "space-ship-physics",
          "/StacksGameAssets/space-ship/space-ship.json"
        );
        // ------------------------------------------------------------------------

        // Particles
        this.load.atlas(
          "space-ship-particle",
          "/StacksGameAssets/particles/space-ship.png",
          "/StacksGameAssets/particles/space-ship.json"
        );
      }

      create() {
        let background = this.add.tileSprite(3000/2, 3000/2, 3000, 3000, "background");
        this.matter.world.setBounds(0, 0, 3000, 3000);
        this.matter.world.disableGravity();
        this.particles = this.add.particles("space-ship-particle").setDepth(2);
        this.languagePhysics = this.cache.json.get("languagePhysics");
        this.createSpaceShip();
        this.createPlanets();

        this.cameras.main.startFollow(this.spaceShip).setName("main");
        this.cameras.main.setBounds(0, 0, 3000, 3000);

        this.minimap = this.cameras.add(0, 0, 200, 200).setName("mini-map").setZoom(0.1).setBackgroundColor("red");
        this.minimap.startFollow(this.spaceShip);
        this.minimap.inputEnabled = false;
        this.minimap.ignore(background);

        this.allLanguages = [];


        this.matter.world.on("collisionstart", (event: any, bodyA: any, bodyB: any) => {
          if (bodyB.label === "bullet") {
            if (this.isLanguage(bodyA.label)) {
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

          if (bodyA?.parent?.label === "space-ship") {
            if (this.isLanguage(bodyB.label)) {
              this.health.lostLife();
            }
          }
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        // Create languages
        for (let c = 0; c < 25; c++) {
          let sortLanguage = Object.keys(this.languagePhysics)[Math.floor(Math.random()*9)];
          let x = Math.floor(Math.random() * (3000 - 100 + 1) + 100);
          let y = Math.floor(Math.random() * (3000 - 100 + 1) + 100);

          let language = this.matter.add.image(x, y, "languages", sortLanguage, {
            shape: this.languagePhysics[sortLanguage],
            label: "language"
          } as any).setOrigin(0.5);

          language.setFriction(0);
          language.setFrictionAir(0);
          language.setFrictionStatic(0);
          language.setBounce(1);
          language.setMass(50);
          // language.setVelocity(Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? 3 : -3)
          // language.thrust(
          //   Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? -0.2 : 0.2
          // );



          this.game.events.addListener(Phaser.Core.Events.VISIBLE, () => {
            console.log("Focus")
          });


          this.game.events.addListener(Phaser.Core.Events.HIDDEN, () => {
            console.log("Blur")
          });


          this.allLanguages.push(language);
        }
      }

      update() {
        this.sun.setRotation(this.sun.rotation+=0.005)

        Phaser.Actions.RotateAroundDistance([this.jupiter], { x: 3000/2, y: 3000/2 }, 0.002, 1200);

        Phaser.Actions.RotateAroundDistance([this.mars], { x: 3000/2, y: 3000/2 }, 0.002, 850);
        this.mars.setRotation(this.mars.rotation+0.002);

        Phaser.Actions.RotateAroundDistance([this.earth], { x: 3000/2, y: 3000/2 }, 0.002, 650);
        this.earth.setRotation(this.earth.rotation+0.002);

        Phaser.Actions.RotateAroundDistance([this.moon], { x: this.earth.x, y: this.earth.y }, 0.01, 350);
        this.moon.setRotation(this.earth.rotation+0.002);

        this.health.update(this.spaceShip);


        for (let c = 0; c < this.allLanguages.length; c++) {
          if (this.allLanguages[c].y < this.spaceShip.y) {
            this.allLanguages[c].y++;
          } else {
            this.allLanguages[c].y--;
          }

          if (this.allLanguages[c].x < this.spaceShip.x) {
            this.allLanguages[c].x++;
          } else {
            this.allLanguages[c].x--;
          }
        }

        // this.square.x = this.spaceShip.x;
        // this.square.y = this.spaceShip.y-this.spaceShip.height/2;


        // Keys
        this.updateKeysAction();

        if (this.shotDelay == 0) {
          this.shotDelay = 10;
          this.shotReleased = true;
        } else {
          this.shotDelay--;
        }

      }
    }

    class HealthBar {
      value: number;
      scene: Phaser.Scene;
      width: number;
      height: number;

      bg: Phaser.GameObjects.Graphics;
      bar: Phaser.GameObjects.Graphics;
      shadow: Phaser.GameObjects.Graphics;

      constructor(scene: Phaser.Scene, spaceShip: Phaser.Physics.Matter.Image) {
        this.value = 100;
        this.scene = scene;
        this.height = 15;
        this.width = spaceShip.width;

        this.bg = scene.add.graphics();
        this.bar = scene.add.graphics();
        this.shadow = scene.add.graphics();
      }

      getX(spaceShip: Phaser.Physics.Matter.Image): number {
        return spaceShip.x-spaceShip.width/2;
      }

      getY(spaceShip: Phaser.Physics.Matter.Image): number {
        return spaceShip.y-spaceShip.height/2;
      }

      lostLife(): boolean {
        this.value -= 5;

        if (this.value < 5) this.value = 5;

        return this.value === 5;
      }

      update(spaceShip: Phaser.Physics.Matter.Image) {
        this.bg.clear();
        this.bg.fillStyle(0x2b2b2b);
        this.bg.fillRoundedRect(this.getX(spaceShip), this.getY(spaceShip), this.width, this.height, 4);

        this.bar.clear();
        if (this.value > 60) {
          this.bar.fillStyle(0x88e060);

        } else if (this.value > 30) {
          this.bar.fillStyle(0xe3cc00);
        } else {
          this.bar.fillStyle(0xe00000);
        }
        this.bar.fillRoundedRect(this.getX(spaceShip)+2, this.getY(spaceShip)+2, this.width/100*this.value-4, this.height-4, 4);

        // this.shadow.clear();
        // this.shadow.fillStyle(0x63b43d);
        // this.shadow.fillRoundedRect(this.getX(spaceShip)+3, this.getY(spaceShip)+6, this.width/100*this.value-6, (this.height-4)/2, 1);
      }
    }

    new Phaser.Game({
      type: Phaser.CANVAS,
      width: window.innerWidth-50,
      height: window.innerHeight-50,
      canvas: canvasRef.current as HTMLCanvasElement,
			backgroundColor: "black",
      physics: {
        default: "matter",
        matter: {
          gravity: {
            x: 0,
            y: 0
          },
          debug: false
        }
      },
      scene: MyGame
    });
  }

  useEffect(() => {
    Init();
  }, []);

  useEffect(() => {
    destroyedLanguagesRef.current = destroyedLanguages;
  }, [destroyedLanguages]);

  return (
    <GameContainer>
      <canvas
        id={"canvasElement"}
        ref={canvasRef}
      ></canvas>

      <MiniMap></MiniMap>

      <DestroyedLanguages>
        <LangTitle>Linguagens destruídas</LangTitle>
        <Option>
          <div className={"label-info"}>
            <Javascript />
            <div className={"title"}>Javascript</div>
          </div>
          <div className={"count"}>{destroyedLanguages.javascript}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <React />
            <div className={"title"}>React</div>
          </div>
          <div className={"count"}>{destroyedLanguages.react}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <Node />
            <div className={"title"}>Node</div>
          </div>
          <div className={"count"}>{destroyedLanguages.node}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <Html />
            <div className={"title"}>HTML</div>
          </div>
          <div className={"count"}>{destroyedLanguages.html}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <Css />
            <div className={"title"}>CSS</div>
          </div>
          <div className={"count"}>{destroyedLanguages.css}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <ReactNative />
            <div className={"title"}>React Native</div>
          </div>
          <div className={"count"}>{destroyedLanguages.native}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <Postgre />
            <div className={"title"}>PostgreSQL</div>
          </div>
          <div className={"count"}>{destroyedLanguages.postgre}</div>
        </Option>

        <Option>
          <div className={"label-info"}>
            <Typescript />
            <div className={"title"}>Typescript</div>
          </div>
          <div className={"count"}>{destroyedLanguages.typescript}</div>
        </Option>
      </DestroyedLanguages>
    </GameContainer>
  );
}