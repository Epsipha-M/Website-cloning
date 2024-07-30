function updateOutput() {
  let htmlCode = document.getElementById("Html-code");
  let cssCode = document.getElementById("Css-code");
  let jsCode = document.getElementById("Java script");

  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
}
