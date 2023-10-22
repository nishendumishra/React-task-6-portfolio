import styled from "styled-components";

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 0.5rem; /* Reduced the margin */
  font-size: 1rem; /* Further reduced the font size for very small icons */
  color: ${({ theme }) => theme.secondary};
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px; /* Reduced the width */
  height: 24px; /* Reduced the height */
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;
