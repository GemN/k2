import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BasePage from '../components/BasePage';
import homeImg from '../assets/home.gif';

const HomeContainer = styled.div`
  position: relative;
  flex: 1;
  flex-grow: 1;
`;

const HomePic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscoverContainer = styled.div`
  position: absolute;
  top: calc(50% + 24px);
  left: 0;
  right: 0;
  zIndex: 40;
  text-align: center;
`;

const Discover = styled.div`
  display: inline-block;
  border: 4px solid white;
  font-size: 30px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

class Home extends PureComponent {
  state = {
    searchValue: '',
  };

  render() {
    return (
      <BasePage {...this.props}>
        <HomeContainer>
          <HomePic src={homeImg} />
          <DiscoverContainer>
            <Discover onClick={() => this.props.history.push('/entree')}>
              découvrir
            </Discover>
          </DiscoverContainer>
        </HomeContainer>
      </BasePage>
    );
  }
}

export default Home;
