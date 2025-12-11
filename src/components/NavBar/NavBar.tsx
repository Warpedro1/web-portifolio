import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './NavBar.styles';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <S.NavContainer>
      <S.NavWrapper>
        <S.Logo to="/" onClick={closeMenu}>
          Pedro Guerra
        </S.Logo>
        <S.MenuIcon onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </S.MenuIcon>
        <S.NavLinks $isOpen={isMenuOpen}>
          <S.NavLink
            to="/"
            $isActive={isActive('/')}
            onClick={closeMenu}
          >
            Início
          </S.NavLink>
          <S.NavLink
            to="/about"
            $isActive={isActive('/about')}
            onClick={closeMenu}
          >
            Sobre
          </S.NavLink>
          <S.NavLink
            to="/projects"
            $isActive={isActive('/projects')}
            onClick={closeMenu}
          >
            Projetos
          </S.NavLink>
          <S.NavLink
            to="/contact"
            $isActive={isActive('/contact')}
            onClick={closeMenu}
          >
            Contato
          </S.NavLink>
        </S.NavLinks>
      </S.NavWrapper>
    </S.NavContainer>
  );
};

export default NavBar;

