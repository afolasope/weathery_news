import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const RectangleCard = ({ image, heading, info, text }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>{heading}</h3>
        <p>{info}</p>
        <p>{text}</p>
        <p>
          <a href="/">Continue reading</a>
        </p>

        <p>10th November 2022</p>
      </div>
    </Wrapper>
  );
};

export default RectangleCard;

const Wrapper = styled.article`
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 2px;
  gap: 0.5rem;
  display: flex;
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
  }
  .img-container {
    flex-basis: 50%;
    /* height: 15rem; */
    /* height: 10rem;
    width: 100%; */
    margin-bottom: 0.3rem;

    img {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 800px) {
    }
  }
  .text {
    flex-basis: 50%;
    h3 {
      text-transform: uppercase;
    }
    p:first-of-type {
      color: ${colors.textLinks};
      font-size: 0.8rem;
      font-weight: bold;
    }
    p a {
      color: ${colors.bgSec};
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
`;
