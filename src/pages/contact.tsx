import { projectsMock } from 'mock/projects';

import { Main } from '@components/Main';
import { TitleCSS } from '@stylesComponents/Texts';
import { Form } from '@components/Main/Contact/Form';

const About = () => {
  return (
    <Main slides={[projectsMock[0].image]}>
      <section className="contact">
        <div className="mx-w">
          <TitleCSS line uppercase style={{ marginBottom: '3.5rem' }}>
            Contato
          </TitleCSS>
          <div>
            <Form />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default About;
