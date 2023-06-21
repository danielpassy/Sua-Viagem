import httpClient, { mockasync } from '@/app/libs/data/http';
import dayjs from '@/app/libs/time-svc';

export default {
  suggestions: () => httpClient.get('/suggestions'),
  // @ts-ignore
  suggestions: () => mockasync(suggestions).then((response) => response.data),
};

enum todoStatus {
  todo,
  done,
  doThere,
  wontDo,
}

enum dataType {
  list,
  todoList,
  tasks,
  assets,
}

const suggestions = [
  {
    destination: 'Paris',
    image: 'url',
    duration: dayjs.duration(13, 'days'),
    data: [
      {
        title: 'usefull links',
        type: dataType.list,
        fields: [
          { type: 'markdown', text: '(site da embaixada)[www.embaixada.com]' },
          { type: 'markdown', text: '(site da agência de turismo)[www.embaixada.com]' },
          {
            type: 'markdown',
            text: '(+55 21 99757 33333)[whatsapp.com/send=..asdasdas]',
          },
        ],
        ordered: false,
      },
      {
        title: 'Miscelânia',
        type: dataType.todoList,
        fields: [
          { status: todoStatus.done, text: 'trocar dinheiro', timestamp: { day: 0 } },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips marroquinos',
            timestamp: false,
          },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips franceses',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Visto',
        type: dataType.todoList,
        fields: [
          {
            status: todoStatus.wontDo,
            text: 'Europa',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Voos',
        type: dataType.tasks,
        fields: [
          { status: todoStatus.todo, text: 'Voo de Ida' },
          { status: todoStatus.todo, text: 'Voo de volta' },
        ],
      },
      {
        title: 'Estadia',
        type: dataType.assets,
        fields: [
          {
            status: todoStatus.todo,
            text: 'alugo',
          },
        ],
      },
      {
        title: 'Atividades',
        type: dataType.tasks,
        fields: [
          {
            id: '1391321',
            status: todoStatus.doThere,
            text: 'Visitar museu',
            timestamp: { day: 0 },
          },
          {
            status: todoStatus.doThere,
            text: 'Comer Lacabreira',
            timestamp: { after: '1391321' },
          },
        ],
      },
    ],
  },
  {
    destination: 'London',
    image: 'url',
    duration: dayjs.duration(2, 'days'),
    data: [
      {
        title: 'usefull links',
        type: dataType.list,
        fields: [
          { type: 'markdown', text: '(site da embaixada)[www.embaixada.com]' },
          { type: 'markdown', text: '(site da agência de turismo)[www.embaixada.com]' },
          {
            type: 'markdown',
            text: '(+55 21 99757 33333)[whatsapp.com/send=..asdasdas]',
          },
        ],
        ordered: false,
      },
      {
        title: 'Miscelânia',
        type: dataType.todoList,
        fields: [
          { status: todoStatus.done, text: 'trocar dinheiro', timestamp: { day: 0 } },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips marroquinos',
            timestamp: false,
          },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips franceses',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Visto',
        type: dataType.todoList,
        fields: [
          {
            status: todoStatus.wontDo,
            text: 'Europa',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Voos',
        type: dataType.tasks,
        fields: [
          { status: todoStatus.todo, text: 'Voo de Ida' },
          { status: todoStatus.todo, text: 'Voo de volta' },
        ],
      },
      {
        title: 'Estadia',
        type: dataType.assets,
        fields: [
          {
            status: todoStatus.todo,
            text: 'alugo',
          },
        ],
      },
      {
        title: 'Atividades',
        type: dataType.tasks,
        fields: [
          {
            id: '1391321',
            status: todoStatus.doThere,
            text: 'Visitar museu',
            timestamp: { day: 0 },
          },
          {
            status: todoStatus.doThere,
            text: 'Comer Lacabreira',
            timestamp: { after: '1391321' },
          },
        ],
      },
    ],
  },
  {
    destination: 'Londrina',
    image: 'url',
    duration: dayjs.duration(6, 'days'),
    data: [
      {
        title: 'usefull links',
        type: dataType.list,
        fields: [
          { type: 'markdown', text: '(site da embaixada)[www.embaixada.com]' },
          { type: 'markdown', text: '(site da agência de turismo)[www.embaixada.com]' },
          {
            type: 'markdown',
            text: '(+55 21 99757 33333)[whatsapp.com/send=..asdasdas]',
          },
        ],
        ordered: false,
      },
      {
        title: 'Miscelânia',
        type: dataType.todoList,
        fields: [
          { status: todoStatus.done, text: 'trocar dinheiro', timestamp: { day: 0 } },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips marroquinos',
            timestamp: false,
          },
          {
            status: todoStatus.doThere,
            text: 'Comprar 2 chips franceses',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Visto',
        type: dataType.todoList,
        fields: [
          {
            status: todoStatus.wontDo,
            text: 'Europa',
            timestamp: false,
          },
        ],
        ordered: true,
      },
      {
        title: 'Voos',
        type: dataType.tasks,
        fields: [
          { status: todoStatus.todo, text: 'Voo de Ida' },
          { status: todoStatus.todo, text: 'Voo de volta' },
        ],
      },
      {
        title: 'Estadia',
        type: dataType.assets,
        fields: [
          {
            status: todoStatus.todo,
            text: 'alugo',
          },
        ],
      },
      {
        title: 'Atividades',
        type: dataType.tasks,
        fields: [
          {
            id: '1391321',
            status: todoStatus.doThere,
            text: 'Visitar museu',
            timestamp: { day: 0 },
          },
          {
            status: todoStatus.doThere,
            text: 'Comer Lacabreira',
            timestamp: { after: '1391321' },
          },
        ],
      },
    ],
  },
];
