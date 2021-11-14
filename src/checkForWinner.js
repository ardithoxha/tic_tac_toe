export function checkForWinner(squares){

    const winner = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
  ];
  
  
  for (let i =0; i<winner.length;i++) {
    const [a,b,c] = winner[i];
    if(squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return false;
  }