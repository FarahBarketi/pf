import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getarticles } from "../Redux/action/useraction";
import ArticleCard from "./Article/ArticleCard";
const articlelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getarticles());
  }, []);
  const articles = useSelector((state) => state.articles);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {articles.map((el) => (
        <div key={el._id}>
          <articlecard el={el} />
        </div>
      ))}
    </div>
  );
};

export default articlelist;