const SERVER_CFX = "6avj7j";

async function fetchStatus(){
  try{
    const res = await fetch(`https://servers-frontend.fivem.net/api/servers/single/${SERVER_CFX}`);
    const data = await res.json();

    document.getElementById("players").textContent =
      data.Data.players.length;

    document.getElementById("server-status").textContent =
      "🟢 Serveur en ligne";

    document.getElementById("status-dot").style.color = "lime";

  }catch{
    document.getElementById("server-status").textContent =
      "🔴 Serveur hors ligne";
    document.getElementById("players").textContent = "0";
    document.getElementById("status-dot").style.color = "red";
  }
}

fetchStatus();
setInterval(fetchStatus,15000);

function checkRules(e){
  if(localStorage.getItem("rulesAccepted") !== "true"){
    e.preventDefault();
    window.location.href = "reglement.html";
  }else{
    window.open("https://cfx.re/join/6avj7j","_blank");
  }
}
