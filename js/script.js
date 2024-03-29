{
  'use strict';

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

  function generateTitleLinks() {
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    const articles = document.querySelectorAll(optArticleSelector);
    let html = '';
    for (let article of articles) {
      const articleId = article.getAttribute('id');
      const articleTitleElement = article.querySelector(optTitleSelector);
      const articleTitle = articleTitleElement.innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }

    titleList.innerHTML = html;
  }

  generateTitleLinks();

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');

    const activeArticles = document.querySelectorAll('.posts article.active');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const hrefAttrFromClickedEl = clickedElement.getAttribute('href');
    const foundedArticle = document.querySelector(hrefAttrFromClickedEl);
    foundedArticle.classList.add('active');
  };

  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}