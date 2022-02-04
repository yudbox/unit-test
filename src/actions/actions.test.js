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

    it("should create an action to set Visibility filter", () => {
        const filter = "SHOW_ALL"
        expect(actions.setVisibilityFilter(filter).filter).toEqual("SHOW_ALL")
    })

    it("should create an action to toggle Todo", () => {
        const expectedAction = {
            type: "TOGGLE_TODO",
            id: 0
        }
        expect(actions.toggleTodo(0)).toEqual(expectedAction)
    })
})