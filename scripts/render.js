console.log(galleriesJSONArray);

buildGalleries(galleriesJSONArray);

function buildGalleries(galleriesJSONArray) {
  for (let i = 0; i < galleriesJSONArray.length; i++) {
    let galleryJSON = galleriesJSONArray[i];
    addGallery(galleryJSON);
  }
}

function addGallery(galleryJSON) {
  let galleryName = galleryJSON.name;
  let sectionWrapper = document.getElementsByClassName("main-content")[0];
  let galleryWrapper = document.createElement("div");
  galleryWrapper.classList.add("gallery-wrapper");
  let galleryHeader = getGalleryHeader(galleryName);
  galleryWrapper.append(galleryHeader);
  sectionWrapper.append(galleryWrapper);
  let galleryDiv = document.createElement("div");
  galleryDiv.classList.add("gallery");
  galleryDiv.classList.add(galleryName);
  galleryWrapper.append(galleryDiv);
  let photosArr = galleryJSON.photos;
  for (let i = 0; i < photosArr.length; i++) {
    let photoObj = photosArr[i];
    let src = photoObj.src;
    let title = photoObj.title;
    let caption = photoObj.caption;
    addItemToGallery(galleryName, src, title, caption);
  }
}

function addItemToGallery(galleryName, imageSrc, title, caption) {
  let imageSrcPath = "./photos/" + galleryName + "/" + imageSrc;
  let item = document.createElement("div");
  item.classList.add("gallery-item");
  item.classList.add("item-3x4");
  let gallery = document.getElementsByClassName(galleryName)[0];
  let itemContents = `
    <img
        class="thumb placeholder"
        src="${imageSrcPath}"
        data-src="${imageSrcPath}"
        data-image="${imageSrcPath}"
        data-title="${title}"
        alt="${title}"
    />
    <div class="caption"><span>${caption}</span></div>
  `;
  item.innerHTML = itemContents;
  gallery.append(item);
}

function getGalleryHeader(galleryName) {
  let headerTitle = galleryName.charAt(0).toUpperCase() + galleryName.slice(1);
  let header = document.createElement("h2");
  header.innerText = headerTitle;
  header.classList.add("gallery-header");
  return header;
}
