noseX=0;
noseY=0;
 
function preload()
{
    mustashe_upperlip = loadImage('https://i.postimg.cc/0Nd6bFQm/download.png');
    lipstick_lips = loadImage('https://i.postimg.cc/qRqk45Cp/l1.png');
}
 
function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
 
    pose_Net = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
 
function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}
 
function draw()
{
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0);
circle(noseX, noseY, 20);
}
 
function take_snapshot()
{
    save('myFilterImage.png');
}