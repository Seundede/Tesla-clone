import React, { useState} from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
    const [side, setSide] = useState(false);
  return (
    <div>
      <Container>
        <a href="#">
          <img src="images/logo.svg" alt="logo" />
        </a>
        <MiddleMenu>
          <div>Model S</div>
          <div>Model 3</div>
          <div>Model X</div>
          <div>Model Y</div>
          <div>Solar Roof</div>
          <div>Solar Panels</div>
        </MiddleMenu>
        <EndMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
          <a href="#" onClick = { () => setSide(true)} >Menu</a>
        </EndMenu>
        
        <SideNav status = {side}>
          <Wrapper>
            <Icon onClick = { () => setSide(false)} />
          </Wrapper>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Text-Drive</a>
          </li>
        </SideNav>
      </Container>
    </div>
  );
}

export default Header;



const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
const MiddleMenu = styled.div`
  display: flex;
  font-weight: 600;
  cursor: pointer;
  div {
    padding: 0 10px;
  }
  @media screen and (max-width: 1100px) {
      display: none;
  }
`;
const EndMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    padding: 0 10px;
    font-weight: 600;
  }
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 300px;
  padding: 25px;
  list-style: none;
  transform: ${(props) =>
      props.status ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.2s ease-in;
    li {
    padding: 15px 9px;
  }
  li:hover {
    background-color: rgba(232, 232, 232, 1);
    border-radius: 15px;
  }
`;
const Wrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const Icon = styled(CloseIcon)`
cursor: pointer;
`;
