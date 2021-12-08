shiver = "";
spiderman = "";

leftWristX = 0; 
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;   

function preload(){
mario = loadSound("shiver.mp3");
spiderman = loadSound("toby.mp3");
}

function setup(){
    canvas = canvasCreate(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}

function gotPoses(results) {
    if (results.length > 0 ) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}

function modelLoaded(){
    console.log("PoseNet has started");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function start(){
    shiver.play;
}