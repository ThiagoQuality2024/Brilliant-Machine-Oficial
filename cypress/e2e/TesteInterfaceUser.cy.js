 import PageObjectUser from "../support/PageObjectInterface";

 describe('Teste Interface Saucedemo', () => {
  before(() => {
    cy.intercept('POST', 'https://events.backtrace.io/**', {
      statusCode: 200, // Responde com sucesso para evitar erro 401. Precisei colocar esse trecho pois estava tomando erro 401 toda hora
    }).as('backtrace');
  });

  it('Testando Passos de 1 até 4 ', () => {
    const TesteInterface = new PageObjectUser();

    // 1. Acessar o site e Aguarda o botão de login para garantir que a página está carregada
    TesteInterface.VisitarSite();


    // 2. Fazer login, utilizei o xpath porque ja estou mais habituado a ele, mas também poderia usar o cy.get
    TesteInterface.FazerLogin();
    
    // 2. Clicar no menu de ordenação a /z
    TesteInterface.ClicarMenuOrdernacao();

    // Aqui eu precisei colocar essa função para verificar se ordenou e também mostrar no console os itens ordenados conforme coloquei no arquivo Readme
    // Criei uma variavel itemNames e atribui os itens do array a variavel em seguida criei outra variavel chamada sortedItemnames para mostrar em forma de array os itens ordenados
     TesteInterface.OrdenarItensAatéZ();

     //3 e 4 . Aqui segue o mesmo principio da ordenação A até Z, só copiar e colar e mudar e inverter a ordem a para z
     TesteInterface.OrdenarItensZatéA();
     cy.wait(5000);
    });

    
   
}); 

