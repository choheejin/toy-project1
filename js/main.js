function clickButton() {
    const color = document.getElementById('color').value.toString();
    const sliceColor = color.slice(1);
    const title = document.getElementById('text').value;
    location.href = `/toyproject1/preview.html?title=${title}&color=${sliceColor}`;
}