canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue"
ctx.lineWidth=4;
ctx.arc(300 , 250 , 45 , 0 , 2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow"
ctx.lineWidth=4;
ctx.arc(355 , 300 , 45 , 0 , 2*Math.PI);
ctx.stroke()
ctx.beginPath()
ctx.lineWidth=4;
ctx.strokeStyle = "black"
ctx.arc(400,250,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath()
ctx.strokeStyle = "red"
ctx.lineWidth = 4;
ctx.arc(500,250,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green"
ctx.lineWidth = 4;
ctx.arc(455,300,45,0,2*Math.PI)
ctx.stroke();