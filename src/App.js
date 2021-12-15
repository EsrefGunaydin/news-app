import { useQuery } from "react-query";
import axios from "axios";
import NewsCard from "./components/NewsCard";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

export default function App() {
  const { isLoading, isError, data, error } = useQuery("news", () =>
    axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=138092459a554575a92f412630b423bb"
    )
  );

  if (isLoading) return <PulseLoader />;
  if (isError) return <Title>Error!: {error}</Title>;
  return (
    <>
      <NewsCard />
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
