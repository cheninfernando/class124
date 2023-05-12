function setup(){
    video= createCapture(VIDEO);
    video.size(800,800);

    canvas=createCanvas(600,600);
    canvas.position(1000,150);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results){
if(results.length>0)
{
    console.log(results);
}
}

function modelloaded(){
console.log('posenet has been initialized')
}

function draw(){
    background("black")
}