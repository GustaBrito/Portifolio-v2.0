import { useState, useEffect } from 'react';
import './Cabecalho.css';
import bandeiraBrasil from '../../assets/bandeira-brasil.png';
import bandeiraEUA from '../../assets/bandeira-eua.png';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [cabecalhoVisivel, setCabecalhoVisivel] = useState(true);
  const [scrollAnterior, setScrollAnterior] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollAtual = window.pageYOffset;
      
      if (scrollAtual > scrollAnterior && scrollAtual > 100) {
        setCabecalhoVisivel(true);
      } else {
        setCabecalhoVisivel(true);
      }
      
      setScrollAnterior(scrollAtual);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollAnterior]);

  const navegarPara = (id: string) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      const header = document.querySelector('.cabecalho') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 80;
      
      const elementPosition = elemento.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setMenuAberto(false);
    }
  };

  return (
    <header className={`cabecalho ${cabecalhoVisivel ? 'visivel' : 'oculto'}`}>
      <div className="container">
        <div className="cabecalho-conteudo">
          <div className="logo">
            <span className="logo-texto">{"<Dev/>"}</span>
          </div>
          
          <nav className={`navegacao ${menuAberto ? 'aberta' : ''}`}>
            <ul className="menu-lista">
              <li><button onClick={() => navegarPara('inicio')} className="menu-link">{t('nav.inicio')}</button></li>
              <li><button onClick={() => navegarPara('sobre')} className="menu-link">{t('nav.sobre')}</button></li>
              <li><button onClick={() => navegarPara('projetos')} className="menu-link">{t('nav.projetos')}</button></li>
              <li><button onClick={() => navegarPara('experiencia')} className="menu-link">{t('nav.experiencia')}</button></li>
              <li><button onClick={() => navegarPara('contato')} className="menu-link">{t('nav.contato')}</button></li>
            </ul>
          </nav>
          
          <div className="acoes-cabecalho">
            {/* Botão Idioma - MOSTRA APENAS A BANDEIRA ATIVA */}
            <button 
              className="botao-idioma"
              aria-label="Alternar idioma"
              onClick={toggleLanguage}
            >
              <span className="bandeiras">
                <img 
                  src={language === 'pt' ? bandeiraBrasil : bandeiraEUA} 
                  alt={language === 'pt' ? 'Brasil' : 'EUA'} 
                  className="bandeira-ativa" 
                />
                <img 
                  src={language === 'pt' ? bandeiraEUA : bandeiraBrasil} 
                  alt={language === 'pt' ? 'EUA' : 'Brasil'} 
                  className="bandeira-inativa" 
                  style={{ display: 'none' }} // FORÇA ficar escondida
                />
              </span>
            </button>
            
            {/* Botão Tema - MOSTRA APENAS O ÍCONE ATIVO */}
            <button 
              className="botao-tema"
              aria-label="Alternar tema"
              onClick={toggleTheme}
            >
              <span className="icone-tema">
                {theme === 'light' ? (
                  <>
                    <span className="tema-ativo">☀️</span>
                    <span className="tema-inativo" style={{ display: 'none' }}>🌙</span>
                  </>
                ) : (
                  <>
                    <span className="tema-ativo">🌙</span>
                    <span className="tema-inativo" style={{ display: 'none' }}>☀️</span>
                  </>
                )}
              </span>
            </button>
            
            <button 
              className={`menu-toggle ${menuAberto ? 'ativo' : ''}`}
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label="Alternar menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Cabecalho;