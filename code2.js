window.onscroll = function () {
  progress();
};

function progress() {
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollAmount = (window.scrollY / windowHeight) * 100;
  document.getElementById("p-bar").style.transition = "0s";
  document.getElementById("p-bar").style.opacity = ".7";
  document.getElementById("p-bar").style.width = scrollAmount + "%";
  if (scrollAmount > 10) {
    document.getElementById("banner").classList.add("scrollopacity");
  }
  else {
    document.getElementById("banner").classList.remove("scrollopacity");
  }
}


