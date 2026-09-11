const paginas = [
  {
    pagina: 'agendarConsulta',
    titulo: 'Agendar consulta',
    subtitulo: 'Escolha a especialidade, profissional e horário'
  },
  {
    pagina: 'agendarExame',
    titulo: 'Agendar Exame',
    subtitulo: 'Escolha o exame e horário que melhor se adequa à sua necessidade'
  },
  {
    pagina: 'contato',
    titulo: 'Contato',
    subtitulo: 'Entre em contato ou visite nossa unidade. Queremos te ajudar.'
  },
  {
    pagina: 'medicoFamiliar',
    titulo: 'Médico da Família',
    subtitulo: 'Acompanhamento contínuo e integral da saúde de você e sua família com atendimento humanizado e personalizado. '
  },
  {
    pagina: 'especialidades',
    titulo: 'Especialidades Médicas',
    subtitulo: 'Conheça todas as especialidades disponíveis na UBS Digital e agende sua consulta'
  }
];
const pacientesBase = [
  {
    nome: 'Gamaliel',
    peso: 72,
    email: 'gamaliel@gmail.com', //esqueci seu email, Gama, foi mal
    tel: '4002-8922', //telefone de exemplo
    senha: 'senha', //Essa parte define o que será mostrado na páginah Minha Área ao realizar o login
    medicamentos: [
      {
        nome: 'Losartana',
        dose: 50,
        vezes: 1,
        horarios: ['noite']
      },
      {
        nome: 'Metformina',
        dose: 850,
        vezes: 2,
        horarios: ['manhã', 'noite']
      }
    ],
    medicoFamiliar: 'Dr. Carlos Mendes',
    exames: [
      {
        tipo: 'Hemograma Completo',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      },
      {
        tipo: 'Raio-X Tórax',
        data: '20 de abril de 2026',
        medico: 'Dr. Paulo Costa'
      }
    ],
    consultas: [
      {
        motivo: 'Dor no Abdômen',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      }
    ]
  },
  {
    nome: 'Lucas',
    peso: 75,
    email: 'lucaseliel15032010@gamil.com',
    tel: '47 99183-3045',
    senha: 'Senha2',
    medicamentos: [
      {
        nome: 'PuranT4',
        dose: 37.5,
        vezes: 1,
        horarios: ['Manhã']
      },
      {
        nome: 'Symbicort',
        dose: 200,
        vezes: 2,
        horarios: ['manhã', 'noite']
      }
    ],
    medicoFamiliar: 'Dr. Marcos',
    exames: [
      {
        tipo: 'Hemograma Completo',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      },
    ],
    consultas: [
      {
        especialidade: 'Pneumologista',
        motivo: 'Dificuldade para respirar',
        data: '02 de maio de 2026',
        medico: 'Dr. Carlos Mendes'
      }
    ]
  },
]

export default paginas;
export { pacientesBase };
