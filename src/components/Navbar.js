import React from 'react';
import styled from 'styled-components';
import {  openNav } from '../assets';
import { colors } from '../styles/variables';

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <Wrapper>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Feature</a>
          </li>
          <li>
            <a href="/">For Business</a>
          </li>
        </ul>
        <div>
          <button className="btn">Signup</button>
        </div>
      </div>
      <div className="nav-btn">
        <img
          src={openNav}
          alt="open nav"
          onClick={() => {
            setOpenSidebar(true);
            console.log(openSidebar);
          }}
        />
      </div>
    </Wrapper>
  );
};

export default Navbar;
const Wrapper = styled.nav`
  flex-basis: 100%;
  display: flex;
  ul {
    display: flex;
  }
  li {
    margin-right: 2rem;
    &.active {
      color: orange;
    }
  }
  .btn {
    background-color: ${colors.bgPry};
    color: #fff;
    font-size: inherit;
    &:hover {
      background-color: ${colors.bgSec};
    }
  }
  .nav-links {
    display: none;
    align-items: flex-end;
    @media (min-width: 860px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  .nav-btn {
    margin:0 0 0 auto;
    @media (min-width: 860px) {
      display: none;
    }
  }
`;
