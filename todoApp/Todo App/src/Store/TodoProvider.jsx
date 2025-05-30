import  { createContext , useReducer } from "react";

export const MyContext = createContext([]);

const todoReducer =(todos,action) => {

    if(action.type === "ADD_TODO"){
    
        return [...todos,
            {
                id: crypto.randomUUID(),
                name: action.payload.name,
                date: action.payload.date
            }

        ];
    }else if(action.type === "REMOVE_TODO"){
        return todos.filter(todo => todo.id !== action.payload.id);
    }

    return todos;

}
const TodoProvider = ({ children }) => {

const [todos, dispatcher] = useReducer(todoReducer, []);


return (
    <MyContext.Provider value={{ todos , dispatcher}}>
    {children}
    </MyContext.Provider>
);
};

export default TodoProvider;
