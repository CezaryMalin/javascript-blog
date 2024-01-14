{ 
'use strict';

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

// function generateTitleLinks(){

// /*[DONE] remove contents of titleList */
 
// const titleList = document.querySelector(optTitleListSelector);
// titleList.innerHTML = '';

// /* [Done] for each article */

// const articles = document.querySelectorAll(optArticleSelector);
//   for (let article of articles) {

//   /* [Done] get the article id */
//     const articleId = article.getAttribute('id');

//   /*[Done] find the title element */
//   const articleTitleElement = article.querySelector(optTitleSelector);

//   /* [Done]  get the title from the title element */
//   const articleTitle = articleTitleElement.innerHTML;

//   /* [Done]  create HTML of the link */
//   const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//     console.log(linkHTML);

//   /* [Done] insert link into titleList */
//   titleList.innerHTML = titleList.innerHTML + linkHTML;
  
//   }
// }

function generateTitleLinks(){
  /* [Done] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';

  /* [Done]  find all the articles and save them to variable: articles */
  const articles = document.querySelectorAll(optArticleSelector);
  let html = '';
  for (let article of articles) {
    /*[Done]  get the article id */
    const articleId = article.getAttribute('id');

    /*[Done]  find the title element */
    const articleTitleElement = article.querySelector(optTitleSelector);

    /*[Done]  get the title from the title element */
     const articleTitle = articleTitleElement.innerHTML;

    /*[Done]  create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /*[Done]  insert link into html variable */
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
}
generateTitleLinks();  

const titleClickHandler = function(event) {
  event.preventDefault();
  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  
  for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
  }

  /* [DONE] add class 'active' to the clicked link */
     clickedElement.classList.add('active');
  
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');
  
  for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
  }    

  /*[DONE] get 'href' attribute from the clicked link */
  const hrefAttrFromClickedEl = clickedElement.getAttribute('href');
  
  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const foundedArticle = document.querySelector(hrefAttrFromClickedEl);
  
  /* [DONE] add class 'active' to the correct article */
  foundedArticle.classList.add('active');
}
  const links = document.querySelectorAll('.titles a');
  
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}
