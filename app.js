document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONFIG SERVEUR
  =============================== */
  const SERVER_CFX = "6avj7j";
  const DISCORD_INVITE = "https://discord.gg/mZQnxRFAZt";

  // ⚠️ Mets ici le lien du salon whitelist Discord
  // ex : https://discord.com/channels/123456789/987654321
  const DISCORD_WHITELIST_CHANNEL =
    "https://discord.gg/2CzKQpGvAD";


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
    e.preventDefault();

    if(localStorage.getItem("rulesAccepted") !== "true"){
      window.location.href = "reglement.html";
      return;
    }

    window.open(`https://cfx.re/join/${SERVER_CFX}`, "_blank");
  };


  /* ===============================
     WHITELIST DISCORD LIÉE AU SITE
  =============================== */
  window.checkWhitelist = function(e){
    e.preventDefault();

    // 1️⃣ Règlement accepté ?
    if(localStorage.getItem("rulesAccepted") !== "true"){
      window.location.href = "reglement.html";
      return;
    }

    // 2️⃣ Discord rejoint ?
    if(localStorage.getItem("discordJoined") !== "true"){
      window.open(DISCORD_INVITE, "_blank");

      alert(
        "Rejoins le Discord puis reviens sur le site pour continuer la whitelist."
      );

      // On considère qu'il a rejoint (logique site statique)
      localStorage.setItem("discordJoined", "true");
      return;
    }

    // 3️⃣ Accès whitelist Discord
    window.open(DISCORD_WHITELIST_CHANNEL, "_blank");
  };

});
