import { sleep, sortCompleted, swapBars } from "../utils.js";
import { updateComparisonCount } from "../sort.js";


export async function mergeSort(bars, sleepTime,stopSorting){
let n = bars.length;

sortMerge(bars,n);

console.log(bars);
}

async function sortMerge(bars,n){
    if(n<=1) return;
    console.log(bars,n);

    let mid =  Math.floor(n/2);

    let left = bars.slice(0,mid);
    let right = bars.slice(mid);


    sortMerge(left,mid);
    sortMerge(right,n-mid);
    let temp = bars.slice();


    merge(temp,left,right);
}

async function merge(bars,left,right){
    let i = 0,j=0,k=0;

    while(i<left.length && j< right.length){
        if(left[i].height < right[j].height){
            bars[k].height = left[i].height;
            i++;
        }else{
            bars[k].height = right[j].height;
            j++;
        }
        k++;
    }

    while(i<left.length){
        bars[k].height = left[i].height;
        i++;
        k++;

    }
    while(j<right.length){
        bars[k].height = right[j].height;
        j++;
        k++;
    }

}
