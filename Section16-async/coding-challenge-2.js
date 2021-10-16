'use strict';

const imgContainer = document.querySelector('.images');

const url1 = './img/img-1.jpg';
const url2 = './img/img-2.jpg';

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement('img');
    newImg.src = imgPath;
    newImg.addEventListener('load', function () {
      imgContainer.appendChild(newImg);
      resolve(newImg);
    });
    newImg.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

createImage(url1)
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage(url2);
  })
  .then(img => {
    currentImg = img;
    currentImg.style.display = 'flex';
    return wait(2);
  })
  .then(() => (currentImg.style.display = 'none'))
  .catch(err => console.error(err));
