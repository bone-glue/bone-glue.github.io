var galdiv;
var galimg;
var indiv;
var divArray = [ ];
for (const curobj of artArray) {
    indiv = document.createElement("div");
    galdiv = document.createElement("div");
    galimg = document.createElement("img");
    indiv.classList.add("thumb-inside");
    galdiv.classList.add("thumbnail","shadow");
    galimg.src = "art/" + curobj.img;
    galdiv.setAttribute("onclick", "showLargeImage(" + curobj.name + ")");
    indiv.appendChild(galdiv);
    document.getElementById("gallery").appendChild(indiv);
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