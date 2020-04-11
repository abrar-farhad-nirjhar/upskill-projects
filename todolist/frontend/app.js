


let data;


function getData(){

    data = fetch('http://localhost:8000/todo').then((data)=>{
    return data.json()
    
})
}


function display_data(){
    getData()
    data.then((data)=>{
        
        if(data.length==0){
            document.getElementById('data').innerHTML = "<h3>No data found</h3>"

            
        }
        else{
            let display = ""
            data.forEach(element => {
                let box

                if(element.completed){
                    box = `<td style="text-align:center;"><input type="checkbox" onclick="complete(${element.id}, ${element.completed})" class="form-check-input" id="exampleCheck1" checked></input></td>`
                }
                else{
                    box = `<td style="text-align:center;"><input type="checkbox" onclick="complete(${element.id}, ${element.completed})" class="form-check-input" id="exampleCheck1"></input></td>`
                }
                display+=`

                <tr>

                ${box}
                <td>${element.task}</td>
                <td>${element.completed}</td>
                <td style="text-align:center;">
                    <button class="btn btn-danger" onclick="deleteTodo(${element.id})">Delete</button>
                </td>
                
                
                </tr>
                
                `
            });

            document.getElementById('data').innerHTML = display
        }
    })
}

function complete(id, current){

    // if(current){
    //     current=false
    // }
    fetch('http://localhost:8000/todo/'+id+'/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({
                completed: !current
            })
        
      }).then(()=>{
        display_data()
      })

}

function deleteTodo(id){
    
    fetch('http://localhost:8000/todo/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }).then(()=>{
        display_data()
      })


}



display_data()
let todo
document.getElementById('todoitem').addEventListener('keyup', (e)=>{
    

    todo = e.target.value
})

function postTodo(){
    fetch('http://localhost:8000/todo/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          
        },
        body: JSON.stringify({
            task:todo
        })
      }).then(()=>{
        display_data()
      })


}