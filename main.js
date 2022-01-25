var canvas = new fabric.Canvas('myCanvas');
px = 10;
py = 10;
bw = 30;
bh = 30;
var playerobj = "";
var blockobj = "";

//This function is for updating player image on the canvas
function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerobj = Img;
        playerobj.scaleToWidth(150);
        playerobj.scaleToHeight(140);
        playerobj.set({
            top: py,
            left: px
        });
        canvas.add(playerobj)
    });
}

//It will add block image
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockobj = Img;
        blockobj.scaleToWidth(bw);
        blockobj.scaleToHeight(bh);
        blockobj.set({
            top: py,
            left: px
        });
        canvas.add(blockobj);
    });
}

window.addEventListener("keydown", my_keydown);
console.log(keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p & shift pressed together ");
        bw = bw + 10;
        bh = bh + 10;
        document.getElementById("current_width").innerHTML = bw;
        document.getElementById("current_height").innerHTML = bh;
    }
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p & shift pressed together ");
        bw = bw + 10;
        bh = bh + 10;
        document.getElementById("current_width").innerHTML = bw;
        document.getElementById("current_height").innerHTML = bh;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m & shift pressed together ");
        bw = bw - 10;
        bh = bh - 10;
        document.getElementById("current_width").innerHTML = bw;
        document.getElementById("current_height").innerHTML = bh;
    }

    if (keyPressed == '38') {
        console.log("up");
        up();
    }


    if (keyPressed == '40') {
        console.log("down");
        down();
    }


    if (keyPressed == '37') {
        console.log("left");
        left();
    }


    if (keyPressed == '39') {
        console.log("right");
        right();
    }

    if (keyPressed == '87') {
        console.log("Wall should appear");
        new_image('wall.jpg');
    }


    if (keyPressed == '71') {
        console.log("ground should appear");
        new_image('ground.png');
    }


    if (keyPressed == '76') {
        console.log("light green block should appear");
        new_image('light_green.png');
    }

    if (keyPressed == '84') {
        console.log("Trunk block should appear");
        new_image('trunk.jpg');
    }

    if (keyPressed == '82') {
        console.log("roof block should appear");
        new_image('roof.jpg');
    }

    if (keyPressed == '89') {
        console.log("yellow block should appear");
        new_image('yellow_wall.png');
    }


    if (keyPressed == '68') {
        console.log("dark green block should appear");
        new_image('dark_green.png');
    }

    if (keyPressed == '85') {
        console.log("unique should appear");
        new_image('unique.png');
    }

    if (keyPressed == '67') {
        console.log("cloud block should appear")
        new_image('cloud.jpg');
    }
}


function up() {
    if (py > 0) {
        py = py - bh;
        canvas.remove(playerobj);
        player_update();

    }

}

function down() {
    if (py < 450) {
        py = py + bh;
        canvas.remove(playerobj);
        player_update();

    }

}



function right() {
    if (px < 850) {
        px = px + bw;
        canvas.remove(playerobj);
        player_update();

    }

}


function left() {
    if (px > 0) {
        px = px - bw;
        canvas.remove(playerobj);
        player_update();

    }

}