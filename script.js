document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const extraInfo = document.getElementById('extraInfo');
    if (extraInfo.classList.contains('hidden')) {
        extraInfo.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        extraInfo.classList.add('hidden');
        this.textContent = 'Learn More';
    }
});

