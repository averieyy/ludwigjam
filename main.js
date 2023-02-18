const canvas = document.getElementById("gamecan");
const ctx = canvas.getContext("2d");
let fps = 60;
let x = 0, y = 5;
// canvas.width = 640;
// canvas.height = 640;


// Gender time
function mainloop () {
    // Update


    //Render
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(x,y,10,10);
    x++;

    requestAnimationFrame(mainloop);
}

requestAnimationFrame(mainloop);