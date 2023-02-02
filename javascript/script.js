async function mapImageList() {
  const memesObject = [
    {
      name: "cat-meme",
      path: "pictures/cat-meme.jpg",
    },
    {
      name: "cat-meme-1",
      path: "pictures/cat-meme-1.jpg",
    },
    {
      name: "cat-meme-2",
      path: "pictures/cat-meme-2.jpg",
    },
    {
      name: "cat-meme-3",
      path: "pictures/cat-meme-3.jpg",
    },
  ];
  return memesObject;
}

async function createGallery(imageList) {
  const memeSelector = document.querySelector("#memes-list");

  imageList.forEach((picture) => {
    let newOption = document.createElement("option");
    newOption.text = picture.name.toUpperCase();
    newOption.value = picture.path;
    memeSelector.appendChild(newOption);
  });
}

async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image");
  displayImage.style.backgroundImage = `url(${photo})`;
}

async function main() {
  const memesImageList = await mapImageList();
  await createGallery(memesImageList);
  await changeMemePicture(memesImageList[1].path);
}

main();
