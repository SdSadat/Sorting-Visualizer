import { sleep, sortCompleted, swapBars } from "../utils.js";
import { updateComparisonCount } from "../sort.js";

export async function heapSort(bars,sleepTime, stopSorting){
let N = bars.length;
await sortHeap(bars,N,sleepTime);

console.log(bars);
}


async function heapify(bars, N, i, sleepTime) {
    let largest = i;

    while (true) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < N && bars[left] && bars[left].height > bars[largest].height) {
            largest = left;
        }

        if (right < N && bars[right] && bars[right].height > bars[largest].height) {
            largest = right;
        }

        if (largest === i) {
            break;
        }

        await swapBars(bars, i, largest, sleepTime);

        i = largest; 
    }
}
async function buildHeap(bars, N,sleepTime)
{
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
    {
        await heapify(bars, N, i,sleepTime);
    }
}

async function sortHeap(bars,N,sleepTime)
{
    await buildHeap(bars, N,sleepTime);

    for (let i = N-1; i > 0; i--)
    {
        await swapBars(bars,0,i,sleepTime);
        await heapify(bars, i,0,sleepTime);
    }
}