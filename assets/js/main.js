const copyBtn = document.getElementById("copyEmail");
const themeBtn = document.getElementById("themeBtn");

const email = "haoayevinaron@gmail.com";

copyBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(email);

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
        copyBtn.textContent = "Copy Email";
    }, 1500);
});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");

    const isLight =
        document.body.classList.contains("theme-light");

    themeBtn.textContent = isLight ? "☀" : "☾";
});
