let board = document.querySelector('.gameboard');
let divs = board.querySelectorAll('.divs');
let sw = true;


function displayController()
{

  switch (sw)
  {
    case true:
      sw = false;
      playerOne();
      
      break;
    
    case false:
      sw = true;
      playerTwo();

      break;
  }

}

function playerOne()
{
  divs.forEach(divs => divs.addEventListener ('click', () => 
  {
    divs.textContent = 'X';
    divs.disabled = true;
  }));
}

function playerTwo()
{
  divs.forEach(divs => divs.addEventListener ('click', () => 
  {
    divs.textContent = 'O';
    divs.disabled = true;
  }));
}