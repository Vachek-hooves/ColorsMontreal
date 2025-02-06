export const quiz = [
  {
    category: 'Guess the Dish',
    questions: [
      {
        id: 'gd1',
        question: 'What Spanish dish is this?',
        image: require('../assets/quiz/paella.png'),
        options: ['Tortilla Española', 'Paella', 'Gazpacho', 'Croquetas'],
        correctAnswer: 'Paella',
      },
      {
        id: 'gd2',
        question: 'Identify this traditional Spanish delicacy:',
        image: require('../assets/quiz/jamon.png'),
        options: ['Tapas', 'Jamón Ibérico', 'Patatas Bravas', 'Empanadas'],
        correctAnswer: 'Jamón Ibérico',
      },
      {
        id: 'gd3',
        question: 'Name this refreshing Spanish soup:',
        image: require('../assets/quiz/gazpacho.png'),
        options: ['Gazpacho', 'Paella', 'Churros', 'Escalivada'],
        correctAnswer: 'Gazpacho',
      },
      {
        id: 'gd4',
        question: "What's this popular tapas dish?",
        image: require('../assets/quiz/patatas.png'),
        options: [
          'Croquetas',
          'Patatas Bravas',
          'Tortilla Española',
          'Churros',
        ],
        correctAnswer: 'Patatas Bravas',
      },
      {
        id: 'gd5',
        question: 'Name this sweet Spanish treat:',
        image: require('../assets/quiz/churros.png'),
        options: ['Churros', 'Ensaimada', 'Turrón', 'Crema Catalana'],
        correctAnswer: 'Churros',
      },
    ],
  },
  {
    category: 'Tapas',
    questions: [
      {
        id: 't1',
        question: 'Which famous Spanish tapas dish is shown in this image?',
        image: require('../assets/quiz/croquetas.png'),
        options: ['Croquetas', 'Albóndigas', 'Calamares', 'Empanadas'],
        correctAnswer: 'Croquetas',
      },
      {
        id: 't2',
        question: 'Name this classic Spanish potato omelette:',
        image: require('../assets/quiz/tortilla.png'),
        options: ['Tortilla Española', 'Huevos Rotos', 'Revuelto', 'Pisto'],
        correctAnswer: 'Tortilla Española',
      },
      {
        id: 't3',
        question: 'What are these grilled peppers called?',
        image: require('../assets/quiz/pimientos.png'),
        options: ['Pimientos de Padrón', 'Jalapeños', 'Piquillo', 'Guindillas'],
        correctAnswer: 'Pimientos de Padrón',
      },
      {
        id: 't4',
        question: 'Identify these stuffed olives:',
        image: require('../assets/quiz/aceitunas.png'),
        options: ['Aceitunas Rellenas', 'Manzanilla', 'Kalamata', 'Gordal'],
        correctAnswer: 'Aceitunas Rellenas',
      },
      {
        id: 't5',
        question: 'What is this popular garlic shrimp tapas dish?',
        image: require('../assets/quiz/gambas.png'),
        options: [
          'Gambas al Ajillo',
          'Camarones Fritos',
          'Langostinos',
          'Pescaíto Frito',
        ],
        correctAnswer: 'Gambas al Ajillo',
      },
    ],
  },
  {
    category: 'Desserts',
    questions: [
      {
        id: 'd1',
        question: 'What is this traditional Catalan cream dessert?',
        image: require('../assets/quiz/crema.png'),
        options: [
          'Crema Catalana',
          'Flan',
          'Natillas',
          'Arroz con Leche'
        ],
        correctAnswer: 'Crema Catalana'
      },
      {
        id: 'd2',
        question: 'Name this almond-based Christmas sweet:',
        image: require('../assets/quiz/turron.png'),
        options: [
          'Turrón',
          'Polvorón',
          'Mazapán',
          'Mantecados'
        ],
        correctAnswer: 'Turrón'
      },
      {
        id: 'd3',
        question: 'Identify this spiral-shaped Mallorcan pastry:',
        image: require('../assets/quiz/ensaimada.png'),
        options: [
          'Ensaimada',
          'Palmera',
          'Croissant',
          'Xuixo'
        ],
        correctAnswer: 'Ensaimada'
      },
      {
        id: 'd4',
        question: 'What are these traditional almond cookies called?',
        image: require('../assets/quiz/carquinyolis.png'),
        options: [
          'Carquinyolis',
          'Galletas',
          'Pastas de Té',
          'Rosquillas'
        ],
        correctAnswer: 'Carquinyolis'
      },
      {
        id: 'd5',
        question: 'Name this rich chocolate-dipped pastry:',
        image: require('../assets/quiz/xuixo.png'),
        options: [
          'Xuixo',
          'Napolitana',
          'Croissant',
          'Palmera'
        ],
        correctAnswer: 'Xuixo'
      }
    ],
   
  },
  {
    category: 'Seafood',
    questions: [
      {
        id: 's1',
        question: 'What is this famous Spanish octopus dish?',
        image: require('../assets/quiz/pulpo.png'),
        options: [
          'Pulpo a la Gallega',
          'Calamares Fritos',
          'Sepia a la Plancha',
          'Chipirones'
        ],
        correctAnswer: 'Pulpo a la Gallega'
      },
      {
        id: 's2',
        question: 'Name these grilled sardines:',
        image: require('../assets/quiz/sardinas.png'),
        options: [
          'Sardinas a la Plancha',
          'Boquerones',
          'Anchoas',
          'Jureles'
        ],
        correctAnswer: 'Sardinas a la Plancha'
      },
      {
        id: 's3',
        question: 'Identify this seafood rice dish:',
        image: require('../assets/quiz/arroznegro.png'),
        options: [
          'Arroz Negro',
          'Paella Marinera',
          'Fideuà',
          'Arroz a Banda'
        ],
        correctAnswer: 'Arroz Negro'
      },
      {
        id: 's4',
        question: 'What are these marinated anchovies called?',
        image: require('../assets/quiz/boquerones.png'),
        options: [
          'Boquerones en Vinagre',
          'Anchoas',
          'Sardinas Marinadas',
          'Arenques'
        ],
        correctAnswer: 'Boquerones en Vinagre'
      },
      {
        id: 's5',
        question: 'Name this traditional Catalan seafood stew:',
        image: require('../assets/quiz/suquet.png'),
        options: [
          'Suquet de Peix',
          'Zarzuela',
          'Caldereta',
          'Marmitako'
        ],
        correctAnswer: 'Suquet de Peix'
      }
    ],
    
  },
  {
    category: 'Wine Bars',
    questions: [
      {
        id: 'w1',
        question: 'What type of Spanish wine is shown in this image?',
        image: require('../assets/quiz/rioja.png'),
        options: [
          'Rioja',
          'Ribera del Duero',
          'Priorat',
          'Penedès'
        ],
        correctAnswer: 'Rioja'
      },
      {
        id: 'w2',
        question: 'Identify this traditional Spanish aperitif:',
        image: require('../assets/quiz/vermouth.png'),
        options: [
          'Vermut',
          'Sangría',
          'Tinto de Verano',
          'Cava'
        ],
        correctAnswer: 'Vermut'
      },
      {
        id: 'w3',
        question: 'What Spanish sparkling wine is this?',
        image: require('../assets/quiz/cava.png'),
        options: [
          'Cava',
          'Champagne',
          'Prosecco',
          'Moscato'
        ],
        correctAnswer: 'Cava'
      },
      {
        id: 'w4',
        question: 'Name this wine region's signature red wine:',
        image: require('../assets/quiz/priorat.png'),
        options: [
          'Priorat',
          'Albariño',
          'Rueda',
          'Jumilla'
        ],
        correctAnswer: 'Priorat'
      },
      {
        id: 'w5',
        question: 'Which Spanish white wine variety is this?',
        image: require('../assets/quiz/albarino.png'),
        options: [
          'Albariño',
          'Verdejo',
          'Godello',
          'Viura'
        ],
        correctAnswer: 'Albariño'
      }
    ],
    
  },
];
