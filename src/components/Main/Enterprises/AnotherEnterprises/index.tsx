import { HrCSS } from '@stylesComponents/Hr';
import { SubTitleCSS } from '@stylesComponents/Texts';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { iProject } from 'types/iProject';
import { ContainerCSS } from './styles';

interface AnotherEnterprisesProps {
  projects: iProject[];
}

export const AnotherEnterprises = ({ projects }: AnotherEnterprisesProps) => {
  const [separatesProjects, setSeparatesProjects] = useState<iProject[][]>([]);

  useEffect(() => {
    setSeparatesProjects(
      projects.reduce((accumulator: iProject[][], item, i) => {
        const group = Math.floor(i / 6);
        accumulator[group] = [...(accumulator[group] || []), item];
        return accumulator;
      }, []),
    );
  }, [projects]);

  return (
    <ContainerCSS>
      <SubTitleCSS>OUTROS EMPREENDIMENTOS</SubTitleCSS>
      <div className="mx-w">
        {separatesProjects.map((separateProjects, i) => (
          <div key={Math.random()}>
            <nav>
              {separateProjects.map((project) => (
                <Link key={project.id} href={`/enterprises/${project.id}`}>
                  {project.name.name}
                </Link>
              ))}
            </nav>
            {i + 1 < separatesProjects.length && (
              <HrCSS direction="vertical" size="100%" stroke="2px" />
            )}
          </div>
        ))}
      </div>
    </ContainerCSS>
  );
};
