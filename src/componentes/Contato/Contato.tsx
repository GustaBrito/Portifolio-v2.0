import { useState } from 'react';
import './Contato.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contato = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const informacoesContato = [
    {
      icone: '📧',
      titulo: t('contact.email'),
      valor: 'gustavo.adra@gmail.com',
      descricao: t('contact.emailDesc'),
      link: 'mailto:gustavo.adra@gmail.com'
    },
    {
      icone: '📍',
      titulo: t('contact.location'),
      valor: 'Bauru, SP',
      descricao: t('contact.locationDesc'),
      link: 'javascript:void(0)'
    },
    {
      icone: '💼',
      titulo: t('contact.linkedin'),
      valor: '/in/gustavoag-brito',
      descricao: t('contact.linkedinDesc'),
      link: 'https://linkedin.com/in/gustavoag-brito'
    }
  ];

  const redesSociais = [
    { nome: 'GitHub', icone: <FaGithub />, link: 'https://github.com/GustaBrito', cor: '#333' },
    { nome: 'LinkedIn', icone: <FaLinkedin />, link: 'https://www.linkedin.com/in/gustavoag-brito/', cor: '#0077b5' },
    { nome: 'Email', icone: <FaEnvelope />, link: 'mailto:gustavo.adra@gmail.com', cor: '#ea4335' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nome && formData.email && formData.assunto && formData.mensagem;

  return (
    <section id="contato" className="secao">
      <div className="container">
        <div className="contato-cabecalho texto-centro">
          <h2 className="titulo-secao">{t('contact.title')}</h2>
          <p className="subtitulo-secao">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contato-conteudo">
          <div className="contato-info">
            <div className="info-principal">
              <h3 className="info-titulo">{t('contact.workTogether')}</h3>
              <p className="info-descricao">
                {t('contact.description')}
              </p>
            </div>

            <div className="informacoes-lista">
              {informacoesContato.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="info-item"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                >
                  <div className="info-icone">
                    <span>{info.icone}</span>
                  </div>
                  <div className="info-conteudo">
                    <h4 className="info-item-titulo">{info.titulo}</h4>
                    <div className="info-valor">{info.valor}</div>
                    <div className="info-item-descricao">{info.descricao}</div>
                  </div>
                  <div className="info-seta">→</div>
                </a>
              ))}
            </div>

            <div className="redes-sociais-secao">
              <h4 className="redes-titulo">{t('contact.followSocial')}</h4>
              <div className="redes-lista">
                {redesSociais.map((rede, index) => (
                  <a
                    key={index}
                    href={rede.link}
                    className="rede-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ '--cor-hover': rede.cor } as React.CSSProperties}
                  >
                    <span className="rede-icone">{rede.icone}</span>
                    <span className="rede-nome">{rede.nome}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contato-formulario">
            <div className="formulario-container">
              <h3 className="formulario-titulo">{t('contact.sendMessage')}</h3>
              
              {submitStatus === 'success' && (
                <div className="mensagem-sucesso">
                  <span className="sucesso-icone">✅</span>
                  {t('contact.successMessage')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mensagem-erro">
                  <span className="erro-icone">❌</span>
                  {t('contact.errorMessage')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="formulario">
                <div className="campo-grupo">
                  <div className="campo">
                    <label htmlFor="nome" className="campo-label">{t('contact.name')} *</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="campo-input"
                      placeholder={t('contact.namePlaceholder')}
                      required
                    />
                  </div>
                  
                  <div className="campo">
                    <label htmlFor="email" className="campo-label">{t('contact.email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="campo-input"
                      placeholder={t('contact.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                <div className="campo">
                  <label htmlFor="assunto" className="campo-label">{t('contact.subject')} *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="campo-input campo-select"
                    required
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="projeto">{t('contact.project')}</option>
                    <option value="freelance">{t('contact.freelance')}</option>
                    <option value="consultoria">{t('contact.consulting')}</option>
                    <option value="emprego">{t('contact.job')}</option>
                    <option value="parceria">{t('contact.partnership')}</option>
                    <option value="outro">{t('contact.other')}</option>
                  </select>
                </div>

                <div className="campo">
                  <label htmlFor="mensagem" className="campo-label">{t('contact.message')} *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="campo-input campo-textarea"
                    placeholder={t('contact.messagePlaceholder')}
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`botao-enviar ${!isFormValid ? 'desabilitado' : ''}`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <span className="enviar-icone">📤</span>
                      {t('contact.sendButton')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;