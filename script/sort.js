import { sleep, sortCompleted } from "./utils.js";
import { clearBars, renderBars } from "./renderBars.js";
import { renderPseduoCode,addPseudoCode } from "./renderPseudoCode.js";
import { bubbleSort } from "./Algorithms/BubbleSort.js";
import { insertionSort } from "./Algorithms/InsertionSort.js";
import { selectionSort } from "./Algorithms/SelectionSort.js";
import { quickSort } from "./Algorithms/QuickSort.js";
// import { mergeSort } from "./Algorithms/MergeSort.js";
let width = 50;
let isSorting = false;
let isSorted = false;

if (screen.width < 786) {
    width = 40;
}
let bars = [];
let containerElement = document.querySelector('.container');

let algorithmsList = ['BubbleSort', 'SelectionSort', 'InsertionSort', 'MergeSort', 'QuickSort', 'HeapSort'];


let sortingAlgorithms = new Map([
    ['BubbleSort', bubbleSort],
    ['InsertionSort', insertionSort],
    ['SelectionSort', selectionSort],
    ['QuickSort', quickSort],
    // ['MergeSort', mergeSort],
    // ['HeapSort', heapSort],
]);

function initializeBars(){
    bars=[];
    renderBars(bars,containerElement,width);
}
function renderAlgorithmList() {
    let algorithmElement = document.getElementById('algorithm');;
    algorithmElement.addEventListener('change', () => {
        addPseudoCode();
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
            await sortFunction(bars, sleepTime);
            sortCompleted(bars);
            isSorted = true;
            isSorting = false;
        } else {
            console.log('Selected algorithm function not found');
        }
    });

    // render Bars
    initializeBars();

    // Pseudo Code Button
    renderPseduoCode();


})
