import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArticleImageContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ArticleTitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.backgroundColor}
`;

const ArticleTitle = styled.div`
  display: flex;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 24px;
  line-height: 1.33;
  font-weight: 300;
  text-align: center;
`;

const ArticleSubtitle = styled.div`
  color: white;
  letter-spacing: 1px;
  line-height: 1.55;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

const ArticleAddress = styled.div`
  color: white;
  line-height: 1.55;
  letter-spacing: 0.5px;
  margin-top: 32px;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
`;

const ArticleCity = styled.div`
  color: white;
  line-height: 1.55;
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: 200;
  text-align: center;
`;

class Article extends Component {
  props: {
    image: string,
    title: string,
    backgroundColor: string,
  };

  goToLink = link => this.props.history.push(link);

  render() {
    const { data } = this.props;
    return (
      <Container>
        <ArticleImageContainer>
          <ArticleImage src={this.props.image} />
        </ArticleImageContainer>
        <ArticleTitleContainer backgroundColor={this.props.backgroundColor}>
          <ArticleTitle>
            {data.title}
          </ArticleTitle>
          <ArticleSubtitle>
            {data.subtitle}
          </ArticleSubtitle>
          <ArticleAddress>
            {data.address}
          </ArticleAddress>
          <ArticleCity>
            {data.city}
          </ArticleCity>
        </ArticleTitleContainer>
      </Container>
    );
  }
}

export default Article;
