import { useRef } from 'react';
import { fetcher } from '@services/fetchers';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@components/Button';
import { MailSendIcon } from '@stylesComponents/icons/MailSend';
import { Input } from '@components/Input';

export const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function submit() {
    const message = {
      name: nameRef.current!.value,
      email: emailRef.current!.value,
      message: messageRef.current!.value,
    };

    fetcher()
      .post('/email', message)
      .then(() => alert('Sua mensagem foi enviada com Sucesso!'))
      .catch(() =>
        alert('Ops... Algo deu errado, tente novamente mais tarde.'),
      );
  }

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={(ev: any) => {
        submit();
        ev.preventDefault();
      }}
      sx={{
        '& .MuiTextField-root': { m: '0.5rem 0', width: '100%' },
      }}
    >
      <Input label="Nome" ref={nameRef} />
      <Input label="Email" ref={emailRef} type="email" />
      <TextField
        required
        id="filled-multiline-static"
        label="Mensagem"
        multiline
        rows={10}
        variant="filled"
        InputProps={{ inputRef: messageRef }}
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
