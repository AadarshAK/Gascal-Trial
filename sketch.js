var refilRate, rate_per_unit_LPG, previuosUnits, currentUnits, diff;
var totalAmount;
var previuosUnitsI, currentUnitsI, Submit;

function preload(){

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    refilRate=9834/12;//needs to be updated in the code itself
    rate_per_unit_LPG=refilRate/600;

    previuosUnitsI=createInput("Previous Reading");
    previuosUnitsI.position(windowWidth/2,windowHeight/2)
    
    currentUnitsI=createInput("Current Reading");
    currentUnitsI.position(windowWidth/2,windowHeight/2+50)

    Submit=createButton("Submit values");
    Submit.position(windowWidth/2, windowHeight/2+100);

}

function draw(){

    Math.round(refilRate/600);
    console.log(rate_per_unit_LPG);

   drawSprites();

   if(Submit.mousePressed()&&(typeof previuosUnitsI !==String)&&(typeof currentUnitsI !==String)){
    previuosUnits=previuosUnitsI.value();
    currentUnits=currentUnitsI.value();
    textSize(32);
    fill("green");
    
    if(typeof previuosUnitsI !==String){
    console.log(previuosUnits);
    }
    console.log("Current Reading"+currentUnitsI);
    diff=previuosUnits-currentUnits;

}
if(previuosUnits!==null){
    totalAmount=diff*rate_per_unit_LPG;
    console.log(totalAmount);
    text(" Total Amount : "+ totalAmount,windowWidth/2,windowHeight/2+200);
    }
    else{
        text("Enter Reading",windowWidth/2,windowHeight/2+200)
    }

}