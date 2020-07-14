const oldPrice = document.getElementById('old-price'),
      newPrice = document.getElementById('new-price'),
      counter = document.getElementById('j-counter');
let counterNumber = Number(counter.textContent),
    oldPriceNumber = Number(oldPrice.textContent),
    newPriceNumber = Number(newPrice.textContent);

counter.addEventListener('counterOnChange', (e) => {
    oldPrice.textContent = oldPriceNumber * e.detail;
    newPrice.textContent = newPriceNumber * e.detail;
});

document.getElementById('j-minus').addEventListener('click', () => {
    if (counterNumber < 2) return;

    counter.textContent = --counterNumber;
    counter.dispatchEvent(new CustomEvent('counterOnChange', {detail: counterNumber}));
});

document.getElementById('j-plus').addEventListener('click', () => {
    counter.textContent = ++counterNumber;
    counter.dispatchEvent(new CustomEvent('counterOnChange', {detail: counterNumber}));
});

// decreaseButton.addEventListener('click', () => {
//     if (counterNumber < 2) return;

//     counter.textContent = --counterNumber;
//     oldPrice.textContent = (oldPriceNumber -= startOldPrice);
//     newPrice.textContent = (newPriceNumber -= startNewPrice);
// });

// increaseButton.addEventListener('click', () => {
//     counter.textContent = ++counterNumber;
//     oldPrice.textContent = (oldPriceNumber += startOldPrice);
//     newPrice.textContent = (newPriceNumber += startNewPrice);
// });

// counter.addEventListener('counterIncrease', (e) => {
//     console.log(e.detail.number)
// });

