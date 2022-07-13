import { ParagraphCSS, SubTitleCSS } from '@stylesComponents/Texts';
import { iProject } from 'types/iProject';

interface DataSheetsProps {
  name: string;
  locale: string;
  dataSheets: iProject['dataSheets'];
}

export const DataSheets = ({ dataSheets, name, locale }: DataSheetsProps) => {
  return (
    <section>
      <SubTitleCSS style={{ marginBottom: 0 }}>Ficha técnica</SubTitleCSS>

      <ul>
        <li>
          <ParagraphCSS>
            <span className="bold">Nome:</span> {name}
          </ParagraphCSS>
        </li>
        {dataSheets.map(({ data, sheet }) => {
          const isDataString = typeof data === 'string';

          return (
            <li key={Math.random()}>
              <ParagraphCSS>
                <span className="bold">{sheet}:</span>{' '}
                {isDataString
                  ? data
                  : data.map((text, i) => (
                      <span key={Math.random()}>
                        {text}
                        {i + 1 < data.length && <> &#8226; </>}
                      </span>
                    ))}
              </ParagraphCSS>
            </li>
          );
        })}
        <li>
          <ParagraphCSS>
            <span className="bold">Local:</span> {locale}
          </ParagraphCSS>
        </li>
      </ul>
    </section>
  );
};
