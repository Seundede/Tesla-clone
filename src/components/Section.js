import React from 'react'
import styled from 'styled-components'

function Section(props) {
    return (
      <div>
        <Container bgImage= { props.backgroundImg}>
          <ItemText>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
          </ItemText>
          <Button>
            <LeftButton>{props.leftButton}</LeftButton>
            <RightButton>{props.rightButton}</RightButton>
          </Button>
          <Arrow src="/images/down-arrow.svg" />
        </Container>
      </div>
    );
}

export default Section

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: ${(props) => `url('/images/${props.bgImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
flex-grow: 1;
p {
    margin-top:15px;
}
`

const Button = styled.div `
display: flex;
margin-bottom: 40px;
@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}

`
const LeftButton = styled.div`
  color: white;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 20px;
  margin-left: 20px;
  opacity: 0.8;
  font-size: 16px;
 
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: #393c41;
  opacity: 0.6;
  @media screen and (max-width: 768px) {
      margin-top: 20px;
  }

`;
const Arrow = styled.img`
  height: 40px;
  margin-bottom: 20px;
  animation: mymove infinite 1.5s;
  margin-bottom: 50px;
`;

