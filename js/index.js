window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    animate();
  };

    // Grab canvas element in HTML and set dimensions:
    const canvas = document.getElementById('canvas');
    canvas.width = 600;
    canvas.height = window.innerHeight;
    // Test Drawing


    // Canvas boilerplate code:
    const ctx = canvas.getContext('2d');
    // Use as cancel button: 
    let animateId = null;
    

 
    // function drawPurpleSquare(){
    //     ctx.fillStyle="purple";
    //     ctx.fillRect(i++, i++, 200, 200); 
    // }

    // Load image and drawing with canvas:
    let image = new Image()
    image.src = 'images/car.png'  //Loads the car 
    // image.onload = function(e){ 
    //     drawCar()
    // }

    // Load image and drawing with canvas:
    let roadimage = new Image()
    roadimage.src = 'images/road.png'  //Loads the road 
    // roadimage.onload = function(b){ 
    //     displayRoad()
    // } 

    // Place the car image on the canvas:
    function drawCar(){
        ctx.drawImage(car.image, car.x, car.y, 100, 140)
    }

    // Place road image on the canvas:
    function displayRoad(){
        ctx.drawImage(road.image, road.x, road.y, 500, 900)
    }

    // iterator variable for moving obstacles constantly:
    let i = 0;
    let j = 400;
    let k = -400;

    // Place obstacles on the canvas:
    function drawObstacle(){
      ctx.fillStyle = "maroon";
      obstacles.forEach(obstacle => {
        ctx.fillRect(obstacle.x, obstacle.y+=0.5, obstacle.w, obstacle.h);
      })
      
    }

    // function drawObstacle1(){
    //   ctx.fillStyle = "maroon";
    //   ctx.fillRect(140, i+=0.5, 250, 20);
    // }
    // function drawObstacle2(){
    //   ctx.fillStyle = "blue";
    //   ctx.fillRect(315, j+=0.5, 250, 20);
    // }
    // function drawObstacle3(){
    //   ctx.fillStyle = "green";
    //   ctx.fillRect(315, k+=0.5, 250, 20);
    // }

    // Consolidate above code:
    let obstacles = [];
    setInterval(function(){
      let obstacle = {
        x: 315,
        y: i+=0.5,
        w: 250,
        h: 20
      }
      obstacles.push(obstacle)
    }, 1000)

    // Declare car object:
    let car = { 
        x: 300,
        y: 750,
        image: image,
    }   

    // Declare road object:
    let road = {
      x: 100,
      y: 20,
      image: roadimage
    }

    //Listening for key press so that we can change the car above: 
    document.body.onkeypress = function(e){
        if(e.key === 'w'){ //Move up
            car.y-=10
        }
        if(e.key === 'd'){ //Move right
            car.x+=10
        }
        if(e.key === 'a'){ //Move left
            car.x-=10
        }
        if(e.key === 's'){ //Move down
            car.y+=10; 
        }
    }


    function detectCollision(){

        var obstacle1 = {x: 140, y: i, width: 250, height: 20} // obstacle 1 position

        var car = {x: car.x, y: car.y, width: 100, height: 140}//Our car

        if (obstacle1.x < car.x + car.width &&
        obstacle1.x + obstacle1.width > car.x &&
        obstacle1.y < car.y + car.height &&
        obstacle1.y + obstacle1.height > car.y) {
            // collision detected!
          console.log('COLLISION! HOPE YOU HAVE INSURANCE, GURL!')
        }
    }


    let frames = 0;
    let ready = false;
    
    function animate(){       // Where the magic happens
      frames++;  
      ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page
        displayRoad();        // Drawing the road
        drawCar();            // Drawing the car
        drawObstacle();
        // drawObstacle1();
        // if(frames % 100 === 0){ready = true};
        // if(ready){
        //   drawObstacle2();
        // }
        // if(frames % 200 === 0){ready = true};
        // if(ready){
        //   drawObstacle3();
        // }
        //drawObstacle3();
        //detectCollision()

        animateId = window.requestAnimationFrame(animate) //Game rendering -infinite loop that goes super fast
    }
    //animate()

    //window.cancelAnimationFrame(animateId) to stop it

    //setInterval clearInterval(id)
    //setTimeout clearTimeout(id)
    //requestAnimationFrame cancelAnimationFrame(id)


  document.body.onclick = function(e){
      console.log(e.clientX, e.clientY)
  }

  document.body.onclick = function(b){
    console.log(b.clientX, b.clientY)
}


  function startGame() {}
};



