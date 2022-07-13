import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@components/Button';
import { ButtonLink } from '@components/ButtonLink';
import { MailSendIcon } from '@stylesComponents/icons/MailSend';
import { SubTitleCSS } from '@stylesComponents/Texts';
import { Input } from '@components/Input';
import { submit } from './utils/submit';

export const Form = () => {
  const [cepField, setCepField] = useState(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const imagesLinkRef = useRef<HTMLInputElement>(null);
  const proposalRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={(ev: any) => {
        submit({
          cepRef,
          nameRef,
          cityRef,
          stateRef,
          emailRef,
          companyRef,
          addressRef,
          proposalRef,
          imagesLinkRef,
        });
        ev.preventDefault();
      }}
      sx={{
        '& .MuiTextField-root': { m: '0.5rem 0', width: '100%' },
        '& > div .MuiTextField-root': { m: '0.5rem', width: '100%' },
        '& > div .MuiTextField-root:first-child': { marginLeft: '0' },
        '& > div .MuiTextField-root:last-child': { marginRight: '0' },
      }}
    >
      <Input label="Seu Nome" ref={null} />
      <Input label="Seu Email" ref={null} type="email" />
      <div style={{ display: 'flex' }}>
        <Input label="Telefone" ref={null} type="tel" />
        <Input label="Celular" ref={null} type="tel" />
      </div>
      <Input label="Empresa" ref={null} type="text" required={false} />
      <SubTitleCSS>Informações do terreno</SubTitleCSS>
      <div className="cep" style={{ display: 'flex' }}>
        <Input
          label="Cep"
          ref={null}
          type="number"
          placeholder="00000-000"
          required={cepField}
          disabled={!cepField}
        />
        <ButtonLink active onClick={() => setCepField(!cepField)}>
          {cepField ? 'Não sei meu cep' : 'Eu sei meu cep'}
        </ButtonLink>
      </div>
      <Input
        label="Endereço"
        ref={null}
        type="text"
        placeholder="rua, número"
      />
      <Input label="Bairro" ref={null} type="text" />

      <div style={{ display: 'flex' }}>
        <Input label="Cidade" ref={null} type="text" />
        <Input label="Estado" ref={null} type="text" />
      </div>
      <Input label="Link das Imagens" ref={null} type="url" required={false} />

      <TextField
        required
        id="filled-multiline-static"
        label="Sua proposta"
        multiline
        rows={10}
        variant="filled"
        InputProps={{ inputRef: null }}
      />
      <Button
        type="submit"
        icon={<MailSendIcon />}
        styles={{ alignSelf: 'flex-end' }}
      >
        enviar
      </Button>
    </Box>
  );
};
