import React, {createContext, useContext, useState} from 'react';

// This context was used during developement, it is now replaced by the api.

const DataContext = createContext();

export default function DataProvider({children}): JSX.Element {
  const data = useDataProvider();
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export const useData = () => {
  return useContext(DataContext);
};

function useDataProvider() {
  const couponsList = [
    {
      id: 1,
      altDescription: 'Section image',
      title: '20% EN TODOS LOS TRAGOS',
      description: 'TODOS LOS DÍAS DESDE LAS 18 HS',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      number: '#144 712 83241',
      expiration: 'Disponible hasta las 20.32 del 12/03/2023',
      image: require('../../assets/images/MBC_ofertas4.png'),
      status: 1,
    },
    {
      id: 2,
      altDescription: 'Section image',
      title: '2X1 EN HAMBURGUESAS',
      description: 'TODOS LOS DÍAS DESDE LAS 19 HS',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: require('../../assets/images/MBC_ofertas5.png'),
      number: '#123 456 54321',
      expiration: 'Disponible hasta las 00:00 del 12/06/2023',
      status: 2,
    },
  ];

  const offersList = [
    {
      id: 1,
      title: '2X1 EN IPA',
      description: 'TODOS LOS DÍAS DE 16 A 20 HS',
      altDescription: 'Section image',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      status: 1,
      image: require('../../assets/images/MBC_ofertas1.png'),
      imageName: 'MBC_ofertas1.png',
    },
    {
      id: 2,
      title: '5X4 EN GOLDEN',
      description: 'TODOS LOS DÍAS DESDE LAS 19 HS',
      altDescription: 'Section image',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      status: 2,
      image: require('../../assets/images/MBC_ofertas2.png'),
      imageName: 'MBC_ofertas2.png',
    },
    {
      id: 3,
      title: '2X1 EN HAMBURGUESAS',
      description: 'TODOS LOS DÍAS DESDE LAS 19 HS',
      altDescription: 'Section image',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      status: 2,
      image: require('../../assets/images/MBC_ofertas3.png'),
      imageName: 'MBC_ofertas3.png',
    },
    {
      id: 4,
      title: '20% EN TODOS LOS TRAGOS',
      description: 'TODOS LOS DÍAS DESDE LAS 18 HS',
      altDescription: 'Section image',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      status: 2,
      image: require('../../assets/images/MBC_ofertas4.png'),
      imageName: 'MBC_ofertas4.png',
    },
    {
      id: 5,
      title: 'SEMANA DEL NACHO',
      description: '50% OFF EN NACHOS CON QUESO',
      altDescription: 'Section image',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      legal:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      status: 2,
      image: require('../../assets/images/MBC_ofertas5.png'),
      imageName: 'MBC_ofertas5.png',
    },
  ];

  return {
    couponsList,
    offersList,
  };
}
