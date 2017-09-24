/* global lab */
var switchArray = [];
var elementsArray = [];
var generatorobjs = [];

function createDraggable(src, x, y, stage) {
    var toReturn = PIXI.Sprite.fromImage(src);
    toReturn.interactive = true;
    toReturn.buttonMode = true;
    toReturn.anchor.set(0.5);
    toReturn
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);
    toReturn.x = x;
    toReturn.y = y;
    stage.addChild(toReturn);
    contain(toReturn)
    elementsArray.push({
        type: "draggable",
        x: x,
        y: y,
        src: src
    });
    return toReturn;
}

function createStatic(src, x, y, stage) {
    var toReturn = PIXI.Sprite.fromImage(src);
    toReturn.anchor.set(0.5);
    toReturn.x = x;
    toReturn.y = y;
    stage.addChild(toReturn);
    elementsArray.push({
        type: "static",
        x: x,
        y: y,
        src: src
    });
    return toReturn;

}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}

function middlex() {
    return app.renderer.width / 2;
}

function middley() {
    return app.renderer.height / 2;
}

function widthPercent(x1) {
    return app.renderer.width / 100 * x1;
}

function heightPercent(y1) {
    return app.renderer.height / 100 * y1;
}

function createBoundary(bottom, top, left, right) {

}

function addText(text, x, y) {
    var toReturn = new PIXI.Text(text);
    toReturn.x = x;
    toReturn.y = y;
    return toReturn;
}


function contain(sprite) {
    var collision = undefined;
    if (sprite.x < 0) {
        sprite.x = 0;
        collision = "left";
    }
    if (sprite.y < 0) {
        sprite.y = 0;
        collision = "top";
    }
    if (sprite.x > app.renderer.width) {
        sprite.x = app.renderer.width;
        collision = "right";
    }
    if (sprite.y > app.renderer.height) {
        sprite.y = app.renderer.height;
        collision = "bottom";
    }
    return collision;
}

function createSlider(src, x, y, width, tickNumber, coordinates, stage) {
    var toReturn = new PIXI.Container();
    var e = createDraggable(src, x, y, toReturn);
    console.log(stage);
    app.ticker.add(function(delta) {
        containSlider(e, x, y, width);
    })
    e.tickNumber = tickNumber
    e.range = width;
    e.initial = x - (width / 2);
    e.final = x + (width / 2);
    e.middle = x;
    var c = generateTicks(toReturn);
    coordinates = c;
    stage.addChild(toReturn)
    return e;
    // return {
    //     initial:x - (width / 2),
    //     final:x + (width / 2),
    //     middle:x,
    //     obj:toReturn
    //     coords:c,
    //     };
}

function addShadow() {
    console.log(this);
}

function containSlider(sprite, x, y, range) {
    if (sprite.y != y) {
        sprite.y = y;
    }
    if (sprite.x < (x - (range / 2))) {
        sprite.x = (x - (range / 2))
    }
    if (sprite.x > (x + (range / 2))) {
        sprite.x = (x + (range / 2))
    }
}

function generateTicks(slider, stage) {
    var coords = [slider.initial];
    for (var i = 1; i < slider.tickNumber; i++) {
        var toPush = Math.round((slider.range / slider.tickNumber) * i);
        coords.push(slider.initial + toPush);
    }
    coords.push(slider.final);
    console.log(coords)
    for (var i = 0; i < coords.length; i++) {
        makeRectangle(coords[i], slider.y - 35, 2, 70, 0x000000)
    }
    makeRectangle(slider.initial, slider.y, coords[coords.length - 1] - coords[0], 2, 0x000000)
    return coords;
}

function makeRectangle(x, y, width, height, color, graphics) {
    graphics.beginFill(color);
    graphics.drawRect(x, y, width, height);
    graphics.endFill();
}

function makeEllipse(x, y, width, height, color, graphics) {
    graphics.beginFill(color);
    graphics.drawEllipse(x, y, width, height);
    graphics.endFill();
}

function makeCircle(x, y, radius, color, graphics) {
    makeEllipse(x, y, radius, radius, color);
}

function setBackground(src) {
    var t = createStatic(src, middlex(), middley());
    t.zOrder = -9999;
}

function near(slider, coords) {
    console.log(coords);
    var y = false;
    var i = 0;
    for (i = 0; i < coords.length; i++) {
        console.log(Math.abs(slider.x - coords[i]) <= 3)
        if (Math.abs(slider.x - coords[i]) <= 3) {
            return [true, i];
        }
    }
    return [y, i]
}

function createSwitch(x, y, width, height) {
    //makes an invisible collision switch
}

function createTouchSwitch(src, x, y, isOn) {
    //makes a switch that you can touch
}

function winCondition(truthyarray) {
    app.ticker.add(function() {
        if (switchArray == truthyarray) {
            //You win
        }
    })
}

function makeCheckbox(srcunchecked, srcchecked, x, y, isChecked, stage) {

}

function makeSwitch(element) {

}

function createResizable(src, x, y, width, height, graphics, stage) {
    var obj = createDraggable(src, x, y, stage)
    var w = obj.width;
    var h = obj.height;
    var anchor = makeRectangle(obj.x + obj.width + 30, obj.y + obj.height + 30, 28, 28, 0xf4bc42, graphics);
    app.ticker.add()
}

function createAnchor() {
    // body...
}

function resizeObject(obj, anchordistance, defaultdist) {

}

function exportData() {
    return elementsArray;
}

function importData(array, stage) {
    for (var i = 0; i < array.length; i++) {
        var a = array[i];
        if (a.type == "draggable") {
            createDraggable(a.src, a.x, a.y, stage);
        }
        if (a.type == "static") {
            createStatic(a.src, a.x, a.y, stage);
        }
    }
}

function onClick() {
    console.log(this)
    console.log(this.src)
    createDraggable("test.png", middlex(), middley(), lab)
    console.log("ayy")
}

function createGenerator(src, x, y, stage) {
    var objectarray = [];
    var gen = createStatic(src, x, y, stage);
    stage.addChild(gen);
    //TODO: let the objects continously generate **independently**
    gen.interactive = true
    gen.buttonMode = true
    gen.anchor.set(0.5)
    gen.src = src
    console.log(gen.src)
    gen.stage = stage
    gen.on('pointerup', onClick());
    return gen;
}


/*
example lab data
var labData = [
{
    type:"draggable",
    x:50,
    y:50,
    src:"img"
},
{
    type:"static",
    x:70,
    y:70,
    src:"img"
},

]

code to import data(array) {
    for(var i=0; i<array.length; i++) {
    var g = array[i].type;
    var y = array[i];
    switch(g) {
        case "draggable": //add it with arguments
    }
        app.stage.addChild(array[i])
    }
}
*/
