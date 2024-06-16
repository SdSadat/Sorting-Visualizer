

export function renderInfoBox(){
    let infoBox = document.querySelector('.info-box');
    let infoContent = document.querySelector('.info-content');
    infoBox.addEventListener('click', () => {
        infoContent.classList.toggle('show');
        infoToggle.textContent = infoContent.classList.contains('show') ? '▲' : '▼';
    });
    
}


export function updateInfoBox(algorithmName, barCount, comparisons) {
    document.getElementById('algorithmName').textContent = `Algorithm: ${algorithmName}`;
    document.getElementById('barCount').textContent = `Number of Bars: ${barCount}`;
    document.getElementById('comparisons').textContent = `Comparisons: ${comparisons}`;
}




