import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PdItem from "./PdItem";
import axios from "axios";

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  //  @media screen and (max-width: 768px) {
  //  width: 100%;
  // padding-left: 1rem;
  // padding-right: 1rem;
  //}
`;

const ItemList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "food" ? "food" : `${category}`;
        var response;
        switch (query) {
          case "food":
            response = await axios.get(
              "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=Tuvr3nQOUVQ3mEGjNAit0y1imE7GJ04zyaIaIij8UFgrkmbclNIS3s5umouB7Ik3yB1V0HoXtpjmvufzsEtx9Q%3D%3D&pageNo=1&numOfRows=10&resultType=json"
            );
            console.log(response.data.getFoodKr.item);
            setArticles(response.data.getFoodKr.item);
            break;

          case "walking":
            response = await axios.get(
              "https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=Tuvr3nQOUVQ3mEGjNAit0y1imE7GJ04zyaIaIij8UFgrkmbclNIS3s5umouB7Ik3yB1V0HoXtpjmvufzsEtx9Q%3D%3D&pageNo=1&numOfRows=10&resultType=json"
            );
            console.log(response.data.getWalkingKr.item);
            setArticles(response.data.getWalkingKr.item);
            break;

          case "book":
            response = await axios.get(
              "https://apis.data.go.kr/6260000/BookLoanBestService/getBookLoanBest?serviceKey=Tuvr3nQOUVQ3mEGjNAit0y1imE7GJ04zyaIaIij8UFgrkmbclNIS3s5umouB7Ik3yB1V0HoXtpjmvufzsEtx9Q%3D%3D&numOfRows=10&pageNo=5&resultType=json"
            );
            console.log(response.data.getBookLoanBest.body.items.item);
            setArticles(response.data.getBookLoanBest.body.items.item);
            break;

          default:
            alert("카테고리를 선택해주세요!");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return <ItemListBlock>대기중.....</ItemListBlock>;
  }

  if (!articles) {
    console.log("articles 응답이 없습니다.");
    return null;
  }
  return (
    <ItemListBlock>
      {articles.map((article, index) => (
        <PdItem key={index} article={article} />
      ))}
    </ItemListBlock>
  );
};
export default ItemList;
