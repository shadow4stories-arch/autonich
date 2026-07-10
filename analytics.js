(function () {
  var ns = "shadow4stories-arch.autonich";
  var page = location.pathname;
  var img = new Image();
  img.src = "https://api.countapi.xyz/hit/" + ns + "/pv";
  var img2 = new Image();
  img2.src = "https://api.countapi.xyz/hit/" + ns + "/page" + btoa(page).replace(/=/g, "");
  var uuid = localStorage.getItem("_auid");
  if (!uuid) {
    uuid = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("_auid", uuid);
  }
  var stored = JSON.parse(localStorage.getItem("_avisits") || "[]");
  stored.push({ p: page, t: Date.now(), r: document.referrer || "" });
  if (stored.length > 200) stored = stored.slice(-200);
  localStorage.setItem("_avisits", JSON.stringify(stored));
})();
