import React from "react";
import styled from "styled-components";

const PdItemBlock = styled.div`
  display: flex;
  flex: 0 0 80%;
  flex-wrap: wrap;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .thumbnail2 {
    margin-right: 1rem;
    img {
      flex: 0 0 auto;
      width: 100%;
      align-content: stretch;
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
  var { UC_SEQ, CATE2_NM, MAIN_TITLE, MAIN_IMG_NORMAL, ITEMCNTNTS } = article;
  var { rank, title, image, author, publisher, publish_year } = article;
  return (
    <PdItemBlock>
      {CATE2_NM && MAIN_IMG_NORMAL && (
        <div className="thumbnail2">
          <a href={MAIN_IMG_NORMAL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
          </a>
        </div>
      )}
      {!CATE2_NM && MAIN_IMG_NORMAL && (
        <div className="thumbnail">
          <a href={MAIN_IMG_NORMAL} target="_blank" rel="noopener noreferrer">
            <img src={MAIN_IMG_NORMAL} alt="thumbnail" />
          </a>
        </div>
      )}
      {!CATE2_NM && image && (
        <div className="thumbnail">
          <a href={image} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          {UC_SEQ || rank}.{MAIN_TITLE || title}
        </h2>
        <p>{ITEMCNTNTS}</p>
        <p>{author}</p>
        <p>{publisher}</p>
        <p>{publish_year}</p>
      </div>
    </PdItemBlock>
  );
};

export default PdItem;
