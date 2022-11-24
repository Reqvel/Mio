import styled from "styled-components";

const NavBarItem = styled.li`
  display: inline-block;
  position: relative;
  padding: 16px;
  margin-right: 24px;
  font-size: 0.8rem;
  cursor: pointer;
  color: ${props => props.theme.textSubtile};
  transition: color 0.3s ease;

  :hover {
    color: ${props => props.theme.textPrimary};
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
    background: ${props => props.theme.mainTheme.accentColor};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  };

  :hover::after {
    width: 100%;
    left: 0;
  };
`;

export default NavBarItem;