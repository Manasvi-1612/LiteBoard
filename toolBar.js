let CanvasBoard = document.querySelector("canvas");

    let rectTool = document.querySelector(".fa-square");
    let lineTool = document.querySelector(".fa-grip-lines-vertical");
    let pencilTool = document.querySelector("#pencil");
    let eraserTool = document.querySelector("#eraser");



    let curTool = "";

    //default height and width is 300x150(smaller)
    CanvasBoard.height = window.innerHeight;
    CanvasBoard.width = window.innerWidth;
    
    // tool.strokeStyle = "black";
    let tool = CanvasBoard.getContext("2d");

    
    let body = document.querySelector("body");

    //tool change logic
    rectTool.addEventListener("click", function () {
      curTool = "rectTool";
    });

    lineTool.addEventListener("click", function () {
      curTool = "lineTool";
    });

    pencilTool.addEventListener("click", function () {
      curTool = "pecilTool";
    });
    
    eraserTool.addEventListener("click", function () {
      curTool = "eraserTool";
    });

    let boardTop = CanvasBoard.getBoundingClientRect().top;
    let boardLeft = CanvasBoard.getBoundingClientRect().left;

    let iX, iY, fX, fY;
    let isDrawing = false;

    console.log(CanvasBoard.getBoundingClientRect());
    body.addEventListener("mousedown", function (e) {
      //This function is going to be call when we press on body
      //alert("mouse was pressed");
      isDrawing = true;
      iX = e.clientX-boardLeft;
      iY = e.clientY - boardTop;
      tool.beginPath();
      tool.moveTo(iX, iY);
    });

    body.addEventListener("mousemove", function (e) {
      if (isDrawing == false) {
        return;
      }

      if (curTool == "pecilTool" || curTool=="eraserTool") {
        fX = e.clientX-boardLeft;
        fY = e.clientY - boardTop;

        tool.lineTo(fX, fY);
        tool.stroke();

        iX = fX;
        iY = fY;
      }
    });
    // //mouse is lifted
    body.addEventListener("mouseup", function (e) {
      // alert("mouse was lifted");

      isDrawing = false;

      fX = e.clientX-boardLeft;
      fY = e.clientY - boardTop;
      let width = fX - iX;
      let height = fY - iY;

      if (curTool == "rectTool") {
        tool.strokeRect(iX, iY, width, height);
      } else if (curTool == "lineTool") {
        tool.beginPath();
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke();
      }

      let pink = document.querySelector(".red");
      let green = document.querySelector(".green");
      let blue = document.querySelector(".blue");
      let black = document.querySelector(".black");
      
      black.addEventListener("click", function () {
        tool.strokeStyle = "black";
      });

      pink.addEventListener("click", function () {
        tool.strokeStyle = "lightpink";
      });

      green.addEventListener("click", function () {
        tool.strokeStyle = "lightgreen";
      });

      blue.addEventListener("click", function () {
        tool.strokeStyle = "lightblue";
      });
    });


   
        