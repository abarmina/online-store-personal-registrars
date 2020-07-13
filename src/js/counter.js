const decreaseButton = document.getElementById('j-minus'),
      increaseButton = document.getElementById('j-plus'),
      oldPrice = document.getElementById('old-price'),
      newPrice = document.getElementById('new-price'),
      counter = document.getElementById('j-counter');
let counterNumber = Number(counter.textContent),
    oldPriceNumber = Number(oldPrice.textContent),
    newPriceNumber = Number(newPrice.textContent);
const startOldPrice = oldPriceNumber,
      startNewPrice = newPriceNumber;

decreaseButton.addEventListener('click', () => {
    if (counterNumber < 2) return;

    counter.textContent = --counterNumber;
    oldPrice.textContent = (oldPriceNumber -= startOldPrice);
    newPrice.textContent = (newPriceNumber -= startNewPrice);
});

increaseButton.addEventListener('click', () => {
    counter.textContent = ++counterNumber;
    oldPrice.textContent = (oldPriceNumber += startOldPrice);
    newPrice.textContent = (newPriceNumber += startNewPrice);
});
