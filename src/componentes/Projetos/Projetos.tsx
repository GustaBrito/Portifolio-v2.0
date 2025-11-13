import { useState } from 'react';
import './Projetos.css';

import { FaJava, FaPython, FaDatabase, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaFigma, FaCss3} from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiMongodb, SiSharp} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { SiOracle, SiSass, SiCss3} from 'react-icons/si';

import './Projetos.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { projetos } from '../../data/projectsData';

const Projetos = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('C#');
  const { language, t } = useLanguage();

  const categorias = [
    { id: 'C#', nome: t('projects.filter.CSharp'), icone: <SiSharp /> },
    { id: 'Python', nome: t('projects.filter.Python'), icone: <FaPython /> },
    { id: 'React', nome: t('projects.filter.React'), icone: <FaReact /> },
    { id: 'todos', nome: t('projects.filter.all'), icone: '🎯' }

    // { id: 'C#', nome: t('projects.filter.CSharp'), icone: <SiSharp /> },
    // { id: 'Python', nome: t('projects.filter.Python'), icone: <FaPython /> },
    // { id: 'React', nome: t('projects.filter.React'), icone: <FaReact /> },
    // { id: 'JavaScript', nome: t('projects.filter.JavaScript'), icone: <FaJs /> },
    // { id: 'API', nome: t('projects.filter.API'), icone: '🔗' },
    // { id: 'Games', nome: t('projects.filter.Games'), icone: '🎮' },
    // { id: 'todos', nome: t('projects.filter.all'), icone: '🎯' }
  ];

  const projetosFiltrados = filtroAtivo === 'todos' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria.includes(filtroAtivo));

  return (
    <section id="projetos" className="secao">
      <div className="container">
        <div className="projetos-cabecalho texto-centro">
          <h2 className="titulo-secao">{t('projects.title')}</h2>
          <p className="subtitulo-secao">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="filtros-container">
          <div className="filtros-lista ">
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                className={`filtro-botao ${filtroAtivo === categoria.id ? 'ativo' : ''}`}
                onClick={() => setFiltroAtivo(categoria.id)}
              >
                <span className="filtro-icone">{categoria.icone}</span>
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>

        <div className="projetos-grid">
          {projetosFiltrados.map((projeto, index) => (
            <div 
              key={projeto.id}
              className={`projeto-card ${projeto.destaque ? 'destaque' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="projeto-imagem"
                style={{ 
                  backgroundImage: `url(${projeto.imagemFundo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="placeholder-projeto">
                  <span className="projeto-emoji">{projeto.imagem}</span>
                </div>

                {projeto.destaque && (
                  <div className="badge-destaque">⭐ {t('projects.highlight')}</div>
                )}
                <div className={`status-badge ${projeto.status}`}>
                  {projeto.status === 'concluido' ? `✅ ${t('projects.completed')}` : `🚧 ${t('projects.inProgress')}`}
                </div>
              </div>

              <div className="projeto-conteudo">
                <h3 className="projeto-titulo">{projeto.titulo[language]}</h3>
                <p className="projeto-descricao">{projeto.descricao[language]}</p>

                <div className="tecnologias-lista">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span key={techIndex} className="tecnologia-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projeto-acoes">
                  <a 
                    href={projeto.linkDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="botao-acao primario"
                  >
                    🌐 {t('projects.demo')}
                  </a>
                  <a 
                    href={projeto.linkGithub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="botao-acao secundario"
                  >
                    📂 {t('projects.code')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projetosFiltrados.length === 0 && (
          <div className="sem-projetos">
            <div className="sem-projetos-icone">🔍</div>
            <h3>{t('projects.noProjects')}</h3>
            <p>{t('projects.tryOtherCategory')}</p>
          </div>
        )}
      </div>

    </section>
  );
};

export default Projetos;