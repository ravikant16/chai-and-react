import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo 1",
            completed:false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
});

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
}

export const TodoProvider = TodoContext.Provider;
