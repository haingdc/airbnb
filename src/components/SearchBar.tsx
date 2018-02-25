import * as React from "react";
import "./SearchBar.css";
import { SearchLocationFunc } from "../App";
import * as DateFNS from "date-fns";
import * as Constants from "../constants";

export interface Props {
  handleSearchLocation: SearchLocationFunc;
}

export interface State {
  where: string;
  when?: Date;
  guests: number;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { where: "", guests: 1 };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.setText = this.setText.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setGuests = this.setGuests.bind(this);
  }

  render() {
    const { where, when, guests } = this.state;
    return (
      <div className="Search-bar">
        <fieldset>
          <h1>Where</h1>
          <input
            type="text"
            name="where"
            placeholder="Anywhere"
            onChange={this.setText}
            value={where}
          />
        </fieldset>
        <fieldset>
          <h1>When</h1>
          {when ? (
            <input
              type="date"
              name="when"
              placeholder="Anytime"
              onChange={this.setDate}
              value={DateFNS.format(when, "YYYY-MM-DD")}
            />
          ) : (
            <input
              type="date"
              name="when"
              placeholder="Anytime"
              onChange={this.setDate}
              value={Constants.EMPTY_STRING}
            />
          )}
        </fieldset>
        <fieldset>
          <h1>Guests</h1>
          <select name="guests" onChange={this.setGuests} value={guests}>
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
        <fieldset>
          <input type="submit" value="Search" onClick={this.handleOnClick} />
        </fieldset>
      </div>
    );
  }

  private handleOnClick(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    const { where, when, guests } = this.state;
    this.props.handleSearchLocation(where, guests, when);
  }

  private setText(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ where: evt.target.value });
  }

  private setDate(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ when: new Date(evt.target.value) });
  }

  private setGuests(evt: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ guests: Number(evt.target.value) });
  }
}

export default SearchBar;
