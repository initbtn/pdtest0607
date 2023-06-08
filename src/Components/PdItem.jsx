import React from "react";
import styled from "styled-components";

const PdItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const PdItem = ({ article }) => {
  const {
    MAIN_TITLE,
    MAIN_IMG_NORMAL,
    ITEMCNTNTS,
    title,
    image,
    author,
    rank,
    publisher,
    publish_year,
    cnt,
  } = article;
  if (article.rank === undefined) {
    return (
      <PdItemBlock>
        {MAIN_IMG_NORMAL && (
          <div className="thumbnail">
            <a href={MAIN_IMG_NORMAL} target="_blank" rel="noopener noreferrer">
              <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>{MAIN_TITLE}</h2>
          <p>{ITEMCNTNTS}</p>
        </div>
      </PdItemBlock>
    );
  } else {
    return (
      <PdItemBlock>
        {image && (
          <div className="thumbnail">
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>{title}</h2>
          <p>
            순위:{rank} (대출: {cnt}회)
          </p>
          <p>저자: {author}</p>
          <p>출판사: {publisher}</p>
          <p>발행: {publish_year}년</p>
        </div>
      </PdItemBlock>
    );
  }
};

export default PdItem;
