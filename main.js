var mouseEvent = "empty";

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    /*Uncomment the correct line*/
    canvas.addEventListener("mousedown", my_mousedown);
    //canvas.setEventListener("mousedown", my_mousedown);
   // canvas.getEventListener("mousedown", my_mousedown);
    


    

    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        radius = document.getElementById("radius").value;
        mouseEvent = "mouseDown";
    }

    /*
    Create an event listener for "mousemove"
    and call function my_mousemove
    */
    function my_mousemove(e) {
        canvas.addEventListener("mousemove", mymousemove);
        mouseevent="my_mousemove"
        console.log(mouseevent)
    }

    function my_mousemove(e)
    {
        /*Uncomment the correct line*/
        //current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        //current_position_of_mouse_x = e.clientX - canvas.offsetRight;
        current_position_of_mouse_x = e.clientX - canvas.offsetBottom;

        /*
        create current_position_of_mouse_y and
        assign it e.clientY - canvas.offsetTop;
        */
        current_position_of_mouse_y=e.clientY - canvas.offsetTop

        current_position_of_mouse_y="e.clientY" - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        }

    }
    
  function my_mouseup(e) {
        canvas.addEventListener("mouseup", mymouseup);
        mouseevent="my_mouseup"
        console.log(mouseevent)
  }
    
      function my_mouseleave(e) {
        canvas.addEventListener("mouseleave", mymouseleave);
        mouseevent="my_mouseleave"
        console.log(mouseevent)
    }
    
    
    function my_mouseleave(e)
    {
        mouseevent="my_mouseleave"
        console.log(mouseevent)
    }

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}











var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //Addictonal Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //Addictonal Activity ends

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        function moveTo() {
            last_position_of_x, last_position_of_y
        }



        function lineTo() {
            last_position_of_x, last_position_of_y
        }


        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

var last_position_of_touch_x, last_position_of_touch_y;


width = screen.width;


new_width = screen.width - 70;

new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    console.log("my_touchstart");
    //Additional Activity
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    //End Additional Activity

    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);


    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;

}

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


