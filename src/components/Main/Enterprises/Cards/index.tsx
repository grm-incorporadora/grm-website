import { iProject } from 'types/iProject';
import { useEffect, useState } from 'react';
import { ParagraphCSS, TitleCSS } from '@stylesComponents/Texts';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { ButtonLink } from '@components/ButtonLink';
import { useRouter } from 'next/router';
import { Navigation } from './Navigation';
import { ContainerCSS } from './styles';

interface CardsProps {
  projects: iProject[];
}

export const Cards = ({ projects }: CardsProps) => {
  const router = useRouter();
  const [page, setPage] = useState<'in-progress' | 'deliveries'>(
    (router.query.page as 'in-progress' | 'deliveries') || 'in-progress',
  );
  const [amountCards, setAmountCards] = useState(3);
  const [pageProjects, setPageProjects] = useState(
    projects.filter((project) => project.type === 'new'),
  );

  useEffect(() => {
    setPageProjects(
      projects.filter(
        (project) =>
          project.type === (page === 'in-progress' ? 'new' : 'delivered'),
      ),
    );
    setAmountCards(3);
  }, [page, projects]);

  return (
    <ContainerCSS>
      <div className="mx-w">
        <Navigation page={page} setPage={setPage} />
        <TitleCSS line uppercase style={{ marginBottom: '4rem' }}>
          {page === 'in-progress' ? 'Lançamentos' : 'Entregues'}
        </TitleCSS>
      </div>
      <div className="cards__container">
        {pageProjects.map(
          (project, i) =>
            i < amountCards && (
              <Card
                key={project.id}
                image={project.image}
                name={project.name}
                size="small"
              >
                <ParagraphCSS
                  uppercase
                  style={{ fontWeight: '400', marginBottom: '2rem' }}
                >
                  {page === 'in-progress' ? 'breve lançamento' : 'entregue'}
                </ParagraphCSS>

                <Button href={`/enterprises/${project.id}`}>
                  Conheça Agora
                </Button>
              </Card>
            ),
        )}
      </div>
      <div className="see-more">
        {amountCards < pageProjects.length && (
          <ButtonLink active onClick={() => setAmountCards((prev) => prev + 3)}>
            Ver Mais
          </ButtonLink>
        )}
      </div>
    </ContainerCSS>
  );
};
