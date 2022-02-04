import { createStore } from "redux";
import { addTodo, toggleTodo } from "../../actions";
import rootReducer  from "../../reducers";

describe("Redux store Integration test", () => {
    let store;
    beforeEach(() => {
        store = createStore(rootReducer)
    })

    it("should add 1 todo", () => {
        store.dispatch(addTodo("buy milk"))
        // console.log('111111111 state', store.getState());
        const todo = store.getState().todos.find(t => t.text === "buy milk")
        expect(todo.text).toEqual("buy milk")
        expect(todo.completed).toEqual(false)
    })

    it("should toggle 1 todo", () => {
        store.dispatch(addTodo("go shopping"))
        store.dispatch(toggleTodo(1))
        console.log('111111111 state', store.getState().todos);
        const todo = store.getState().todos.find(t => t.text === "go shopping")
        expect(todo.text).toEqual("go shopping")
        expect(todo.completed).toEqual(true)
    })
})