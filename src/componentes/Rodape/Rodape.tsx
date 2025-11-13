import './Rodape.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();
  const { t } = useLanguage();

  const navegacao = [
    { nome: t('nav.inicio'), id: 'inicio' },
    { nome: t('nav.sobre'), id: 'sobre' },
    { nome: t('nav.projetos'), id: 'projetos' },
    { nome: t('nav.experiencia'), id: 'experiencia' },
    { nome: t('nav.contato'), id: 'contato' }
  ];

  const redesSociais = [
    { nome: 'GitHub', icone: <FaGithub />, link: 'https://github.com/GustaBrito' },
    { nome: 'LinkedIn', icone: <FaLinkedin />, link: 'https://www.linkedin.com/in/gustavoag-brito/' },
    { nome: 'Email', icone: <FaEnvelope />, link: 'mailto:gustavo.adra@gmail.com' }
  ];

  const navegarPara = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const offset = 80; 
      const elementPosition = elemento.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-conteudo">
          <div className="rodape-principal">
            <div className="rodape-info">
              <div className="logo-rodape">
                <span className="logo-texto">{"<Dev/>"}</span>
              </div>
              <p className="rodape-descricao">
                {t('footer.description')}
              </p>
              <div className="localizacao">
                <span className="localizacao-icone">📍</span>
                <span>{t('footer.location')}</span>
              </div>
            </div>

            <div className="rodape-navegacao">
              <h4 className="rodape-titulo">{t('footer.navigation')}</h4>
              <ul className="navegacao-lista">
                {navegacao.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => navegarPara(item.id)}
                      className="navegacao-link"
                    >
                      {item.nome}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rodape-contato">
              <h4 className="rodape-titulo">{t('footer.contact')}</h4>
              <div className="contato-info">
                <a href="mailto:gustavo.adra@gmail.com" className="contato-item">
                  <span className="contato-icone">📧</span>
                  gustavo.adra@gmail.com
                </a>
                <div className="disponibilidade-info">
                  <span className="status-indicador"></span>
                  {t('footer.availableForProjects')}
                </div>
              </div>
            </div>

            <div className="rodape-redes">
              <h4 className="rodape-titulo">{t('footer.socialMedia')}</h4>
              <div className="redes-lista">
                {redesSociais.map((rede, index) => (
                  <a
                    key={index}
                    href={rede.link}
                    className="rede-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede.nome}
                  >
                    <span className="rede-icone">{rede.icone}</span>
                    <span className="rede-nome">{rede.nome}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rodape-inferior">
            <div className="copyright">
              <p>© {anoAtual} Gustavo A. G. de Brito. {t('footer.copyright')}</p>
              <p className="feito-com">
                {t('footer.madeWith')} <span className="coracao">❤️</span> {t('footer.madeWith') === 'Feito com' ? 'e muito ☕' : 'and lots of ☕'}
              </p>
            </div>

            <div className="rodape-acoes">
              <button onClick={voltarAoTopo} className="voltar-topo">
                <span className="topo-icone">⬆️</span>
                {t('footer.backToTop')}
              </button>
            </div>
          </div>
        </div>

        <div className="rodape-decoracao">
          <svg 
            className="waves" 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28" 
            preserveAspectRatio="none" 
            shapeRendering="auto"
          >
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(157, 202, 246, 0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(57, 132, 206, 0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 0, 255, 0.69)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(35, 124, 250, 0.69)" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;