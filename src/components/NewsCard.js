import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import placeholder from "../images/placeholder-news.jpg";
import moment from "moment";

const NewsCard = () => {
  const news = useQuery("news");
  const { articles } = news?.data?.data;
  return (
    <div>
      <Title>Latest News Updates</Title>
      <hr />
      {articles.map((article) => (
        <Card>
          <img style={{ width: "90%" }} src={article.urlToImage || placeholder} alt="" />
          <p>
            <a href={article.url}>
              <strong>{article.title}</strong>
            </a>
          </p>
          <p>{article.description}</p>
          <p>
            by {article.author} | {moment(article.publishedAt).startOf("ss:").fromNow()}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default NewsCard;

const Card = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 10px;
  text-align: center;
  font-family: arial;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
