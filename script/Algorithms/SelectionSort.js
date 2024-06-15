import { sleep,swap } from "../utils.js";


export async function selectionSort(bars,sleepTime){
    let n = bars.length;
    for(let i = 1;i<=n;i++){
        let t = i-1;
        let value = bars[i].height;

        while(t>=0 && bars[t].height>value){
            bars[t].barElement.style.backgroundColor = 'red';
            await sleep(sleepTime);
            bars[t+1].height = bars[t].height;
            bars[t].barElement.style.height = bars[t].height + '%';
            bars[t + 1].barElement.style.height = bars[t + 1].height + '%';
            bars[t].barElement.style.backgroundColor = 'blue';
            t--;
        }
        bars[t+1].height = value;
    }


}