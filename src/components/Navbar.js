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
        <li className="active">
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
        <button className='btn'>Get started</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;

  ul {
    display: flex;
  }
  li {
    margin-right: 1.5rem;
    &.active {
      color: orange;
    }
  }
`;
