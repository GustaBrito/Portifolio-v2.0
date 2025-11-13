import Cabecalho from '@/componentes/Cabecalho/Cabecalho';
import Hero from '@/componentes/Hero/Hero';
import Sobre from '@/componentes/Sobre/Sobre';
import Projetos from '@/componentes/Projetos/Projetos';
import Experiencia from '@/componentes/Experiencia/Experiencia';
import Contato from '@/componentes/Contato/Contato';
import Rodape from '@/componentes/Rodape/Rodape';

const Index = () => {
  return (
    <div>
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Experiencia />
        <Contato />
      </main>
      <Rodape />
    </div>
  );
};

export default Index;