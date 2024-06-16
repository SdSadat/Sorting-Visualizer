class Bar {
    constructor(height, barElement, index) {
        this.index = index;
        this.barElement = barElement;
        this.height = height;
        this.isSelected = false;
    }

}

export function renderBars(bars,containerElement,width) {
    for (let i = 0; i < width; i++) {
        let divElement = document.createElement('div');
        let height = Math.floor(Math.random() * 100);
        divElement.style.height = height + '%';
        bars.push(new Bar(height, divElement, i));
        containerElement.appendChild(divElement);
    }
}