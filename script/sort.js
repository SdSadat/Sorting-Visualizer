import { sleep, sortCompleted } from "./utils.js";
import { clearBars, renderBars } from "./renderBars.js";
import { renderPseduoCode,addPseudoCode } from "./renderPseudoCode.js";
import { renderInfoBox,updateInfoBox } from "./infoBox.js";

// import sorting algorithms
import { bubbleSort } from "./Algorithms/BubbleSort.js";
import { insertionSort } from "./Algorithms/InsertionSort.js";
import { selectionSort } from "./Algorithms/SelectionSort.js";
import { quickSort } from "./Algorithms/QuickSort.js";
import { mergeSort } from "./Algorithms/MergeSort.js";
import { heapSort } from "./Algorithms/HeapSort.js";
import { bogoSort } from "./Algorithms/BogoSort.js";

let width = 50;
let isSorting = false;
let isSorted = false;
let comparisonCount = 0;
let stopSort = false;


if (screen.width < 786) {
    width = 40;
}
let bars = [];
let containerElement = document.querySelector('.container');

let algorithmsList = ['BubbleSort', 'SelectionSort', 'InsertionSort', 'MergeSort', 'QuickSort', 'HeapSort','BogoSort',];


let sortingAlgorithms = new Map([
    ['BubbleSort', bubbleSort],
    ['InsertionSort', insertionSort],
    ['SelectionSort', selectionSort],
    ['QuickSort', quickSort],
    ['MergeSort', mergeSort],
    ['HeapSort', heapSort],
    ['BogoSort', bogoSort],
]);

function initializeBars(){
    bars=[];
    renderBars(bars,containerElement,width);
}

function reset(){
    isSorted = false;
    isSorting = false;
    comparisonCount = 0;
    stopSort = true;
    clearBars(containerElement);
    initializeBars();
    updateInfoBox('', bars.length, comparisonCount);
}

function renderAlgorithmList() {

    let algorithmElement = document.getElementById('algorithm');;
    algorithmElement.addEventListener('change', () => {
        addPseudoCode();
        reset();
    });
    let sortingList = document.getElementById('sorting-list');
    for (let i = 0; i < algorithmsList.length; i++) {
        let option = document.createElement('option');
        option.value = algorithmsList[i];
        option.innerText = algorithmsList[i];
        sortingList.appendChild(option);
    }

}
function getSleepTime(speed) {
    switch (speed) {
        case 'fast':
            return 10;
        case 'medium':
            return 50;
        case 'slow':
            return 500;
        default:
            return 50;
    }
}


document.addEventListener('DOMContentLoaded', () => {

    let widthSlider = document.getElementById('slider');
    widthSlider.addEventListener('change',()=>{
        width = widthSlider.value;
        reset();
        clearBars(containerElement);
        initializeBars();
    })
    // Animation Speed 
    let speedInput = document.getElementById('animationSpeed');
    let sleepTime;
    speedInput.addEventListener('change', () => {
        sleepTime = getSleepTime(speedInput.value);
        console.log(sleepTime);
    });
    sleepTime = getSleepTime(speedInput.value);
    renderAlgorithmList();


    // Sort Button

    let sortButton = document.querySelector('.sort-button');
    sortButton.addEventListener('click', async function () {
        if (isSorting) {
            console.log('already sorting');
            return;
        }
        if(isSorted){
            isSorted = false;
            clearBars(containerElement);
            initializeBars();
        }

        let selectedAlgorithm = document.getElementById('algorithm').value;
        let sortFunction = sortingAlgorithms.get(selectedAlgorithm);

        if (sortFunction) {
            isSorting = true;
            stopSort = false;
            updateInfoBox(selectedAlgorithm, bars.length, comparisonCount);
            await sortFunction(bars, sleepTime, () => stopSort);

            if (!stopSort) {
                sortCompleted(bars);
                isSorted = true;
            }
            isSorting = false;
        } else {
            console.log('Selected algorithm function not found');
        }
    });
    // Reset button
    let resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click',()=>{
        reset();
    })

    // render Bars
    initializeBars();

    // Pseudo Code Button
    renderPseduoCode();

    //info box
    renderInfoBox();
})

export  function updateComparisonCount() {
    comparisonCount++;
    document.getElementById('comparisons').textContent = `Comparisons: ${comparisonCount}`;
}