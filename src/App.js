import styled from 'styled-components';
import Card from './components/Card';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import RectangleCard from './components/RectangleCard';
import { colors } from './styles/variables';
import { CiSearch } from 'react-icons/ci';
import {
  appstore,
  footerIcons,
  logo,
  logoFooter,
  news1,
  news2,
  news3,
  news4,
  news5,
  news6,
  playstore,
  profile,
} from './assets';
import { useState } from 'react';

const articles = [
  {
    image: news2,
    heading:
      'Pakistan vs England, T20 World Cup Final: Will Rain Force Summit Clash To Go Into Reserve Day?',
    info: 'NDTV Sports Desk | Sunday November 13, 2022',
    text: `One question on everyone's minds ahead of the summit clash is about the weather and will it hold for a a full 40-overs game.`,
  },
  {
    image: news4,
    heading:
      'Pakistan vs England, T20 World Cup Final: Will Rain Force Summit Clash To Go Into Reserve Day?',
    info: 'NDTV Sports Desk | Sunday November 13, 2022',
    text: `One question on everyone's minds ahead of the summit clash is about the weather and will it hold for a a full 40-overs game.`,
  },
  {
    image: news1,
    heading:
      'Pakistan vs England, T20 World Cup Final: Will Rain Force Summit Clash To Go Into Reserve Day?',
    info: 'NDTV Sports Desk | Sunday November 13, 2022',
    text: `One question on everyone's minds ahead of the summit clash is about the weather and will it hold for a a full 40-overs game.`,
  },
  {
    image: news5,
    heading:
      'Pakistan vs England, T20 World Cup Final: Will Rain Force Summit Clash To Go Into Reserve Day?',
    info: 'NDTV Sports Desk | Sunday November 13, 2022',
    text: `One question on everyone's minds ahead of the summit clash is about the weather and will it hold for a a full 40-overs game.`,
  },
];

const rectangle1 = {
  image: news3,
  heading: 'How And When Will The Sun Die? Researchers Have An Answer',
  info: 'World News | Edited by Nikhil Pandey | Saturday November 12, 2022',
  text: 'Scientists have forecasted when and how Sun will end, as well as what it would look like.',
};
const rectangle2 = {
  image: news6,
  heading: 'NCAA warns pilots, airlines over adverse weather',
  info: 'Nigerian Aviation | By Wole Oyebade, 18 June 2021 | 3:06 am',
  text: `The Nigerian Civil Aviation Authority (NCAA) has warned pilots to be wary of severe thunderstorms and other hazardous weather changes during the rainy season.`,
};

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  console.log(openSidebar);
  return (
    <Wrapper>
      <header>
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        {openSidebar && (
          <MobileNav
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
        )}
      </header>
      <main>
        <div className="hero">
          <h1>The Weather Inside Of 24 Hours and Beyond</h1>
          <h1 className="desktop-h1">
            The Weather Inside Of 24 <br /> Hours and Beyond
          </h1>
          <div className="input-control">
            <span>
              <CiSearch />
            </span>
            <input type="text" placeholder="Choose a location" />
            <button className="btn">Search</button>
          </div>
        </div>
        <ul className="temp-list">
          <li>Rainy</li>
          <li>Sunny </li>
          <li>Cloudy</li>
          <li>Windy</li>
          <li>Thunderstorms</li>
          <li>Heat</li>
        </ul>
        <div>
          <div className="rectangle">
            <RectangleCard
              heading={rectangle1.heading}
              image={rectangle1.image}
              info={rectangle1.info}
              text={rectangle1.text}
            />
          </div>
          <div className="cards">
            {articles.map((item, index) => {
              return <Card {...item} key={index} />;
            })}
          </div>
        </div>
        <div className="rectangle">
          <RectangleCard
            heading={rectangle2.heading}
            image={rectangle2.image}
            info={rectangle2.info}
            text={rectangle2.text}
          />
        </div>
      </main>
      <div className="pre-footer"></div>
      <footer>
        <div className="top-footer">
          <div>
            <div>
              <img src={logoFooter} alt="" />
            </div>
            <nav>
              <ul>
                <li className="active">
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Weather News</a>
                </li>
                <li>
                  <a href="/">For Business</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
                <li>
                  <a href="/">Contact US </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="download">Download the mobile app</p>
            <div className="appstore">
              <img src={appstore} alt="app" />
              <img src={playstore} alt="app" />
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="web">
            <img src={footerIcons} alt="icon" className="mobile" />
            <img src={profile} alt="icon" className="desktop" />
          </div>
          <p className="copyright">
            © 2022 Weathery, All rights reserved to Team Gear
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  header,
  main {
    padding: 0.5rem;
    @media (min-width: 400px) {
      padding: 0 1.5rem;
    }
    @media (min-width: 600px) {
      padding: 0 2rem;
    }
    @media (min-width: 1200px) {
      padding: 0 6rem;
    }
  }

  header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 3rem;
    .logo-container {
      flex-basis: 10%;
    }
  }

  .hero {
    padding: 2rem 0;
    h1 {
      padding: 2rem 0;
      text-align: center;
      font-weight: 900;
      @media (min-width: 600px) {
        display: none;
        font-weight: bolder;
        font-size: 3rem;
      }
      @media (min-width: 900px) {
        font-size: 3.5rem;
      }
    }
    .desktop-h1 {
      display: none;
      @media (min-width: 600px) {
        padding: 2rem 0;
        display: block;
        font-weight: bolder;
        font-size: 2.7rem;
      }
      @media (min-width: 600px) {
        font-size: 3.3rem;
      }
    }
    .input-control {
      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 5px 2px -5px ${colors.bgPry},
        -5px 0 5px -8px ${colors.bgPry}, 3px 0 5px -5px ${colors.bgPry};
      @media (min-width: 800px) {
        margin-bottom: 2rem;
      }
      input {
        padding: 0.5rem 0.5rem;
        flex-basis: 90%;
        border-radius: 6px;
        border: none;
        transition: all 0.3s ease-in;
        &:focus {
          outline: none;
        }
        @media (min-width: 600px) {
          padding: 0.6rem 1rem;
        }
      }
      .btn {
        padding: 0.6rem 0.4rem;
        background: ${colors.bgSec};
        color: #fff;
        @media (min-width: 600px) {
          padding: 0.6rem 1rem;
        }
      }
    }
  }
  .temp-list {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    background-color: ${colors.bgSec};
    padding: 2rem 0.5rem;
    color: #fff;
    gap: 1rem;
    border-radius: 8px;
    margin-bottom: 3rem;
    @media (min-width: 600px) {
    }
    li {
      cursor: pointer;
    }
  }
  .rectangle {
    margin: 2rem 0;
  }

  .cards {
    margin-top: 4rem;
    @media (min-width: 690px) {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
    }
  }
  .pre-footer {
    margin-top: 6rem;
    height: 4rem;
    background-color: #fdead7;
  }
  footer {
    padding: 2rem 0.5rem;
    @media (min-width: 400px) {
      padding: 2.5rem 1.5rem;
    }
    @media (min-width: 600px) {
      padding: 3rem 2rem;
    }
    @media (min-width: 1200px) {
      padding: 3rem 6rem;
    }
    color: #fff;
    background-color: ${colors.bgDark};

    ul {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
      font-size: 0.8rem;
      @media (min-width: 960px) {
        display: flex;
        gap: 1rem;
      }
      li {
        color: #fff;
        padding: 0.2rem 0;
        margin-bottom: 1rem;
      }
    }
    .top-footer {
      @media (min-width: 960px) {
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
      }
    }
    .bottom-footer {
      @media (min-width: 800px) {
        display: flex;
        justify-content: space-between;
        img {
          height: 1.2rem;
        }
      }
    }
    .web {
      margin-bottom: 1rem;
      .mobile {
        display: none;
        @media (min-width: 900px) {
          display: block;
        }
      }
      .desktop {
        display: block;
        @media (min-width: 900px) {
          display: none;
        }
      }
    }
    .download {
      font-weight: bolder;
      font-size: 1rem;
      color: #fff;
    }
    .copyright {
      font-size: 0.8rem;
      color: #fff;
    }
    .appstore {
      margin: 1.5rem 0;
      img {
        margin-right: 1rem;
        @media (max-width: 500px) {
          width: 8rem;
        }
      }
    }
    hr {
      color: 1px soild #dae1e6;
      height: 0.005rem;
      margin-bottom: 1.5rem;
    }
  }
`;
