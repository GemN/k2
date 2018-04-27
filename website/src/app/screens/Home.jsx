import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BasePage from '../components/BasePage';

const HomeContainer = styled.div`
  position: relative;
`;

class Home extends PureComponent {
  state = {
    searchValue: '',
  };

  render() {
    return (
      <BasePage {...this.props}>
        <HomeContainer>
          <div>tel</div>
        </HomeContainer>
      </BasePage>
    );
  }
}

export default Home;
