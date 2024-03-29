import { HeaderContainer } from "./styles";

import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoBruno from "../../assets/logo-bruno.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoBruno} alt="" width={100} />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
