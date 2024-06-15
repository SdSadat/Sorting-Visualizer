

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function swap(i, j,bars) {
    let temp = bars[i].height;
    bars[i].height = bars[j].height;
    bars[j].height = temp;
  }