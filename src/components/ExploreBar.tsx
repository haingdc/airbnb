import * as React from "react";
import Category from "../interfaces/Category";
import "./ExploreBar.css";

export interface Props {
  categories: Category[];
}

function ExploreBar({ categories }: Props) {
  const items = categories.map((el, id) => {
    var active = "";
    if (id === 0) {
      active = "active-category";
    }
    return (
      <div key={id} className={"category-item " + active}>
        <a href={"/" + el.path}>{el.name}</a>
      </div>
    );
  });

  return <section className="categories">{items}</section>;
}

export default ExploreBar;
