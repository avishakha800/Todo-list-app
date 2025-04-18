let todo = [];
let req = prompt("Please enter your request");

while (true) {
    if (req === "quit") {
        console.log("Quitting app");
        break;
    }

    if (req === "list") {
        console.log("------------");
        for (let i=0; i<todo.length;i++) {
            console.log(i,todo[i]);
        }
        console.log("------------");
    } else if (req === "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    } else if(req== "delete"){
        let idx= prompt("Enter the task index");
        todo.splice(idx,1);
        console.log("task deleted")

    }else{
        console.log("wrong request");
    }

    req = prompt("Please enter your request");
}
