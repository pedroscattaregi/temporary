import { IFrameBasePage } from './iframe-base-po'

export class WebChatPage extends IFrameBasePage {
  private readonly chatIframeButton = 'button#podium-website-widget-button'
  private readonly searchLocationInput = 'input[name="Search Locations"]'
  private readonly locationOptionButton = 'button[class="LocationContainer StaggerFadeIn3 LocationContainer--desktop"]'

  public navigate (): void {
    cy.intercept('POST', '//graphql').as('graphql')
    cy.visit('/qa-webchat-lorw')
    cy.wait('@graphql').wait('@graphql').wait('@graphql') // same request 3 times
  }

  public getChatIframeButton (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().find(this.chatIframeButton)
  }

  public getLocationOptions (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().find(this.locationOptionButton)
  }

  public openChat (): void {
    this.iFrameBody().find(this.chatIframeButton).click()
  }

  public searchLocation (criteria: string): void {
    this.iFrameBody().find(this.searchLocationInput).clear().type(criteria)
  }

  public selectLocationOption (name: string): void {
    this.iFrameBody().find(this.locationOptionButton).contains(name).parents('button').click()
  }
}
