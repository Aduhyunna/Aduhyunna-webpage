import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
  font-size: 30px;
  color: ${(p) => p.theme.fg.dimmer};

  font-weight: 800;
`;

function Logo() {
  return <Container to={"/"}>Aduhyunna</Container>;
}

export default Logo;