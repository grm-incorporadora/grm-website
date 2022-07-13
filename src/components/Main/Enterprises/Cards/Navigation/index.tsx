import { ButtonLink } from '@components/ButtonLink';
import { HrCSS } from '@stylesComponents/Hr';
import { ContainerCSS } from './styles';

interface NavigationProps {
  page: string;
  setPage: (page: 'in-progress' | 'deliveries') => void;
}

export const Navigation = ({ page, setPage }: NavigationProps) => {
  return (
    <ContainerCSS>
      <ButtonLink
        onClick={() => setPage('in-progress')}
        active={page === 'in-progress'}
        href="/enterprises?page=in-progress"
      >
        Em Andamento
      </ButtonLink>
      <HrCSS direction="vertical" size="100%" stroke="2px" />
      <ButtonLink
        onClick={() => setPage('deliveries')}
        active={page === 'deliveries'}
        href="/enterprises?page=deliveries"
      >
        Entregues
      </ButtonLink>
    </ContainerCSS>
  );
};
