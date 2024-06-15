import { sleep, swap, swapBars } from "../utils.js";

export async function quickSort(bars, sleepTime) {
    await sortQuick(bars, sleepTime);
    console.log(bars);
}

async function sortQuick(bars, sleepTime) {
    if (bars.length <= 1) {
        return;
    }

    let pivotPos = await partition(bars, sleepTime);

    console.log('pivotpos',pivotPos);
    console.log('bars lenght',bars.length);
    await sortQuick(bars.toSpliced(0, pivotPos), sleepTime);
    await sortQuick(bars.toSpliced(pivotPos), sleepTime);

}

async function partition(bars, sleepTime) {

    let pivotElement = bars[bars.length - 1];

    pivotElement.barElement.style.backgroundColor = 'yellow';

    let cursor = -1;

    for (let i = 0; i < bars.length; i++) {
        if (bars[i].height <= pivotElement.height) {
            cursor++;
            await swapBars(bars, i, cursor);
        }
    }

    cursor++;

    await swapBars(bars, bars.length - 1, cursor);

    return cursor;
}



