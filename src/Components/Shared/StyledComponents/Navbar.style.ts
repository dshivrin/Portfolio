import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav<{ extendNavbar: boolean }>`
  width: 100%;
  height: ${(props: any) => (props.extendNavbar ? "100vh" : "60px")};
  background-color: var(--background-color);
  color: var(--font-color);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  @media (min-width: 768px) {
    height: 60px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 3%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  &::before {
    font-family: "Fira Code", monospace;
    counter-increment: nav-counter;
    content: "0" counter(nav-counter) ". ";
    color: var(--light-green);
    font-size: 0.9em;
    font-weight: 200;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
  cursor: pointer;
`;

export const OpenLinksButton = styled.button`
  width: 60px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DownloadResumeButton = styled.a`
  text-decoration: none;
  outline: none;
  text-align: center;
  border: 1px solid var(--light-green);
  color: var(--font-color);
  border-radius: 5px;
  padding: 5px 13px;
  margin: 0 0 0 15px;

  &:hover {
    -webkit-box-shadow: 0px 0px 10px 12px rgba(10, 25, 47, 0.34);
    box-shadow: 0px 0px 10px 12px rgba(10, 25, 47, 0.34);
  }
  &:active {
    border-color: var(--font-color);
    color: var(--light-green);
    -webkit-box-shadow: 0px 0px 10px 6px rgba(100, 255, 218, 0.34);
    box-shadow: 0px 0px 10px 6px rgba(100, 255, 218, 0.34);
  }

  @media (max-width: 768px) {
    display: none;
    margin: 25px 0 0 0;
  }
`;

export const DownloadResumeButtonExtended = styled(DownloadResumeButton)`
  @media (max-width: 768px) {
    display: inline;
    margin-top: 15px;
  }
`;
