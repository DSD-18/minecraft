var canvas= new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width= 30;
block_height = 30;

var player_object= "";
var block_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object= img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
}
function block_update(block_image){
    fabric.Image.fromURL(block_image,function(img){
        block_object= img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=="80"){
        console.log("shiftp is pressed");
    block_width= block_width + 10;
    block_height= block_height + 10;
    document.getElementById("c_width").innerHTML=block_width;
    document.getElementById("c_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypressed=="77"){
        console.log("shiftm is pressed");
    block_width= block_width - 10;
    block_height= block_height - 10;
    document.getElementById("c_width").innerHTML=block_width;
    document.getElementById("c_height").innerHTML=block_height;
    }
    if(keypressed == "87"){
        block_update("wall.jpg");
        console.log(" w is pressed");
    }
    if(keypressed == "71"){
        block_update("ground.png");
        console.log(" g is pressed");
    }
    if(keypressed == "76"){
        block_update("light_green.png");
        console.log(" l is pressed");
    }
    if(keypressed == "84"){
        block_update("trunk.jpg");
        console.log(" t is pressed");
    }
    if(keypressed == "82"){
        block_update("roof.jpg");
        console.log(" r is pressed");
    }
    if(keypressed == "89"){
        block_update("yellow_wall.png");
        console.log(" y is pressed");
    }
    if(keypressed == "68"){
        block_update("dark_green.png");
        console.log(" d is pressed");
    }
    if(keypressed == "85"){
        block_update("unique.png");
        console.log(" u is pressed");
    }
    if(keypressed == "67"){
        block_update("cloud.jpg");
        console.log(" c is pressed");
    }
    if(keypressed == "38"){
        up()
        console.log("up");
    }
    if(keypressed == "37"){
        left()
        console.log("left");
    }
    if(keypressed == "39"){
        right()
        console.log("right");
    }
    if(keypressed == "40"){
        down()
        console.log("down");
    }

}
function up(){
    if(player_y >= 0){
        player_y=player_y-10;
        console.log("new player y is "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <= 450){
        player_y=player_y+10;
        console.log("new player y is "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >= 0){
        player_x=player_x-10;
        console.log("new player x is "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x+10;
        console.log("new player x is "+player_x);
        canvas.remove(player_object);
        player_update();
    }
}