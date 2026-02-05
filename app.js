/* FOOTER STICKY */
let lastScroll = 0;
const footer = document.getElementById("sticky-footer");

window.addEventListener("scroll", ()=>{
  const current = window.scrollY;
  if(current > lastScroll && current > 300){
    footer.classList.add("show");
  }else{
    footer.classList.remove("show");
  }
  lastScroll = current;
});

/* REGLEMENT */
function checkRules(e){
  if(localStorage.getItem("rulesAccepted") !== "true"){
    e.preventDefault();
    window.location.href="reglement.html";
  }else{
    window.open("https://cfx.re/join/6avj7j","_blank");
  }
}

/* AVIS */
const form = document.getElementById("reviewForm");
const reviews = document.getElementById("reviews");

form.addEventListener("submit", e=>{
  e.preventDefault();

  const pseudo = document.getElementById("pseudo").value;
  const msg = document.getElementById("message").value;

  const div = document.createElement("div");
  div.className="review";
  div.innerHTML = `<strong>${pseudo}</strong><p>${msg}</p>`;

  reviews.prepend(div);
  form.reset();
});
