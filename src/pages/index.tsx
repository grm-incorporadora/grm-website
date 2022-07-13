import type {
  GetServerSidePropsContext,
  // InferGetServerSidePropsType,
} from 'next';
import { projectsMock } from 'mock/projects';

import { Main } from '@components/Main';
import { InProgress } from '@components/Main/Home/InProgress';
import { Deliveries } from '@components/Main/Home/Deliveries';
// import { fetcher } from '@services/fetchers';

export const getServerSideProps = async ({
  res,
}: GetServerSidePropsContext) => {
  const maxAge = 60 * 5; // 5 minutes
  const staleWhileRevalidate = 60 * 2; // 2 minutes
  res.setHeader(
    'Cache-Control',
    `public, max-age=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
  );

  return {
    props: {},
  };
};

const Home =
  (/* {}: InferGetServerSidePropsType<typeof getServerSideProps> */) => {
    return (
      <Main slides={projectsMock}>
        <InProgress
          projects={projectsMock.filter((project) => project.type === 'new')}
        />
        <Deliveries
          project={projectsMock.filter(
            (project) => project.type === 'delivered',
          )}
        />
      </Main>
    );
  };

export default Home;
