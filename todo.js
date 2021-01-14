let input = prompt("What wouldyou like to do?");
const todos = ['buy milk', 'clean the room'];
while (input !== 'quit' && input !== 'q') {
   if (input === 'list') {
       console.log('*************')
       for (let i = 0; i < todos.length; i++) {
           console.log(`${i}: ${todos[i]}`);
       }
       console.log('************')
    }  else if (input ==='new') {
        const newTODO = prompt('OK, what is the new todo?');
        todos.push(newTODO);
        console.log(`${newTODO} added to the list!`)
    }
}
console.log("OK QUIT THE APP!")

