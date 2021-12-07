let output = ""
let news = document.getElementById("news")


fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=ef6b2fa2e16c44a58cd60e630fefae1a")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let articles = json.articles
        articles.forEach(elt => {
            console.log(elt)
            output += `<div><img src="${elt.urlToImage}" alt="${elt.author}"><h2>${elt.title}</h2><p>${elt.description}</p><p>${elt.publishedAt}</p><button><a href="${elt.url}">Read More</a></div>`
        })
    news.innerHTML = output
    })
    .catch(err => console.log(err))