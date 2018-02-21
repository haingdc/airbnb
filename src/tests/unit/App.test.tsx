import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import SearchBar from "../../components/SearchBar";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

it("should have SearchBar", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchBar).length).toEqual(1);
});
