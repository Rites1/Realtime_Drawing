nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function draw(){
    background("grey");
    document.getElementById("square_sides").innerHTML = "Width and Height of a square = "+difference+"px";
    fill("blue");
    stroke("red");
    square(nose_x, nose_y, difference);
}

function modelloaded(){
    console.log("posenet is initilised");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+ nose_x + " nose y = "+ nose_y);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left wrist x = "+left_wrist_x + " right wrist x = "+ right_wrist_x + " difference = "+difference);
    }
}