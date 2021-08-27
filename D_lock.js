function lock() {
  const youtubeID = document.querySelector('#youtubeVID').value;
  const markupContainer = document.querySelector('.generator__markup-generated');
  const markup = `
  document.addEventListener("DOMContentLoaded",function () {
  let e = window.location.href;
  e.indexOf("${youtubeID.trim()}") + 1 == 0 &&
  setTimeout(function () {
  document.getElementsByTagName("body")[0].innerHTML =
  '<div style="margin:50% auto;width:100%;text-align:center"><h1 style="font-size:50px; color: rgb(255,33,33)">Great! You like my Code!</h1><div style="font-size:30px; color: rgb(255,33,33)"><a href="https://digitaltox.in" style="color: rgb(203,0,0)">Please purchase it</a> if you\`d like to use it further</div> <p style="color: rgb(255,33,33)">or delete my tracking code if you wan\`t to get rid of this message and use it illegally :(</p></div>';
  }, 1e4);
  });
  `;
  markupContainer.textContent = markup;
};