const allObjects = [
    {
        name: 'Ancla',
        image: 'https://img.freepik.com/vetores-gratis/ancora-realista-com-corda_1284-35840.jpg',
        authorCredits: 'Imagem de macrovector no Freepik',
        category: 'a',
        seen: false,
        id: 1
    },
    {
        name: 'Árbol',
        image: 'https://img.freepik.com/psd-gratuitas/cinza-isolada-em-fundo-transparente_191095-10000.jpg',
        authorCredits: 'Imagem de tohamina no Freepik',
        category: 'a',
        seen: false,
        id: 2
    },
    {
        name: 'Amigo',
        image: 'https://img.freepik.com/fotos-gratis/homem-e-mulher-elegantes-posando-juntos_273609-21827.jpg',
        authorCredits: 'Imagem de wayhomestudio no Freepik',
        category: 'a',
        seen: false,
        id: 3
    },
    {
        name: 'Abeja',
        image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-icone-de-vetor-de-desenho-animado-bonito-abelha-voando-conceito-de-icone-de-natureza-animal-isolado-vetor-premium_138676-6016.jpg',
        authorCredits: 'Imagem de catalyststuff no Freepik',
        category: 'a',
        seen: false,
        id: 4
    },
    {
        name: 'Ave',
        image: 'https://img.freepik.com/fotos-gratis/tiro-de-foco-seletivo-de-um-beija-flor-em-voo_181624-56855.jpg',
        authorCredits: 'Imagem de wirestock no Freepik',
        category: 'a',
        seen: false,
        id: 5
    },
    {
        name: 'Automóvil',
        image: 'https://img.freepik.com/fotos-gratis/vista-do-carro-3d_23-2150796894.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'a',
        seen: false,
        id: 6
    },
    {
        name: 'Avión',
        image: 'https://img.freepik.com/psd-gratuitas/maquete-de-aviao_1310-1053.jpg',
        authorCredits: 'Imagem de zlatko_plamenov no Freepik',
        category: 'a',
        seen: false,
        id: 7
    },
    {
        name: 'Bicicleta',
        image: 'https://img.freepik.com/fotos-gratis/ciclista-masculina-andando-de-bicicleta-nas-montanhas_651396-3463.jpg',
        authorCredits: 'Imagem de ArtPhoto_studio no Freepik',
        category: 'a',
        seen: false,
        id: 8
    },
    {
        name: 'Bolígrafo',
        image: 'https://img.freepik.com/psd-gratuitas/a-ponta-da-caneta-de-feltro-isolada-sobre-fundo-transparente_191095-17718.jpg',
        authorCredits: 'Imagem de tohamina no Freepik',
        category: 'b',
        seen: false,
        id: 9
    },
    {
        name: 'Bolso',
        image: 'https://img.freepik.com/fotos-gratis/expositor-de-bolsa-feminina-levitando_23-2149817600.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'b',
        seen: false,
        id: 10
    },
    {
        name: 'Bomba',
        image: 'https://img.freepik.com/vetores-gratis/estilo-realista-de-bomba-redonda-preto_52683-15190.jpg',
        authorCredits: 'Imagem de pikisuperstar no Freepik',
        category: 'b',
        seen: false,
        id: 11
    },
    {
        name: 'Botella',
        image: 'https://img.freepik.com/psd-gratuitas/garrafa-termica-branca-simples-isolada-em-fundo-transparente_125540-5558.jpg',
        authorCredits: 'Imagem de Vectonauta no Freepik',
        category: 'b',
        seen: false,
        id: 12
    },
    {
        name: 'Cama',
        image: 'https://img.freepik.com/psd-gratuitas/cama-de-casal-com-moldura-de-madeira-e-lencois-brancos-isolados_176382-171.jpg',
        authorCredits: 'Imagem de alexandercho no Freepik',
        category: 'c',
        seen: false,
        id: 13
    },
    {
        name: 'Casa',
        image: 'https://img.freepik.com/fotos-gratis/vista-3d-do-modelo-de-casa_23-2150761168.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'c',
        seen: false,
        id: 14
    },
    {
        name: 'Cepillo',
        image: 'https://img.freepik.com/psd-gratuitas/icone-3d-de-beleza-e-maquiagem_23-2150582403.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'c',
        seen: false,
        id: 15
    },
    {
        name: 'Caja',
        image: 'https://img.freepik.com/psd-gratuitas/caixa-de-papelao-isolada_125540-1169.jpg',
        authorCredits: 'Imagem de Vectonauta no Freepik',
        category: 'c',
        seen: false,
        id: 16
    },
    {
        name: 'Candelabro',
        image: 'https://img.freepik.com/vetores-gratis/lampada-de-ouro-realista-transparente_23-2148336813.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'c',
        seen: false,
        id: 17
    },
    {
        name: 'Computadora',
        image: 'https://img.freepik.com/vetores-gratis/ilustracao-de-conceito-de-computador-desktop_114360-12153.jpg',
        authorCredits: 'Imagem de storyset no Freepik',
        category: 'c',
        seen: false,
        id: 18
    },
    {
        name: 'Conejo',
        image: 'https://img.freepik.com/fotos-gratis/coelho-peludo-fofo-isolado_78492-3950.jpg',
        authorCredits: 'Imagem de pereslavtseva no Freepik',
        category: 'c',
        seen: false,
        id: 19
    },
    {
        name: 'Cuchara',
        image: 'https://img.freepik.com/vetores-gratis/adesivo-colher-utensilios-de-cozinha-em-fundo-branco_1308-67037.jpg',
        authorCredits: 'Imagem de brgfx no Freepik',
        category: 'c',
        seen: false,
        id: 20
    },
    {
        name: 'Dado',
        image: 'https://img.freepik.com/vetores-gratis/dados-de-desenhos-animados_78370-2910.jpg',
        authorCredits: 'Imagem de juicy_fish no Freepik',
        category: 'd',
        seen: false,
        id: 21
    },
    {
        name: 'Delfín',
        image: 'https://img.freepik.com/fotos-gratis/vista-de-golfinhos-nadando-na-agua_23-2150674903.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'd',
        seen: false,
        id: 22
    },
    {
        name: 'Dinero',
        image: 'https://img.freepik.com/vetores-gratis/pilha-de-dinheiro-e-moedas-de-ouro-3d-icone-de-estilo-de-desenho-animado-moedas-com-cifrao-maco-de-dinheiro-ilustracao-vetorial-plana-de-moeda-riqueza-investimento-sucesso-poupanca-economia-conceito-de-lucro_74855-26108.jpg',
        authorCredits: 'Imagem de pch.vector no Freepik',
        category: 'd',
        seen: false,
        id: 23
    },
    {
        name: 'Diente',
        image: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-para-estomatologia-e-odontologia_23-2150033461.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'd',
        seen: false,
        id: 23
    },
    {
        name: 'Dinosaurio',
        image: 'https://img.freepik.com/vetores-gratis/bebe-dinossauro-desenhado-ilustrado_23-2148955344.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'd',
        seen: false,
        id: 24
    },
    {
        name: 'Elefante',
        image: 'https://img.freepik.com/vetores-gratis/elefante-bonito-sentado-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-vetorial_138676-2220.jpg',
        authorCredits: 'Imagem de catalyststuff no Freepik',
        category: 'e',
        seen: false,
        id: 25
    },
    {
        name: 'Escalera',
        image: 'https://img.freepik.com/fotos-gratis/escadote-de-madeira_1194-612.jpg',
        authorCredits: 'Imagem de kues1 no Freepik',
        category: 'e',
        seen: false,
        id: 26
    },
    {
        name: 'Escoba',
        image: 'https://img.freepik.com/vetores-gratis/doodle-de-vassoura-de-halloween-desenhado-a-mao_17005-1691.jpg',
        authorCredits: 'Imagem de YusufSangdes no Freepik',
        category: 'e',
        seen: false,
        id: 27
    },
    {
        name: 'Estrella',
        image: 'https://img.freepik.com/vetores-gratis/comecar_53876-25533.jpg',
        authorCredits: 'Imagem de rawpixel.com no Freepik',
        category: 'e',
        seen: false,
        id: 28
    },
    {
        name: 'Foca',
        image: 'https://img.freepik.com/vetores-gratis/colecao-de-emblemas-de-certificacao-iso_23-2148698373.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'f',
        seen: false,
        id: 29
    },
    {
        name: 'Fresa',
        image: 'https://img.freepik.com/psd-gratuitas/vista-de-frutas-maduras-e-doces_23-2150112912.jpg',
        authorCredits: 'Imagem de Freepik',
        category: 'f',
        seen: false,
        id: 30
    },

 
]    




export default allObjects;