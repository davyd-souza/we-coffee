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
  saltyCream: [
    {
      id: 'd73912ad-3792-440e-b65b-b912d8fac171',
      name: 'Caqui',
      description:
        'Smoothie de caqui a base de chá de jasmin, com pedaços de caqui frescos e salty cream.',
      amount: '480ml',
      price: 22,
      image: 'http://localhost:5173/assets/images/salty-cream/caqui.webp',
      label: ['Gelado'],
    },
    {
      id: '746e9d24-9d90-42b5-b70f-8e9de0cb5a48',
      name: 'Morango',
      description:
        'Smoothie de morango, pedaços de morangos frescos, a base de chá de jasmin e salty cream.',
      amount: '480ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/salty-cream/morango.webp',
      label: ['Gelado'],
    },
    {
      id: 'ee1565e4-2776-4a9a-a358-98d044907272',
      name: 'Manga',
      description:
        'Smoothie de manga a base de chá de Jasmin, com purê de manga fresca e salty cream',
      amount: '480ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/salty-cream/manga.webp',
      label: ['Gelado'],
    },
    {
      id: '0082a4a6-45c2-4d02-bc4a-77bba3a7e0dc',
      name: 'Manga Coco',
      description:
        'Smoothie de manga e leite de coco, bobo agar agar e salty cream.',
      amount: '480ml',
      price: 19,
      image: 'http://localhost:5173/assets/images/salty-cream/manga-coco.webp',
      label: ['Gelado'],
    },
    {
      id: '883dd699-97ed-4f24-8513-1f8872732ecf',
      name: 'Blueberry Duo',
      description:
        'Smoothie de blueberry e morangos, a base de chá de jasmin e coberto com salty cream.',
      amount: '480ml',
      price: 19,
      image:
        'http://localhost:5173/assets/images/salty-cream/blueberry-duo.webp',
      label: ['Gelado'],
    },
    {
      id: '5d9fce23-c3e6-4f7c-b707-ae8f984ac83d',
      name: 'Framboesa Duo',
      description:
        'Smoothie de framboesa e morango a base de chá de jasmin, com pure de framboesa e morango e cobertura de salty cream.',
      amount: '480ml',
      price: 19,
      image:
        'http://localhost:5173/assets/images/salty-cream/framboesa-duo.webp',
      label: ['Gelado'],
    },
    {
      id: 'a2146fb4-d040-49cc-85b1-4a7d5674c655',
      name: 'Frutas Vermelhas',
      description:
        'Smoothie de frutas vermelhas, morango, blueberry, amora, framboesa a base de chá de Jasmin e cobertura de salty cream.',
      amount: '480ml',
      price: 19,
      image:
        'http://localhost:5173/assets/images/salty-cream/frutas-vermelhas.webp',
      label: ['Gelado'],
    },
  ],
  pao: [
    {
      id: '3a08bb70-1abd-4818-ae12-079029c13674',
      name: 'Croissant Amêndoa',
      description: 'Croissant com amêndoas laminadas.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/croissant-amendoa.webp',
      label: ['Salgado'],
    },
    {
      id: 'd0f15045-3863-4558-8a87-8b2950b0dabd',
      name: 'Croissant Choco Amêndoa',
      description:
        'Recheado de creme de amêndoas com nutella e finalizado com lâminas de amêndoas.',
      // amount: '480ml',
      price: 16,
      image:
        'http://localhost:5173/assets/images/pao/croissant-choco-amendoa.webp',
      label: ['Doce'],
    },
    {
      id: '6cb3326a-2c88-48ba-bb46-47710556ab7b',
      name: 'Croissant Bacon',
      description:
        'Croissant com tomate, muçarela, tomate, rúcula, bacon e ketchup.',
      // amount: '480ml',
      price: 17,
      image: 'http://localhost:5173/assets/images/pao/croissant-bacon.webp',
      label: ['Salgado'],
    },
    {
      id: '341dc9a1-17e3-427f-853f-7fec2370bb73',
      name: 'Croissant Salame',
      description:
        'Croissant de massa folhada artesanal, cream cheese, salame e rúcula.',
      // amount: '480ml',
      price: 17,
      image: 'http://localhost:5173/assets/images/pao/croissant-salame.webp',
      label: ['Salgado'],
    },
    {
      id: '3fd68a48-c9ef-4317-a32f-2f7f6970a611',
      name: 'Croissant Tradicional',
      description: 'Croissant tradicional sem recheio.',
      // amount: '480ml',
      price: 10,
      image:
        'http://localhost:5173/assets/images/pao/croissant-tradicional.webp',
      label: ['Salgado'],
    },
    {
      id: '375a656c-e3fc-4121-984e-99185643c885',
      name: 'Baguete Presunto Cru & Pesto',
      description: 'Baguete, presunto cru, rúcula e molho pesto.',
      // amount: '480ml',
      price: 18,
      image:
        'http://localhost:5173/assets/images/pao/baguete-presunto_cru-pesto.webp',
      label: ['Salgado'],
    },
    {
      id: 'ed899158-90e7-408b-ac18-f5550d6bb8a6',
      name: 'Baguete Bresaola & Trufas',
      description: 'Baguete, bresaola, molho de trufa negra e rúcula.',
      // amount: '480ml',
      price: 20,
      image:
        'http://localhost:5173/assets/images/pao/baguete-bresaola-trufas.webp',
      label: ['Salgado'],
    },
    {
      id: '9c03ec82-7f44-4bfc-95ff-919ae437b0ef',
      name: 'Cannoli Parma Trufado',
      description:
        'Massa folhada crocante, recheado com creme de queijo trufado e pequenas lascas de presunto cru.',
      // amount: '480ml',
      price: 17,
      image:
        'http://localhost:5173/assets/images/pao/cannoli-parma-trufado.webp',
      label: ['Salgado'],
    },
    {
      id: 'fb68c86a-a447-4d9e-bf78-9e4d5d0e3810',
      name: 'Cannoli Dark',
      description:
        'Massa folhada crocante, com recheio suave a base de creme de baunilha e chocolate ao leite, coberto com chocolate dark e crispearl crocante.',
      // amount: '480ml',
      price: 17,
      image: 'http://localhost:5173/assets/images/pao/cannoli-dark.webp',
      label: ['Doce'],
    },
    {
      id: 'e2d68c32-200f-47eb-8e1d-68f515a1aaac',
      name: 'Cannoli Cream',
      description:
        'Massa folhada crocante, com recheio suave a base de creme de baunilha e chocolate branco, coberto com chocolate branco e crocante de pistache.',
      // amount: '480ml',
      price: 17,
      image: 'http://localhost:5173/assets/images/pao/cannoli-cream.webp',
      label: ['Doce'],
    },
    {
      id: '2192e37c-7ce8-4297-80b4-4d8f15db4719',
      name: 'Dirty Soft Bun',
      description:
        'Massa fofinha com laranja cristalizada, recheada com ganache de chocolate, finalizado com cacau em pó e crispearl de chocolate callebaut.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/dirty-soft-bun.webp',
      label: ['Doce'],
    },
    {
      id: '6e7b1f09-a98d-491f-8eb5-d9e213467583',
      name: 'Magic Stick Wi',
      description:
        'Massa fofinha e artesanal à base de matcha, recheado com o mais leve e puro creme de baunilha, finalizado com a dupla de frutas perfeita: kiwi e pêssego amarelo.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/magic-stick-wi.webp',
      label: ['Doce'],
    },
    {
      id: 'c84beec2-0ee0-4790-ad5e-7cf6128bd5a6',
      name: 'Magic Stick Morango',
      description:
        'Massa de pitaya vermelha recheada com creme de frutas vermelhas e morangos frescos.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/magic-stick-morango.webp',
      label: ['Doce'],
    },
    {
      id: '74987b87-abc8-4b8a-9c2c-4b728a0be259',
      name: 'Magic Stick Oreo',
      description: 'Massa de Oreo com recheio de chocolate e biscoitos oreo.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/magic-stick-oreo.webp',
      label: ['Doce'],
    },
    {
      id: 'debb95a1-acc5-43c9-a36c-6776d0fc5931',
      name: 'Soft Bun Alho',
      description:
        'Pão de fermentação natural, com molho agridoce, recheado com creme cheese, alho, parmesão ralado e salsinha.',
      // amount: '480ml',
      price: 16,
      image: 'http://localhost:5173/assets/images/pao/soft-bun-alho.webp',
      label: ['Salgado'],
    },
    {
      id: 'b6b06e8c-a6fd-4e63-b14e-38b0cfdf18b6',
      name: 'Soft Bun Bacon e Rúcula',
      description:
        'Pão de fermentação natural de parmesão, muçarela, bacon, rúcula, maionese e ketchup.',
      // amount: '480ml',
      price: 17,
      image:
        'http://localhost:5173/assets/images/pao/soft-bun-bacon-rucula.webp',
      label: ['Salgado'],
    },
    {
      id: '1c6be277-926f-4479-b5dd-6d1f6554112f',
      name: 'Soft Bun Salsicha',
      description:
        'Pão de fermentação natural, com salsicha (carne bovina e suína), creme de queijo, coberto com mussarela, finalizado com milho e salsinha.',
      // amount: '480ml',
      price: 18,
      image: 'http://localhost:5173/assets/images/pao/soft-bun-salsicha.webp',
      label: ['Salgado'],
    },
    {
      id: 'e9c0d3fc-d748-4ee5-8180-9a02578a84b5',
      name: 'Sanduíche de Bacon',
      description:
        'Pão de forma com bacon, queijo mussarela, tomate, ovo e maionese.',
      // amount: '480ml',
      price: 11,
      image: 'http://localhost:5173/assets/images/pao/sanduiche-bacon.webp',
      label: ['Salgado'],
    },
    {
      id: '4529181d-0dc8-4f0c-8391-e5d7788c4849',
      name: 'Pão de Forma Parmesão',
      description:
        'Massa fofinha amanteigada, levemente adocicado com parmesão.',
      // amount: '480ml',
      price: 30,
      image: 'http://localhost:5173/assets/images/pao/pao_forma-parmesao.webp',
      label: ['Salgado'],
    },
    {
      id: 'a4f4d10e-7199-4ce1-98d6-9b58a9b0fd65',
      name: 'Pão de Forma Coco',
      description:
        'Massa fofinha amanteigada, com recheio especial de coco cremoso.',
      // amount: '480ml',
      price: 30,
      image: 'http://localhost:5173/assets/images/pao/pao_forma-coco.webp',
      label: ['Doce'],
    },
  ],
  doce: [
    {
      id: '396145a6-435f-462c-8a83-bbf7bc7c290d',
      name: 'Rabbit',
      description:
        'Mousse de cream cheese, recheio de baunilha com ganache de pistache e bolo de chocolate.',
      // amount: '480ml',
      price: 22,
      image: 'http://localhost:5173/assets/images/doce/rabbit.webp',
      // label: ['Doce'],
    },
    {
      id: '4d06364c-a6a5-474b-8121-04b8d1883e44',
      name: 'Big Pistachio',
      description:
        'Pistache em todos os detalhes: mousse, recheio cremoso, recheio crocante e biscoito amanteigado, além de um glaciado com chocolate branco.',
      // amount: '480ml',
      price: 26,
      image: 'http://localhost:5173/assets/images/doce/big-pistachio.webp',
      // label: ['Doce'],
    },
    {
      id: 'a2f48fc3-c5af-45af-9c01-f1713bc3f380',
      name: 'Yellow Bee',
      description:
        'Mousse de chocolate branco e baunilha com recheio de ganache de chocolate belga ao leite e cremoso de banana, finalizada com base crocante de chocolate com avelã.',
      // amount: '480ml',
      price: 23,
      image: 'http://localhost:5173/assets/images/doce/yellow-bee.webp',
      // label: ['Doce'],
    },
    {
      id: 'e8005713-4929-45c6-a0ad-4ba1f57ee9a6',
      name: 'Violet Et Blanc',
      description:
        'Mousse cremosa de chocolate 54%, com ganache de chocolate e toque de cointreau, crocante de avelã e bolo de chocolate.',
      // amount: '480ml',
      price: 22,
      image: 'http://localhost:5173/assets/images/doce/violet-et-blanc.webp',
      // label: ['Doce'],
    },
    {
      id: '237fa059-c7b9-41d0-81f5-6a2180c11225',
      name: 'One Lemon',
      description:
        'Mousse de limão com recheio de limão, coberto de chocolate branco em uma base crocante de biscoito de amêndoas.',
      // amount: '480ml',
      price: 25,
      image: 'http://localhost:5173/assets/images/doce/one-lemon.webp',
      // label: ['Doce'],
    },
    {
      id: '1e2b7035-7c99-461d-9a66-573ec450d61e',
      name: 'Pandinha Pan',
      description:
        'Creme de mascarpone, com recheio de chocolate e framboesa, em uma base crocante de chocolate branco e amêndoas.',
      // amount: '480ml',
      price: 25,
      image: 'http://localhost:5173/assets/images/doce/pandinha-pan.webp',
      // label: ['Doce'],
    },
    {
      id: '2cd8a27f-c710-42a3-aeae-eb466a44aced',
      name: 'Ursinho Brown Mousse',
      description:
        'Mousse de chocolate ao leite, recheio levinho de chá Ceylon e crocante de crispearl de chocolate.',
      // amount: '480ml',
      price: 18,
      image:
        'http://localhost:5173/assets/images/doce/ursinho-brown-mousse.webp',
      // label: ['Doce'],
    },
    {
      id: '829eeb54-1729-4339-9747-4e08c6631e2a',
      name: 'Entremet Coração',
      description:
        'Mousse de chocolate branco, com recheio de geleia de morango e bolo chiffon.',
      // amount: '480ml',
      price: 15,
      image: 'http://localhost:5173/assets/images/doce/entremet-coracao.webp',
      // label: ['Doce'],
    },
  ],
  agua: [
    {
      id: '829eeb54-1729-4339-9747-4e08c6631e2a',
      name: 'Água Mineral Panna',
      description: 'Água mineral natural sem gás.',
      amount: '250ml',
      price: 10,
      image: 'http://localhost:5173/assets/images/agua/agua-mineral-panna.webp',
      label: ['Sem gás'],
    },
    {
      id: '829eeb54-1729-4339-9747-4e08c6631e2a',
      name: 'Água Mineral S. Pellegrino',
      description: 'Água mineral natural com gás.',
      amount: '250ml',
      price: 10,
      image:
        'http://localhost:5173/assets/images/agua/agua-mineral-s-pellegrino.webp',
      label: ['Com gás'],
    },
  ],
}

export default PRODUCT_DATA
