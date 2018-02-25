import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ExploreBar from "../../../components/ExploreBar";
import { EMPTY_ARRAY } from "../../../constants";
import Category from "../../../interfaces/Category";

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

const oneCategory: Category[] = [{ name: "foo", path: "for_path" }];

it("should render one category", () => {
  const wrapper = shallow(<ExploreBar categories={oneCategory} />);
  expect(wrapper.find("li").length).toEqual(1);
});
