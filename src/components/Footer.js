import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
      <div>
        <Container>
          <p>Tesla 2021</p>
          <p>Privacy & Legal</p>
          <p>Contact</p>
          <p>Careers</p>
          <p>Get Newsletter</p>
          <p>News</p>
          <p>Engage</p>
          <p>Locations</p>
        </Container>
      </div>
    );
}

export default Footer


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
  justify-content: space-between;
  margin: auto;

  p {
    font-size: 16px;
    cursor: pointer;
  }
  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      margin-bottom: 10px;
    }
  }
`;
