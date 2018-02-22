import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SearchBar, { Props, State } from "../../../components/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

it("should have ‘where’ field", () => {
  const wrapper = shallow<Props>(<SearchBar />);
  const firstFieldset = wrapper.find("fieldset").at(0);
  expect(firstFieldset.find("h1").text()).toEqual("Where");
  expect(firstFieldset.find("input[type='text']").length).toEqual(1);
});

it("should have ‘when’ field", () => {
  const wrapper = shallow<Props>(<SearchBar />);
  const secondFieldset = wrapper.find("fieldset").at(1);
  expect(secondFieldset.find("h1").text()).toEqual("When");
  expect(secondFieldset.find("input[type='text']").length).toEqual(1);
});

it("should have ‘guests’ field", () => {
  const wrapper = shallow<Props>(<SearchBar />);
  const thirdFieldset = wrapper.find("fieldset").at(2);
  expect(thirdFieldset.find("h1").text()).toEqual("Guests");
  expect(thirdFieldset.find("select").length).toEqual(1);
  // have 16 <option> elements 🐘
  expect(thirdFieldset.find("option").length).toEqual(16);
});

it("should set initial state", () => {
  const wrapper = shallow<Props, State>(<SearchBar />);
  expect(wrapper.state().where).toEqual("");
  expect(wrapper.state().guests).toEqual(1);
});
