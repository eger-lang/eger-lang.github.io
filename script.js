// File: script.js
console.log("Eger scripts loaded.");

// Optional interactivity: Code copy functionality
document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.querySelector(".copy-button");
    if (copyButton) {
        copyButton.addEventListener("click", () => {
            const codeBlock = document.querySelector("pre code");
            if (codeBlock) {
                navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    const originalText = copyButton.innerHTML;
                    copyButton.innerText = "Copied!";
                    setTimeout(() => {
                        copyButton.innerHTML = originalText;
                    }, 2000);
                });
            }
        });
    }
});
