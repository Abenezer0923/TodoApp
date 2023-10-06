describe('Deleting a Task', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
  
    it('Deletes a task and ensures removal', () => {
     
      const newTaskText = 'Task to Delete';
      cy.get('input[type="text"]').type(newTaskText);
      cy.get('button').contains('Add').click();
  
   
      cy.get('.bg-orange-200') 
        .contains(newTaskText)
        .siblings('.flex')
        .find('button')
        .contains('Delete')
        .click();
  
      
      cy.get('.bg-orange-200').should('not.contain', newTaskText);
    });
  });
  