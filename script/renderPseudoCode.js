
//Pseudo Code


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