import { useState } from 'react';
import './Experiencia.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Experiencia = () => {
  const [timelineAtiva, setTimelineAtiva] = useState(0);
  const { t } = useLanguage();

  const experiencias = [
    {
      id: 1,
      cargo: t('experience.job1.position'),
      empresa: t('experience.job1.company'),
      periodo: t('experience.job1.period'),
      tipo: t('experience.job1.type'),
      descricao: t('experience.job1.description'),
      conquistas: [
        t('experience.job1.achievement1'),
        t('experience.job1.achievement2'),
        t('experience.job1.achievement3'),
        t('experience.job1.achievement4')
      ],
      tecnologias: [t('experience.job1.tech1'), t('experience.job1.tech2'), t('experience.job1.tech3'), t('experience.job1.tech4'), t('experience.job1.tech5'), t('experience.job1.tech6')],
      icone: '🚀'
    },
    {
      id: 2,
      cargo: t('experience.job2.position'),
      empresa: t('experience.job2.company'),
      periodo: t('experience.job2.period'),
      tipo: t('experience.job2.type'),
      descricao: t('experience.job2.description'),
      conquistas: [
        t('experience.job2.achievement1'),
        t('experience.job2.achievement2'),
        t('experience.job2.achievement3'),
        t('experience.job2.achievement4')
      ],
      tecnologias: [t('experience.job2.tech1'), t('experience.job2.tech2'), t('experience.job2.tech3'), t('experience.job2.tech4'), t('experience.job2.tech5'), t('experience.job2.tech6')],
      icone: '⚡'
    },
    {
      id: 3,
      cargo: t('experience.job3.position'),
      empresa: t('experience.job3.company'),
      periodo: t('experience.job3.period'),
      tipo: t('experience.job3.type'),
      descricao: t('experience.job3.description'),
      conquistas: [
        t('experience.job3.achievement1'),
        t('experience.job3.achievement2'),
        t('experience.job3.achievement3'),
        t('experience.job3.achievement4')
      ],
      tecnologias: [t('experience.job3.tech1'), t('experience.job3.tech2'), t('experience.job3.tech3'), t('experience.job3.tech4')],
      icone: '🔧'
    },
    {
      id: 4,
      cargo: t('experience.job4.position'),
      empresa: t('experience.job4.company'),
      periodo: t('experience.job4.period'),
      tipo: t('experience.job4.type'),
      descricao: t('experience.job4.description'),
      conquistas: [
        t('experience.job4.achievement1'),
        t('experience.job4.achievement2'),
        t('experience.job4.achievement3'),
        t('experience.job4.achievement4')
      ],
      tecnologias: [t('experience.job4.tech1'), t('experience.job4.tech2'), t('experience.job4.tech3'), t('experience.job4.tech4')],
      icone: '🌍'
    }
  ];

  const educacao = [
    {
      titulo: t('experience.education1.title'),
      instituicao: t('experience.education1.institution'),
      periodo: t('experience.education1.period'),
      descricao: t('experience.education1.description'),
      tipo: 'graduacao'
    },
    {
      titulo: t('experience.education2.title'),
      instituicao: t('experience.education2.institution'),
      periodo: t('experience.education2.period'),
      descricao: t('experience.education2.description'),
      tipo: 'certificacao'
    },
    {
      titulo: t('experience.education3.title'),
      instituicao: t('experience.education3.institution'),
      periodo: t('experience.education3.period'),
      descricao: t('experience.education3.description'),
      tipo: 'curso'
    }
  ];

  return (
    <section id="experiencia" className="secao secao-alternada">
      <div className="container">
        <div className="experiencia-cabecalho texto-centro">
          <h2 className="titulo-secao">{t('experience.title')}</h2>
          <p className="subtitulo-secao">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="experiencia-conteudo">
          <div className="timeline-container">
            <div className="timeline-linha"></div>
            
            {experiencias.map((exp, index) => (
              <div 
                key={exp.id}
                className={`timeline-item ${timelineAtiva === index ? 'ativa' : ''}`}
                onClick={() => setTimelineAtiva(index)}
              >
                <div className="timeline-marcador">
                  <span className="marcador-icone">{exp.icone}</span>
                </div>
                
                <div className="timeline-conteudo">
                  <div className="experiencia-card">
                    <div className="card-cabecalho">
                      <div className="cargo-info">
                        <h3 className="cargo-titulo">{exp.cargo}</h3>
                        <div className="empresa-info">
                          <span className="empresa-nome">{exp.empresa}</span>
                          <span className="tipo-trabalho">{exp.tipo}</span>
                        </div>
                      </div>
                      <div className="periodo-badge">{exp.periodo}</div>
                    </div>
                    
                    <p className="experiencia-descricao">{exp.descricao}</p>
                    
                    <div className="experiencia-detalhes">
                      <div className="conquistas-secao">
                        <h4 className="conquistas-titulo">{t('experience.achievements')}</h4>
                        <ul className="conquistas-lista">
                          {exp.conquistas.slice(0, 2).map((conquista, conquistaIndex) => (
                            <li key={conquistaIndex} className="conquista-item">
                              <span className="conquista-icone">✅</span>
                              {conquista}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="tecnologias-secao">
                        <h4 className="tecnologias-titulo">{t('experience.technologies')}</h4>
                        <div className="tecnologias-lista">
                          {exp.tecnologias.map((tech, techIndex) => (
                            <span key={techIndex} className="tecnologia-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="educacao-secao">
          <h3 className="categoria-titulo">{t('experience.education')}</h3>
          <div className="educacao-grid">
            {educacao.map((item, index) => (
              <div key={index} className={`educacao-card ${item.tipo}`}>
                <div className="educacao-icone">
                  {item.tipo === 'graduacao' ? '🎓' : 
                   item.tipo === 'certificacao' ? '🏆' : '📚'}
                </div>
                
                <div className="educacao-conteudo">
                  <h4 className="educacao-titulo">{item.titulo}</h4>
                  <div className="educacao-instituicao">{item.instituicao}</div>
                  <div className="educacao-periodo">{item.periodo}</div>
                  <p className="educacao-descricao">{item.descricao}</p>
                </div>
                
                <div className={`tipo-badge ${item.tipo}`}>
                  {item.tipo === 'graduacao' ? t('experience.graduation') : 
                   item.tipo === 'certificacao' ? t('experience.certification') : t('experience.course')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;