const news1 = {
    title: "Website Making Progress!",
    content: "<p>Thats right folks! There has been a lot of progress on this website so far! Just a couple more thing left to make :-).</p>",
    moodimg: "news_happy.gif",
    mood: "Excited!",
    date: "4/4/25",
};
const news2 = {
    title: "Puppies 2",
    content: "<p>Large Puppies Are Sweet And Big and Sometimes Loud</p>",
    moodimg: "news_shy.gif",
    mood: "Doggy",
    date: "4/8/25",
};
const newsList = [ news1,news2 ];
function createNewsItem(title,content,moodimg,mood,date) {
    let newsItem = document.getElementById("news-reel").appendChild(document.createElement("div"));
    newsItem.classList.add("news-item");
    let newsBlob = newsItem.appendChild(document.createElement("img"));
    let newsFace = newsItem.appendChild(document.createElement("img"));
    newsFace.classList.add("news-face");
    newsFace.src = "news/" + moodimg;
    newsBlob.classList.add("news-blob");
    newsBlob.src = "news/news_blob.png";
    let moodTextDiv = newsItem.appendChild(document.createElement("div"));
    moodTextDiv.classList.add("mood-text-div");
    let moodText = moodTextDiv
        .appendChild(document.createElement("div"))
        .appendChild(document.createElement("p"));
    let newsRec = newsItem.appendChild(document.createElement("div"));
    newsRec.classList.add("news-rec");
    let newsTitle = document.createElement("h2");
    let newsCont = document.createElement("div");
    newsRec.appendChild(newsCont);
    newsRec.insertBefore(newsTitle,newsCont);
    let newsDate = newsItem.appendChild(document.createElement("p"));
    newsDate.classList.add("date");
    newsCont.innerHTML = content;
    newsTitle.textContent = title;
    moodText.innerHTML = "<u>Feelin':<u><br>" + mood;
    newsDate.textContent = date;
}