document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const sectors = document.querySelectorAll(".for_scroll");
  const links = document.querySelectorAll("#header_navigation a");

  sectors.forEach(el => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      //console.log(el.offsetTop + el.offsetHeight);

      links.forEach(a => {
        a.classList.remove("active");
        //console.log(el, el.getAttribute("id"));
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}

const burger = document.querySelector(".burger");
const inputMenu = document.querySelector(
  ".input_menu__header_filling__navigation"
);

console.log(inputMenu);

burger.addEventListener("click", onClick);
window.addEventListener("click", e => {
  if (
    (e.target !== inputMenu || e.target !== burger) &&
    inputMenu.classList.contains("act")
  ) {
    inputMenu.classList.remove("act");
    inputMenu.classList.add("deact");
  }
});

function onClick(event) {
  event.stopPropagation();
  if (inputMenu.classList.contains("deact")) {
    inputMenu.classList.remove("deact");
    inputMenu.classList.add("act");
  } else if (inputMenu.classList.contains("act")) {
    inputMenu.classList.remove("act");
    inputMenu.classList.add("deact");
  }
}
