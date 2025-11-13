import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Cabeçalho
    'nav.inicio': 'Início',
    'nav.sobre': 'Sobre',
    'nav.habilidades': 'Habilidades',
    'nav.projetos': 'Projetos',
    'nav.experiencia': 'Experiência',
    'nav.contato': 'Contato',
    
    // Hero 
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Gustavo Brito',
    'hero.role.prefix': 'Eu sou ',
    'hero.roles.0': 'Desenvolvedor Full Stack',
    'hero.roles.1': 'Especialista em C# & .NET',
    'hero.roles.2': 'Criador de Soluções Desktop, Web e IA',
    'hero.roles.3': 'Arquiteto de APIs Eficientes',
    'hero.description': 'Desenvolvedor Full Stack que transforma desafios em soluções eficientes. Automatizei um processo crítico, reduzindo o tempo de execução de 6 horas para 5 minutos com Python e IA. Stack principal: C# (.NET) | React | Python | SQL, criando aplicações desktop, web e APIs integradas.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.downloadCV': 'Baixar CV',
    'hero.scrollDown': 'Role para baixo',
    'hero.downloadAlert': 'Download do currículo iniciado!',
    
    // Sobre
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça minha jornada e paixão pela tecnologia',
    'about.mainTitle': 'Desenvolvedor Full Stack apaixonado por criar soluções eficientes',
    'about.paragraph1': 'Sou um desenvolvedor full stack em início de carreira, com experiência em criar aplicações desktop, web e APIs que resolvem problemas reais. Minha paixão por tecnologia me levou a transformar processos - como automatizar uma análise de dados que reduziu o tempo de 6 horas para 5 minutos.',
    'about.paragraph2': 'Atuo principalmente com C# (.NET), Python e JavaScript/TypeScript, desenvolvendo tanto backend quanto frontend. Acredito que um bom código não apenas funciona, mas é limpo, bem estruturado e entrega valor tangível para os negócios.',
    'about.paragraph3': 'Quando não estou codificando, mantenho um portfólio ativo com mais de 27 projetos no GitHub, onde aprendo novas tecnologias e praticar boas práticas de desenvolvimento.',
    'about.quality1.title': 'Foco em Resultados',
    'about.quality1.desc': 'Busco entregar soluções que realmente resolvem problemas e geram eficiência.',
    'about.quality2.title': 'Mentalidade de Automação',
    'about.quality2.desc': 'Identifico oportunidades para automatizar processos e simplificar tarefas repetitivas.',
    'about.quality3.title': 'Aprendizado Contínuo',
    'about.quality3.desc': 'Dedico-me constantemente a aprender novas tecnologias e melhorar minhas habilidades.',
    'about.stats.experience': 'Anos de Experiência',
    'about.stats.projects': 'Projetos no GitHub',
    'about.stats.clients': 'Filiais Impactadas',
    'about.stats.code': 'Processos Otimizados',
    'about.miniSkillsTitle': 'Principais Habilidades',
    'about.experienceLabel': 'Experiência',
    'about.animatedCode.declaration': 'const desenvolvedor = {',
    'about.animatedCode.name': '  nome: "Gustavo Brito",',
    'about.animatedCode.specialty': '  especialidade: "Full Stack",',
    'about.animatedCode.passion': '  paixao: "Tecnologia",',
    'about.animatedCode.focus': '  foco: "Soluções Eficientes"',
    'about.animatedCode.closing': '}',

    // Habilidades
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologias e ferramentas que utilizo para criar soluções completas',
    'skills.mainTech': 'Tecnologias Principais',
    'skills.additionalTools': 'Ferramentas & Tecnologias Adicionais',
    'skills.specializations': 'Áreas de Especialização',
    'skills.frontend.title': 'Desenvolvimento Frontend',
    'skills.frontend.desc': 'Interfaces modernas e responsivas com React, TypeScript, HTML5 e CSS3',
    'skills.backend.title': 'Desenvolvimento Backend',
    'skills.backend.desc': 'APIs RESTful e aplicações desktop com C# (.NET) e Python',
    'skills.fullstack.title': 'Desenvolvimento Full Stack',
    'skills.fullstack.desc': 'Soluções completas desde o backend em C#/Python até interfaces com React',
    'skills.devops.title': 'Ferramentas & Banco de Dados',
    'skills.devops.desc': 'Versionamento com Git, e bancos de dados relacionais como SQLite e Oracle',
    'skills.level.expert': 'Avançado',
    'skills.level.advanced': 'Intermediário',
    'skills.level.intermediate': 'Básico',
    'skills.level.basic': 'Iniciante',

    // Projetos
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Conheça alguns dos projetos que desenvolvi e as tecnologias utilizadas',

    'projects.filter.CSharp': 'C#',
    'projects.filter.Python': 'Python',
    'projects.filter.React': 'React',
    'projects.filter.JavaScript': 'Javascript',
    'projects.filter.API': 'API',
    'projects.filter.Games': 'Jogos',
    'projects.filter.all': 'Todos',
    
    'projects.viewDetails': 'Ver Detalhes',
    'projects.highlight': 'Destaque',
    'projects.completed': 'Concluído',
    'projects.inProgress': 'Em Desenvolvimento',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Ver Código',
    'projects.techUsed': 'Tecnologias Utilizadas',
    'projects.highlightBadge': 'Projeto Destaque',
    'projects.noProjects': 'Nenhum projeto encontrado',
    'projects.tryOtherCategory': 'Tente selecionar outra categoria',
    
    // Experiência
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Minha jornada profissional e evolução como desenvolvedor',
    'experience.achievements': 'Principais Conquistas:',
    'experience.technologies': 'Habilidades Técnicas:',
    'experience.education': 'Formação & Certificações',
    'experience.careerSummary': 'Resumo da Carreira',
    'experience.yearsExp': 'Anos de Experiência',
    'experience.projectsDelivered': 'Projetos Entregues',
    'experience.companies': 'Empresas',
    'experience.technologies.count': 'Tecnologias',
    'experience.graduation': 'Graduação',
    'experience.certification': 'Certificação',
    'experience.course': 'Curso',
    
    // Experiência - Trabalho

    'experience.job1.position': 'Auxiliar de TI',
    'experience.job1.company': 'Confiança Supermercados',
    'experience.job1.period': 'Jul 2025 - Presente',
    'experience.job1.type': 'CLT',
    'experience.job1.description': 'Desenvolvimento de softwares Desktop/Web e APIs para automação de processos operacionais e logísticos, otimizando fluxos de trabalho em mais de 10 filiais.',
    'experience.job1.achievement1': 'Redução de processo de análise de dados de 6 horas para 5 minutos',
    'experience.job1.achievement2': 'Desenvolvimento de mais de 10 projetos complexos em produção',
    'experience.job1.achievement3': 'Automação de tarefas repetitivas em múltiplas filiais',
    'experience.job1.achievement4': 'Otimização de fluxos de trabalho com ganhos de eficiência comprovados',

    'experience.job2.position': 'Estágio em Desenvolvimento de Software',
    'experience.job2.company': 'Confiança Supermercados',
    'experience.job2.period': 'Set 2024 - Jun 2025',
    'experience.job2.type': 'Estágio',
    'experience.job2.description': 'Auxílio no desenvolvimento e manutenção de sistemas internos, contribuindo para automação de processos e aumento da produtividade das equipes.',
    'experience.job2.achievement1': 'Participação ativa no ciclo completo de desenvolvimento',
    'experience.job2.achievement2': 'Criação de projetos robustos adotados pela maioria das unidades',
    'experience.job2.achievement3': 'Automação de tarefas manuais repetitivas',
    'experience.job2.achievement4': 'Aprendizado prático em desenvolvimento enterprise',

    'experience.job3.position': 'Assistente de Manutenção de Máquinas',
    'experience.job3.company': 'Alpack do Brasil',
    'experience.job3.period': 'Jan 2024 - Ago 2024',
    'experience.job3.type': 'CLT',
    'experience.job3.description': 'Especialização no funcionamento e manutenção de máquinas seladoras/envolvedoras/arqueadoras de caixas e embalagens.',
    'experience.job3.achievement1': 'Desenvolvimento do pensamento lógico para fluxo de procedimentos',
    'experience.job3.achievement2': 'Habilidade em manutenção preventiva e corretiva',
    'experience.job3.achievement3': 'Conhecimento técnico em sistemas mecânicos e elétricos',
    'experience.job3.achievement4': 'Trabalho em ambiente industrial de alta demanda',

    'experience.job4.position': 'Gerente de Comércio Alimentício',
    'experience.job4.company': 'Cloud Nine - Irlanda',
    'experience.job4.period': 'Mai 2022 - Set 2023',
    'experience.job4.type': 'Tempo Integral',
    'experience.job4.description': 'Supervisão e gerência em gelateria na Irlanda, com responsabilidade sobre treinamento, trabalho em equipe, qualidade de atendimento e gestão operacional.',
    'experience.job4.achievement1': 'Gestão de equipe multicultural em ambiente internacional',
    'experience.job4.achievement2': 'Desenvolvimento de habilidades de liderança e comunicação',
    'experience.job4.achievement3': 'Fluência em inglês alcançada (nível C1)',
    'experience.job4.achievement4': 'Experiência em atendimento ao cliente e vendas',

    'experience.job1.tech1': 'C#',
    'experience.job1.tech2': 'Python',
    'experience.job1.tech3': 'JavaScript',
    'experience.job1.tech4': 'APIs REST',
    'experience.job1.tech5': 'Oracle',
    'experience.job1.tech6': 'Windows Forms',

    'experience.job2.tech1': 'C#',
    'experience.job2.tech2': '.NET',
    'experience.job2.tech3': 'SQL',
    'experience.job2.tech4': 'JavaScript',
    'experience.job2.tech5': 'HTML/CSS',
    'experience.job2.tech6': 'Python',

    'experience.job3.tech1': 'Sistemas Mecânicos',
    'experience.job3.tech2': 'Elétrica Industrial',
    'experience.job3.tech3': 'Manutenção Preventiva',
    'experience.job3.tech4': 'Procedimentos',

    'experience.job4.tech1': 'Liderança',
    'experience.job4.tech2': 'Gestão de Equipe',
    'experience.job4.tech3': 'Atendimento ao Cliente',
    'experience.job4.tech4': 'Inglês Avançado',

    // Experiência - Educação

    'experience.education1.title': 'Análise e Desenvolvimento de Sistemas',
    'experience.education1.institution': 'Uninter',
    'experience.education1.period': '2023 - Atual',
    'experience.education1.description': 'Formação focada em modelagem de dados, garantia de qualidade, integração de dados e desenvolvimento de sistemas.',

    'experience.education2.title': 'Proficiência em Inglês - Nível C1',
    'experience.education2.institution': 'City Language School - Irlanda',
    'experience.education2.period': '2022 - 2022',
    'experience.education2.description': 'Certificação de proficiência em inglês adquirida durante período de imersão na Irlanda.',

    'experience.education3.title': 'Ensino Médio com Técnico em Informática',
    'experience.education3.institution': 'Etec Rodrigues de Abreu',
    'experience.education3.period': '2015 - 2018',
    'experience.education3.description': 'Formação técnica que despertou a paixão por programação e desenvolvimento de software.',

    // Contato
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades',
    'contact.workTogether': 'Vamos trabalhar juntos!',
    'contact.description': 'Estou sempre interessado em novos projetos desafiadores e oportunidades de colaboração. Se você tem uma ideia ou precisa de ajuda com desenvolvimento, entre em contato!',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.linkedin': 'LinkedIn',
    'contact.emailDesc': 'Envie-me um email para projetos ou dúvidas',
    'contact.phoneDesc': 'Disponível para ligações das 9h às 18h',
    'contact.locationDesc': 'Disponível para trabalho remoto ou presencial',
    'contact.linkedinDesc': 'Conecte-se comigo no LinkedIn',
    'contact.followSocial': 'Me siga nas redes sociais',
    'contact.sendMessage': 'Envie uma mensagem',
    'contact.name': 'Nome',
    'contact.subject': 'Assunto',
    'contact.message': 'Mensagem',
    'contact.selectSubject': 'Selecione um assunto',
    'contact.project': 'Novo Projeto',
    'contact.freelance': 'Trabalho Freelance',
    'contact.consulting': 'Consultoria',
    'contact.job': 'Oportunidade de Emprego',
    'contact.partnership': 'Parceria',
    'contact.other': 'Outro',
    'contact.namePlaceholder': 'Seu nome completo',
    'contact.emailPlaceholder': 'seu@email.com',
    'contact.messagePlaceholder': 'Conte-me mais sobre seu projeto ou necessidade...',
    'contact.sending': 'Enviando...',
    'contact.sendButton': 'Enviar Mensagem',
    'contact.successMessage': 'Mensagem enviada com sucesso! Retornarei em breve.',
    'contact.errorMessage': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.available': 'Disponível para novos projetos',
    'contact.responseTime': 'Respondo normalmente em até 24 horas',
    
    // Rodapé
    'footer.description': 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.',
    'footer.location': 'Bauru, SP - Brasil',
    'footer.navigation': 'Navegação',
    'footer.contact': 'Contato',
    'footer.socialMedia': 'Redes Sociais',
    'footer.favoriteTech': 'Tecnologias Favoritas',
    'footer.years': 'Anos',
    'footer.projects': 'Projetos',
    'footer.clients': 'Clientes',
    'footer.availableForProjects': 'Disponível para projetos',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.madeWith': 'Feito com',
    'footer.backToTop': 'Voltar ao topo',
  },
  



  en: {
    // Header
    'nav.inicio': 'Home',
    'nav.sobre': 'About',
    'nav.habilidades': 'Skills',
    'nav.projetos': 'Projects',
    'nav.experiencia': 'Experience',
    'nav.contato': 'Contact',
    
    // Hero 
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Gustavo Brito',
    'hero.role.prefix': 'I am ',
    'hero.roles.0': 'Full Stack Developer',
    'hero.roles.1': 'C# & .NET Specialist',
    'hero.roles.2': 'Desktop, Web & AI Solutions Creator',
    'hero.roles.3': 'Efficient APIs Architect',
    'hero.description': 'Full Stack Developer who transforms challenges into efficient solutions. I automated a critical process, reducing execution time from 6 hours to 5 minutes using Python and AI. Main stack: C# (.NET) | React | Python | SQL, creating desktop applications, web and integrated APIs.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'hero.scrollDown': 'Scroll down',
    'hero.downloadAlert': 'Resume download started!',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know my journey and passion for technology',
    'about.mainTitle': 'Full Stack Developer passionate about creating efficient solutions',
    'about.paragraph1': 'I am an early-career full stack developer with experience in creating desktop applications, web and APIs that solve real problems. My passion for technology led me to transform processes - such as automating a data analysis that reduced time from 6 hours to 5 minutes.',
    'about.paragraph2': 'I work mainly with C# (.NET), Python and JavaScript/TypeScript, developing both backend and frontend. I believe that good code not only works, but is clean, well-structured and delivers tangible business value.',
    'about.paragraph3': 'When I am not coding, I maintain an active portfolio with over 27 projects on GitHub, where I learn new technologies and practice good development practices.',
    'about.quality1.title': 'Results-Oriented',
    'about.quality1.desc': 'I seek to deliver solutions that truly solve problems and generate efficiency.',
    'about.quality2.title': 'Automation Mindset',
    'about.quality2.desc': 'I identify opportunities to automate processes and simplify repetitive tasks.',
    'about.quality3.title': 'Continuous Learning',
    'about.quality3.desc': 'I constantly dedicate myself to learning new technologies and improving my skills.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.projects': 'GitHub Projects',
    'about.stats.clients': 'Impacted Branches',
    'about.stats.code': 'Optimized Processes',
    'about.miniSkillsTitle': 'Key Skills',
    'about.experienceLabel': 'Experience',
    'about.animatedCode.declaration': 'const developer = {',
    'about.animatedCode.name': '  name: "Gustavo Brito",',
    'about.animatedCode.specialty': '  specialty: "Full Stack",',
    'about.animatedCode.passion': '  passion: "Technology",',
    'about.animatedCode.focus': '  focus: "Efficient Solutions"',
    'about.animatedCode.closing': '}',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I use to create complete solutions',
    'skills.mainTech': 'Main Technologies',
    'skills.additionalTools': 'Additional Tools & Technologies',
    'skills.specializations': 'Specialization Areas',
    'skills.frontend.title': 'Frontend Development',
    'skills.frontend.desc': 'Modern and responsive interfaces with React, TypeScript, HTML5 and CSS3',
    'skills.backend.title': 'Backend Development',
    'skills.backend.desc': 'RESTful APIs and desktop applications with C# (.NET) and Python',
    'skills.fullstack.title': 'Full Stack Development',
    'skills.fullstack.desc': 'Complete solutions from C#/Python backend to React interfaces',
    'skills.devops.title': 'Tools & Databases',
    'skills.devops.desc': 'Version control with Git, and relational databases like SQLite and Oracle',
    'skills.level.expert': 'Advanced',
    'skills.level.advanced': 'Intermediate',
    'skills.level.intermediate': 'Basic',
    'skills.level.basic': 'Beginner',

    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Check out some of the projects I developed and the technologies used',

    'projects.filter.CSharp': 'C#',
    'projects.filter.Python': 'Python',
    'projects.filter.React': 'React',
    'projects.filter.JavaScript': 'Javascript',
    'projects.filter.API': 'API',
    'projects.filter.Games': 'Games',
    'projects.filter.all': 'Todos',

    'projects.viewDetails': 'View Details',
    'projects.highlight': 'Highlight',
    'projects.completed': 'Completed',
    'projects.inProgress': 'In Development',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'View Code',
    'projects.techUsed': 'Technologies Used',
    'projects.highlightBadge': 'Featured Project',
    'projects.noProjects': 'No projects found',
    'projects.tryOtherCategory': 'Try selecting another category',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My professional journey and evolution as a developer',
    'experience.achievements': 'Main Achievements:',
    'experience.technologies': 'Technical Habilities:',
    'experience.education': 'Education & Certifications',
    'experience.careerSummary': 'Career Summary',
    'experience.yearsExp': 'Years of Experience',
    'experience.projectsDelivered': 'Projects Delivered',
    'experience.companies': 'Companies',
    'experience.technologies.count': 'Technologies',
    'experience.graduation': 'Graduation',
    'experience.certification': 'Certification',
    'experience.course': 'Course',
    
    // Experiência - Trabalho

    'experience.job1.position': 'IT Assistant',
    'experience.job1.company': 'Confiança Supermercados',
    'experience.job1.period': 'Jul 2025 - Present',
    'experience.job1.type': 'CLT',
    'experience.job1.description': 'Development of Desktop/Web software and APIs for automation of operational and logistical processes, optimizing workflows in more than 10 branches.',
    'experience.job1.achievement1': 'Reduction of data analysis process from 6 hours to 5 minutes',
    'experience.job1.achievement2': 'Development of more than 10 complex projects in production',
    'experience.job1.achievement3': 'Automation of repetitive tasks in multiple branches',
    'experience.job1.achievement4': 'Optimization of workflows with proven efficiency gains',

    'experience.job2.position': 'Software Development Intern',
    'experience.job2.company': 'Confiança Supermercados',
    'experience.job2.period': 'Sep 2024 - Jun 2025',
    'experience.job2.type': 'Internship',
    'experience.job2.description': 'Assistance in development and maintenance of internal systems, contributing to process automation and increased team productivity.',
    'experience.job2.achievement1': 'Active participation in the complete development cycle',
    'experience.job2.achievement2': 'Creation of robust projects adopted by most units',
    'experience.job2.achievement3': 'Automation of manual repetitive tasks',
    'experience.job2.achievement4': 'Practical learning in enterprise development',

    'experience.job3.position': 'Machine Maintenance Assistant',
    'experience.job3.company': 'Alpack do Brasil',
    'experience.job3.period': 'Jan 2024 - Aug 2024',
    'experience.job3.type': 'CLT',
    'experience.job3.description': 'Specialization in operation and maintenance of sealing/wrapping/boxing machines for boxes and packaging.',
    'experience.job3.achievement1': 'Development of logical thinking for procedure flow',
    'experience.job3.achievement2': 'Skills in preventive and corrective maintenance',
    'experience.job3.achievement3': 'Technical knowledge in mechanical and electrical systems',
    'experience.job3.achievement4': 'Work in high-demand industrial environment',

    'experience.job4.position': 'Food Commerce Manager',
    'experience.job4.company': 'Cloud Nine - Ireland',
    'experience.job4.period': 'May 2022 - Sep 2023',
    'experience.job4.type': 'Full Time',
    'experience.job4.description': 'Supervision and management in an ice cream parlor in Ireland, with responsibility for training, teamwork, service quality and operational management.',
    'experience.job4.achievement1': 'Management of multicultural team in international environment',
    'experience.job4.achievement2': 'Development of leadership and communication skills',
    'experience.job4.achievement3': 'Achieved English fluency (C1 level)',
    'experience.job4.achievement4': 'Experience in customer service and sales',

    'experience.job1.tech1': 'C#',
    'experience.job1.tech2': 'Python',
    'experience.job1.tech3': 'JavaScript',
    'experience.job1.tech4': 'REST APIs',
    'experience.job1.tech5': 'Oracle',
    'experience.job1.tech6': 'Windows Forms',

    'experience.job2.tech1': 'C#',
    'experience.job2.tech2': '.NET',
    'experience.job2.tech3': 'SQL',
    'experience.job2.tech4': 'JavaScript',
    'experience.job2.tech5': 'HTML/CSS',
    'experience.job2.tech6': 'Python',

    'experience.job3.tech1': 'Mechanical Systems',
    'experience.job3.tech2': 'Industrial Electricity',
    'experience.job3.tech3': 'Preventive Maintenance',
    'experience.job3.tech4': 'Procedures',

    'experience.job4.tech1': 'Leadership',
    'experience.job4.tech2': 'Team Management',
    'experience.job4.tech3': 'Customer Service',
    'experience.job4.tech4': 'Advanced English',

    // Experiência - Educação

    'experience.education1.title': 'Systems Analysis and Development',
    'experience.education1.institution': 'Uninter',
    'experience.education1.period': '2023 - Current',
    'experience.education1.description': 'Education focused on data modeling, quality assurance, data integration and systems development.',

    'experience.education2.title': 'English Proficiency - C1 Level',
    'experience.education2.institution': 'City Language School - Ireland',
    'experience.education2.period': '2022 - 2022',
    'experience.education2.description': 'English proficiency certification acquired during immersion period in Ireland.',

    'experience.education3.title': 'High School with IT Technician',
    'experience.education3.institution': 'Etec Rodrigues de Abreu',
    'experience.education3.period': '2015 - 2018',
    'experience.education3.description': 'Technical education that awakened the passion for programming and software development.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let us talk about your next project? I am always open to new opportunities',
    'contact.workTogether': 'Let us work together!',
    'contact.description': 'I am always interested in new challenging projects and collaboration opportunities. If you have an idea or need help with development, get in touch!',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.emailDesc': 'Send me an email for projects or questions',
    'contact.phoneDesc': 'Available for calls from 9am to 6pm',
    'contact.locationDesc': 'Available for remote or on-site work',
    'contact.linkedinDesc': 'Connect with me on LinkedIn',
    'contact.followSocial': 'Follow me on social media',
    'contact.sendMessage': 'Send a message',
    'contact.name': 'Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.selectSubject': 'Select a subject',
    'contact.project': 'New Project',
    'contact.freelance': 'Freelance Work',
    'contact.consulting': 'Consulting',
    'contact.job': 'Job Opportunity',
    'contact.partnership': 'Partnership',
    'contact.other': 'Other',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.messagePlaceholder': 'Tell me more about your project or need...',
    'contact.sending': 'Sending...',
    'contact.sendButton': 'Send Message',
    'contact.successMessage': 'Message sent successfully! I will get back to you soon.',
    'contact.errorMessage': 'Error sending message. Please try again.',
    'contact.available': 'Available for new projects',
    'contact.responseTime': 'I normally respond within 24 hours',
    
    // Footer
    'footer.description': 'Full Stack Developer passionate about creating innovative solutions and exceptional digital experiences.',
    'footer.location': 'Bauru, SP - Brazil',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',
    'footer.socialMedia': 'Social Media',
    'footer.favoriteTech': 'Favorite Technologies',
    'footer.years': 'Years',
    'footer.projects': 'Projects',
    'footer.clients': 'Clients',
    'footer.availableForProjects': 'Available for projects',
    'footer.copyright': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.backToTop': 'Back to top',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};