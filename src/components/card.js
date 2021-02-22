import axios from 'axios';

let cardsContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles)
        let bootstrapArticle = response.data.articles.bootstrap
            for (let i = 0; i < bootstrapArticle.length; i++){
                cardsContainer.appendChild(Card(response.data.articles.bootstrap[i]));
            }
        let javascriptArticle = response.data.articles.javascript
            for (let i = 0; i < javascriptArticle.length; i++){
                cardsContainer.appendChild(Card(response.data.articles.javascript[i]));
        }
        let jqueryArticle = response.data.articles.jquery
            for (let i = 0; i < jqueryArticle.length; i++){
                cardsContainer.appendChild(Card(response.data.articles.jquery[i]));
        }
        let nodeArticle = response.data.articles.node
            for (let i = 0; i < nodeArticle.length; i++){
                cardsContainer.appendChild(Card(response.data.articles.node[i]));
        }
        let techArticle = response.data.articles.technology
            for (let i = 0; i < techArticle.length; i++){
                cardsContainer.appendChild(Card(response.data.articles.technology[i]));
        }

    })
    .catch(err => {
        console.log(err)
    })

const Card = (object) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let card = document.createElement('div');
  let headline = document.createElement('div');
  let author = document.createElement('div');
  let imgContainer = document.createElement('div');
  let img = document.createElement('img');
  let authorName = document.createElement('span');

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(authorName);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = object.headline;
  img.src = object.authorPhoto;
  authorName.textContent = object.authorName;

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
