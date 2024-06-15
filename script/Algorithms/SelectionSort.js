import { sleep,swap } from "../utils.js";

export async function selectionSort(bars,sleepTime) {
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
        bars[i].barElement.style.backgroundColor = 'purple';
        bars[minIndex].barElement.style.backgroundColor = 'green';
        swap(i, minIndex,bars);
        
        await sleep(100);
        bars[i].barElement.style.height = bars[i].height + '%';
        bars[minIndex].barElement.style.height = bars[minIndex].height + '%';
        bars[i].barElement.style.backgroundColor = 'blue';
        bars[minIndex].barElement.style.backgroundColor = 'blue';
    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].barElement.style.backgroundColor = 'green';
        await sleep(3);
    }
}