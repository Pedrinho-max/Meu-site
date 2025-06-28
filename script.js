<script>
  const btn = document.getElementById("slideBtn");

  btn.addEventListener("click", () => {
    btn.classList.add("deslizando");

    // Depois de 300ms (duração da transição), volta ao lugar
    setTimeout(() => {
      btn.classList.remove("deslizando");
    }, 300);
  });
</script>
