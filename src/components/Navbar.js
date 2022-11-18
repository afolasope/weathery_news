import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="/">Feature</a>
        </li>
        <li>
          <a href="/">For Business</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Career</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">FAQs</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <div>
        <button>Get started</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  display: flex;
  ul {
    display: flex;
  }
`;
