document.querySelector('#home button').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('#about').offsetTop,
        behavior: 'smooth'
    });
});
