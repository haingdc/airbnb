import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import App from "../../App";
import SearchBar from "../../components/SearchBar";
import ExploreBar from "../../components/ExploreBar";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

it("should have SearchBar", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchBar).length).toEqual(1);
});

it("passes searchLocation to SearchBar", () => {
  const wrapper = shallow(<App />);
  const searchBar = wrapper.find(SearchBar);
  expect(searchBar.props()).toHaveProperty("handleSearchLocation");
});

it("should have ExploreBar", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ExploreBar).length).toEqual(1);
});
