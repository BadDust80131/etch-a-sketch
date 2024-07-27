const b = document.querySelector("#grid")
let size = 16;

function divGrid () {
    for (x=0; x < size; x++) {
        let drow = document.createElement("div");
        drow.className = "row"
        for (i=0; i < size; i++) {
            const d = document.createElement("div")
            d.style.boxSizing = "content-box";
            d.style.height = "20px";
            d.style.width = "20px";
            d.style.border = "1px solid black";
            d.className = "item"

            drow.appendChild(d)
        }
        b.appendChild(drow)
    }
}

function divInput() {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = `#${randomColor}`;
        })
    });
}

function btnInput() {
    const btn = document.querySelector("#change")
    btn.addEventListener("click", () => {
        changeGridSize()
    })
}

function deleteGrid() {
    b.innerHTML = '';
}

function changeGridSize() {
    size = prompt("Grid Size (16-100)")
    if (size >= 16 && size <= 100){
        deleteGrid()
        divGrid()
        divInput()
    }
}

divGrid()
divInput()
btnInput()
