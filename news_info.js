const news1 = {
    title: "Test Title",
    content: "<p>Test Content Test Content Test Content Test Content</p>",
    moodimg: "news_happy.gif",
    mood: "Inquizitive",
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
    let newsItem = document.getElementById("news").appendChild(document.createElement("div"));
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