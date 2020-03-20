document.addEventListener("scroll", onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const sectors = document.querySelectorAll(".for_scroll");
  const links = document.querySelectorAll("#header_navigation a");

  sectors.forEach(el => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      console.log(el.offsetTop + el.offsetHeight);

      links.forEach(a => {
        a.classList.remove("active");
        console.log(el, el.getAttribute("id"));
        if (el.getAttribute("id") === a.getAttribute("href").substring(1)) {
          a.classList.add("active");
        }
      });
    }
  });
}
