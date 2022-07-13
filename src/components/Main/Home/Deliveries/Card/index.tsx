import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { ParagraphCSS } from '@stylesComponents/Texts';
import { iProject } from 'types/iProject';
import { ContentCSS } from './styles';

interface CardDeliveredProps {
  project: iProject;
  index: number;
}

export const CardDelivered = ({ project, index }: CardDeliveredProps) => {
  return (
    <Card
      aria-label="cartão de projeto entregue"
      image={project.image}
      name={project.name}
      size={index === 0 ? 'small' : index === 1 ? 'medium' : 'large'}
    >
      <ContentCSS className="card__content-hidden">
        <ParagraphCSS size="1.5rem" uppercase>
          {project.locale}
        </ParagraphCSS>
        <div>
          <ParagraphCSS bold size="1.3rem">
            {project.dimensions}
          </ParagraphCSS>
          <span style={{ margin: '0 0.5rem' }}>-</span>
          <ParagraphCSS size="1.3rem" className="info">
            {project.infos.map((info, i, arr) => (
              <span
                key={Math.random()}
                style={{
                  display: 'inline',
                  textTransform: 'uppercase',
                }}
              >
                <span>{info.text}</span>
                {i + 1 < arr.length && <br />}
              </span>
            ))}
          </ParagraphCSS>
        </div>

        <Button href={`/enterprises/${project.id}`}>Conheça Agora</Button>
      </ContentCSS>
    </Card>
  );
};
