class PageObject {
    PageObject() {
      this.produtos = [];
      this.eletronicos = [];
      this.elementosMaiorQue4 = [];
    }  



    VisitarSiteEStatusCode() {
      return cy.request('https://fakestoreapi.com/products').then((response) => {
        expect(response.status).to.eq(200);
        this.produtos = response.body;
        this.eletronicos = this.EncontrarElementos(this.produtos);
        
      });
    }
  
    EncontrarElementos(produtos) {      
        return produtos.filter(produto => produto.category === 'electronics');
      }

  
    ContagemTotalDosElementos() {
      const contagemElementos = this.eletronicos.length;
      console.log('A quantidade de elementos com nome electronics foi de: ' + contagemElementos + ' elementos');
      return contagemElementos;
    }
  
    VerificarObjetosComRatingmaiorQue4() {
      const elementosMaiorQue4 = this.eletronicos.filter(produto => produto.rating.rate > 4);
      const nomesDosProdutosMaioresQue4 = elementosMaiorQue4.map(produto => produto.title);
      const contagemElementosmaiorQue4 = elementosMaiorQue4.length;
      console.log('Os elementos encontrados com um rating maior que 4 são: ' + nomesDosProdutosMaioresQue4.join(' / ') + '. Que dão um total de: ' + contagemElementosmaiorQue4 + ' elementos');
      return nomesDosProdutosMaioresQue4;
      return contagemElementosmaiorQue4 ;
      
    }
  
    ExibicaoDosElementosNoConsoleMaiorQue4() {
      const nomesDosProdutosMaioresQue4  = this.VerificarObjetosComRatingmaiorQue4();
      const  contagemElementosmaiorQue4  = this.VerificarObjetosComRatingmaiorQue4();
      console.log('Os elementos encontrados com um rating maior que 4 são: ' + nomesDosProdutosMaioresQue4.join(' / ') + '. Que dão um total de: ' + contagemElementosmaiorQue4 + ' elementos');
    }
  }
  
  export default PageObject;
  

