import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.jpg';
import { colors } from '../styles/variables';

const Card = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>
          Pakistan vs England, T20 World Cup Final: Will Rain Force Summit Clash
          To Go Into Reserve Day?
        </h3>
        <p>NDTV Sports Desk | Sunday November 13, 2022</p>
        <p>
          One question on everyone's minds ahead of the summit clash is about
          the weather and will it hold for a a full 40-overs game.
        </p>

        <p>
          <a href="/">Continue reading</a>
        </p>

        <p>10th November 2022</p>
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
  margin-bottom: 1.5rem;
  @media (min-width: 600px) {
    flex-basis: 46%;
    padding: 2rem;
  }

  .img-container {
    flex-basis: 50%;
    height: 15rem;

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