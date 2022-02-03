import * as actions from './index'

describe("Test Suit for Actions", () => {
    it("should create an action to add Todo", () => {
        const text = "go shopping";
        const expectedAction = {
            type: "ADD_TODO",
            id: 0,
            text
        }
        expect(actions.addTodo(text)).toEqual(expectedAction)
    })
})