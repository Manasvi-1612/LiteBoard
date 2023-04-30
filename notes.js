
let btn = document.querySelector("#notes");

let OnClick = true;



btn.addEventListener("click", function () {
    
    let stick = document.createElement("div");
    stick.setAttribute("class", "stick");

    stick.innerHTML = `<div class="navbar">
                <div class="close"></div>
                <div class="minimize"></div>
                </div>
                <textarea name="" class="textarea"></textarea>`;
    
    if(OnClick == true){
        body.appendChild(stick);
    }

    OnClick = false;

    let minimize = stick.querySelector(".minimize");
    let isClosed = false;
    let textArea = stick.querySelector(".textarea");

    let close = stick.querySelector(".close");

    minimize.addEventListener("click", function () {
        if (isClosed == false) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        }
        isClosed = !isClosed;
    })

    close.addEventListener("click", function () {
        stick.remove();
        OnClick = true;
    })

    dragElement(stick);

    function dragElement(elmnt) {
    
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (stick.querySelector(".navbar")) {
        stick.querySelector(".navbar").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
    
    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
    
    document.onmouseup = null;
    document.onmousemove = null;
    }
    }
    

})    


