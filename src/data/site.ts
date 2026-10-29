// "export" = deixa esta variável disponível para outros arquivos importarem.
// "const" = variável que não será reatribuída.
// "site" = o nome que escolhemos (poderia ser "cliente", "dados"...).
export const site = {
  // Cada linha é uma "propriedade": chave: valor
  nome: "Nome do Tatuador",
  estilo: "Fineline & Blackwork", // o Hero e o index vão ler isto
  cidade: "São Paulo, SP",
  // Usada na <meta description> (o texto que aparece no resultado do Google)
  descricao: "Tatuagens autorais com agendamento online. Peça seu orçamento.",

  // Só números, com DDI (55) + DDD + número. O link wa.me não aceita "+" nem espaços.
  whatsapp: "5511999999999",
  mensagemWhatsapp: "Olá! Quero fazer um orçamento de tatuagem.",
  instagram: "https://instagram.com/seuusuario",

  cores: {
    fundo: "#1C1C1E",
    texto: "#F2F2F7",
    destaque: "#D4AF37",
  },
  fontes: {
    // Nome IDÊNTICO ao do Google Fonts: o Layout usa este texto para montar o link.
    titulo: "Cormorant Garamond",
    texto: "Inter",
  },
};
