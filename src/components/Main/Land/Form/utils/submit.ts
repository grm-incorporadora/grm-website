import { fetcher } from '@services/fetchers';

interface Submit {
  cepRef: React.RefObject<HTMLInputElement>;
  nameRef: React.RefObject<HTMLInputElement>;
  cityRef: React.RefObject<HTMLInputElement>;
  stateRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  companyRef: React.RefObject<HTMLInputElement>;
  addressRef: React.RefObject<HTMLInputElement>;
  proposalRef: React.RefObject<HTMLTextAreaElement>;
  imagesLinkRef: React.RefObject<HTMLInputElement>;
}

export function submit({
  cepRef,
  nameRef,
  cityRef,
  stateRef,
  emailRef,
  companyRef,
  addressRef,
  proposalRef,
  imagesLinkRef,
}: Submit) {
  const cep = cepRef.current?.value;
  const name = nameRef.current!.value;
  const city = cityRef.current!.value;
  const state = stateRef.current!.value;
  const email = emailRef.current!.value;
  const company = companyRef.current!.value;
  const address = addressRef.current!.value;
  const proposal = proposalRef.current!.value;
  const imagesLink = imagesLinkRef.current?.value;

  const dataSheet = [
    `<b>Nome:</b> ${name}<br/>`,
    `<b>Email:</b> ${email}<br/>`,
    `<b>Empresa:</b> ${company}<br/>`,
    cep && `<b>CEP:</b> ${cep}<br/>`,
    `<b>Endereço:</b> ${address}<br/>`,
    `<b>Cidade:</b> ${city}<br/>`,
    `<b>Estado:</b> ${state}<br/>`,
    imagesLink && `<b>Link de Imagens:</b> ${imagesLink}<br/>`,
    `<b>Proposta:</b> ${proposal}<br/>`,
  ].join('');

  const message = {
    name,
    email,
    message: dataSheet,
  };

  fetcher()
    .post('/email', message)
    .then(() => alert('Sua ficha foi enviada com Sucesso!'))
    .catch(() => alert('Ops... Algo deu errado, tente novamente mais tarde.'));
}
