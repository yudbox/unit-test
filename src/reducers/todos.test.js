import todos from "./todos"

describe("Todos Reducer Unit Tests", () => {
    it("should return an empty array when initial state and action is undefined", () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it("should update initial state by adding 1 todo item to the list", () => {
        const addTodoAction = {
            type: "ADD_TODO",
            id: 1,
            text: "go sopping"
        }
        expect(todos([], addTodoAction)).toEqual([{
            id: 1,
            text: "go sopping",
            completed: false
        }])
    })

    it("should update initial state by adding the second todo item", () => {
        const initialState = [{
            id: 1,
            text: "go sopping",
            completed: false
        }]
        const addTodoAction = {
            type: "ADD_TODO",
            id: 2,
            text: "buy goods"
        }
        expect(todos(initialState, addTodoAction)).toEqual([
            {
            id: 1,
            text: "go sopping",
            completed: false
            },
            {
            id: 2,
            text: "buy goods",
            completed: false
            },
        ])
    })

    it("should toggle incomplete todo to complete", () => {
        const initialState = [{
            id: 1,
            text: "go sopping",
            completed: false
        }]
        const toggleTodoAction = {
            type: "TOGGLE_TODO",
            id: 1,
        }
        expect(todos(initialState, toggleTodoAction)).toEqual([
            {
            id: 1,
            text: "go sopping",
            completed: true
            },
        ])
    })
})