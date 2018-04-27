import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;

const Body = styled.div`
  height: calc(100% - 96px);
`;

const Header = styled.div`
  height: 96px;
`;

const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
`;

const NavBar = styled.div`
  text-align: center;
  padding-bottom: 16px;
`;

const NarBarLink = styled.div`
  display: inline-block;
  margin: 0 16px;
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: pointer;
  translation: all 0.15s ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  &:hover {
    border-bottom: 2px solid black;
  }
`;

class BasePage extends Component {
  props: {
    children: any,
    history: {
      push: Function,
    },
  };

  goToLink = link => this.props.history.push(link);

  render() {
    return (
      <Container>
        <Header>
          <Title>K 2 Food</Title>
          <NavBar>
            <NarBarLink>home</NarBarLink>
            <NarBarLink>entrée</NarBarLink>
            <NarBarLink onClick={() => this.goToLink('/plat')}>plat</NarBarLink>
            <NarBarLink>dessert</NarBarLink>
          </NavBar>
        </Header>
        <Body>
          {this.props.children}
        </Body>
      </Container>
    );
  }
}

export default BasePage;
