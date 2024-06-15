import { sleep, swap } from "../utils.js";

export async function selectionSort(bars, sleepTime) {
    for (let i = 0; i < bars.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].barElement.style.backgroundColor = 'red';
            bars[minIndex].barElement.style.backgroundColor = 'green';
            await sleep(sleepTime);
            if (bars[j].height < bars[minIndex].height) {
                bars[minIndex].barElement.style.backgroundColor = 'blue';
                minIndex = j;
            }
            bars[j].barElement.style.backgroundColor = 'blue';
            bars[minIndex].barElement.style.backgroundColor = 'blue';
        }
        bars[i].barElement.style.backgroundColor = 'red';
        bars[minIndex].barElement.style.backgroundColor = 'green';
        bars[i].barElement.style.transition = 'height 0.3s ease';
        bars[minIndex].barElement.style.transition = 'height 0.3s ease'; // transition while swapping bars

        await swapBars(bars, i, minIndex);
        bars[i].barElement.style.backgroundColor = 'blue';
        bars[minIndex].barElement.style.backgroundColor = 'blue';
        bars[i].barElement.style.transition = '';
        bars[minIndex].barElement.style.transition = '';
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].barElement.style.backgroundColor = 'green';
        await sleep(3);
    }
}

async function swapBars(bars, i, minIndex) {
    if (i !== minIndex) {
        let tempHeight = bars[i].height;
        bars[i].height = bars[minIndex].height;
        bars[minIndex].height = tempHeight;

        bars[i].barElement.style.height = bars[i].height + '%';
        bars[minIndex].barElement.style.height = bars[minIndex].height + '%';

        await sleep(300); 
    }
}
