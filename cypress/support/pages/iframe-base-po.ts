export abstract class IFrameBasePage {
  private readonly chatIframe = 'iframe[data-cy="podium-website-widget-iframe"]'

  public iFrameBody (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return cy.getIframeElement(this.chatIframe)
  }
}
