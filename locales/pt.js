const pt = {
  nav: {
    home: "Início",
    about: "Sobre Mim",
    services: "Serviços",
    tools: "Ferramentas",
    projects: "Projetos",
    tech: "Soluções Tech",
    differentials: "Diferenciais",
    certifications: "Certificações",
    education: "Formação",
    contact: "Contato",
  },
  hero: {
    name: "Yasmin Kengen",
    title: "Assistente Administrativa & Financeira",
    subtitle: "Suporte Executivo · Atendimento · Organização de Processos",
    tagline: "Organização inteligente para impulsionar resultados.",
    cta: "Entre em Contato",
    scroll: "Role para explorar",
  },
  about: {
    section: "Sobre Mim",
    label: "Quem sou",
    text: "Sou estudante de Administração, com formação complementar por meio de cursos e certificações em gestão, finanças e tecnologia. Atuo oferecendo suporte administrativo, financeiro e executivo, com foco em organização de processos, eficiência operacional e atendimento de excelência. Busco entregar soluções práticas, confiáveis e alinhadas às necessidades de cada cliente.",
    xp: "Anos de Experiência",
  },
  services: {
    section: "Serviços",
    label: "O que ofereço",
    financial: {
      title: "Financeiro",
      items: ["Contas a pagar","Contas a receber","Fluxo de Caixa","Organização Financeira","Conciliação Bancária","Controle Financeiro","Emissão de boletos","Planilhas Financeiras"],
    },
    administrative: {
      title: "Administrativo",
      items: ["Organização documental","Gestão de arquivos","Organização de processos","Cadastro de clientes","Controle administrativo","Relatórios","Planilhas","Apoio operacional"],
    },
    customer: {
      title: "Atendimento",
      items: ["Atendimento por WhatsApp","Atendimento por e-mail","SAC","Pós-venda","Relacionamento com clientes","Agendamentos"],
    },
    executive: {
      title: "Assistência Executiva",
      items: ["Gestão de agenda","Organização de reuniões","Planejamento de viagens","Organização documental","Controle de compromissos","Apoio executivo"],
    },
  },
  tools: {
    section: "Ferramentas",
    label: "Tecnologias que domino",
    inDevelopment: "Conhecimentos em desenvolvimento",
  },
  projects: {
    section: "Projetos",
    label: "Demonstrativos",
    p1: {
      title: "Controle Financeiro Empresarial",
      tags: ["Dashboard","Fluxo de Caixa","Contas a pagar","Contas a receber","Indicadores"],
    },
    p2: {
      title: "Organização Administrativa",
      tags: ["Checklist","Cronograma","Controle documental","Organização de processos"],
    },
    p3: {
      title: "Agenda Executiva",
      tags: ["Agenda semanal","Calendário","Lista de prioridades","Gestão de compromissos"],
    },
    p4: {
      title: "Dashboard Financeiro",
      tags: ["KPIs","Gráficos","Indicadores","Relatórios"],
    },
    p5: {
      title: "Fluxo de Atendimento",
      tags: ["Cliente","Atendimento","Resolução","Acompanhamento","Finalização"],
    },
    viewMore: "Ver detalhes",
  },
  differentials: {
    section: "Diferenciais",
    label: "Por que me escolher",
    items: ["Organização","Atenção aos detalhes","Comunicação clara","Ética","Confidencialidade","Aprendizado rápido","Facilidade com tecnologia","Proatividade","Organização financeira","Comprometimento"],
  },
  tech: {
    section: "Soluções Tecnológicas",
    label: "Parceria Especializada",
    intro: "Para projetos que envolvem desenvolvimento de software, automação ou soluções tecnológicas, atuo em parceria com um desenvolvedor especializado, permitindo oferecer soluções completas para empresas e profissionais.",
    dev: {
      title: "Desenvolvimento de Sistemas",
      items: ["Sistemas personalizados","Plataformas Web","Aplicativos Android e iOS","Sistemas Financeiros","Sistemas de Gestão","Soluções SaaS"],
    },
    bi: {
      title: "Dashboards e BI",
      items: ["Dashboards analíticos","Relatórios gerenciais","Indicadores em tempo real","Landing Pages","Portfólios profissionais"],
    },
    integrations: {
      title: "Integrações",
      items: ["APIs","Integração entre sistemas","Login seguro","Serviços em nuvem","Notificações automáticas"],
    },
    automations: {
      title: "Automações",
      items: ["Automação de processos","IA Generativa","Chatbots","Relatórios automáticos","Integração com WhatsApp","Otimização operacional"],
    },
    partner: {
      title: "Parceiro Tecnológico",
      name: "Carlos André",
      role: "Desenvolvedor Full Stack",
      specialties: ["Desenvolvimento Web","Aplicativos Mobile","Arquitetura de Software","Automações","Inteligência Artificial","Integração de Sistemas"],
      note: "Projetos tecnológicos são desenvolvidos em parceria, garantindo soluções completas conforme a necessidade de cada cliente.",
    },
  },
  howHelp: {
    section: "Como Posso Ajudar",
    label: "Soluções para cada perfil",
    companies: {
      title: "Empresas",
      items: ["Organização administrativa","Controle financeiro","Atendimento","Organização de processos","Apoio executivo"],
    },
    small: {
      title: "Pequenos Negócios",
      items: ["Fluxo de caixa","Planilhas","Relatórios","Organização administrativa","Automação"],
    },
    freelancers: {
      title: "Profissionais Liberais",
      items: ["Organização financeira","Gestão de agenda","Atendimento","Documentação","Organização de rotina"],
    },
  },
  certifications: {
    section: "Certificações",
    label: "Qualificações",
    status: { done: "Concluído", inProgress: "Em andamento" },
    categories: ["Administração","Gestão","Finanças","Excel","Power BI","Atendimento ao Cliente","Tecnologia","Inteligência Artificial","Idiomas"],
    empty: "Certificações serão adicionadas em breve.",
    addTip: "Edite o arquivo locales/pt.js para adicionar certificações.",
    items: [
      // { name: "Nome do Certificado", institution: "Instituição", date: "Mês Ano", status: "done", category: "Excel" },
    ],
  },
  education: {
    section: "Formação",
    label: "Trajetória acadêmica",
    graduation: {
      title: "Graduação",
      items: [
        { degree: "Bacharelado em Administração", institution: "Universidade", period: "2024 – Cursando", status: "inProgress" },
      ],
    },
    courses: {
      title: "Cursos",
      items: [
        // { name: "Nome do Curso", institution: "Instituição", period: "Ano", status: "done" },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Em desenvolvimento" },
        { name: "Espanhol", level: "Em desenvolvimento" },
      ],
    },
  },
  contact: {
    section: "Contato",
    headline: "Vamos transformar a organização do seu negócio?",
    text: "Se você procura uma profissional comprometida, organizada e preparada para oferecer suporte administrativo, financeiro, executivo ou soluções integradas para sua empresa, será um prazer conversar sobre como posso contribuir para o sucesso do seu projeto.",
    email: "E-mail",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    phone: "Ligação",
    emailHref: "mailto:yasminkengenadm@gmail.com",
    whatsappHref: "https://wa.me/552194439014",
    linkedinHref: "https://www.linkedin.com/in/yasminkengen/",
    phoneHref: "tel:+552194439014",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    made: "Portfólio desenvolvido por Carlos André",
  },
};
