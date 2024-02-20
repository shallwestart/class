function setup() {
    createCanvas(windowWidth, windowHeight);
    
  }
  //write word
  function draw() {

     background(0);

        //insert pictire
       fill(255)
       rect(160,270,450,300)


    fill(255)
    textFont('Helvetica', 50)
    tex t("CHAVISA SRISUWAN",150,150)
    textFont('Helvetica', 30)
    text("profile",160,190)
    text("education",160,640)
    text("interest",160,730)
    textFont('Helvetica', 17)
    text("contact." ,700,300)
    text("chavisa.chch@gmail.com" ,700,320)
    text("tel. : 09429282921" ,700,340)
    text("Hello, My name is Chavisa Srisuwan. My nickname is Toey. I'm 20 years old." ,700,500)
    text("Now, I'm a Thai design student who is passionate about being a creative designer.",700,520)
    text("I aspire to find new experiences and meet chances.",700,540)
    text("rajinibon school I Yothinburana school ( English Programme ) I Chulalongkorn University ( Faculty of Architecture )",160,680)
    text("design, movies/series I travel I red panda I dolls I games",160,770)
    fill(0)
    text("picture",360,420)


    // make logo 
    fill(random(120,160),random(20,230),random(40,240))
    drawJelly(mouseX,mouseY)
    fill(random(10,20),random(160,177),random(50,60))
    star (30,50, 100, 75, 10)
    fill(random(98,108),random(60,71),random(240,255)) 
    star (windowWidth,200, 130, 170, 14)
    fill(random(200,232),random(70,95),random(140,156)) 
    star (0,windowHeight, 100, 140, 14)
    fill(random(210,255),random(90,110),0) 
    star (windowWidth-300,windowHeight-30, 100, 140, 14)
    fill(random(220,255),random(190,200),random(2,30)) 
    star (windowWidth-windowWidth/3,30, 75, 50, 14)
    

  
  }

 

  function drawJelly(x,y){//set การวางตำเเหน่งให้วางตาบนหน้า
    drawbody(x,y);
    draweye(x,y);.
  }
  
  function drawbody(x, y, radius1, radius2, npoints){//กำหนดรูปร่างของobject
    noStroke();
    star (x,y, 12.5, 17.5, 8);
  }
  function draweye(x,y){ //กำหนดลูกตา
    
      fill(255)
      ellipse(x-5,y, 7.5,11);
      fill(0)
      ellipse(x-5,y+1, 5,7.5);
      fill(255)
      ellipse(x+5,y, 7.5,11);
      fill(0)
      ellipse(x+5,y+1, 5,7.5);
  
  }
function star(x, y, radius1, radius2, npoints) {//สร้างfunctionสำหรับขึ้นรูปทรงหลายเเชก
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
