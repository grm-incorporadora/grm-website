import type { iProject } from 'types/iProject';
import { Button } from '@components/Button';

import { TitleCSS } from '@stylesComponents/Texts';

import { ContainerCSS } from './styles';
import { CardDelivered } from './Card';

export interface DeliveriesProps {
  project: iProject[];
}

export const Deliveries = ({ project }: DeliveriesProps) => {
  return (
    <ContainerCSS>
      <div className="mx-w">
        <TitleCSS line uppercase style={{ marginBottom: '4rem' }}>
          Empreendimentos <br />
          <span style={{ fontWeight: '700' }}>entregues</span>
        </TitleCSS>

        <div className="projects">
          {project.map(
            (projectDelivered, i) =>
              i < 3 && (
                <CardDelivered
                  key={projectDelivered.id}
                  project={projectDelivered}
                  index={i}
                />
              ),
          )}
        </div>
        <Button
          styles={{ margin: '3rem 0', alignSelf: 'center' }}
          href="/enterprises"
        >
          Veja mais imóveis
        </Button>
      </div>
    </ContainerCSS>
  );
};
