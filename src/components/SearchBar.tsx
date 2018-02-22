import * as React from "react";

export interface Props {}

export interface State {
  where: string;
  when?: Date;
  guests: number;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { where: "", guests: 1 };
  }

  render() {
    console.log(`SearchBar.state`, this.state);
    return (
      <div className="Search-bar">
        <fieldset>
          <h1>Where</h1>
          <input type="text" name="where" placeholder="Anywhere" />
        </fieldset>
        <fieldset>
          <h1>When</h1>
          <input type="text" name="when" placeholder="Anytime" />
        </fieldset>
        <fieldset>
          <h1>Guests</h1>
          <select name="guests">
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
            <option value="5">5 guests</option>
            <option value="6">6 guests</option>
            <option value="7">7 guests</option>
            <option value="8">8 guests</option>
            <option value="9">9 guests</option>
            <option value="10">10 guests</option>
            <option value="11">11 guests</option>
            <option value="12">12 guests</option>
            <option value="13">13 guests</option>
            <option value="14">14 guests</option>
            <option value="15">15 guests</option>
            <option value="16">16 guests</option>
          </select>
        </fieldset>
        <input type="text" />
      </div>
    );
  }
}

export default SearchBar;
