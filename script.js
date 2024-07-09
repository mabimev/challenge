const shift = 3; 
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        // Mayúsculas
        if (char >= 65 && char <= 90) {
            char = ((char - 65 + shift) % 26) + 65;
        }
        // Minúsculas
        else if (char >= 97 && char <= 122) {
            char = ((char - 97 + shift) % 26) + 97;
        }

        encryptedText += String.fromCharCode(char);
    }

    showOutput(encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);

        // Mayúsculas
        if (char >= 65 && char <= 90) {
            char = ((char - 65 - shift + 26) % 26) + 65;
        }
        // Minúsculas
        else if (char >= 97 && char <= 122) {
            char = ((char - 97 - shift + 26) % 26) + 97;
        }

        decryptedText += String.fromCharCode(char);
    }

    showOutput(decryptedText);
}

function showOutput(text) {
    const placeholderImage = document.getElementById('placeholderImage');
    const placeholderMessage = document.getElementById('placeholderMessage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    placeholderImage.style.display = 'none';
    placeholderMessage.style.display = 'none';
    outputText.style.display = 'block';
    copyButton.style.display = 'block';
    outputText.value = text;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}


document.addEventListener('DOMContentLoaded', () => {
    const placeholderImage = document.getElementById('placeholderImage');
    const placeholderMessage = document.getElementById('placeholderMessage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    placeholderImage.style.display = 'block';
    placeholderMessage.style.display = 'block';
    outputText.style.display = 'none';
    copyButton.style.display = 'none';
});
