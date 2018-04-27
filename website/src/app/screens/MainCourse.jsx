import React, { PureComponent } from 'react';
import styled from 'styled-components';
import BasePage from '../components/BasePage';
import imageJahJah from '../assets/jahjah.gif';
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
  render() {
    return (
      <BasePage {...this.props}>
        <Container>
          <ArticleContainer>
            <Article
              image={imageJahJah}
              data={{
                title: 'Le JahJah',
                subtitle: 'jamaïcain vegan',
                address: '11 rue des petites écuries',
                city: '75010 Paris',
              }}
              backgroundColor="#5071C4"
            />
          </ArticleContainer>
        </Container>
      </BasePage>
    );
  }
}

export default MainCourse;
