import { sleep, sortCompleted, swapBars } from "../utils.js";
import { updateComparisonCount } from "../sort.js";

export async function quickSort(bars, sleepTime,stopSorting) {
    await sortQuick(bars, 0, bars.length - 1, sleepTime,stopSorting);
}

async function sortQuick(bars, low, high, sleepTime,stopSorting) {
    if (low < high) {
        let pivotPos = await partition(bars, low, high, sleepTime,stopSorting);
        await sortQuick(bars, low, pivotPos - 1, sleepTime,stopSorting);
        await sortQuick(bars, pivotPos + 1, high, sleepTime,stopSorting);
    }
}

async function partition(bars, low, high, sleepTime,stopSorting) {
    let pivotElement = bars[high];
    pivotElement.barElement.style.backgroundColor = 'yellow';
    let cursor = low - 1;

    for (let i = low; i < high; i++) {
        if (stopSorting()) return;
        updateComparisonCount();
        if (bars[i].height <= pivotElement.height) {
            cursor++;
            await swapBars(bars, i, cursor, 100);
        }
    }

    cursor++;
    await swapBars(bars, cursor, high, sleepTime);
    pivotElement.barElement.style.backgroundColor = 'blue';

    return cursor;
}