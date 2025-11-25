const target = new Date("Dec 4, 2025 12:00:00 GMT+1300").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "🎉 It's time!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${mins}m ${secs}s until next winner`;
}, 1000);
