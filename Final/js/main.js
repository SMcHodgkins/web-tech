var config = {
    type: Phaser.WEBGL,
    width: 1000,
    height: 800,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    audio: {
        disableWebAudio: true
    }
};
var speed = -.25;
var selectspeed = .25;
var iconSize = 1.1;
//var bgImage, select;
var game = new Phaser.Game(config);
//var button, button2, button3;
//var leaf, clothes, floorwall;

function preload ()
{
    this.load.image('bgImg', 'assets/Test2.png');
    this.load.image('button', 'assets/button.png');
    this.load.image('leaf','assets/leaf.png');
    this.load.image('clothes', 'assets/clothes.png');
    this.load.image('floorwall', 'assets/floorwall.png');
    this.load.image('select', 'assets/select.png');
    this.load.image('mask', 'assets/buttonInteriorSize.png');
    this.load.audio('theme',['assets/acnw.townhall.mp3']);
}

function create ()
{
  var music = this.sound.add('theme');

    music.play();
    this.input.setDefaultCursor('url(assets/cursor.png), pointer')

    bgImage = this.add.tileSprite(100, 100, 2000, 2000, 'bgImg');


    button = this.add.sprite(333, 400, 'button').setInteractive();
    button2 = this.add.sprite(499, 400, 'button').setInteractive();
    button3 = this.add.sprite(666, 400,  'button').setInteractive();

    select = this.make.tileSprite({
      x: 500,
      y: 400,
      key: 'select',
      add: true
    });
    select2 = this.make.tileSprite({
      x: 500,
      y: 400,
      key: 'select',
      add: true
    });
    select3 = this.make.tileSprite({
      x: 500,
      y: 400,
      key: 'select',
      add: true
    });


    leaf = this.add.sprite(333,400,'leaf');
    clothes = this.add.sprite(501,400,'clothes');
    floorwall = this.add.sprite(670, 400, 'floorwall');

    mask = this.make.image({
      x:333,
      y:400,
      key:'mask',
      add: false
    })
    mask2 = this.make.image({
      x:499,
      y:400,
      key:'mask',
      add: false
    })
    mask3 = this.make.image({
      x:666,
      y:400,
      key:'mask',
      add: false
    })

    select.setActive(false).setVisible(false);
    select2.setActive(false).setVisible(false);
    select3.setActive(false).setVisible(false);
    select.mask = new Phaser.Display.Masks.BitmapMask(this, mask);
    select2.mask = new Phaser.Display.Masks.BitmapMask(this, mask2);
    select3.mask = new Phaser.Display.Masks.BitmapMask(this, mask3);
    mouseMove();



}

function update ()
{
    bgImage.tilePositionX += speed;
    bgImage.tilePositionY += speed;
    select.tilePositionX += speed-selectspeed;
    select.tilePositionY += speed-selectspeed;
    select2.tilePositionX += speed-selectspeed;
    select2.tilePositionY += speed-selectspeed;
    select3.tilePositionX += speed-selectspeed;
    select3.tilePositionY += speed-selectspeed;
}
function mouseMove()
{
  button.on('pointermove', function (pointer) {

      leaf.setScale(iconSize);
      leaf.setTintFill(0x524029);
      select.setActive(true).setVisible(true);

  });
  button.on('pointerout', function (event){
    leaf.setScale(1);
    leaf.clearTint();
    select.setActive(false).setVisible(false);
  })
  button2.on('pointermove', function (pointer) {

      clothes.setScale(iconSize);
      clothes.setTintFill(0x524029);
      select2.setActive(true).setVisible(true);

  });
  button2.on('pointerout', function (event){
    clothes.setScale(1);
    clothes.clearTint();
    select2.setActive(false).setVisible(false);
  })
  button3.on('pointermove', function (pointer) {

      floorwall.setScale(iconSize);
      floorwall.setTintFill(0x524029);
      select3.setActive(true).setVisible(true);

  });
  button3.on('pointerout', function (event){
    floorwall.setScale(1);
    floorwall.clearTint();
    select3.setActive(false).setVisible(false);
  })
}
//under create
/*this.input.on('pointerdown', function(){
  leaf.toggleFlipX();
})*/
