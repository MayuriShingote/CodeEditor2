const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const resultFrame = document.getElementById("result");

function updateResult() {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;

    const combinedCode = `<html><head>${css}</head><body>${html}${js}</body></html>`;
    
    resultFrame.srcdoc = combinedCode;
}

htmlCode.addEventListener("input", updateResult);
cssCode.addEventListener("input", updateResult);
jsCode.addEventListener("input", updateResult);

// Initial update
updateResult();