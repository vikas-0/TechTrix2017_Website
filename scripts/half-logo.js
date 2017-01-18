/**
 * Created by vikas on 1/18/17.
 */
function animateT() {
    animationCalled();

    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    var W = 150, H = 150;
    var off1 = 65, off2 = 50, off3 = 40;
    canvas.height = H;
    canvas.width = W;

    reqAnimFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame
    ;
    var ball = {};
    ball = {
        radius: 5,
        color: "White",

        draw: function (x, y) {
            // Here, we'll first begin drawing the path and then use the arc() function to draw the circle. The arc function accepts 6 parameters, x position, y position, radius, start angle, end angle and a boolean for anti-clockwise direction.
            ctx.beginPath();
            ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
            //ctx.fillStyle = this.color;
            //ctx.fill();
            //ctx.closePath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = this.color;
            ctx.stroke();
        }
    };
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 5;
        ctx.strokeStyle = ball.color;
        ctx.stroke();
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, W, H);
    }

    //Draw a ball at center
    clearCanvas();
    ball.draw(W / 2, H / 2);

    //1st Vertical Line
    var h1 = (H / 2);
    var h2 = (H / 2);
    var h3 = h2 - off1;

    function FirstVerti() {
        if (h1 < ((H / 2) + off1) && h2 > ((H / 2) - off1)) {
            reqAnimFrame(FirstVerti);

            //Draw base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);

            //Draw new element
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);

            h1 = h1 + 1;
            h2 = h2 - 1;

            //connect by lineTo
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);
        }
        else {
            //call next Animation
            HorizontalLine();
        }
    }


    //horizontal Line
    var w1 = W / 2;
    var w2 = W / 2;
    //console.log(h2);
    function HorizontalLine() {
        if (w1 < ((W / 2) + off2) && w2 > ((W / 2) - off2)) {
            reqAnimFrame(HorizontalLine);

            //Draw base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);

            //Draw new element
            ball.draw(w1, h2);
            ball.draw(w2, h2);

            w1 = w1 + 1;
            w2 = w2 - 1;

            //Draw Line
            drawLine(W / 2 + ball.radius, h2, w1 - ball.radius, h2);
            drawLine(W / 2 - ball.radius, h2, w2 + ball.radius, h2);
        }
        else {
            //call next Animation
            SecVertical();
        }
    }

    //2nd Vertical Line
    function SecVertical() {
        if (h3 < h2 + off3) {
            reqAnimFrame(SecVertical);

            //Draw Base canvas
            clearCanvas();
            ball.draw(W / 2, H / 2);
            ball.draw(W / 2, h1);
            ball.draw(W / 2, h2);
            ball.draw(w1, h2);
            ball.draw(w2, h2);
            drawLine(W / 2, H / 2 + ball.radius, W / 2, h1 - ball.radius);
            drawLine(W / 2, H / 2 - ball.radius, W / 2, h2 + ball.radius);
            drawLine(W / 2 + ball.radius, h2, w1 - ball.radius, h2);
            drawLine(W / 2 - ball.radius, h2, w2 + ball.radius, h2);
            //draw new element
            ball.draw(w1, h3);
            ball.draw(w2, h3);

            h3 = h3 + 1;

            //draw Line
            drawLine(w1, h2 + ball.radius, w1, h3 - ball.radius);
            drawLine(w2, h2 + ball.radius, w2, h3 - ball.radius);
            //next animation (make text appear)
            $('#homeintro').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 7000);
            setTimeout(function(){
                $('#TempPopup').addClass('show');
            },4000);

        }
    }

    //start the Animation
    FirstVerti();
}