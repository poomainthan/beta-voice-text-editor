const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const previewButton = document.getElementById('preview-button');
const previewContainer = document.getElementById('preview-container');
const textInput = document.getElementById('text-input');
const fontSizeInput = document.getElementById('font-size');
const fontColorInput = document.getElementById('font-color');
const fontFamilyInput = document.getElementById('font-family');
const fontStyleInput = document.getElementById('font-style');
const paragraphStyleInput = document.getElementById('paragraph-style');

startButton.addEventListener('click', () => {
    recognition.start();
    startButton.disabled = true;
    stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    recognition.stop();
    startButton.disabled = false;
    stopButton.disabled = true;
});

recognition.addEventListener('result', (event) => {
    const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
        textInput.value = transcript;
});

previewButton.addEventListener('click', () => {
    const text = textInput.value;
    const fontSize = fontSizeInput.value + 'px';
    const fontColor = fontColorInput.value;
    const fontFamily = fontFamilyInput.value;
    const fontStyle = fontStyleInput.value;
    const paragraphStyle = paragraphStyleInput.value;

    previewContainer.innerHTML = `<p style="font-size: ${fontSize}; color: ${fontColor}; font-family: ${fontFamily}; font-style: ${fontStyle}; text-align: ${paragraphStyle}">${text}</p>`;
});
