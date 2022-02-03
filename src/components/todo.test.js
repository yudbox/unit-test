import React from "react"
import Todo from "./Todo"
import Enzyme from 'enzyme';
import { configure, shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Todo component Unit test", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: "buy milk"
    }

    let component;

    beforeEach(() => {
        component = shallow(<Todo {...props} />);
    })

    it("should render 1 Todo component", () => {
        // const component = shallow(<Todo {...props} />);
        expect(component).toHaveLength(1)
        expect(component.find("li")).toHaveLength(1)
    })

    it("should render props correctly", () => {
        // const component = shallow(<Todo {...props} />);
        console.log('111111111111111111',component.props());
        expect(component.props().children).toEqual("buy milk")
    })

    it("should set props correctly", () => {
        // const component = shallow(<Todo {...props} />);
        component.setProps({ text: "hello"})
        expect(component.props().children).toEqual("hello")
    })

    it("should call onClick handler when Todo component is clicked", () => {
        // const component = shallow(<Todo {...props} />);
        component.simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1)
    })
})

describe("Todo styling behaivoor", () => {
    const mockFn = jest.fn()
    it("should not have linethrough style Todo is incomplrtrd", () => {
        const component = shallow(<Todo onClick={mockFn} completed={ false } text="go home" />)
        console.log('22222222222222222 component', component.props().style);
        expect(component.props().style).toEqual({textDecoration: "none"})
    })

    it("should have linethrough style Todo is incomplrtrd", () => {
        const component = shallow(<Todo onClick={mockFn} completed={ true } text="go home" />)
        console.log('22222222222222222___2 component', component.props().style);
        expect(component.props().style).toEqual({textDecoration: "line-through"})
    })
})