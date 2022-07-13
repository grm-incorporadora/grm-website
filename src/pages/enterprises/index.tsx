import { projectsMock } from 'mock/projects';

import { Main } from '@components/Main';
import { Cards } from '@components/Main/Enterprises/Cards';
import { AnotherEnterprises } from '@components/Main/Enterprises/AnotherEnterprises';

const Enterprises = () => {
  return (
    <Main slides={[projectsMock[0].image]}>
      <Cards projects={projectsMock} />
      <AnotherEnterprises projects={projectsMock} />
    </Main>
  );
};

export default Enterprises;
