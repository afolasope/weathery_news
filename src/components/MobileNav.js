import React from 'react';
import styled from 'styled-components';
import {
  briefcase,
  closeNav,
  features,
  home,
  info,
  signup,
} from '../assets';
import { colors } from '../styles/variables';

const MobileNav = ({ openSidebar, setOpenSidebar }) => {
  return (
    <Wrapper>
      <div className={openSidebar ? 'mobile-navbar' : 'close-navbar'}>
        <div className="close-nav">
          <img
            src={closeNav}
            alt="close-nav"
            onClick={() => {
              setOpenSidebar(false);
              console.log(openSidebar);
            }}
          />
        </div>
        <hr />
        <ul>
          <li>
            <span>
              <img src={home} alt="" />
            </span>
            Home
          </li>
          <li>
            <span>
              <img src={features} alt="" />
            </span>
            Features
          </li>
          <li>
            <span>
              <img src={briefcase} alt="" />
            </span>
            For Business
          </li>
          <li>
            <span>
              <img src={info} alt="" />
            </span>
            About Us
          </li>
          <li>
            <span>
              <img src={signup} alt="" />
            </span>
            Sign Up
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-btn {
    display: flex;
    align-items: center;
    @media (min-width: 800px) {
      display: none;
    }
  }
  .close-navbar {
    top: 0;
    right: 0;
    width: 0%;
    position: fixed;
    background-color: #fff;
    height: 100vh;
    padding: 1.5rem;
    transition: all 0.5s;
    transform: translateX(100%);
    .close-nav,
    ul,
    hr {
      display: none;
    }
  }
  .mobile-navbar {
    top: 0;
    right: 0;
    width: 70%;
    position: fixed;
    background-color: #fff;
    height: 100vh;
    /* padding: 1.5rem; */
    transition: all 0.5s;
    box-shadow: -5px 0 1px -5px #333;
    .close-nav,
    ul,
    hr {
      display: block;
    }
    hr {
      color: #d0d0d5;
      margin: 1.5rem 0;
      width: 90%;
      margin: 2rem 0 2rem auto;
    }
    @media (min-width: 800px) {
      display: none;
    }
    .close-nav {
      padding: 2rem 3rem 0 0;
      text-align: right;
    }
    ul {
      margin-left: 2rem;
      li {
        display: flex;
        align-items: center;
        padding: 0.6rem 0.5rem;
        border-radius: 4px;
        margin-bottom: 1.3rem;
        color: #82808f;
        &:hover {
          background-color: #fdead7;
          color: ${colors.bgPry};
        }
        cursor: pointer;
        span {
          margin-right: 0.5rem;
        }
        img {
          width: 1.2rem;
        }
      }
    }
  }
`;

export default MobileNav;
