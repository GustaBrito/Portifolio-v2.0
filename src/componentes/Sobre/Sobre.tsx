import React from 'react';
import './Sobre.css';
import { useLanguage } from '../../contexts/LanguageContext';

import { FaJava, FaPython, FaDatabase, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaFigma, FaCss3 } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiSharp, SiOracle, SiSass } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

// 1. DEFINIÇÃO DE TIPOS PARA HABILIDADES
interface Habilidade {
  nome: string;
  nivel: number;
  icone: React.ComponentType | string;
  categoria: string;
}

interface MiniHabilidadesProps {
  habilidades: Habilidade[];
  t: (key: string) => string; 
}

const habilidadesTecnicas: Habilidade[] = [
  { nome: 'C#', nivel: 85, icone: SiSharp, categoria: 'Backend' },
  { nome: 'JavaScript', nivel: 60, icone: FaJs, categoria: 'Linguagem' },
  { nome: 'React', nivel: 45, icone: FaReact, categoria: 'Framework' },
  { nome: 'Python', nivel: 70, icone: FaPython, categoria: 'Linguagem' },
  { nome: 'TypeScript', nivel: 50, icone: SiTypescript, categoria: 'Linguagem' },
  { nome: 'AWS', nivel: 20, icone: FaAws, categoria: 'Cloud' },
  { nome: 'Java', nivel: 20, icone: FaJava, categoria: 'Backend' },
  { nome: 'Node.js', nivel: 20, icone: FaNodeJs, categoria: 'Runtime' },
  { nome: 'Docker', nivel: 20, icone: FaDocker, categoria: 'DevOps' },
  { nome: 'PostgreSQL', nivel: 20, icone: SiPostgresql, categoria: 'Banco de Dados' },
  { nome: 'MongoDB', nivel: 20, icone: SiMongodb, categoria: 'Banco de Dados' },
  { nome: 'Git', nivel: 80, icone: FaGitAlt, categoria: 'Ferramentas' },
  { nome: 'Oracle', nivel: 80, icone: SiOracle, categoria: 'Banco de Dados' },
  { nome: 'Sass', nivel: 55, icone: SiSass, categoria: 'Frontend' },
  { nome: 'CSS3', nivel: 70, icone: FaCss3, categoria: 'Frontend' },
  { nome: 'Scrum', nivel: 75, icone: DiScrum, categoria: 'Metodologia' },
  { nome: 'Figma', nivel: 35, icone: FaFigma, categoria: 'Design' },
];

// Função auxiliar para determinar o tempo de experiência baseado no nível
const getExperienciaTempo = (nivel: number): string => {
  if (nivel >= 90) return '3+ anos';
  if (nivel >= 80) return '2+ anos';
  if (nivel >= 70) return '1+ ano';
  return '< 1 ano';
};

// ** Componente para renderizar ícones corretamente **
const RenderIcon: React.FC<{ icon: React.ComponentType | string }> = ({ icon: Icon }) => {
  if (typeof Icon === 'string') {
    return <span>{Icon}</span>;
  }
  return <Icon />;
};


const MiniHabilidades: React.FC<MiniHabilidadesProps> = ({ habilidades, t }) => {
  
  const habilidadesPrincipais = habilidades
    .filter(habilidade => 
      ['C#', 'Oracle', 'React', 'JavaScript', 'Python', 'AWS', 'Git', 'CSS3'].includes(habilidade.nome)
    )
    .sort((a, b) => b.nivel - a.nivel);

  return (
    <div className="mini-habilidades-container">
      <h4 className="mini-habilidades-titulo">{t('about.miniSkillsTitle')}</h4> 
      <div className="mini-habilidades-grid">
        {habilidadesPrincipais.map((habilidade, index) => (
          <div key={index} className="habilidade-item">
            <span className="habilidade-icone">
              <RenderIcon icon={habilidade.icone} />
            </span> 
            <div className="habilidade-info">
              <span className="habilidade-nome">{habilidade.nome}</span>
              <span className="habilidade-categoria">{habilidade.categoria}</span>
              <span className="habilidade-experiencia">
                {t('about.experienceLabel')}: {getExperienciaTempo(habilidade.nivel)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Sobre: React.FC = () => {
  const { t } = useLanguage();
  
  const informacoes = [
    { label: t('about.stats.experience'), valor: '1+' },
    { label: t('about.stats.projects'), valor: '30+' },
    { label: t('about.stats.clients'), valor: '15+' },
    { label: t('about.stats.code'), valor: '100k+' }
  ];

  return (
    <section id="sobre" className="secao">
      <div className="container">
        <div className="sobre-cabecalho texto-centro">
          <h2 className="titulo-secao">{t('about.title')}</h2>
          <p className="subtitulo-secao">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="sobre-conteudo">
          <div className="sobre-texto">
            <div className="texto-principal">
              <h3 className="sobre-titulo">
                {t('about.mainTitle')}
              </h3>
              
              <p className="sobre-paragrafo">
                {t('about.paragraph1')}
              </p>
              
              <p className="sobre-paragrafo">
                {t('about.paragraph2')}
              </p>
              
              <p className="sobre-paragrafo">
                {t('about.paragraph3')}
              </p>
            </div>
            
            <div className="sobre-qualidades">
              <div className="qualidade">
                <div className="qualidade-icone">🎯</div>
                <div className="qualidade-conteudo">
                  <h4>{t('about.quality1.title')}</h4>
                  <p>{t('about.quality1.desc')}</p>
                </div>
              </div>
              
              <div className="qualidade">
                <div className="qualidade-icone">🚀</div>
                <div className="qualidade-conteudo">
                  <h4>{t('about.quality2.title')}</h4>
                  <p>{t('about.quality2.desc')}</p>
                </div>
              </div>
              
              <div className="qualidade">
                <div className="qualidade-icone">🤝</div>
                <div className="qualidade-conteudo">
                  <h4>{t('about.quality3.title')}</h4>
                  <p>{t('about.quality3.desc')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="sobre-visual">
            <div className="estatisticas">
              {informacoes.map((info, index) => (
                <div key={index} className="estatistica">
                  <div className="estatistica-numero">{info.valor}</div>
                  <div className="estatistica-label">{info.label}</div>
                </div>
              ))}
            </div>
            
            <MiniHabilidades habilidades={habilidadesTecnicas} t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;