import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botão";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e gestão'  
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }
  
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto  label="Imagem" placeholder="Digite sua Imagem" />
        <ListaSuspensa obrigatorio={true} label='Time' itens={times}/>
        <Botao texto='Criar Card'/>
      </form>
    </section>
  );
};

export default Formulario;
