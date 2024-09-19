import PageObject from '../support/PageObjectAPI';

describe('Teste API', () => {
  it('Passo a passo do 1 até o 6', () => {
    const TesteApi = new PageObject();

    // 1. Chamar a API e verificar a resposta da API se foi 200
    TesteApi.VisitarSiteEStatusCode().then(() => {
      // 2 e 3. Encontrar todos os objetos com nomes electronics
      // (Realizado dentro de VisitarSiteEStatusCode)

      // 4. Fazer a contagem total dos elementos e mostrar o Console da WEB. F12->CONSOLE
      TesteApi.ContagemTotalDosElementos();

      // 5 e 6. Verificar os objetos com rating maior do que 4 e exibir no console da Web. F12->CONSOLE
      TesteApi.ExibicaoDosElementosNoConsoleMaiorQue4();
      cy.wait(5000);
    });
  });
});