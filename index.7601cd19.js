var t,e,n=document.querySelector(".slider__btn-box"),i=document.querySelectorAll(".slider__btn"),r=document.querySelector(".slider__content"),s=document.querySelectorAll(".slider__item"),l=document.querySelector(".slider");function d(){l.style.display="none",window.innerWidth>=768||(t=window.innerWidth-120,s.forEach(function(e){e.style.width=t+"px"}),l.style.width=window.innerWidth-20+"px",e=+window.getComputedStyle(r).gap.split("px")[0],l.style.display="flex",r.style.transform="translateX(0)",i.forEach(function(t){t.classList.remove("slider__btn--active")}),document.querySelector(".slider__btn").classList.add("slider__btn--active"))}d(),n.addEventListener("click",function(n){var s=n.target.getAttribute("data-num");r.style.transform="translateX(-".concat(s*(t+e),"px)"),i.forEach(function(t){t.classList.remove("slider__btn--active")}),n.target.classList.contains("slider__btn")&&n.target.classList.add("slider__btn--active")}),window.addEventListener("resize",d);
//# sourceMappingURL=index.7601cd19.js.map