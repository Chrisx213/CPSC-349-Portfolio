document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function openImages(images) {
    const newTab = window.open('', '_blank');
    newTab.document.write('<html><head><title>Project Images</title><style>body { font-family: Arial, sans-serif; padding: 20px; } .image-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; } .image-grid img { width: 100%; max-width: 500px; height: auto; }</style></head><body>');
    newTab.document.write('<h1>Project Images</h1><div class="image-grid">');
    
    images.forEach(image => {
        newTab.document.write(`<img src="images/${image}" alt="Project Image"/>`);
    });

    newTab.document.write('</div></body></html>');
    newTab.document.close();
    newTab.focus();
}
