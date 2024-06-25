let darkThemeButton = document.querySelector(".theme-button-dark");
let lightThemeButton = document.querySelector(".theme-button-light");
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = function () {
document.body.classList.add('dark');
darkThemeButton.classList.add('active');
lightThemeButton.classList.remove('active');
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}

sansSerifFontButton.onclick = function () {
document.body.classList.remove('serif');
serifFontButton.classList.remove('active');
sansSerifFontButton.classList.add('active');
}

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
}

let blogArticles = document.querySelectorAll('.blog-article.short');

for (let blogArticle of blogArticles) {
  let moreButton = blogArticle.querySelector('.more');
  moreButton.onclick = function () {
    blogArticle.classList.remove('short');
  };
}

let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');

let cardsList = document.querySelector('.cards');

gridViewButton.onclick = function () {
  cardsList.classList.remove('list');
  gridViewButton.classList.add('active');
  listViewButton.classList.remove('active');
};

listViewButton.onclick = function () {
  cardsList.classList.add('list');
  gridViewButton.classList.remove('active');
  listViewButton.classList.add('active');
};

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let activeImage of previews) {
    activeImage.onclick = function (evt) {
      evt.preventDefault();
      activePhoto.src = activeImage.href;
    
      let currentActive = document.querySelector('.preview-list .active-item');
      currentActive.classList.remove('active-item');
      activeImage.classList.add('active-item');
    };
}