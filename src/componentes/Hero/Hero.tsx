import { useEffect, useState } from 'react';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [textoAtual, setTextoAtual] = useState(0);
  const [textoExibido, setTextoExibido] = useState('');
  const [estaDigitando, setEstaDigitando] = useState(true);
  const { t } = useLanguage();
  
  const textos = [
    t('hero.roles.0'),
    t('hero.roles.1'),
    t('hero.roles.2'),
    t('hero.roles.3')
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const textoCompleto = textos[textoAtual];

    if (estaDigitando) {
      // Modo digitação
      if (textoExibido.length < textoCompleto.length) {
        timeoutId = setTimeout(() => {
          setTextoExibido(textoCompleto.substring(0, textoExibido.length + 1));
        }, 50);
      } else {
        // Terminou de digitar, espera e começa a apagar
        timeoutId = setTimeout(() => setEstaDigitando(false), 1500);
      }
    } else {
      // Modo apagamento
      if (textoExibido.length > 0) {
        timeoutId = setTimeout(() => {
          setTextoExibido(textoExibido.substring(0, textoExibido.length - 1));
        }, 50);
      } else {
        // Terminou de apagar, muda para o próximo texto
        setTextoAtual((prev) => (prev + 1) % textos.length);
        setEstaDigitando(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [textoAtual, textoExibido, estaDigitando, textos]);


  const baixarCurriculo = () => {

    const downloadText = t('hero.downloadCV');
    const isEnglish = downloadText === 'Download CV'; 

    let arquivoCurriculo = isEnglish ? '/En Curriculo 2025.pdf' : '/Pt Curriculo 2025.pdf';
    let nomeDownload = isEnglish ? 'Gustavo-Brito-CV-En.pdf' : 'Gustavo-Brito-CV-Pt.pdf';

    const link = document.createElement('a');
    link.href = arquivoCurriculo;
    link.download = nomeDownload;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(t('hero.downloadAlert'));
  };

const navegarProjetos = () => {
  const elemento = document.getElementById('projetos');
  if (elemento) {
    const header = document.querySelector('.cabecalho') as HTMLElement;
    const headerHeight = header ? header.offsetHeight : 80;
    
    const elementPosition = elemento.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-conteudo">
          <div className="hero-texto">
            <div className="saudacao animacao-aparecer">
              <span className="emoji">👋</span>
              {t('hero.greeting')}
            </div>
            
            <h1 className="nome animacao-aparecer">
              {t('hero.name')}
            </h1>
            
            <div className="profissao animacao-aparecer">
              <span className="texto-estatico">{t('hero.role.prefix')}</span>
              <span className="texto-dinamico">
                {textoExibido}
              </span>
            </div>
            
            <p className="descricao animacao-aparecer">
              {t('hero.description')}
            </p>
            
            <div className="hero-acoes animacao-aparecer">
              <button className="botao-primario" onClick={navegarProjetos}>
                {t('hero.viewProjects')}
              </button>
              <button className="botao-secundario" onClick={baixarCurriculo}>
                <span className="icone-download">⬇️</span>
                {t('hero.downloadCV')}
              </button>
            </div>
            
            <div className="redes-sociais animacao-aparecer">
              <a 
                href="https://github.com/GustaBrito" 
                className="rede-social" 
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icone" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gustavoag-brito/" 
                className="rede-social" 
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icone" />
              </a>
              <a 
                href="mailto:gustavo.adra@gmail.com" 
                className="rede-social" 
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icone" />
              </a>
              
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="perfil-container animacao-flutuar">
              <div className="perfil-imagem">
                <img 
                  src="/Portfolio.jpeg" 
                  alt="Foto de perfil de Gustavo Brito"
                  className="perfil-imagem"
                />
                <div className="perfil-decoracao"></div>
              </div>
              
              <div className="elementos-flutuantes">
                <div className="elemento-codigo elemento-1">{"{ }"}</div>
                <div className="elemento-codigo elemento-2">{"</>"}</div>
                <div className="elemento-codigo elemento-3">{"()"}</div>
                <div className="elemento-codigo elemento-4">{"[]"}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicador">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-texto">{t('hero.scrollDown')}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;