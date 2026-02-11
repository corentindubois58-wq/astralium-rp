function searchWiki() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let links = document.querySelectorAll(".menu a");

  links.forEach(link => {
    if (link.textContent.toLowerCase().includes(input)) {
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  });
}
