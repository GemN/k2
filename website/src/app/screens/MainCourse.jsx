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
  static header = {
    colorTitle: '#4462C5',
    colorNavbar: '#F6BF00',
    colorNavbarActive: '#F5A3C7',
  };

  render() {
    return (
      <BasePage {...this.props}
        header={MainCourse.header}
      >
        <Container>
          <ArticleContainer>
            <Article
              image={imageJahJah}
              data={{
                title: 'Le JahJah',
                subtitle: 'jamaïcain vegan',
                description: '“ pour une explosion de saveurs et un voyage à la Jamaique, le tout à petit prix et dans Paris! ”',
                address: '11 rue des petites écuries',
                city: '75010 Paris',
              }}
              backgroundColor="#4C6DCA"
            />
          </ArticleContainer>
        </Container>
      </BasePage>
    );
  }
}

export default MainCourse;
