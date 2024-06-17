import { sleep, swapBars } from "../utils.js";
import { updateComparisonCount } from "../sort.js";

export async function mergeSort(bars, sleepTime, stopSorting) {
    await sortMerge(bars, 0, bars.length - 1, sleepTime, stopSorting);
}

async function sortMerge(bars, left, right, sleepTime, stopSorting) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);

        await sortMerge(bars, left, mid, sleepTime, stopSorting);
        await sortMerge(bars, mid + 1, right, sleepTime, stopSorting);
        await merge(bars, left, mid, right, sleepTime, stopSorting);
    }
}

async function merge(bars, left, mid, right, sleepTime, stopSorting) {
    const leftArray = [];
    const rightArray = [];

    for (let i = left; i <= mid; i++) {
        bars[i].barElement.style.transition = 'height 0.3s ease';
        bars[i].barElement.style.backgroundColor = 'yellow';
        leftArray.push(bars[i].height);
    }
    await sleep(100);
    for (let i = mid + 1; i <= right; i++) {
        bars[i].barElement.style.transition = 'height 0.3s ease';
        bars[i].barElement.style.backgroundColor = 'red';
        rightArray.push(bars[i].height);
    }
    await sleep(100);

    let arr = [];

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftArray.length && j < rightArray.length) {
        if (stopSorting()) return;

        updateComparisonCount();

        if (leftArray[i] <= rightArray[j]) {
            arr.push(leftArray[i]);
            i++;
        } else {
            arr.push(rightArray[j]);

            j++;
        }
    }

    while (i < leftArray.length) {
        if (stopSorting()) return;

        arr.push(leftArray[i]);
        i++;
    }

    while (j < rightArray.length) {
        if (stopSorting()) return;
        arr.push(rightArray[j]);
        j++;
    }

    for(let i = left,j=0;i<=right;i++){
        
        bars[i].barElement.style.height = arr[j]+'%';
        bars[i].barElement.style.backgroundColor = 'blue';
        bars[i].height = arr[j];
        await sleep(10);
        j++;
    }
    await sleep(100);
}
