import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BasePage from '../components/BasePage';
import imageSushi from '../assets/sashimi.gif';
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
    colorTitle: '#E73220',
    colorNavbar: '#A1C945',
    colorNavbarActive: '#FDDC3F',
  };

  render() {
    return (
      <BasePage {...this.props}
        header={MainCourse.header}
      >
        <Container>
          <ArticleContainer>
            <Article
              image={imageSushi}
              data={{
                title: 'KINUGAWA',
                subtitle: 'japonais',
                description: '“ un déjeuner frais  ”',
                address: '9 rue du Mont-Thabor',
                city: '75001 Paris',
              }}
              backgroundColor="#E73220"
            />
          </ArticleContainer>
        </Container>
      </BasePage>
    );
  }
}

export default MainCourse;
