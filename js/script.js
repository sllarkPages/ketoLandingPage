var popupClose=document.querySelector(".popupCross"),menu=document.querySelector(".hamburgerMenu"),nav=document.querySelector(".header__top__nav");popupClose.onclick=function(){document.querySelector(".topPopup").style.display="none"},menu.onclick=function(){nav.classList.toggle("hideNav")},window.addEventListener("click",function(e){nav.contains(e.target)||e.target===nav||e.target===menu||menu.contains(e.target)||nav.classList.add("hideNav")}),window.onload=function(){window.setTimeout(function(){document.querySelector(".ytFulleHeightVideo").innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/IZXgjR9INsA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'},1500)};