import { sleep,swap } from "../utils.js";
import { updateComparisonCount } from "../sort.js";
export async function bubbleSort(bars,sleepTime,stopSorting) {
    
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            if (stopSorting()) return;
            updateComparisonCount();

            bars[j].barElement.style.backgroundColor = 'red';
            bars[j + 1].barElement.style.backgroundColor = 'yellow';

            await sleep(sleepTime); 

            if (bars[j].height > bars[j + 1].height) {
                swap(j, j + 1,bars);
                bars[j].barElement.style.height = bars[j].height + '%';
                bars[j + 1].barElement.style.height = bars[j + 1].height + '%';
            }

            bars[j].barElement.style.backgroundColor = 'blue';
            bars[j+1].barElement.style.backgroundColor = 'blue';
        }
    }
}