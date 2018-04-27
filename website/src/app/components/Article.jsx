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
  box-sizing: border-box;
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

const ArticleDescription = styled.div`
  color: white;
  margin: 33px auto 0 auto;
  width: 60%;
  letter-spacing: 1px;
  line-height: 1.55;
  font-size: 20px;
  font-style: italic;
  font-weight: 300;
  text-align: center;
`;

const ArticleAddress = styled.div`
  color: white;
  line-height: 1.55;
  letter-spacing: 0.5px;
  font-size: 14px;
  font-weight: 200;
  text-align: center;
`;

const ArticleMeetUs = styled.div`
  color: white;
  line-height: 1.55;
  letter-spacing: 0.5px;
  margin-top: 71px;
  font-size: 20px;
  font-weight: 500;
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
    reverse: boolean,
  };

  goToLink = link => this.props.history.push(link);

  renderImg = () => (
    <ArticleImageContainer>
      <ArticleImage src={this.props.image} />
    </ArticleImageContainer>
  );

  renderContent = () => {
    const { data } = this.props;
    return (<ArticleTitleContainer backgroundColor={this.props.backgroundColor}>
      <ArticleTitle>
        {data.title}
      </ArticleTitle>
      <ArticleSubtitle>
        {data.subtitle}
      </ArticleSubtitle>
      <ArticleDescription>
        {data.description}
      </ArticleDescription>
      <ArticleMeetUs>
        rendez vous à
      </ArticleMeetUs>
      <ArticleAddress>
        {data.address}
      </ArticleAddress>
      <ArticleCity>
        {data.city}
      </ArticleCity>
    </ArticleTitleContainer>)
  };

  render() {
    const { reverse } = this.props;
    return reverse ?
      <Container>
        {this.renderContent()}
        {this.renderImg()}
      </Container>
      :
      <Container>
        {this.renderImg()}
        {this.renderContent()}
      </Container>
  }
}

export default Article;
