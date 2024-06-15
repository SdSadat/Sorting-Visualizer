import { sleep,swap } from "../utils.js";

export async function quickSort(bars,sleepTime){
await sortQuick(bars,sleepTime);
console.log(bars);
}

async function sortQuick(bars,sleepTime){
    if(bars.length<=1){
        return;
    }
    let pivotPos = await partition(bars,sleepTime);
    console.log(pivotPos);
    console.log(bars.length);
    await sortQuick(bars.splice(0,pivotPos),sleepTime);
    await sortQuick(bars.splice(pivotPos),sleepTime);

}

async function partition(bars,sleepTime){

    let pivotElement = bars[bars.length - 1];
    pivotElement.barElement.style.backgroundColor = 'red'

    let cursor = -1;
    for(let i =0;i < bars.length;i++){
        if(bars[i].height < pivotElement.height){
            cursor++;
            bars[i].barElement.style.backgroundColor = 'red';
            bars[cursor].barElement.style.backgroundColor = 'green';
            bars[i].barElement.style.transition = 'height 0.3s ease';
            bars[cursor].barElement.style.transition = 'height 0.3s ease'; // transition while swapping bars
        
            await swapBars(bars, i, cursor);

            bars[i].barElement.style.backgroundColor = 'blue';
            bars[cursor].barElement.style.backgroundColor = 'blue';
            bars[i].barElement.style.transition = '';
            bars[cursor].barElement.style.transition = '';
        }
    }

    cursor++;
    bars[bars.length-1].barElement.style.backgroundColor = 'red';
    bars[cursor].barElement.style.backgroundColor = 'green';
    bars[bars.length-1].barElement.style.transition = 'height 0.3s ease';
    bars[cursor].barElement.style.transition = 'height 0.3s ease'; // transition while swapping bars

    await swapBars(bars, bars.length-1, cursor);
    bars[bars.length-1].barElement.style.backgroundColor = 'blue';
    bars[cursor].barElement.style.backgroundColor = 'blue';
    bars[bars.length-1].barElement.style.transition = '';
    bars[cursor].barElement.style.transition = '';

    return cursor;
}

async function swapBars(bars, i, cursor) {
    if (i !== cursor) {
        let tempHeight = bars[i].height;
        bars[i].height = bars[cursor].height;
        bars[cursor].height = tempHeight;

        bars[i].barElement.style.height = bars[i].height + '%';
        bars[cursor].barElement.style.height = bars[cursor].height + '%';

        await sleep(500); 
    }
}

