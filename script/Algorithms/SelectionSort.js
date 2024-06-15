import { sleep, swap, swapBars } from "../utils.js";

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
        await swapBars(bars, i, minIndex);

    }
    for (let i = 0; i < bars.length; i++) {
        bars[i].barElement.style.backgroundColor = 'green';
        await sleep(3);
    }
}


