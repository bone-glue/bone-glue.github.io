//New image info goes here :)
var curimg;
const punypot1 = {
    name : "punypot1",
    img : "punypotluck_1.png",
    title : "Garden Gathering (Part 1)",
    desc : "Goache, Colored Pencils - 2024",
};
const punypot2 = {
    name : "punypot2",
    img : "punypotluck_2.jpg",
    title : "Puny Potluck (Part 2)",
    desc : "Goache, Colored Pencils - 2024",
};
const punypot3 = {
    name : "punypot3",
    img : "punypotluck_3.png",
    title : "Itty-Bitty Banquet (Part 3)",
    desc : "Goache, Colored Pencils - 2024",
};
const well = {
    name : "well",
    img : "well.png",
    title : "Well Painting",
    desc : "Goache, Colored Pencils - 2024",
};
const shark = {
    name : "shark",
    img : "shark.PNG",
    title : "Shark Illustration",
    desc : "Digital - 2023",
};
const reading = {
    name : "reading",
    img : "reading.png",
    title : "Reading",
    desc : "Digital - 2023",
};
const mobos_wallpaper = {
    name : "mobos_wallpaper",
    img : "mobos_wallpaper.png",
    title : "Wallpaper for mobOS",
    desc : "Digital - 2024",
};
//Then just add the object name to this array :)
const artArray = [ punypot1,punypot2,punypot3,well,shark,reading,mobos_wallpaper ];
function showLargeImage(obj) {
    document.getElementById("largeImg").src = "art/" + obj.img;
    document.getElementById("largeTitle").innerHTML = obj.title;
    document.getElementById("largeDesc").innerHTML = obj.desc;
    curimg = artArray.indexOf(obj);
    document.getElementById("largeImgHolder").style.display = "flex";
    if (curimg == (artArray.length - 1)) {
        document.getElementById("right").style.visibility = "hidden";
    } else{
        document.getElementById("right").style.visibility = "initial";
    }
        if (curimg == 0) {
        document.getElementById("left").style.visibility = "hidden";
    } else{
        document.getElementById("left").style.visibility = "initial";
    }
}