import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BasePage from '../components/BasePage';
import imageCrepe from '../assets/Crepe-01.gif';
import Article from '../components/Article';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ArticleContainer = styled.div`
  flex-grow: 1;
  flex: 1;
`;

class MainCourse extends PureComponent {
  static header = {
    colorTitle: '#EB5D45',
    colorNavbar: '#FCCF92',
    colorNavbarActive: '#E9895B',
  };

  render() {
    return (
      <BasePage {...this.props}
        header={MainCourse.header}
      >
        <Container>
          <ArticleContainer>
            <Article
              reverse
              image={imageCrepe}
              data={{
                title: 'LA CREME DE PARIS',
                subtitle: 'crêperie',
                description: '“ un régal pour vos yeux et pour vos papilles  ”',
                address: '4 Rue du Faubourg Montmartre',
                city: '75009 Paris',
              }}
              backgroundColor="#EB5D45"
            />
          </ArticleContainer>
        </Container>
      </BasePage>
    );
  }
}

export default MainCourse;
