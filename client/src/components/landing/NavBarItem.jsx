import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Container = styled.li`
  display: inline-block;
  margin-right: 24px;
`;

const StyledAnchorLink = styled(AnchorLink)`
  display: block;
  position: relative;
  padding: 16px;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${props => props.theme.textColor.subtile};
  text-decoration: none;
  transition: color 0.3s ease;

  :hover {
    color: ${props => props.theme.textColor.primary};
    transition: color 0.3s ease;
  };

  ::after {
    content: '';
    position: absolute;
    background: none repeat scroll 0 0 transparent;
    width: 0;
    bottom: 0;
    left: 50%;
    height: 3px;
    background: ${props => props.theme.color.accent};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  };

  :hover::after {
    width: 100%;
    left: 0;
  };
`

const NavBarItem = ({sectionId, children}) => {
  return (
    <Container>
      <StyledAnchorLink href={sectionId}>{children}</StyledAnchorLink>
    </Container>
  )
}

export default NavBarItem;