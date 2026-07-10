(function () {
  var uuid = localStorage.getItem("_auid");
  if (!uuid) {
    uuid = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("_auid", uuid);
  }
  var page = location.pathname;
  var ref = document.referrer || "";
  var api = "http://127.0.0.1:9090";
  var img = new Image();
  img.src = api + "/count?p=" + encodeURIComponent(page) + "&v=" + encodeURIComponent(uuid) + "&r=" + encodeURIComponent(ref);
  var stored = JSON.parse(localStorage.getItem("_avisits") || "[]");
  stored.push({ p: page, t: Date.now(), r: ref });
  if (stored.length > 200) stored = stored.slice(-200);
  localStorage.setItem("_avisits", JSON.stringify(stored));
})();
