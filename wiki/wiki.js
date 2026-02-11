/* ========================= */
/* RECHERCHE WIKI */
/* ========================= */

function searchWiki() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const filter = input.value.toLowerCase();

  // Recherche dans le menu
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    const text = link.textContent.toLowerCase();
    link.style.display = text.includes(filter) ? "block" : "none";
  });

  // Recherche dans les cartes si présentes
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
}


/* ========================= */
/* FAQ ACCORDÉON */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {

      const answer = button.nextElementSibling;

      if (!answer) return;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

    });
  });

});
