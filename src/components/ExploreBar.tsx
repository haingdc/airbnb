import * as React from "react";
import Category from "../interfaces/Category";

export interface Props {
  categories: Category[];
}

function ExploreBar({ categories }: Props) {
  const items = categories.map((el, id) => {
    return (
      <li key={id}>
        <a href={"/" + el.path}>{el.name}</a>
      </li>
    );
  });

  return (
    <section>
      <ul>{items}</ul>
    </section>
  );
}

export default ExploreBar;
