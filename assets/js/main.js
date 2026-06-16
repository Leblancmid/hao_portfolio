const copyBtn = document.getElementById("copyEmail");
const themeBtn = document.getElementById("themeBtn");

const email = "haoayevinaron@gmail.com";

if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy Email";
        }, 1500);
    });
}

if (themeBtn) {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        document.body.classList.replace("theme-dark", "theme-light");
        themeBtn.textContent = "☀";
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("theme-light");
        document.body.classList.toggle("theme-dark");

        const isLight = document.body.classList.contains("theme-light");
        themeBtn.textContent = isLight ? "☀" : "☾";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}
