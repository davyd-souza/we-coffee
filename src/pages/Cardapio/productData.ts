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
      name: 'Vienna',
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
      name: 'Tropicália',
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
  cha: [
    {
      id: '988018bc-7f20-4f4f-9593-9e358cf2ff2f',
      name: 'Jasmin',
      description: 'Chá de Jasmin à base de água',
      amount: '480ml',
      price: 9,
      image: 'http://localhost:5173/assets/images/cha/quente/jasmin.webp',
      label: ['Quente'],
    },
    {
      id: '86ef4c3b-7133-4d49-adae-1649e9604276',
      name: 'Fruit Tea Mix',
      description:
        'Chá verde com morango, manga, pitaya, kiwi, limão, maracujá e blueberry.',
      amount: '480ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/cha/frui-tea/gelado/mix.webp',
      label: ['Gelado'],
    },
    {
      id: '71303113-5fc9-46f3-91a9-ebc3114f789d',
      name: 'Fruit Tea Limão',
      description: 'Chá de limão Tahiti.',
      amount: '480ml',
      price: 12,
      image:
        'http://localhost:5173/assets/images/cha/frui-tea/gelado/limao.webp',
      label: ['Gelado'],
    },
    {
      id: 'e7b241ee-d174-48b2-b3ba-b0a5ce005d77',
      name: 'Fruit Tea Maracujá',
      description: 'Chá verde com maracujá.',
      amount: '480ml',
      price: 14,
      image:
        'http://localhost:5173/assets/images/cha/frui-tea/gelado/maracuja.webp',
      label: ['Gelado'],
    },
    {
      id: 'e30ad266-498a-42b2-8538-b40ca389f9bd',
      name: 'Milk Tea Tradicional',
      description: 'Chá preto, leite e bobo.',
      amount: '480ml',
      price: 19,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/quente/tradicional.webp',
      label: ['Quente'],
    },
    {
      id: '85cc0035-8cc5-4235-a265-73a187bc3c7d',
      name: 'Milk Tea Agar Agar',
      description: 'Chá preto, leite e bobo agar agar.',
      amount: '480ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/quente/agar-agar.webp',
      label: ['Quente'],
    },
    {
      id: '7cf850ed-a69e-4a63-9725-4e587197f578',
      name: 'Milk Tea Brûlée',
      description:
        'Chá preto com leite, topping de creme e açúcar caramelizada.',
      amount: '480ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/quente/brulee.webp',
      label: ['Quente'],
    },
    {
      id: '38e7ad3c-b0f3-4ada-8733-8a3d6a60f047',
      name: 'Milk Tea Brûlée Agar Agar',
      description:
        'Chá preto com leite, topping de creme, açúcar caramelizada e bobo agar agar.',
      amount: '480ml',
      price: 21,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/quente/brulee-agar-agar.webp',
      label: ['Quente'],
    },
    {
      id: '57a513f5-59e8-4a5a-b9df-504db20476ce',
      name: 'Milk Tea Tradicional',
      description: 'Chá preto, leite e bobo.',
      amount: '360ml',
      price: 19,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/gelado/tradicional.webp',
      label: ['Gelado'],
    },
    {
      id: 'b2883be7-97ef-4f83-bf9b-71b7d07e32e7',
      name: 'Milk Tea Agar Agar',
      description:
        'Chá preto com leite, bobo agar agar, topping de creme e açúcar caramelizada.',
      amount: '360ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/gelado/agar-agar.webp',
      label: ['Gelado'],
    },
    {
      id: 'c0c911c1-678c-45d1-918a-13b2dd2eb7d9',
      name: 'Milk Tea Brûlée',
      description:
        'Chá preto com leite, topping de creme e açúcar caramelizada.',
      amount: '360ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/gelado/brulee.webp',
      label: ['Gelado'],
    },
    {
      id: 'd8c189f0-d8b7-469a-a9b2-bb360af50dea',
      name: 'Milk Tea Brûlée Agar Agar',
      description:
        'Chá preto com leite, bobo agar agar, topping de creme e açúcar caramelizada.',
      amount: '360ml',
      price: 21,
      image:
        'http://localhost:5173/assets/images/cha/milk-tea/gelado/brulee-agar-agar.webp',
      label: ['Gelado'],
    },
  ],
  milkShake: [
    {
      id: 'ebe869d1-3fb9-41b4-9fe1-17f31200ff48',
      name: 'Copacabana',
      description:
        'Shake a base de sorvete, com um delicioso creme de pistache, coberto com calda de caramelo, finalizado com pistache.',
      amount: '480ml',
      price: 28,
      image:
        'http://localhost:5173/assets/images/milk-shake/gelado/copacabana.webp',
      label: ['Gelado'],
    },
    {
      id: '314f5f9a-5fdc-4b87-b515-ea3b9c741733',
      name: 'Lótus',
      description:
        'Shake de Lótus, com sorvete de baunilha madagascar, cobertura de chantilly e calda de caramelo, finalizada com biscoito e caramelo.',
      amount: '480ml',
      price: 22,
      image: 'http://localhost:5173/assets/images/milk-shake/gelado/lotus.webp',
      label: ['Gelado'],
    },
    {
      id: '510d4a40-c5d7-4b91-88b9-c10a825ae4be',
      name: 'Choco Boom',
      description:
        'Shake de chocolate, com biscoito Oreo, Pocky, picolé com casquinha de chocolate, sorvete de baunilha e cobertura de chocolate belga.',
      amount: '480ml',
      price: 26,
      image:
        'http://localhost:5173/assets/images/milk-shake/gelado/choco-boom.webp',
      label: ['Gelado'],
    },
    {
      id: '7affd9d3-c236-42a7-ab8b-783381129d0e',
      name: 'Morango',
      description:
        'Shake de morango, Sorvete de baunilha Madagascar, Purê de morango; Chantilly e cranberry em pó.',
      amount: '480ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/milk-shake/gelado/morango.webp',
      label: ['Gelado'],
    },
    {
      id: '98fba0bd-648e-49b4-9088-d058b1b1d978',
      name: 'Blueberry',
      description:
        'Shake de blueberry, Sorvete de baunilha Madagascar, Purê de blueberry, Chantilly, Blueberry fresco e Blueberry em pó.',
      amount: '480ml',
      price: 22,
      image:
        'http://localhost:5173/assets/images/milk-shake/gelado/blueberry.webp',
      label: ['Gelado'],
    },
    {
      id: '7218bb1f-1209-4a86-88a1-451413b0bd87',
      name: 'Oreo',
      description: 'Frapê de biscoito Oreo, com topping de Oreo.',
      amount: '360ml',
      price: 20,
      image: 'http://localhost:5173/assets/images/milk-shake/gelado/oreo.webp',
      label: ['Gelado'],
    },
    {
      id: 'e883aae9-009f-4165-8d59-b78c7be60a24',
      name: 'Ovomaltine',
      description: 'Frapê de ovomaltine com Ovomaltine crocante.',
      amount: '360ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/milk-shake/gelado/ovomaltine.webp',
      label: ['Gelado'],
    },
    {
      id: '258ce7a7-f992-417c-b899-2b32237e5e14',
      name: 'Oreo Hot',
      description: 'Bebida de biscoito Oreo com topping de Oreo.',
      amount: '480ml',
      price: 20,
      image: 'http://localhost:5173/assets/images/milk-shake/quente/oreo.webp',
      label: ['Quente'],
    },
    {
      id: '5eed3b38-2aeb-46e2-afa2-d6a8ce6f8936',
      name: 'Ovomaltine Hot',
      description: 'Bebida de Ovomaltine com Ovomaltine crocante.',
      amount: '480ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/milk-shake/quente/ovomaltine.webp',
      label: ['Quente'],
    },
  ],
}

export default PRODUCT_DATA
