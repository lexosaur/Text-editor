const { html2pdf } = require("html2pdf.js");

const boldBtn = document.querySelector('#bold-btn');
const underlineBtn = document.querySelector('#underline-btn');
const italicBtn = document.querySelector('#italic-btn');
const colorBtn = document.querySelector('#color-btn');

const newBtn = document.querySelector('#new-btn');
const textBtn = document.querySelector('#text-btn');
const pdfBtn = document.querySelector('#pdf-btn');

const content = document.querySelector('#content');
const filename = document.querySelector('#filename-input');

boldBtn.addEventListener('click', () =>{
    document.execCommand('bold')
});

underlineBtn.addEventListener('click', () =>{
    document.execCommand('underline')
});

italicBtn.addEventListener('click', () =>{
    document.execCommand('italic')
});

colorBtn.addEventListener('input', () =>{
    document.execCommand('forecolor', false, colorBtn.value)
});

newBtn.addEventListener('input', () =>{
    content.innerHTML = ""
});

textBtn.addEventListener('click', () => {
    const a = document.createElement('a')
    const blob = new Blob([content.innertext])
    const dataUrl = URL.createObjectURL(blob)
    a.href = dataUrl
    a.download = filename.value + ".txt"
    a.click()
});

pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(filename.value)
});