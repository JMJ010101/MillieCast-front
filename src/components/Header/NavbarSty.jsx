import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarBox = styled.div`
  width: 100%;
  position: fixed;
  height: 105px;
  background-color: white;
  top: 0;
  z-index: 9;
`;
export const NavbarBox2 = styled.div`
  width: 100%;
  position: sticky;
  height: 65px;
  background-color: white;
  top: 0;
  z-index: 9;
`;
export const NavbarContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
`;

export const Inner = styled.div`
  display: flex;
  max-width: 1450px;
  height: 65px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    height: 20px;
    margin-left: 20px;
    padding: 10px 30px 10px 0;
  }
  button {
    width: 80px;
    margin-right: 20px;
    border: none;
    border-radius: 5px;
    background-color: #242424;
    color: white;
    padding: 10px;
    font-size: 11px;
    cursor: pointer;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  img {
    width: 90px;
  }
`;

export const MainMenu = styled.div`
  font-size: 20px;
  font-weight: ${(props) => (props.selected ? "800" : "600")};
  padding: 10px 25px;
  cursor: pointer;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: #242424;
`;

export const NavbarContainer2 = styled.div`
  width: 100%;
  position: sticky;
  margin-top: -26px;
  height: max-content;
  border-bottom: 1px solid #ddd;
`;

export const Inner2 = styled.div`
  display: flex;
  max-width: 1150px;
  height: 45px;
  margin: 27px 0 0 120px;
  align-items: center;
`;

export const SubMenu = styled.div`
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? "800" : "600")};
  padding: 11px 10px;
  border-bottom: ${(props) => (props.selected ? "3px solid #242424" : "none")};
  cursor: pointer;
`;
