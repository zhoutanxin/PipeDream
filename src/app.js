
var GameLayer = cc.Layer.extend({
    mWinSize:null,
    mPointCenter:null,
    mHero: null,
    mRobot: null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        mWinSize = cc.winSize;
        mPointCenter = cc.p(mWinSize.width / 2, mWinSize.height / 2);
        // 添加背景
        var backGround = cc.Sprite.create(res.s_BackGround);
        backGround.setPosition(mPointCenter);
        this.addChild(backGround);
        // 添加控制层
        var hudLayer = HudLayer.create();
        this.addChild(hudLayer);
        hudLayer.setDelegate(this);

        // 添加英雄
        this.mHero = Hero.create();
        // 添加机器人
        this.mRobot = Robot.create();
//        this.addChild(this.mRobot);
        var characters = cc.Node.create();
        characters.addChild(this.mHero);
        characters.addChild(this.mRobot);
        this.addChild(characters);

//        if (cc.sys["capabilities"].hasOwnProperty('keyboard'))
//            cc.view.setIMEKeyboardState(true);
//
//
        this.scheduleUpdate();
//

        // 骨骼动画测试
        this.test();

        bRef = true;
        // add a "close" icon to exit the progress. it's an autorelease object
//        var closeItem = new cc.MenuItemImage(
//            res.CloseNormal_png,
//            res.CloseSelected_png,
//            function () {
//                cc.log("Menu is clicked!");
//            }, this);
//        closeItem.attr({
//            x: size.width - 20,
//            y: 20,
//            anchorX: 0.5,
//            anchorY: 0.5
//        });
//
//        var menu = new cc.Menu(closeItem);
//        menu.x = 0;
//        menu.y = 0;
//        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        // position the label on the center of the screen
//        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
//        helloLabel.x = size.width / 2;
//        helloLabel.y = 0;
//        this.addChild(helloLabel, 5);
        // add the label as a child to this layer


        // add "HelloWorld" splash screen"
//        this.sprite = new cc.Sprite(res.HelloWorld_png);
//        this.sprite.attr({
//            x: size.width / 2,
//            y: size.height / 2,
//            scale: 0.5,
//            rotation: 180
//        });
//        this.addChild(this.sprite, 0);
//
//        this.sprite.runAction(
//            cc.sequence(
//                cc.rotateTo(2, 0),
//                cc.scaleTo(2, 1, 1)
//            )
//        );
//        helloLabel.runAction(
//            cc.spawn(
//                cc.moveBy(2.5, cc.p(0, size.height - 40)),
//                cc.tintTo(2.5,255,125,0)
//            )
//        );
        return true;
    },

    actionJoypadStart:function(degrees){
        this.mHero.runWithDegrees(degrees);
//        this.mRobot.runWithDegrees(degrees);
    },
    actionJoypadUpdate:function(degrees){
        this.mHero.moveWithDegrees(degrees);
//        this.mRobot.moveWithDegrees(degrees);
    },
    actionJoypadEnded:function(degrees){
        this.mHero.idle();
//        this.mRobot.idle();
    },
    attackButtonClick:function(button){
        this.mHero.attack(button);
//        this.mRobot.attack(button);
    },
    onKeyDown:function(e){
        // 保存所有的按键信息
        AC.KEYS[e] = true;
    },
    onKeyUp:function(e){
        AC.KEYS[e] = false;
    },
    update:function(dt){
        var b = this.mHero.getZLocation() > this.mRobot.getZLocation();
        this.mHero.setZOrder(b ? 0: 1);
        this.mRobot.setZOrder(b ? 1: 0) ;
    },
    test:function(){
        return;
        ccs.armatureDataManager.getInstance().addArmatureFileInfo(
            s_Robot_png,
            s_Robot_plist,
            s_Robot_json);

        var armature = cc.Armature.create("Animation1");
        armature.getAnimation().PlayByIndex(0);
        armature.setAnchorPoint(cc.p(0.5, 0.5));
        armature.setPosition(cc.p(300, 300));
        this.addChild(armature);
        cc.log("armature add ");

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

