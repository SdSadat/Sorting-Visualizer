import { sleep } from "../utils.js";
import { updateComparisonCount } from "../sort.js";
export async function insertionSort(bars, sleepTime,stopSorting) {
    let n = bars.length;

    for (let i = 1; i < n; i++) {
        let j = i;


        bars[j].barElement.style.backgroundColor = 'red';

        await sleep(sleepTime);


        while (j > 0 && bars[j - 1].height > bars[j].height) {
            if(stopSorting()) return;
             updateComparisonCount();
            bars[j].barElement.style.backgroundColor = 'red';
            bars[j - 1].barElement.style.backgroundColor = 'yellow';

            await sleep(sleepTime);

            let tempHeight = bars[j].height;
            bars[j].height = bars[j - 1].height;
            bars[j - 1].height = tempHeight;

            bars[j].barElement.style.height = bars[j].height + '%';
            bars[j - 1].barElement.style.height = bars[j - 1].height + '%';

            bars[j].barElement.style.backgroundColor = 'blue';
            bars[j - 1].barElement.style.backgroundColor = 'blue';

            j--;

            await sleep(sleepTime);
        }
        bars[j].barElement.style.backgroundColor = 'blue';
    }
}
