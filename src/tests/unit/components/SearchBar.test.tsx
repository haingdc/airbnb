import * as React from "react";
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import SearchBar, { Props, State } from "../../../components/SearchBar";

Enzyme.configure({ adapter: new Adapter() });

const { shallow } = Enzyme;

const props: Props = {
  handleSearchLocation: (where, guests, when?) => undefined,
};

it("should have ‘where’ field", () => {
  const wrapper = shallow<Props>(<SearchBar {...props} />);
  const firstFieldset = wrapper.find("fieldset").at(0);
  expect(firstFieldset.find("h1").text()).toEqual("Where");
  expect(firstFieldset.find("input[type='text']").length).toEqual(1);
});

it("should have ‘when’ field", () => {
  const wrapper = shallow<Props>(<SearchBar {...props} />);
  const secondFieldset = wrapper.find("fieldset").at(1);
  expect(secondFieldset.find("h1").text()).toEqual("When");
  expect(secondFieldset.find("input[type='date']").length).toEqual(1);
});

it("should have ‘guests’ field", () => {
  const wrapper = shallow<Props>(<SearchBar {...props} />);
  const thirdFieldset = wrapper.find("fieldset").at(2);
  expect(thirdFieldset.find("h1").text()).toEqual("Guests");
  expect(thirdFieldset.find("select").length).toEqual(1);
  // have 16 <option> elements 🐘
  expect(thirdFieldset.find("option").length).toEqual(16);
});

it("should have ‘search’ button", () => {
  const wrapper = shallow<Props, State>(<SearchBar {...props} />);
  const fourthFieldset = wrapper.find("fieldset").at(3);
  expect(fourthFieldset.find("input[type='submit']").length).toEqual(1);
});

it("should set initial state", () => {
  const wrapper = shallow<Props, State>(<SearchBar {...props} />);
  expect(wrapper.state().where).toEqual("");
  expect(wrapper.state().guests).toEqual(1);
});

it("should accept ‘where’ input", () => {
  const wrapper = Enzyme.mount<Props, State>(<SearchBar {...props} />);
  const whereInput = wrapper.find("input[name='where']");
  whereInput.simulate("change", { target: { value: "Resin" } });
  expect(wrapper.state("where")).toEqual("Resin");
  expect(
    (whereInput.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value,
  ).toEqual("Resin");
});

it("should accept ‘when’ input", () => {
  const wrapper = Enzyme.mount<Props, State>(<SearchBar {...props} />);
  const whenInput = wrapper.find("input[name='when']");
  whenInput.simulate("change", { target: { value: "2017-06-30" } });
  expect(wrapper.state("when")).toEqual(new Date("2017-06-30"));
  expect(
    (whenInput.instance() as React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >).value,
  ).toEqual("2017-06-30");
});
