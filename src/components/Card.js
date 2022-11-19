import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const Card = ({ image, heading, info, text }) => {
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
        <p className="date">10th November 2022</p>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.article`
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 2px;
  gap: 0.5rem;
  margin-bottom: 2rem;
  @media (min-width: 600px) {
    flex-basis: 46%;
    padding: 1rem;
    border-radius: 24px;
  }

  .img-container {
    flex-basis: 50%;
    margin-bottom: 0.3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .text {
    flex-basis: 50%;
    h3 {
      text-transform: uppercase;
      font-size: 1rem;
    }
    p:first-of-type {
      color: ${colors.textLinks};
      font-size: 0.7rem;
      font-weight: bold;
    }
    p a {
      color: ${colors.bgSec};
      font-size: 0.8rem;
      font-weight: bold;
    }
    .date {
      font-size: 0.7rem;
    }
  }
`;
