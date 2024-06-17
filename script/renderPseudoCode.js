
//Pseudo Code
const pseudoCodes = {
    'BubbleSort': `
    function bubbleSort(arr):
    n = length(arr)
    for i = 0 to n-1:
        for j = 0 to (n-i-1):
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
`,
    'InsertionSort': `
    function insertionSort(arr):
    n = length(arr)
    for i = 1 to n-1:
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key{
            arr[j + 1] = arr[j]
            j = j - 1 }
        arr[j + 1] = key
`,
    'SelectionSort': `
    selectionSort(arr):
    n = length(arr)
    for i = 0 to n-1:
        minIndex = i
        for j = i+1 to n:
            if arr[j] < arr[minIndex]:
                minIndex = j
        swap(arr[minIndex], arr[i])
`,
    'MergeSort': `
   function mergeSort(arr, left, right){
    if left < right{
        mid = (left + right) / 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right) }
}
   function merge(arr, left, mid, right){
    n1 = mid - left + 1
    n2 = right - mid

    leftArr = new array[n1]
    rightArr = new array[n2]

    for i = 0 to n1-1{ leftArr[i] = arr[left + i] }
    for j = 0 to n2-1{ rightArr[j] = arr[middle + 1 + j] }

    i = 0, j = 0, k = left

    while (i < n1 and j < n2){
        if leftArr[i] <= rightArr[j]{
            arr[k] = leftArr[i]
            i = i + 1 }
        else{
            arr[k] = rightArr[j]
            j = j + 1 }
        k = k + 1
        }
    while i < n1{
        arr[k] = leftArr[i]
        i = i + 1
        k = k + 1 
        }

    while j < n2{
        arr[k] = rightArr[j]
        j = j + 1
        k = k + 1 
        }

}
`,

    'QuickSort': `
function quickSort(arr, low, high):
    if low < high:
        pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)

function partition(arr, low, high):
    pivot = arr[high]
    i = low - 1

    for j = low to high - 1:
        if arr[j] < pivot:
            i = i + 1
            swap(arr[i], arr[j])
    swap(arr[i + 1], arr[high])
    return i + 1
`,
    'HeapSort': `
function heapSort(arr):
    n = length(arr)

    for i = n/2 - 1 to 0:
        heapify(arr, n, i)

    for i = n-1 to 0:
        swap(arr[0], arr[i])
        heapify(arr, i, 0)

function heapify(arr, n, i):
    largest = i
    left = 2*i + 1
    right = 2*i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        swap(arr[i], arr[largest])
        heapify(arr, n, largest)
`,
    'BogoSort': `
function bogoSort(arr):
    while not isSorted(arr):
        shuffle(arr)

function isSorted(arr):
    for i = 0 to length(arr) - 2:
        if arr[i] > arr[i + 1]:
            return false
    return true

function shuffle(arr):
    for i = 0 to length(arr) - 1:
        swap(arr[i], arr[randomIndex(length(arr))])
`
};

export function renderPseduoCode() {
    let pseudoButton = document.getElementById('pseudoButton');
    pseudoButton.addEventListener('click', () => {
        const pseudoCodeCard = document.getElementById('pseudoCodeCard');
        addPseudoCode();
        pseudoCodeCard.style.display = 'block';
    });

    
document.getElementById('closeButton').addEventListener('click', () => {
    const pseudoCodeCard = document.getElementById('pseudoCodeCard');
    pseudoCodeCard.style.display = 'none';
});

}


export function addPseudoCode() {

    const pseudoCodeElement = document.getElementById('pseudoCode');
    let selectedAlgorithm = document.getElementById('algorithm').value;
    document.querySelector('.pseudoCode .top h3').innerHTML = selectedAlgorithm;


    const pseudoCode = pseudoCodes[selectedAlgorithm];

    pseudoCodeElement.innerHTML = pseudoCode;

}