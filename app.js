document.addEventListener("DOMContentLoaded", function(){
    let squareBtn = document.createElement("button");
    squareBtn.innerText = "Add Square"
    document.body.appendChild(squareBtn);
    let flexContainer = document.createElement("div");
    flexContainer.classList.add ("container");
    document.body.appendChild(flexContainer);
    let idCounter = 1;

    squareBtn.addEventListener("click", function() {
        let newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.id = idCounter;
        newSquare.innerText = idCounter;

        newSquare.addEventListener("click", function (){
            newSquare.style.backgroundColor = generateRandomColor();
        });

        newSquare.addEventListener("dblclick", function() {
            if(newSquare.id %2 === 0) {
                if(newSquare.nextSibling !== null) {
                    newSquare.nextSibling.remove();
                } else {
                    alert("No Square");
                }
            } else {
                if(newSquare.previousSibling !== null) {
                    newSquare.previousSibling.remove();
                } else {
                    alert("No Square");
                }
            }
        
        })
        flexContainer.appendChild(newSquare);
        idCounter++;

    })
});

function generateRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
};