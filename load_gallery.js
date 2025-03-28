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