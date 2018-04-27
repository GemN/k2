import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  box-sizing: border-box;
`;

const Body = styled.div`
  height: calc(100% - 112px);
`;

const Header = styled.div`
  height: 112px;
`;

const Title = styled.div`
  width: 100%;
  padding: 16px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1.5px;
  text-align: center;
  color: ${p => p.color ? p.color : 'black'};
`;

const NavBar = styled.div`
  text-align: center;
  padding-bottom: 16px;
`;

const NarBarLink = styled.div`
  display: inline-block;
  margin: 0 16px;
  font-size: 15px;
  letter-spacing: 1.5px;
  cursor: pointer;
  translation: all 0.15s ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  color: ${p => p.color ? p.color : 'black'};
  &:hover {
    border-bottom: 2px solid ${p => p.color ? p.color : 'black'};
  }
`;

class BasePage extends Component {
  static defaultProps = {
    header: {},
  };

  static links = [
    { value: 'home', url: '/' },
    { value: 'entrée', url: '/entree' },
    { value: 'plat', url: '/plat' },
    { value: 'dessert', url: '/dessert' },
  ];

  props: {
    children: any,
    history: {
      push: Function,
    },
  };

  goToLink = link => this.props.history.push(link);

  isActive = link => this.props.history.location.pathname === link.url

  render() {
    const { header } = this.props;
    return (
      <Container>
        <Header>
          <Title color={header.colorTitle}>sunny food</Title>
          <NavBar color={header.colorNavbar}>
            {BasePage.links.map(l => (
              <NarBarLink
                key={l.value} color={this.isActive(l) ? header.colorNavbarActive : header.colorNavbar}
                onClick={() => this.goToLink(l.url)}>
                {l.value}
              </NarBarLink>
            ))}
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
