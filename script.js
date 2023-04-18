const copyBtn = document.querySelector("#copy-btn");
const textArea = document.querySelector("textarea")
const temp = document.querySelectorAll(".temp");
const encryptBtn = document.querySelector("#encrypt-btn");
const decryptBtn = document.querySelector("#decrypt-btn");
const outputPDiv = document.querySelector(".output-p-div")
const output = document.querySelector("#encrypted-text");
let changesApplied = false;

// listeners
encryptBtn.addEventListener("click", () => {
    if (textArea.value.trim() !== "") {
        output.textContent = encrypt(textArea.value);
        textArea.value = "";
        if (!changesApplied) {
            applyChanges();
        }
    }
});

decryptBtn.addEventListener("click", () => {
    if (textArea.value.trim() !== "") {
        output.textContent = decrypt(textArea.value);
        textArea.value = "";
        if (!changesApplied) {
            applyChanges();
        }
    }
});

copyBtn.addEventListener("click", () => {
    if (output.textContent.trim() !== "") {
        navigator.clipboard.writeText(output.textContent)
            .then(() => {
                copyBtn.textContent = "Copiado!";
                setTimeout(() => {
                    copyBtn.textContent = "Copiar";
                }, 2000);
            });
    }
});

// encrypt and decrypt functions
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// ui changes
function hidePElements() {
    temp.forEach(element => {
        element.style.display = "none";
    });
}

function changeMarginInOutputPDiv() {
    outputPDiv.style.margin = "0 0";
}

function showCopyBtn() {
    copyBtn.style.display = "block";
}

function applyChanges() {
    hidePElements();
    showCopyBtn();
    changeMarginInOutputPDiv();
    changesApplied = true;
}