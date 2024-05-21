document.addEventListener('DOMContentLoaded', (event) => {
    const textEditor = document.getElementById('textEditor').contentDocument;
    textEditor.designMode = 'On';
});

function formatText(command, value) {
    const textEditor = document.getElementById('textEditor').contentDocument;
    textEditor.execCommand(command, false, value);
}

function changeFontFamily() {
    const fontFamily = document.getElementById('fontFamily').value;
    formatText('fontName', fontFamily);
}

function changeFontSize() {
    const fontSize = document.getElementById('fontSize').value;
    formatText('fontSize', fontSize);
}

function changeTextColor() {
    const textColor = document.getElementById('textColor').value;
    formatText('foreColor', textColor);
}
