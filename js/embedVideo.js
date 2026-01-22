
const modal = document.getElementById("trailerModal");
const frame = document.getElementById("trailerFrame");

document.addEventListener("click", (e) => {
  const playBtn = e.target.closest(".play-trailer");
  const closeBtn = e.target.closest('[data-close="modal"]');

  // Open trailer
  if (playBtn) {
    e.preventDefault(); // stops link navigation if it's an <a>

    const embedUrl = playBtn.dataset.trailer;
    frame.src = embedUrl;

    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");

    // optional: lock background scroll
    document.body.style.overflow = "hidden";
    return;
  }

  // Close trailer
  if (closeBtn) {
    frame.src = "https://imdb-video.media-imdb.com/vi2207777049/1434659607842-pgv4ql-1564199247061.mp4?Expires=1769189310&Signature=qCIK4bgePrjx1NlE7sjBem8YWUBpvVlPC3DVCYtBPxdgMb7nRiL532-olT9el6IKNtimaGGZ-31XUkChZ74aIFIGr3q1HKNO~o8Js5g3J6Z9GIjoBp379YcrTNLkoPP9UkEU4q~hr~kcJ5izelY~zZvAw6aT0fDpQvSARbXng3wdBZsgjpGKY-by-jS5vbzSmHwWgb8hA07OQKKjWFPEtFzk6-n7vE-ZqsexEeVUWPiStgO6UtcqyVExKrSR11jTizKGilbkNYKQWZFh~Y~bNazXOZ5G7HFls09urLZX9va5G6VYccDmaTdgtUo~Pc5Cl5b-0fb5Dd3hhSjZgRuRGw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"; // unloads video so it stops playing
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    frame.src = "";
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
  }
});
