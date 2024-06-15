import { sleep, swapBars } from "../utils.js";

export async function quickSort(bars, sleepTime) {
    await sortQuick(bars, 0, bars.length - 1, sleepTime);
    console.log(bars);
}

async function sortQuick(bars, low, high, sleepTime) {
    if (low < high) {
        let pivotPos = await partition(bars, low, high, sleepTime);
        await sortQuick(bars, low, pivotPos - 1, sleepTime);
        await sortQuick(bars, pivotPos + 1, high, sleepTime);
    }
}

async function partition(bars, low, high, sleepTime) {
    let pivotElement = bars[high];
    pivotElement.barElement.style.backgroundColor = 'yellow';

    let cursor = low - 1;

    for (let i = low; i < high; i++) {
        if (bars[i].height <= pivotElement.height) {
            cursor++;
            await swapBars(bars, i, cursor, sleepTime);
        }
    }

    cursor++;
    await swapBars(bars, cursor, high, sleepTime);

    pivotElement.barElement.style.backgroundColor = 'blue';

    return cursor;
}


