let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");

let PSize = 5;
let ESize = 5;
let RSize = 5;
let LSize = 5;


let opt = document.querySelectorAll(".size-box");

let ctool = "";
pencil.addEventListener("click", function () {

    if (ctool == "pencil") {
        opt[0].style.display = "none";
        ctool = "";
    } else {
        for (let i = 0; i < opt.length; i++) {
            opt[i].style.display = "none";
        }
        ctool = "pencil"
        tool.strokeStyle = "black";

        tool.lineWidth = PSize;
        opt[0].style.display = "flex";

        
    }
})

eraser.addEventListener("click", function () {
    if (ctool == "eraser") {
        opt[1].style.display = "none";
        ctool = "";
    } else {
        for (let i = 0; i < opt.length; i++) {
            opt[i].style.display = "none";
        }
        ctool = "eraser"
        tool.strokeStyle = "white";

        tool.lineWidth = ESize;
        opt[1].style.display = "flex";
    }
})

rect.addEventListener("click", function () {

    if (ctool == "rect") {
        opt[2].style.display = "none";
        ctool = "";
    } else {
        for (let i = 0; i < opt.length; i++) {
            opt[i].style.display = "none";
        }
        ctool = "rect"
        tool.strokeStyle = "black";

        tool.lineWidth = RSize;
        opt[2].style.display = "flex";

    }
})

line.addEventListener("click", function () {

    if (ctool == "line") {
        opt[3].style.display = "none";
        ctool = "";
    } else {
        for (let i = 0; i < opt.length; i++) {
            opt[i].style.display = "none";
        }
        ctool = "line"
        tool.strokeStyle = "black";

        tool.lineWidth = LSize;
        opt[3].style.display = "flex";


    }
})


let SizeBoxArr = document.querySelectorAll(".size-box");

SizeBoxArr[0].addEventListener("click", function (e) {
    let eles = ["size1", "size2", "size3", "size4"];
    let AllClass = e.target.classList;
    let firstClass = AllClass[0];

    let test = eles.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            PSize = 5;
        } else if (firstClass == "size2") {
            PSize = 10;
        } else if (firstClass == "size3") {
            PSize = 15;
        } else if (firstClass == "size4") {
            PSize = 20;
        }
    }

    tool.lineWidth = PSize;
})
SizeBoxArr[1].addEventListener("click", function (e) {
    let eles = ["size1", "size2", "size3", "size4"];
    let AllClass = e.target.classList;
    let firstClass = AllClass[0];

    let test = eles.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            ESize = 5;
        } else if (firstClass == "size2") {
            ESize = 10;
        } else if (firstClass == "size3") {
            ESize = 15;
        } else if (firstClass == "size4") {
            ESize = 20;
        }
    }

    tool.lineWidth = ESize;
})
SizeBoxArr[2].addEventListener("click", function (e) {
    let eles = ["size1", "size2", "size3", "size4"];
    let AllClass = e.target.classList;
    let firstClass = AllClass[0];

    let test = eles.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            RSize = 5;
        } else if (firstClass == "size2") {
            RSize = 10;
        } else if (firstClass == "size3") {
            RSize = 15;
        } else if (firstClass == "size4") {
            RSize = 20;
        }
    }
    tool.lineWidth = RSize;
})
SizeBoxArr[3].addEventListener("click", function (e) {
    let eles = ["size1", "size2", "size3", "size4"];
    let AllClass = e.target.classList;
    let firstClass = AllClass[0];

    let test = eles.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            LSize = 5;
        } else if (firstClass == "size2") {
            LSize = 10;
        } else if (firstClass == "size3") {
            LSize = 15;
        } else if (firstClass == "size4") {
            LSize = 20;
        }
    }

    tool.lineWidth = LSize;
})
