const hour = document.querySelector("[data-hour]");
const minute = document.querySelector("[data-mintue]");
const second = document.querySelector("[data-sec]");
setInterval(() => {
  var time = new Date();
  const getSecondRation = time.getSeconds() / 60;
  const getminutesRatio =( getSecondRation + time.getMinutes()) / 60;
  const gethourRatio = (getminutesRatio + time.getHours()) / 12;
  setRotation(hour,gethourRatio);
  setRotation(minute,getminutesRatio);
  setRotation(second,getSecondRation);
}, 1000);

function setRotation(elem, ratio) {
  elem.style.setProperty("--rotate-hand", ratio * 360);
}
