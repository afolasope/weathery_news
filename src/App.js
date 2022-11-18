import { useState } from 'react';
import styled from 'styled-components';
import Card from './components/Card';
import MobileNav from './components/MobileNav';
import Navbar from './components/Navbar';
import RectangleCard from './components/RectangleCard';
import { colors } from './styles/variables';
import { CiSearch } from 'react-icons/ci';

const articles = [1, 2, 3, 4, 5, 6];

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Wrapper>
      <header>
        <p>logo</p>
        <div className="navbar">
          <Navbar />
        </div>
        <div>
          <MobileNav navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </div>
      </header>
      <main>
        <div className="hero">
          <h1>The Weather Inside Of 24 Hours and Beyond</h1>
          <div className="input-control">
            <span>
              <CiSearch />
            </span>
            <input type="text" />
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
            <RectangleCard />
          </div>
          <div className="cards">
            {articles.map((item) => {
              return <Card />;
            })}
          </div>
        </div>
        <div className="rectangle">
          <RectangleCard />
        </div>
      </main>
      <footer></footer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid teal;
    padding: 1rem;

    .navbar {
      flex-basis: 90%;
      @media (max-width: 860px) {
        display: none;
      }
    }
  }

  .hero {
    padding: 2rem 0;
    h1 {
      padding: 2rem 0;
    }
    .input-control {
      border: 1px solid rebeccapurple;
      input {
        padding: 0.3rem 0.5rem;
      }
      .btn {
        padding: 0.6rem 0.4rem;
      }
    }
  }
  .temp-list {
    border: 1px solid orange;
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

    /* .card {
      &:not(:last-of-type) {
        margin-bottom: 1.5rem;
      }
    } */
  }
`;
