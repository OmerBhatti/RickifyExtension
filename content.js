function RickifyImage(){
  document.querySelectorAll("img")
  .forEach(img => {
    img.src = "https://media.tenor.com/images/9e4f2e9bfad66d0372ed99bea0b88fc3/tenor.png";
  })
}

function RickifyVideo(){
  document.querySelectorAll("video")
  .forEach(video => {
    video.parentElement.innerHTML = `<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/e/0w4gz5?autoplay=1" frameborder="0" width="100%" height="100%" allow="autoplay" style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>`;
  })
}

RickifyImage();

setInterval(() => {
  RickifyImage();
}, 500);

RickifyVideo();