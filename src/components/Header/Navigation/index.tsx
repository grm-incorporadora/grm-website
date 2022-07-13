import { useEffect } from 'react';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

import { BREAKPOINTS } from '@globalStyles/themes/shared';
import { Link } from './Link';
import { ContainerCSS } from './styles';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const { currWidth } = useLayoutContext();
  function closeNavigation() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (!isOpen) {
      const firstTrigger = document.getElementById('hamburger');
      firstTrigger?.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    if (currWidth >= BREAKPOINTS.$MIN_MOBILE) setIsOpen(false);
  }, [currWidth, setIsOpen]);

  return (
    <>
      <ContainerCSS className="navigation" id="navigation">
        <nav>
          <Link onClick={() => closeNavigation()} href="/">
            home
          </Link>
          <Link onClick={() => closeNavigation()} href="/about">
            quem somos
          </Link>
          <Link onClick={() => closeNavigation()} href="/enterprises">
            empreendimentos
          </Link>
          <Link onClick={() => closeNavigation()} href="/contact">
            contato
          </Link>
          <Link onClick={() => closeNavigation()} href="/land">
            ofereça seu terreno
          </Link>
        </nav>
      </ContainerCSS>
      {isOpen && (
        <span
          aria-hidden
          onClick={() => closeNavigation()}
          style={{
            display: 'block',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '1',
          }}
        />
      )}
    </>
  );
};
