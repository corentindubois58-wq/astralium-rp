document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONFIG SERVEUR
  =============================== */
  const SERVER_CFX = "6avj7j";


  /* ===============================
     STATUT SERVEUR + JOUEURS
  =============================== */
  async function fetchStatus(){
    try{
      const res = await fetch(
        `https://servers-frontend.fivem.net/api/servers/single/${SERVER_CFX}`
      );
      const data = await res.json();

      document.getElementById("players").textContent =
        data.Data.players.length;

      document.getElementById("server-status").textContent =
        "🟢 Serveur en ligne";

      document.getElementById("status-dot").style.color = "lime";

    }catch(e){
      document.getElementById("server-status").textContent =
        "🔴 Serveur hors ligne";

      document.getElementById("players").textContent = "0";
      document.getElementById("status-dot").style.color = "red";
    }
  }

  fetchStatus();
  setInterval(fetchStatus, 15000);


  /* ===============================
     FOOTER STICKY INTELLIGENT
  =============================== */
  const footer = document.getElementById("sticky-footer");
  let lastScroll = 0;

  if(footer){
    window.addEventListener("scroll", () => {
      const current = window.scrollY;

      if(current > lastScroll && current > 200){
        footer.classList.add("show");
      }else{
        footer.classList.remove("show");
      }

      lastScroll = current;
    });
  }


  /* ===============================
     RÈGLEMENT OBLIGATOIRE
  =============================== */
  window.checkRules = function(e){
    if(localStorage.getItem("rulesAccepted") !== "true"){
      e.preventDefault();
      window.location.href = "reglement.html";
    }else{
      window.open("https://cfx.re/join/6avj7j", "_blank");
    }
  };

});
