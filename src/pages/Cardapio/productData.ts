const PRODUCT_DATA = {
  cafe: [
    {
      id: '1118d9c6-b426-48e2-862f-8551f6c8471f',
      name: 'Espresso',
      description: 'Encorpado com notas de castanhas e chocolate meio-amargo.',
      amount: '30ml',
      price: 6,
      image: 'http://localhost:5173/assets/images/cafe/quente/espresso.webp',
      label: ['Quente'],
    },
    {
      id: '89eff95c-5116-4891-81c2-7f0c1e71395d',
      name: 'Americano',
      description:
        'Espresso duplo, suavizado com água. Encorpado com notas de castanhas e chocolate meio-amargo.',
      amount: '360ml',
      price: 9,
      image: 'http://localhost:5173/assets/images/cafe/quente/americano.webp',
      label: ['Quente'],
    },
    {
      id: 'c72a8fa1-71a1-4c2a-b962-165750d3376c',
      name: 'Café Coado',
      description:
        'Coado em V60. Blend I – Doce e floral, Blend II – Doce e encorpado, Blend III – Elegante e frutado.',
      amount: '360ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/cafe/quente/coado.webp',
      label: ['Quente'],
    },
    {
      id: 'b3e49637-2234-460f-8e87-b3d2063e11ec',
      name: 'Cappuccino',
      description: 'Estilo Italiano. Espresso duplo, Leite e Crema.',
      amount: '360ml',
      price: 14,
      image: 'http://localhost:5173/assets/images/cafe/quente/cappuccino.webp',
      label: ['Quente'],
    },
    {
      id: '32562e04-9240-400b-8434-5f0277bdea01',
      name: 'Caramelo Macchiato',
      description: 'Espresso duplo, calda de caramelo e Leite.',
      amount: '360ml',
      price: 15,
      image:
        'http://localhost:5173/assets/images/cafe/quente/caramelo-macchiato.webp',
      label: ['Quente'],
    },
    {
      id: 'b7ec1f9c-262b-4356-8a37-8a9bd4c523a9',
      name: 'Flat White',
      description: 'Espresso duplo e leite vaporizado.',
      amount: '360ml',
      price: 14,
      image: 'http://localhost:5173/assets/images/cafe/quente/flat-white.webp',
      label: ['Quente'],
    },
    {
      id: '6015afe1-c092-4778-b705-da058ae6d7f0',
      name: 'Mocha',
      description: 'Espresso duplo, leite e ganache de chocolate.',
      amount: '360ml',
      price: 15,
      image: 'http://localhost:5173/assets/images/cafe/quente/mocha.webp',
      label: ['Quente'],
    },
    {
      id: 'e2a9f0ff-1359-44d5-965b-8370e356cdc7',
      name: 'Americano',
      description:
        'Espresso duplo, suavizado com água. Encorpado com notas de castanhas e chocolate meio-amargo.',
      amount: '360ml',
      price: 9,
      image: 'http://localhost:5173/assets/images/cafe/gelado/americano.webp',
      label: ['Gelado'],
    },
    {
      id: '1661e2b7-5d87-486a-8787-7dbeedea08a4',
      name: 'Café Coado',
      description:
        'Coado em V60. Blend I – Doce e floral, Blend II – Doce e encorpado, Blend III – Elegante e frutado.',
      amount: '360ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/cafe/gelado/coado.webp',
      label: ['Gelado'],
    },
    {
      id: 'a26de1fc-f08d-4d73-8064-e4f33a627911',
      name: 'Caramelo Macchiato',
      description: 'Espresso duplo, calda de caramelo e Leite.',
      amount: '360ml',
      price: 15,
      image:
        'http://localhost:5173/assets/images/cafe/gelado/caramelo-macchiato.webp',
      label: ['Gelado'],
    },
    {
      id: 'e8197ff6-d63a-46cb-a726-372571494152',
      name: 'Cold Brew Limão',
      description: 'Café extraído à frio e suco de limão.',
      amount: '360ml',
      price: 11,
      image:
        'http://localhost:5173/assets/images/cafe/gelado/cold-brew-limao.webp',
      label: ['Gelado'],
    },
    {
      id: '4a28fcf2-6d3b-45d9-ac2f-6c7282bbe0ac',
      name: 'Latte',
      description: 'Espresso e Leite.',
      amount: '360ml',
      price: 14,
      image: 'http://localhost:5173/assets/images/cafe/gelado/latte.webp',
      label: ['Gelado'],
    },
    {
      id: 'cfea752f-2bed-44aa-a675-39c0ef1d9058',
      name: 'Mocha',
      description: 'Espresso, Leite e calda de chocolate.',
      amount: '360ml',
      price: 14,
      image: 'http://localhost:5173/assets/images/cafe/gelado/mocha.webp',
      label: ['Gelado'],
    },
    {
      id: '27194b67-643f-42c4-a96f-9308b0a85845',
      name: 'Café Vienna',
      description:
        'Bebida gelada à base de espresso, leite, chocolate branco e chantilly.',
      amount: '360ml',
      price: 18,
      image:
        'http://localhost:5173/assets/images/cafe/especial/gelado/vienna.webp',
      label: ['Especial', 'Gelado'],
    },
    {
      id: '211227fc-c138-4292-80b8-88823b0fbfb4',
      name: 'Café Tropicália',
      description: 'Bebida gelada à base de cold brew, tônica e maracujá.',
      amount: '360ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/cafe/especial/gelado/tropicalia.webp',
      label: ['Especial', 'Gelado'],
    },
    {
      id: 'eac50739-dbec-472d-b4d4-1950504a4a28',
      name: 'Double Hot',
      description:
        'Chocolate quente, intenso e cremoso com um leve toque de especiarias.',
      amount: '360ml',
      price: 17,
      image:
        'http://localhost:5173/assets/images/cafe/especial/quente/double-hot.webp',
      label: ['Especial', 'Quente'],
    },
    {
      id: '979532ec-817e-470e-b988-97d384f64bc4',
      name: 'Sublime',
      description:
        'Bebida gelada à base de espresso, leite e sorvete de baunilha.',
      amount: '360ml',
      price: 16,
      image:
        'http://localhost:5173/assets/images/cafe/especial/gelado/sublime.webp',
      label: ['Especial', 'Gelado'],
    },
    {
      id: '85914b5c-8bb6-4d2e-a6a6-b281e8b5b3e9',
      name: 'Latte Tiramisu',
      description:
        'Bebida gelada à base de espresso, leite, creme mascarpone e biscoito champagne.',
      amount: '360ml',
      price: 16,
      image:
        'http://localhost:5173/assets/images/cafe/especial/gelado/latte-tiramisu.webp',
      label: ['Especial', 'Gelado'],
    },
    {
      id: '76501300-5cd6-4bc2-99cb-9475de9220ce',
      name: 'Maltado',
      description:
        'Duplo Espresso, leite e creme de ovomaltine. Servido somente quente.',
      amount: '360ml',
      price: 17,
      image:
        'http://localhost:5173/assets/images/cafe/especial/quente/maltado.webp',
      label: ['Especial', 'Quente'],
    },
    {
      id: '69524051-f896-4326-b590-de08ba36cb01',
      name: 'Al Green',
      description:
        'Bebida gelada à base de espresso, leite de aveia, pistache e creme vegetal.',
      amount: '360ml',
      price: 21,
      image:
        'http://localhost:5173/assets/images/cafe/especial/leite-aveia/al-green.webp',
      label: ['Vegano', 'Gelado', 'Leite de Aveia'],
    },
    {
      id: '7516bd77-ff4c-42dc-b0e1-53ade4468a4b',
      name: 'Crunchy Nuts',
      description:
        'Bebida gelada à base de espresso, leite de aveia, leite de coco e castanha de cajú.',
      amount: '360ml',
      price: 21,
      image:
        'http://localhost:5173/assets/images/cafe/especial/quente/maltado.webp',
      label: ['Vegano', 'Leite de Aveia', 'Gelado'],
    },
  ],
}

export default PRODUCT_DATA
