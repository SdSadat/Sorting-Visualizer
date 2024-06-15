import { sleep,swap } from "./utils.js";
import { bubbleSort } from "./Algorithms/BubbleSort.js";
import { selectionSort } from "./Algorithms/SelectionSort.js";

let width = 100;
let containerElement = document.querySelector('.container');

let algorithmsList = ['BubbleSort', 'SelectionSort', 'InsertionSort', 'MergeSort', 'QuickSort', 'HeapSort'];

let selectedAlgorithm = Map();
function renderAlgorithmList() {
    let sortingList = document.getElementById('sorting-list');
    for(let i=0;i<algorithmsList.length;i++){
        let option = document.createElement('option');
        option.value = algorithmsList[i];
        option.innerText = algorithmsList[i];
        sortingList.appendChild(option);
    }

}
document.addEventListener('DOMContentLoaded', () => {

    let speedInput = document.getElementById('animationSpeed');
    let sleepTime;

    function getSleepTime(speed) {
        switch (speed) {
            case 'fast':
                return 10;
            case 'medium':
                return 50;
            case 'slow':
                return 1000;
            default:
                return 50;
        }
    }

    speedInput.addEventListener('change', () => {
        sleepTime = getSleepTime(speedInput.value);
        console.log(sleepTime);
    });

    sleepTime = getSleepTime(speedInput.value);





    renderAlgorithmList();
    class Bar {
        constructor(height, barElement) {
            this.barElement = barElement;
            this.height = height;
            this.isSelected = false;
        }

    }

    let bars = [];

    // Add algorithm list


    for (let i = 0; i < width; i++) {
        let divElement = document.createElement('div');
        let height = Math.floor(Math.random() * 100);
        divElement.style.height = height + '%';
        bars.push(new Bar(height, divElement));
        containerElement.appendChild(divElement);
    }

    // Sort Button

    let sortButton = document.querySelector('.sort-button');
    sortButton.addEventListener('click', function () {
       bubbleSort(bars,sleepTime);

    });




})