import * as React from "react";
import Category from "../interfaces/Category";

export interface Props {
  categories: Category[];
}

function ExploreBar({ categories }: Props) {
  return <section>ExploreBar</section>;
}

export default ExploreBar;
