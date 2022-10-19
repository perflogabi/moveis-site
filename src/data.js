import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import Features1Img from './assets/img/features-1.png';
  import Features2Img from './assets/img/features-2.png';
  import ChairImg from './assets/img/chair.png';
  import BedImg from './assets/img/bed.png';
  import CupboardImg from './assets/img/cupboard.png';
  import LightingImg from './assets/img/lighting.png';
  import Product1Img from './assets/img/products/product-1.png';
  import Product2Img from './assets/img/products/product-2.png';
  import Product3Img from './assets/img/products/product-3.png';
  import Product4Img from './assets/img/products/product-4.png';
  import Product5Img from './assets/img/products/product-5.png';
  import Product6Img from './assets/img/products/product-6.png';
  import Product7Img from './assets/img/products/product-7.png';
  import Product8Img from './assets/img/products/product-8.png';
  import Product9Img from './assets/img/products/product-9.png';
  import Product10Img from './assets/img/products/product-10.png';
  import TestimonialImg from './assets/img/testimonial.png';
  import Avatar1Img from './assets/img/avatar-1.png';
  import Avatar2Img from './assets/img/avatar-2.png';
  import Avatar3Img from './assets/img/avatar-3.png';
  import Avatar4Img from './assets/img/avatar-4.png';
 
  
  export const navigation = [
    {
      name: 'início',
      href: 'início',
    },
    {
      name: 'móveis',
      href: 'móveis',
    },
    {
      name: 'sobre',
      href: 'sobre',
    },
    
    {
      name: 'contato',
      href: 'contato',
    },
  ];
  
  export const hero = {
    title: 'Casa criativa Simplifque a sua Mobília',
    subtitle:
      'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
    buttonText: 'Compre agora',
  };
  
  export const stats = [
    {
      value: '7',
      text: 'Anos de Experiência',
    },
    {
      value: '30',
      text: 'Lojas pelo país',
    },
    {
      value: '10k+',
      text: 'Móveis vendidos',
    },
    {
      value: '260+',
      text: 'Móveis Variantes',
    },
  ];
  
  export const features = {
    image: <Features1Img />,
    title: 'Criamos sua casa mais estética',
    subtitle:
      'Energia de móveis é um softaware como serviços para sistema de gestão empresarial multiuso',
    buttonText: 'Compre agora',
    items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Serviços de Avaliação',
        subtitle:
          'As vezes, os recursos exigem uma breve descrição.  Isso pode ser descrição detalhada',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Desenvolvimento de modelos de móveis',
        subtitle:
          'As vezes, os recursos exigem uma breve descrição.  Isso pode ser descrição detalhada',
      },
    ],
    feature2: {
      image: <Features2Img />,
      title: 'O melhor fabricante de móveis de sua escolha',
      subtitle:
        'Energia de móveis é um softaware como serviços para sistema de gestão empresarial multiuso.',
    },
  };
  
  export const newInStore = {
    title: 'Novo na loja agora?',
    subtitle: 'Obtenha os itens mais recentes imediatamente com preços promocionais',
    link: 'Verifique tudo',
    icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: 'cadeira',
        image: <ChairImg />,
      },
      {
        name: 'cama',
        image: <BedImg />,
      },
      {
        name: 'armário',
        image: <CupboardImg />,
      },
      {
        name: 'iluminação',
        image: <LightingImg />,
      },
    ],
  };
  
  export const products = {
    title: 'Todos os produtos',
    subtitle:
      'Os produtos que fornecemos apenas para você, pois nosso serviço é selecionado entre os melhores produtos com qualidade numero 1 do mundo',
    pages: [
      {
        productList: [
          {
            image: <Product1Img />,
            icon: <IoMdAddCircle />,
            name: 'Mesa Centro',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product2Img />,
            icon: <IoMdAddCircle />,
            name: 'banco de madeira',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Product3Img />,
            icon: <IoMdAddCircle />,
            name: 'Apoiador de objetos',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product4Img />,
            icon: <IoMdAddCircle />,
            name: 'poltrona',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product5Img />,
            icon: <IoMdAddCircle />,
            name: 'Cadeira de balanço',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Product6Img />,
            icon: <IoMdAddCircle />,
            name: 'Conjunto mesa e cadeira',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Product7Img />,
            icon: <IoMdAddCircle />,
            name: 'Banqueta',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Product8Img />,
            icon: <IoMdAddCircle />,
            name: 'Estante',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Product9Img />,
            icon: <IoMdAddCircle />,
            name: 'Cadeira',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product10Img />,
            icon: <IoMdAddCircle />,
            name: 'Escrivaninha',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
      {
        productList: [
          {
            image: <Product1Img />,
            icon: <IoMdAddCircle />,
            name: 'Mesa Centro',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product2Img />,
            icon: <IoMdAddCircle />,
            name: 'banco de madeira',
            price: 50,
            oldPrice: 70,
          },
          {
            image: <Product3Img />,
            icon: <IoMdAddCircle />,
            name: 'Apoiador de objetos',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product4Img />,
            icon: <IoMdAddCircle />,
            name: 'poltrona',
            price: 75,
            oldPrice: 82,
          },
          {
            image: <Product5Img />,
            icon: <IoMdAddCircle />,
            name: 'Cadeira de balanço',
            price: 200,
            oldPrice: 210,
          },
          {
            image: <Product6Img />,
            icon: <IoMdAddCircle />,
            name: 'Conjunto mesa e cadeira',
            price: 45,
            oldPrice: 50,
          },
          {
            image: <Product7Img />,
            icon: <IoMdAddCircle />,
            name: 'Banqueta',
            price: 320,
            oldPrice: 325,
          },
          {
            image: <Product8Img />,
            icon: <IoMdAddCircle />,
            name: 'Estante',
            price: 225,
            oldPrice: 240,
          },
          {
            image: <Product9Img />,
            icon: <IoMdAddCircle />,
            name: 'Cadeira',
            price: 105,
            oldPrice: 120,
          },
          {
            image: <Product10Img />,
            icon: <IoMdAddCircle />,
            name: 'Escrivaninha',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
    ],
  };
  
  export const testimonial = {
    title: 'O que as pessoas estão falando sobre nós',
    image: <TestimonialImg />,
    persons: [
      {
        avatar: <Avatar1Img />,
        name: 'João Pedro',
        occupation: 'Gerente de Loja',
        message:
          '“Eles têm um toque perfeito para fazer algo tão profissional, interessante e útil para muitas pessoas.”',
      },
      {
        avatar: <Avatar2Img />,
        name: 'Bruna Camargo',
        occupation: 'Gerente de Loja',
        message:
          '“Eles têm um toque perfeito para fazer algo tão profissional, interessante e útil para muitas pessoas.”',
      },
      {
        avatar: <Avatar3Img />,
        name: 'Paula Pfeffer',
        occupation: 'Gerente de Loja',
        message:
          '“Eles têm um toque perfeito para fazer algo tão profissional, interessante e útil para muitas pessoas.”',
      },
      {
        avatar: <Avatar4Img />,
        name: 'Rafael Santos',
        occupation: 'Gerente de Loja',
        message:
          '“Eles têm um toque perfeito para fazer algo tão profissional, interessante e útil para muitas pessoas.”',
      },
    ],
  };
  
  export const newsletter = {
    title: 'Obtenha mais descontos no seu pedido',
    subtitle: 'Junte-se á nossa lista de endereços',
    placeholder: 'Seu endereço de email',
    buttonText: 'Compre agora',
  };
  
  export const footer = {
    social: [
      {
        icon: <IoLogoYoutube />,
        href: '#',
      },
      {
        icon: <IoLogoInstagram />,
        href: '#',
      },
      {
        icon: <IoLogoGithub />,
        href: '#',
      },
      {
        icon: <IoLogoFacebook />,
        href: '#',
      },
    ],
    copyright: 'FurniShop 2022 - All Rights Reserved.',
  };