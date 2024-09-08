const gameBoard  =document.getElementById('gameboard')
const playerDisplay=  document.getElementById("player")
const infoDislay= document.getElementById("info-diplay")
const width = 8;

const startPieces =[
    rook, knight, bishop, queen, king, hishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    '','','','','','','','',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, hishop, knight, rook,
]

function createBoard(){
    startPieces.forEach((startPiece,i)=>{
    const square=document.createElement('div') 
     square.classList.add('square')
     square.innerHtml= startPiece
     square.setAttribute('square-id',i)
    //  square.classList.add('beige')

const row= Math.floor(63-i /8) +1
if(row%2==0){
    square.classList.add(i%2 ===0 ? "beige": "brown")
}
else{
    square.classList.add(i%2 ===0 ? "brown": "beign")

}
gameBoard.append(square)

})
}

createBoard()