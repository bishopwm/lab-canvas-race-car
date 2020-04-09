window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    animate();
  };

    // Grab canvas element in HTML and set dimensions:
    const canvas = document.getElementById('canvas');
    canvas.width = 600;
    canvas.height = window.innerHeight;
    
    // Canvas boilerplate code:
    const ctx = canvas.getContext('2d');
    // Use as cancel button: 
    let animateId = null;

    // let i=0;
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

    // Place the car image on the canvas
    function drawCar(){
        ctx.drawImage(car.image, car.x, car.y, 100, 140)
    }

    // Place road image on the canvas
    function displayRoad(){
        ctx.drawImage(road.image, road.x, road.y, 500, 900)
    }

    // Place obstacles on the canvas
    function drawObstacle1(){
        ctx.fillStyle = "maroon";
        ctx.fillRect(140, 600, 250, 30);
    }
    function drawObstacle2(){
      ctx.fillStyle = "maroon";
      ctx.fillRect(315, 350, 250, 30);
  }

    // Declare car object:
    let car = { //This is your car object 
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


    // function detectCollision(){

    //     var rect1 = {x: i, y: i, width: 200, height: 200} //Our purple square

    //     var rect2 = {x: car.x, y: car.y, width: 100, height: 140}//Our car

    //     if (rect1.x < rect2.x + rect2.width &&
    //     rect1.x + rect1.width > rect2.x &&
    //     rect1.y < rect2.y + rect2.height &&
    //     rect1.y + rect1.height > rect2.y) {
    //         // collision detected!
    //         console.log(' the rectangles colided')
    //     }
    // }

    function animate(){       // Where the magic happens
        ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page
        displayRoad();        // Drawing the road
        drawCar();            // Drawing the car
        drawObstacle1();
        drawObstacle2();
        //drawPurpleSquare()  // Draw your things
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



