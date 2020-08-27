import React from "react";
import { useHistory } from "react-router-dom";

import ChipFlow from "../components/ChipFlow";

const Categories = () => {
  const history = useHistory();

  const handleClick = (tags) => {
    history.push(`/posts?filter[tags.name]=${tags}`);
  };

  return <ChipFlow path="tags" onHandleClick={handleClick} />;
};

export default Categories;
