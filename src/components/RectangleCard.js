import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

const RectangleCard = ({ image, image2, heading, info, text }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" />
        <img src={image2} alt="" />
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

export default RectangleCard;

const Wrapper = styled.article`
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 4px;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 1rem;
    border-radius: 8px;
  }
  .img-container {
    flex-basis: 50%;
    min-width: 50%;
    height: 20rem;
    border-radius: 6px;
    img:first-of-type {
      display: none;
      border-radius: 12px;
      @media (min-width: 690px) {
        display: block;
      }
    }
    @media (min-width: 690px) {
      img:last-of-type {
        display: none;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  }
  .text {
    flex-basis: 50%;
    h3 {
      text-transform: uppercase;
      font-size: 1rem;
      @media (min-width: 690px) {
        font-size: 1.3rem;
        margin-bottom: 1rem;
      }
    }
    p:first-of-type {
      color: ${colors.textLinks};
      font-size: 0.7rem;
      font-weight: bold;
      @media (min-width: 690px) {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
    }
    p a {
      color: ${colors.bgSec};
      font-size: 0.8rem;
      font-weight: bold;
      @media (min-width: 690px) {
        font-size: 0.9rem;
        margin:  1.2rem 0;
      }
    }
    .date {
      font-size: 0.7rem;
    }
  }
`;
