class Todo{
    constructor()
    {
        this.todoList=[];
    }
    add(task)
    {
        this.todoList.push(task);
    }
    remove(no)
    {
        this.todoList.splice(no,1);
    }
    update(no,task)
    {
        this.todoList[no]=task;
    }
    getAll()
    {
        return this.todoList;
    }
    get(no)
    {
        return this.todoList[no];
    }
    clear()
    {
        // let n=todoList.length;
        // while(n--)
        //     this.todoList.pop();
        // console.log(this.todoList);
        this.todoList=[];
    }
}
let todoList=new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
console.log(todoList.getAll());
todoList.remove(1);
console.log(todoList.getAll());
todoList.update(1, 'Updated Task 2');
console.log(todoList.getAll());
console.log(todoList.get(1));
todoList.clear();
console.log(todoList.getAll());
todoList.add('Task 3');
todoList.add('Task 4');
todoList.add('Task 5');
console.log(todoList.getAll());
todoList.remove(2);
console.log(todoList.getAll());