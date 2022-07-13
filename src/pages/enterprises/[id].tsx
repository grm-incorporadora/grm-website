import { Main } from '@components/Main';
import { AnotherEnterprises } from '@components/Main/Enterprises/AnotherEnterprises';
import { Navigation } from '@components/Main/Enterprises/Cards/Navigation';
import { DataSheets } from '@components/Main/Project/DataSheet';
import { Gallery } from '@components/Main/Project/Gallery';
import { ParagraphCSS, SubTitleCSS, TitleCSS } from '@stylesComponents/Texts';
import { projectsMock } from 'mock/projects';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { useState } from 'react';
import { iProject } from 'types/iProject';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsMock.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const projects: iProject[] = projectsMock;
  const project: iProject = projectsMock.filter(
    ({ id }) => id === params?.id,
  )[0];

  return {
    props: {
      project,
      projects,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};

const Project = ({
  project,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [page, setPage] = useState(
    project.type === 'new' ? 'in-progress' : 'deliveries',
  );

  return (
    <Main slides={[project.image]}>
      <section className="project">
        <Navigation page={page} setPage={setPage} />

        <div className="mx-w">
          <section>
            <ParagraphCSS uppercase bold>
              {project.type === 'new' ? 'Em andamento' : 'Entregue'}
            </ParagraphCSS>
            <TitleCSS line>{project.name.name}</TitleCSS>
          </section>
          <section>
            <SubTitleCSS style={{ marginBottom: 0 }}>Descrição</SubTitleCSS>
            <ParagraphCSS>{project.description}</ParagraphCSS>
          </section>
          <DataSheets
            dataSheets={project.dataSheets}
            name={project.name.name}
            locale=""
          />
          {project.gallery && (
            <Gallery title="Galeria de fotos" images={project.gallery} />
          )}
          {project.plans && <Gallery title="Plantas" images={project.plans} />}
          {project.illustrative && (
            <Gallery title="" images={project.illustrative} />
          )}
        </div>
      </section>
      <AnotherEnterprises projects={projects} />
    </Main>
  );
};

export default Project;
