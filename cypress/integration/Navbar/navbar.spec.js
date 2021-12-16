describe('Nav Menus', () => {
 // For desktop view

 context('iphone-5 resolution', () => {
   beforeEach(() => {
     /**
      * Run these tests as if in a desktop browser,
      * with a 720p monitor
      */
     cy.viewport('iphone-5');
   });
   describe('It will check navbar component', () => {

     it('Should visit home page', () => {
       cy.visit('http://localhost:4200/');
     });

     describe('Hamburger Menu', () => {
       it('Will check Hamburger menu then open the menu', () => {
         cy.get('.hamburger__menu').should('be.visible');
         cy.get('.hamburger__menu').click();
         cy.get('.menu__links').should('be.visible');
       });
     });
   });

 });

 context('720p resolution', () => {
   beforeEach(() => {
     cy.viewport(1280, 720);
   });

   describe('Will visit home and check if navbar exist', () => {
     it('Should visit home page', () => {
       cy.visit('http://localhost:4200/');
     });
   })
   it('check Navbar', () => {
     cy.get('nav').should('be.visible');
   })
 });

})