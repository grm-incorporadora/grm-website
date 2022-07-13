import { projectsMock } from 'mock/projects';

import { Main } from '@components/Main';
import { TitleCSS } from '@stylesComponents/Texts';
import { Form } from '@components/Main/Land/Form';

const Land = () => {
  return (
    <Main slides={[projectsMock[0].image]}>
      <section className="land">
        <div className="mx-w">
          <TitleCSS line uppercase style={{ marginBottom: '3.5rem' }}>
            Ofereça seu terreno
          </TitleCSS>
          <div>
            <Form />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Land;
