import AddItem from './AddItem';

function TodoItem ( {addItems})
{
    return (
<div className="todo-List">
    {addItems.map((item, index) => ( 
        <AddItem TodoName={item.name} TodoDate={item.date}></AddItem>
))}
    </div>
    );
}
export default TodoItem;