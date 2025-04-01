var galdiv;
var galimg;
var divArray = [ ];
for (const curobj of artArray) {
    galdiv = document.createElement("div");
    galimg = document.createElement("img");
    galdiv.classList.add("thumbnail");
    galimg.classList.add("thumbnail");
    galimg.src = "art/" + curobj.img;
    galdiv.setAttribute("onclick", "showLargeImage(" + curobj.name + ")");
    document.getElementById("gallery").appendChild(galdiv);
    galdiv.appendChild(galimg);
}
document.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
        case "Left":
            showLargeImage(artArray[curimg - 1]);
            break;
        case "ArrowRight":
        case "Right":
            showLargeImage(artArray[curimg + 1]);
            break;
    }
});