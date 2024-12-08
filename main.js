let container = document.getElementById("container");

document.getElementById("button").addEventListener("click", function() {
    let size = prompt("Enter the size of the grid (1-100): ");
    size = parseInt(size);
    if (isNaN(size) || size > 100 || size < 1) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    container.innerHTML = ""; // Clear the container
    let fragment = document.createDocumentFragment();

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            let box = document.createElement("div");
            box.className = "box";
            box.style.width = 900 / size + "px";
            box.style.height = 900 / size + "px";
            fragment.appendChild(box);
        }
        let br = document.createElement("br");
        fragment.appendChild(br);
    }

    container.appendChild(fragment);
});