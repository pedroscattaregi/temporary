import { IFrameBasePage } from './iframe-base-po'

export class ChatFormPage extends IFrameBasePage {
  private readonly composeMessage = 'div#ComposeMessage'
  private readonly nameInput = 'input#Name'
  private readonly mobilePhoneInput = 'input[id="Mobile Phone"]'
  private readonly messageInput = 'textarea#Message'
  private readonly termsLink = 'a[href="https://www.podium.com/acceptable-use-policy/"]'
  private readonly sendButton = 'button[type="submit"]'

  public getMessage (message: string): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().contains(message)
  }

  public getNameInput (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().find(this.nameInput)
  }

  public getMobilePhoneInput (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().find(this.mobilePhoneInput)
  }

  public getMessageInput (): Cypress.Chainable<JQuery<HTMLBodyElement>> {
    return this.iFrameBody().find(this.messageInput)
  }

  public goToTerms (): void {
    this.iFrameBody().find(this.composeMessage).find(this.termsLink).invoke('removeAttr', 'target').click()
  }

  public sendName (name: string): void {
    this.iFrameBody().find(this.nameInput).type(name)
  }

  public sendPhoneNumber (phoneNumber: string): void {
    this.iFrameBody().find(this.mobilePhoneInput).type(phoneNumber)
  }

  public sendMessage (message: string): void {
    this.iFrameBody().find(this.messageInput).type(message)
  }

  public send (): void {
    this.iFrameBody().find(this.sendButton).click()
  }
}
