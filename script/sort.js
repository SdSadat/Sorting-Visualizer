import { sleep, sortCompleted } from "./utils.js";
import { bubbleSort } from "./Algorithms/BubbleSort.js";
import { insertionSort } from "./Algorithms/InsertionSort.js";
import { selectionSort } from "./Algorithms/SelectionSort.js";
import { quickSort } from "./Algorithms/QuickSort.js";
// import { mergeSort } from "./Algorithms/MergeSort.js";
let width = 50;

if (screen.width < 786) {
    width = 40;
}
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

    let speedInput = document.getElementById('animationSpeed');
    let sleepTime;
    speedInput.addEventListener('change', () => {
        sleepTime = getSleepTime(speedInput.value);
        console.log(sleepTime);
    });
    sleepTime = getSleepTime(speedInput.value);

    renderAlgorithmList();

    // Sort Button
    let isSorting = false;
    let sortButton = document.querySelector('.sort-button');
    sortButton.addEventListener('click', async function () {
        if (isSorting) {
            console.log('already sorting');
            return;
        }
        let selectedAlgorithm = document.getElementById('algorithm').value;
        let sortFunction = sortingAlgorithms.get(selectedAlgorithm);
        if (sortFunction) {
            isSorting = true;
            await sortFunction(bars, sleepTime);
            sortCompleted(bars);
            isSorting = false;
        } else {
            console.log('Selected algorithm function not found');
        }
    });

    class Bar {
        constructor(height, barElement, index) {
            this.index = index;
            this.barElement = barElement;
            this.height = height;
            this.isSelected = false;
        }

    }

    let bars = [];


     function renderBars() {
        for (let i = 0; i < width; i++) {
            let divElement = document.createElement('div');
            let height = Math.floor(Math.random() * 100);
            divElement.style.height = height + '%';
            bars.push(new Bar(height, divElement, i));
            containerElement.appendChild(divElement);
        }
    }
    renderBars();

    // Pseudo Code Button

    renderPseduoCode();

    document.getElementById('closeButton').addEventListener('click', () => {
        const pseudoCodeCard = document.getElementById('pseudoCodeCard');
        pseudoCodeCard.style.display = 'none';
    });

})





//Pseudo Code
function renderPseduoCode() {
    let pseudoButton = document.getElementById('pseudoButton');
    pseudoButton.addEventListener('click', () => {
        const pseudoCodeCard = document.getElementById('pseudoCodeCard');
        addPseudoCode();
        pseudoCodeCard.style.display = 'block';
    });
}


function addPseudoCode() {

    const pseudoCodeElement = document.getElementById('pseudoCode');
    let selectedAlgorithm = document.getElementById('algorithm').value;
    document.querySelector('.pseudoCode .top h3').innerHTML = selectedAlgorithm;
    const pseudoCode = `
function insertionSort(array):
for i from 1 to length(array) - 1:
key = array[i]
j = i - 1
while j >= 0 and array[j] > key:
    array[j + 1] = array[j]
    j = j - 1
array[j + 1] = key
    `;

    pseudoCodeElement.innerHTML = pseudoCode;

}