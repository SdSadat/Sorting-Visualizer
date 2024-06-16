import { sleep, swapBars } from "../utils.js";
import { updateComparisonCount } from "../sort.js";

export async function bogoSort(bars, sleepTime, stopSorting) {
    while (!isSorted(bars)) {
        if (stopSorting()) return;
        shuffle(bars);
        await sleep(sleepTime);
    }
}

function isSorted(bars) {
    for (let i = 0; i < bars.length - 1; i++) {
        updateComparisonCount();
        if (bars[i].height > bars[i + 1].height) {
            return false;
        }
    }
    
    return true;
}

async function shuffle(bars) {
    for (let i = bars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        
        let tempHeight = bars[i].height;
        bars[i].height = bars[j].height;
        bars[j].height = tempHeight;

        bars[i].barElement.style.height = bars[i].height + '%';
        bars[j].barElement.style.height = bars[j].height + '%';

        await sleep(100);
    }
}

