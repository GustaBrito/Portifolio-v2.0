import { Language } from '../contexts/LanguageContext';

import HacknSlash from '../assets/projetos/SecretWave.png';
import Portf1 from '../assets/projetos/ProjetoPortifolio.png';
import Portf2 from '../assets/projetos/ProjetoPortifolio2.png';
import ConversorMoeda from '../assets/projetos/ConversorMoeda.png';
import VendaEstorno from '../assets/projetos/VendaEstorno.png';
import PrevisaoTempo from '../assets/projetos/PrevisaoTempo.png';
import GeradorSenha from '../assets/projetos/GeradorSenha.png';
import JogoVelha from '../assets/projetos/JogoDaVelhaPlay.png';
import Leitor from '../assets/projetos/PrjLeitor.png';
import CalculadoraSimples from '../assets/projetos/CalculadoraSimples.png';

export interface Project {
  id: number;
  titulo: Record<Language, string>;
  descricao: Record<Language, string>;
  descricaoCompleta: Record<Language, string>;
  categoria: string[];
  tecnologias: string[];
  imagem: string;
  imagemFundo: string;
  linkDemo: string;
  linkGithub: string;
  status: 'concluido' | 'desenvolvimento';
  destaque?: boolean;
}

export const projetos: Project[] = [
  {
    id: 1,
    titulo: {
      pt: 'Leitor de Documentos com IA',
      en: 'AI Document Reader'
    },
    descricao: {
      pt: 'Aplicação full-stack para processamento inteligente de documentos com integração Gemini AI.',
      en: 'Full-stack application for intelligent document processing with Gemini AI integration.'
    },
    descricaoCompleta: {
      pt: 'Sistema completo para análise de documentos (PDF, JPG, PNG) usando Python no backend e JavaScript no frontend. Integra API Gemini AI para análise de imagens e conteúdo, automatizando extração de dados e geração de relatórios estruturados.',
      en: 'Complete system for document analysis (PDF, JPG, PNG) using Python backend and JavaScript frontend. Integrates Gemini AI API for image and content analysis, automating data extraction and structured report generation.'
    },
    categoria: ['Python','JavaScript','API'],
    tecnologias: ['Python', 'JavaScript', 'HTML/CSS', 'Gemini AI', 'Flask'],
    imagem: '',
    imagemFundo: Leitor,
    linkDemo: '#',
    linkGithub: 'https://github.com/GustaBrito/PrjLeitor',
    status: 'concluido',
    destaque: true
  },
  {
    id: 2,
    titulo: {
      pt: 'Jogo Hack n Slash 2D - Secret Wave',
      en: '2D Hack n Slash Game - Secret Wave'
    },
    descricao: {
      pt: 'Jogo 2D completo desenvolvido em Python com Pygame, sistema de evolução e leaderboard.',
      en: 'Complete 2D game developed in Python with Pygame, evolution system and leaderboard.'
    },
    descricaoCompleta: {
      pt: 'Jogo 2D do gênero hack and slash com combate dinâmico, sistema de níveis, upgrades de personagem, leaderboard competitivo e múltiplos estados de jogo. Desenvolvido com arquitetura modular e otimizado para performance.',
      en: '2D hack and slash game with dynamic combat, level system, character upgrades, competitive leaderboard and multiple game states. Developed with modular architecture and optimized for performance.'
    },
    categoria: ['Python','Games'],
    tecnologias: ['Python', 'Pygame', 'JSON'],
    imagem: '',
    imagemFundo: HacknSlash,
    linkDemo: 'https://github.com/GustaBrito/HacknSlash-Python/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/HacknSlash-Python',
    status: 'concluido',
    destaque: true
  },
  {
    id: 3,
    titulo: {
      pt: 'Portfólio Profissional',
      en: 'Professional Portfolio'
    },
    descricao: {
      pt: 'Portfólio pessoal com React e TypeScript, temas claro/escuro e internacionalização.',
      en: 'Personal portfolio with React and TypeScript, light/dark themes and internationalization.'
    },
    descricaoCompleta: {
      pt: 'Portfólio moderno e responsivo desenvolvido com React + TypeScript. Inclui internacionalização (i18n), tema claro/escuro persistente, animações com Framer Motion, avatar LEGO animado e estrutura modular com componentes reutilizáveis.',
      en: 'Modern responsive portfolio developed with React + TypeScript. Includes internationalization (i18n), persistent light/dark theme, Framer Motion animations, animated LEGO avatar and modular structure with reusable components.'
    },
    categoria: ['React','Javascript'],
    tecnologias: ['React', 'TypeScript', 'Framer Motion', 'i18n', 'CSS3'],
    imagem: '',
    imagemFundo: Portf2,
    linkDemo: '#',
    linkGithub: 'https://github.com/GustaBrito/Portifolio',
    status: 'concluido',
    destaque: true
  },
  {
    id: 4,
    titulo: {
      pt: 'Sistema de Vendas e Estornos',
      en: 'Sales and Refund System'
    },
    descricao: {
      pt: 'Aplicação desktop em C# para controle de produtos, vendas, estornos e marcas.',
      en: 'Desktop application in C# for product control, sales, refunds and brands.'
    },
    descricaoCompleta: {
      pt: 'Sistema desktop completo desenvolvido em C# com Windows Forms e SQLite. Segue arquitetura em camadas (DTO, DAL, BLL) com interface dinâmica, autenticação de usuários, importação/exportação de dados e controle total do fluxo comercial.',
      en: 'Complete desktop system developed in C# with Windows Forms and SQLite. Follows layered architecture (DTO, DAL, BLL) with dynamic interface, user authentication, data import/export and complete business flow control.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', 'SQLite', '.NET'],
    imagem: '',
    imagemFundo: VendaEstorno,
    linkDemo: 'https://github.com/GustaBrito/PrjVendaEstorno/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/PrjVendaEstorno',
    status: 'concluido'
  },
  {
    id: 5,
    titulo: {
      pt: 'Previsão do Tempo',
      en: 'Weather Forecast'
    },
    descricao: {
      pt: 'Aplicativo desktop para consulta de previsão do tempo com integração de API.',
      en: 'Desktop application for weather forecast consultation with API integration.'
    },
    descricaoCompleta: {
      pt: 'Aplicativo desenvolvido em C# (.NET) que consome API de previsão do tempo para exibir condições climáticas em tempo real. Interface intuitiva com busca por cidades e exibição detalhada das condições atmosféricas.',
      en: 'Application developed in C# (.NET) that consumes weather forecast API to display real-time weather conditions. Intuitive interface with city search and detailed display of atmospheric conditions.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', 'API Integration', '.NET'],
    imagem: '',
    imagemFundo: PrevisaoTempo,
    linkDemo: 'https://github.com/GustaBrito/PrjPrevisaoTempo/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/PrjPrevisaoTempo',
    status: 'concluido'
  },
  {
    id: 6,
    titulo: {
      pt: 'Conversor de Moedas',
      en: 'Currency Converter'
    },
    descricao: {
      pt: 'Aplicativo desktop para conversão de moedas com integração de APIs públicas.',
      en: 'Desktop application for currency conversion with public APIs integration.'
    },
    descricaoCompleta: {
      pt: 'Conversor de moedas desenvolvido em C# (.NET WinForms) com interface gráfica intuitiva. Integra APIs externas para conversão de câmbio em tempo real e carregamento dinâmico das moedas disponíveis.',
      en: 'Currency converter developed in C# (.NET WinForms) with intuitive graphical interface. Integrates external APIs for real-time exchange conversion and dynamic loading of available currencies.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', 'API Integration', '.NET'],
    imagem: '',
    imagemFundo: ConversorMoeda,
    linkDemo: 'https://github.com/GustaBrito/PrjConversorMoeda/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/PrjConversorMoeda',
    status: 'concluido'
  },
  {
    id: 7,
    titulo: {
      pt: 'Gerador de Senhas',
      en: 'Password Generator'
    },
    descricao: {
      pt: 'Aplicativo desktop para geração de senhas seguras com opções personalizáveis.',
      en: 'Desktop application for generating secure passwords with customizable options.'
    },
    descricaoCompleta: {
      pt: 'Gerador de senhas desenvolvido em C# com diversas opções de personalização incluindo comprimento, uso de caracteres especiais, números e letras maiúsculas/minúsculas. Interface amigável com copiar para área de transferência.',
      en: 'Password generator developed in C# with various customization options including length, special characters, numbers and uppercase/lowercase letters. User-friendly interface with copy to clipboard functionality.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', '.NET'],
    imagem: '',
    imagemFundo: GeradorSenha,
    linkDemo: 'https://github.com/GustaBrito/PrjGeradorSenha/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/PrjGeradorSenha',
    status: 'concluido'
  },
  {
    id: 8,
    titulo: {
      pt: 'Jogo da Velha',
      en: 'Tic Tac Toe Game'
    },
    descricao: {
      pt: 'Aplicativo desktop do clássico jogo da velha com sistema de turnos e pontuação.',
      en: 'Desktop application of the classic tic tac toe game with turn system and scoring.'
    },
    descricaoCompleta: {
      pt: 'Implementação do jogo da velha em C# com interface gráfica intuitiva. Inclui sistema de turnos, contagem de vitórias para cada jogador, reinicialização automática e validação de jogadas.',
      en: 'Tic tac toe game implementation in C# with intuitive graphical interface. Includes turn system, victory counting for each player, automatic reset and move validation.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', '.NET'],
    imagem: '',
    imagemFundo: JogoVelha,
    linkDemo: 'https://github.com/GustaBrito/PrjJogoDaVelha/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/PrjJogoDaVelha',
    status: 'concluido'
  },
  {
    id: 9,
    titulo: {
      pt: 'Calculadora Simples',
      en: 'Simple Calculator'
    },
    descricao: {
      pt: 'Aplicativo desktop de calculadora com operações básicas e suporte a atalhos de teclado.',
      en: 'Desktop calculator application with basic operations and keyboard shortcuts support.'
    },
    descricaoCompleta: {
      pt: 'Calculadora desenvolvida em C# com todas as operações matemáticas básicas (soma, subtração, multiplicação, divisão). Interface limpa com suporte a teclado para entrada rápida e histórico de operações.',
      en: 'Calculator developed in C# with all basic mathematical operations (addition, subtraction, multiplication, division). Clean interface with keyboard support for quick input and operation history.'
    },
    categoria: ['C#'],
    tecnologias: ['C#', 'Windows Forms', '.NET'],
    imagem: '',
    imagemFundo: CalculadoraSimples,
    linkDemo: 'https://github.com/GustaBrito/CalculadoraSimples/releases/tag/v1.0',
    linkGithub: 'https://github.com/GustaBrito/CalculadoraSimples',
    status: 'concluido'
  },
  {
    id: 10,
    titulo: {
      pt: 'Portfólio de Testes',
      en: 'Test Portfolio'
    },
    descricao: {
      pt: 'Primeiro projeto com React para testar componentes e funcionalidades básicas.',
      en: 'First React project to test components and basic features.'
    },
    descricaoCompleta: {
      pt: 'Projeto inicial para aprender React, testando hooks, componentes funcionais e estados. Foco em entender os conceitos fundamentais.',
      en: 'Initial project to learn React, testing hooks, functional components and states. Focus on understanding fundamental concepts.'
    },
    categoria: ['React','Aprendizado'],
    tecnologias: ['React', 'JavaScript', 'CSS3', 'HTML5'],
    imagem: '',
    imagemFundo: Portf1,
    linkDemo: 'https://gustabrito.github.io/Portifolio/',
    linkGithub: 'https://github.com/meuuser/portfolio-teste',
    status: 'concluido',
    destaque: false
  }
];