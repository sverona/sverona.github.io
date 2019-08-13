  function loadKatex() {
    const tags = document.querySelectorAll("article code");
    Array.from(tags).forEach(
      ((tag) => {
        katex.render(tag.textContent, tag, { throwOnError: false });
      })
    );
  }

  document.getElementById("load-katex").onclick = loadKatex();
