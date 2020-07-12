let decreaseButton = document.getElementById('j-minus'),
      increaseButton = document.getElementById('j-plus'),
      counter = document.getElementById('j-counter'),
      counterNumber = Number(counter.textContent);

decreaseButton.addEventListener('click', () => {
    if (counterNumber > 0) counterNumber--;
    counter.textContent = counterNumber;
});

increaseButton.addEventListener('click', () => {
    counter.textContent = counterNumber++;
});
