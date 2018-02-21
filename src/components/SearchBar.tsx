import * as React from "react";

export interface Props {}

function SearchBar({  }: Props) {
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
      </fieldset>
      <input type="text" />
    </div>
  );
}

export default SearchBar;
