class PageObjectUser{
    PageObjectUser(){
     this.itemNames = [];
     this.sortedItemNames = [];

    }    

    VisitarSite(){
      
    cy.visit('https://www.saucedemo.com/', { timeout: 12000, });
    cy.get('#login-button').should('be.visible');
}

  FazerLogin(){
     cy.xpath('//*[@id="user-name"]').type('standard_user');
     cy.xpath('//*[@id="password"]').type('secret_sauce');
     cy.xpath('//*[@id="login-button"]').click();
  }

ClicarMenuOrdernacao(){
    cy.get('.product_sort_container', { timeout: 10000 }).should('be.visible').select('Name (A to Z)');
    cy.wait(2000);
}

OrdenarItensAatéZ(){

    cy.get('.inventory_item_name').then($items => {      
        const itemNames = $items.toArray().map(item => item.innerText);
        const sortedItemNames = [...itemNames].sort((a, b) => a.localeCompare(b));
  
        console.log('Nomes dos itens:', itemNames);
        console.log('Nomes dos itens ordenados (A -> Z):', sortedItemNames); //Achei legal interessante criar essas variaveis para deixar o codigo mais didatico, tanto para mim como para quem for ler. Não é meu perfil fazer nada complexo.
        expect(itemNames).to.deep.equal(sortedItemNames);
        console.log('Os itens estão ordenador corretamente de A / Z'); 
     })
}

OrdenarItensZatéA(){
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.wait(2000);
    cy.get('.inventory_item_name').then($items => {
      
      const itemNames = $items.toArray().map(item => item.innerText);
      const sortedItemNames = [...itemNames].sort((a, b) => b.localeCompare(a));
      console.log('Nomes dos itens:', itemNames);
      console.log('Nomes dos itens ordenados (Z -> A):', sortedItemNames);      
      expect(itemNames).to.deep.equal(sortedItemNames);
      console.log('Os itens estão ordenados corretamente de Z / A');
    
      this.itemNames = itemNames;
      this.sortedItemNames = sortedItemNames;
    })


}

}

export default PageObjectUser;

