/* eslint-disable @typescript-eslint/method-signature-style */
export {}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      clickOutside(): Chainable<JQuery<HTMLBodyElement>>
      typeEsc(): Chainable<JQuery<HTMLBodyElement>>
      /**
      * @param locator is the iframe element locator to get element
      * @example 'iframe[data-cy="podium-website-widget-iframe"]'
      */
      getIframeElement(locator: string): Chainable<JQuery<HTMLBodyElement>>
    }
  }
}

Cypress.Commands.add('clickOutside', () => {
  const xCoordination = 0
  const yCoordination = 0
  return cy.get('body').click(xCoordination, yCoordination)
})

Cypress.Commands.add('typeEsc', () => {
  return cy.get('body').type('{esc}')
})

Cypress.Commands.add('getIframeElement', (locator: string) => {
  return cy
    .get(locator, { log: false })
    .its('0.contentDocument', { log: false }).should('exist', { log: false })
    .its('body', { log: false }).should('not.be.undefined', { log: false })
    .then((body) => cy.wrap(body, { log: false }))
})
