(function() 
{

  let board = document.querySelector('.gameboard');
  let divs = board.querySelectorAll('button');
  let check = document.getElementById('checked');
  let boardArr = [];
  let sw = true;
  let turnCpu = 4;


  divs.forEach(divs => divs.addEventListener ('click', e => 
  {
    check.disabled = true;

    if (check.checked == true)
    {
      e.target.textContent = 'X';
      e.target.disabled = true;

      if(turnCpu > 0)
      {
        cpu();
        turnCpu--;
      }

    }
    else
    {
      e.target.textContent = sw?'X':'O';
      e.target.disabled = true;
      sw = !sw;
    }

    addBoard();

    options();

  }));


  function addBoard()
  {
    boardArr[0] = document.getElementById('btn0').textContent;
    boardArr[1] = document.getElementById('btn1').textContent;
    boardArr[2] = document.getElementById('btn2').textContent;

    boardArr[3] = document.getElementById('btn3').textContent;
    boardArr[4] = document.getElementById('btn4').textContent;
    boardArr[5] = document.getElementById('btn5').textContent;

    boardArr[6] = document.getElementById('btn6').textContent;
    boardArr[7] = document.getElementById('btn7').textContent;
    boardArr[8] = document.getElementById('btn8').textContent;
  }


  function options()
  {
    displayWin(0, 1, 2);
    displayWin(3, 4, 5);
    displayWin(6, 7, 8);

    displayWin(0, 3, 6);
    displayWin(1, 4, 7);
    displayWin(2, 5, 8);

    displayWin(0, 4, 8);
    displayWin(2, 4, 6);

    checkDraw();
  }


  function displayWin(i, j, k)
  {
    if((boardArr[i] || boardArr[j] || boardArr[k]) != "")
    {
      if(boardArr[i] == boardArr[j] && boardArr[j] == boardArr[k])
      {
        let showWin = document.getElementById('showWin');
        let txt = document.getElementById('txt');

        showWin.style.display = 'flex';
        txt.textContent = "The Winner is ( " + boardArr[i] + " )";

        showWinner(i, j, k);
      }
    }
  }

  
  function showWinner(i, j, k)
  {
    document.getElementById('btn' + i).style.background = 'orangered';
    document.getElementById('btn' + j).style.background = 'orangered';
    document.getElementById('btn' + k).style.background = 'orangered';
  }


  /* Reset button */

  let reset1 = document.getElementById('reset1');
  let reset2 = document.getElementById('reset2');

  divs.forEach(divs => reset1.addEventListener ('click', () => 
  {
    divs.textContent = '';
    divs.style.background = 'white';
    divs.disabled = false;

    check.disabled = false;

    turnCpu = 4;

    let showWin = document.getElementById('showWin');
    showWin.style.display = 'none';

  }));

  divs.forEach(divs => reset2.addEventListener ('click', () => 
  {
    divs.textContent = '';
    divs.style.background = 'white';
    divs.disabled = false;

    check.disabled = false;

    turnCpu = 4;

    let showWin = document.getElementById('showWin');
    showWin.style.display = 'none';

  }));


  function checkDraw()
  {
    let draw = loop();

    function loop()
    {
      for(let i = 0; i < boardArr.length; i++)
      {
        if(boardArr[i] == "")
        {
          return false;
        }
      }
      return true;
    }

    if(draw == true)
    {
      let showWin = document.getElementById('showWin');
      let txt = document.getElementById('txt');

      showWin.style.display = 'flex';
      txt.textContent = "D R A W";
    }
  }


  function cpu()
  {
    let rdm = 0;

    do
    {
      rdm = Math.floor(Math.random() * 9);
      console.log(rdm);
    }
    while(document.getElementById('btn' + rdm).textContent !== "")

    document.getElementById('btn' + rdm).textContent = 'O';
    document.getElementById('btn' + rdm).disabled = true;

  }


})();
