import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.jpg';
import { colors } from '../styles/variables';

const RectangleCard = () => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <h3>How and when will the sun die, researchers have an answer</h3>
        <p>
          World News <span>|</span> Edited by Nikhil Pandey <span>|</span>{' '}
          Saturday November 12, 2022
        </p>
        <p>
          Scientist have forecasted when and how Sun will end, as well as what
          it would look like
        </p>
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
    
    /* max-height: 20rem; */
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
