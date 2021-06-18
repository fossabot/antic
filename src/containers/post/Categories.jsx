import { useQuery } from "@apollo/client";
import Skeleton from "@material-ui/lab/Skeleton";
import * as React from "react";
import { useEffect, useState } from "react";

import ChipFlow from "../../components/ChipFlow";
import { CATEGORIES } from "../../graphql/post";

const Categories = (props) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(undefined);

  const { data } = useQuery(CATEGORIES);

  useEffect(() => {
    if (data) {
      setItems(_.orderBy(data.categories, ["count"], ["desc"]));
    }
  }, [data]);

  return items.length ? (
    <ChipFlow
      items={items}
      currentSelect={category}
      onHandleClick={(category) => {
        setCategory(category);
        props.changeCategory(parseInt(category));
      }}
    />
  ) : (
    <Skeleton variant="rect" height="24rem" />
  );
};

export default Categories;
