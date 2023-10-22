import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../data/constants";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(120deg, #3f51b5, #f50057);
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: #fff;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #f50057;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #3f51b5;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.8rem;
  color: #fff;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #3f51b5;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #ccc;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Nishendu Mishra</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2023 Nishendu Mishra. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
