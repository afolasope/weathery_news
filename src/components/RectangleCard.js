import React from 'react';
import styled from 'styled-components';
import image from '../assets/image.jpg';

const RectangleCard = () => {
  return (
    <Wrapper>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h3>How and whrn will the sun die, researchers have an answer</h3>
          <p>
            World News <span>|</span> Edited by Nikhil Pandey <span>|</span>{' '}
            Saturday November 12, 2022
          </p>
          <p>
            Scientist have forecasted when and how Sun will end, as well as what
            it would look like
          </p>
          <a href="/">Continue reading</a>
          <p>10th November 2022</p>
        </div>
    </Wrapper>
  );
};

export default RectangleCard;

const Wrapper = styled.article`

`;
