import styled from "styled-components";

const StyledNav = styled.div`
  .navbar {
    background-color: #222;
    margin-bottom: 20px;
  }
  .navbar-brand,
  .navbar-nav .nav-routes {
    color: #bbb;
    list-style: none;
    padding-left: 10px;

    &:hover {
      color: white;
    }
  }
`;

export { StyledNav };
