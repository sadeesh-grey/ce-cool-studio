
// javascript for auto play sample video
const videoIframe = document.querySelector('.samples iframe');

videoIframe.addEventListener('mouseenter', () => {
  videoIframe.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

videoIframe.addEventListener('mouseleave', () => {
  videoIframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
});


// Show/hide the popup based on user scrolling
window.addEventListener("scroll", function() {
    var callNowPopup = document.querySelector(".call-now-popup");
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition > 100) {
      callNowPopup.classList.add("active");
    } else {
      callNowPopup.classList.remove("active");
    }
  });
  


