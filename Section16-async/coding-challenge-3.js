imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement('img');
    newImg.src = imgPath;
    newImg.addEventListener('load', function () {
      console.log(`image ${imgPath} loaded!`);
      imgContainer.appendChild(newImg);
      resolve(newImg);
    });
    newImg.addEventListener('error', function () {
      reject(new Error('Image not found.'));
    });
  });
};

const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

// PART 1
const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('./img/img-2.jpg');
    img.style.display = 'flex';
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage(img));
  const imgEls = await Promise.all(imgs);
  imgEls.forEach(imgEl => imgEl.classList.add('parallel'));
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
