let banner = document.getElementById("banner-image");
let images = ["static/bannerChildren.jpg", "static/bannerTrees.jpg", "static/bannerZagreb.jpg"];
let nextImage = document.getElementById("next-image");
let prevImage = document.getElementById("previous-image");
let wordArray = ["Znanje", "Razvoj", "Upornost"]
let wordIndex = 1;  
let word = document.getElementById("word");

function getBaseName(path) {
    return path.substring(path.lastIndexOf('/') + 1);
}

const changeImage = function () {
    let currentImage = getBaseName(banner.src)
    let imageIndex = images.findIndex(image => getBaseName(image) === currentImage);

    if (this.id === "next-image") {
        if (imageIndex + 1 >= images.length) {
            banner.src = images[0];
            wordIndex = 0;
            word.textContent = wordArray[0];

        } else {
            banner.src = images[imageIndex + 1];
            wordIndex++;
            word.textContent = wordArray[wordIndex];
        }
    } else if (this.id === "previous-image") {
        if (imageIndex - 1 < 0) {
            banner.src = images[images.length - 1];
            wordIndex = wordArray.length - 1;
            word.textContent = wordArray[wordIndex];
        } else {
            banner.src = images[imageIndex - 1];
            wordIndex--;
            word.textContent = wordArray[wordIndex];
        }
    }
}


nextImage.addEventListener("click", changeImage);
prevImage.addEventListener("click", changeImage);

