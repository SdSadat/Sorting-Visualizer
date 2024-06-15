import { sleep } from "../utils.js";

export async function mergeSort(bars, sleepTime) {
    await sortMerge(bars, 0, bars.length - 1, sleepTime);
}

async function sortMerge(bars, start, end, sleepTime) {
    if (start >= end) {
        return;
    }

    let mid = Math.floor((start + end) / 2);
    await sortMerge(bars, start, mid, sleepTime);
    await sortMerge(bars, mid + 1, end, sleepTime);
    
    await merge(bars, start, mid, end, sleepTime);
}

async function merge(bars, start, mid, end, sleepTime) {
    let left = bars.slice(start, mid + 1);
    let right = bars.slice(mid + 1, end + 1);

    left.forEach(element => {
        element.barElement.style.backgroundColor = 'yellow';
    });
    right.forEach(element => {
        element.barElement.style.backgroundColor = 'red';
    });

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
        bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered

        if (left[i].height <= right[j].height) {
            bars[k].height = left[i].height;
            bars[k].barElement.style.height = left[i].height + '%';
            i++;
        } else {
            bars[k].height = right[j].height;
            bars[k].barElement.style.height = right[j].height + '%';
            j++;
        }

        await sleep(sleepTime); // Pause for visualization
        bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
        k++;
    }

    while (i < left.length) {
        bars[k].height = left[i].height;
        bars[k].barElement.style.height = left[i].height + '%';
        bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered
        await sleep(sleepTime); // Pause for visualization
        bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
        i++;
        k++;
    }

    while (j < right.length) {
        bars[k].height = right[j].height;
        bars[k].barElement.style.height = right[j].height + '%';
        bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered
        await sleep(sleepTime); // Pause for visualization
        bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
        j++;
        k++;
    }
    left.forEach(element => {
        element.barElement.style.backgroundColor = 'blue';
    });
    right.forEach(element => {
        element.barElement.style.backgroundColor = 'blue';
    });
    
}


// async function merge(left, right){
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while(i < left.length && j < right.length){
//         if(left[i].height < right[j].height){
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
//     while(i < left.length){
//         result.push(left[i]);
//         i++;
//     }
//     while(j < right.length){
//         result.push(right[j]);
//         j++;
//     }
//     console.log('result',result);
//     // result.forEach(element => {bars[element.index].barElement.height = element.height + '%';});
//     return result;

// }



// import { sleep } from "../utils.js";

// export async function mergeSort(bars, sleepTime) {
//     await sortMerge(bars, 0, bars.length - 1, sleepTime);
// }

// async function sortMerge(bars, start, end, sleepTime) {
//     if (start >= end) {
//         return;
//     }

//     let mid = Math.floor((start + end) / 2);
//     await sortMerge(bars, start, mid, sleepTime);
//     await sortMerge(bars, mid + 1, end, sleepTime);
//     await merge(bars, start, mid, end, sleepTime);
// }

// async function merge(bars, start, mid, end, sleepTime) {
//     let left = bars.slice(start, mid + 1);
//     let right = bars.slice(mid + 1, end + 1);

//     let i = 0, j = 0, k = start;

//     while (i < left.length && j < right.length) {
//         bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered

//         if (left[i].height <= right[j].height) {
//             bars[k].height = left[i].height;
//             bars[k].barElement.style.height = left[i].height + '%';
//             i++;
//         } else {
//             bars[k].height = right[j].height;
//             bars[k].barElement.style.height = right[j].height + '%';
//             j++;
//         }

//         await sleep(sleepTime); // Pause for visualization
//         bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
//         k++;
//     }

//     while (i < left.length) {
//         bars[k].height = left[i].height;
//         bars[k].barElement.style.height = left[i].height + '%';
//         bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered
//         await sleep(sleepTime); // Pause for visualization
//         bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
//         i++;
//         k++;
//     }

//     while (j < right.length) {
//         bars[k].height = right[j].height;
//         bars[k].barElement.style.height = right[j].height + '%';
//         bars[k].barElement.style.backgroundColor = 'yellow'; // Highlight the current bar being considered
//         await sleep(sleepTime); // Pause for visualization
//         bars[k].barElement.style.backgroundColor = 'blue'; // Reset color
//         j++;
//         k++;
//     }
// }
