startGame(8, 8, 15)

function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
  const field = document.querySelector('.field');
  const cellsCount = WIDTH * HEIGHT;

  field.innerHTML = '<button></button>'.repeat(cellsCount);
  const cells = [...field.children];

  const bombs = [...Array(cellsCount).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, BOMBS_COUNT);


    field.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      const index = cells.indexOf(event.target);
      const column = index % WIDTH;
      const row = Math.floor(index / WIDTH);
      event.target.innerHTML = isBomb(row, column) ? '💣' : '✅';
    });

    function isBomb(row, column) {
      const index = row * WIDTH + column;

      return bombs.includes(index);
    }
}