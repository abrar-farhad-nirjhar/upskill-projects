let values = Array(9).fill(0)
let indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let boxes = document.getElementsByTagName('td')
boxes = Array.from(boxes)
let playing=true


function reset(){
    indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    values = Array(9).fill(0)
    boxes.forEach((element)=>{
        element.innerHTML = ""
    })
    playing=true

}
function checkWinner() {

    let winner

    if (values[0] === values[1] && values[0] === values[2] && values[0] !== 0) {
        winner = values[0]
    }
    if (values[1] === values[3] && values[1] === values[6] && values[1]!==0) {

        winner = values[1]
       
    }
    if (values[6] === values[7] && values[6] === values[8] && values[6]!==0) {
        winner = values[6]
      
    }
    if (values[2] === values[5] && values[2] === values[8] && values[2]!==0) {
        winner = values[2]
        
    }
    if (values[0] === values[4] && values[0] === values[8] && values[0]!==0) {
        winner = values[0]
       
    }
    if (values[2] === values[4] && values[2] === values[6] && values[2]!==0) {
        winner = values[2]
       
    }
    if (values[1] === values[4] && values[1]== values[7] && values[1]!==0) {
        winner = values[1]
        
    }
    if (values[3] === values[4] && values[3]=== values[5] && values[3]!==0) {
        winner = values[3]
        
    }

    console.log(winner)

    if(winner=='O'){
        alert('Computer wins!! You lose!!')
        playing=false
        
    }
    else if(winner=='X'){
        alert("You win!!")
        playing=false
    
        
    }
}

boxes.forEach((element) => {



    element.addEventListener('click', (e) => {


        



        if (indexes.indexOf(parseInt(element.id)) != -1 && playing) {
            element.innerHTML = 'X'
            indexes.splice(indexes.indexOf(parseInt(element.id)), 1)
            values[parseInt(element.id)] = 'X'
            checkWinner()
            if(indexes.length==0){
                alert("The match is a draw")
            }
            else if(playing){
            random = indexes[Math.floor(Math.random() * indexes.length)];
            document.getElementById(random).innerHTML = 'O'
            indexes.splice(indexes.indexOf((random)), 1)
            values[random] = 'O'
            checkWinner()
        }
            
            
        }




    })

});

document.getElementById('reset').addEventListener('click', reset)