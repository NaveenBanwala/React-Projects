import  { MyContext } from '../Store/TodoProvider';
import AddItem from './AddItem';
import { useContext } from 'react';

function TodoItem ()
{
    const {todos} = useContext(MyContext);

    return (
<div className="todo-List">
    {todos.map((item, index) => ( 
        <AddItem  TodoId={item.id} TodoName={item.name} TodoDate={item.date}></AddItem>
))}
    </div>
    );
}
export default TodoItem;