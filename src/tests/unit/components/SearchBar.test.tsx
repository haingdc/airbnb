import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SearchBar, { Props } from "../../../components/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

it("should have ‘where’ field", () => {
  const wrapper = shallow<Props>(<SearchBar />);
  const firstFieldset = wrapper.find("fieldset").at(0);
  expect(firstFieldset.find("h1").text()).toEqual("Where");
  expect(firstFieldset.find("input[type='text']").length).toEqual(1);
});
