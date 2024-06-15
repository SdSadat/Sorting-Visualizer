

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function swap(i, j, bars) {
    let temp = bars[i].height;
    bars[i].height = bars[j].height;
    bars[j].height = temp;
}

export async function swapBars(bars, i, cursor) {
    bars[i].barElement.style.backgroundColor = 'red';
    bars[cursor].barElement.style.backgroundColor = 'green';
    bars[i].barElement.style.transition = 'height 0.3s ease';
    bars[cursor].barElement.style.transition = 'height 0.3s ease'; // transition while swapping bars
    if (i !== cursor) {
        let tempHeight = bars[i].height;
        bars[i].height = bars[cursor].height;
        bars[cursor].height = tempHeight;

        bars[i].barElement.style.height = bars[i].height + '%';
        bars[cursor].barElement.style.height = bars[cursor].height + '%';

        await sleep(50);
    }

    bars[i].barElement.style.backgroundColor = 'blue';
    bars[cursor].barElement.style.backgroundColor = 'blue';
    bars[i].barElement.style.transition = '';
    bars[cursor].barElement.style.transition = '';
}
