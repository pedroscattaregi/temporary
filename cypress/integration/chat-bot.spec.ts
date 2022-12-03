import { WebChatPage } from '@root/cypress/support/pages/web-chat-po'
import { ChatFormPage } from '@root/cypress/support/pages/chat-form-po'

describe('Chatbot', () => {
  it('Has main elements', { tags: '@regression' }, () => {
    // given
    const webChatPage = new WebChatPage()

    // when
    webChatPage.navigate()

    // then
    webChatPage.getChatIframeButton().should('be.visible')
    cy.contains('All we have to decide is what to do with the time that is given us.').should('be.visible')
  })

  it('Should not return location when criteria doesn\'t match', { tags: '@regression' }, () => {
    // given
    const webChatPage = new WebChatPage()

    // when
    webChatPage.navigate()
    webChatPage.openChat()
    webChatPage.searchLocation('some random text')

    // then
    // Bug Reported
    webChatPage.getLocationOptions().should('not.be.visible')
  })

  it('Should be able to choose a valid location', { tags: '@regression' }, () => {
    // given
    const webChatPage = new WebChatPage()
    const chatFormPage = new ChatFormPage()

    // when
    webChatPage.navigate()
    webChatPage.openChat()
    webChatPage.selectLocationOption('Scoreboard')

    // then
    chatFormPage.getMessage('intro message').should('exist')
    chatFormPage.getNameInput().should('be.visible')
    chatFormPage.getMobilePhoneInput().should('be.visible')
    chatFormPage.getMessageInput().should('be.visible')
  })

  it('Should return error for missing information', { tags: '@regression' }, () => {
    // given
    const webChatPage = new WebChatPage()
    const chatFormPage = new ChatFormPage()

    // when
    webChatPage.navigate()
    webChatPage.openChat()
    webChatPage.selectLocationOption('Scoreboard')
    chatFormPage.send()

    // then
    chatFormPage.getMessage('Name is required').should('be.visible')
    chatFormPage.getMessage('Mobile phone is required').should('be.visible')
    chatFormPage.getMessage('Message is required').should('be.visible')
  })

  it('Should return error if the number is invalid', { tags: ['@regression', '@smoke'] }, () => {
    // given
    const webChatPage = new WebChatPage()
    const chatFormPage = new ChatFormPage()

    // when
    webChatPage.navigate()
    webChatPage.openChat()
    webChatPage.selectLocationOption('Scoreboard')
    chatFormPage.sendName('Automated Name')
    chatFormPage.sendPhoneNumber('123123123123')
    chatFormPage.sendMessage('Automated Message Test')
    chatFormPage.send()

    // then
    chatFormPage.getMessage('Please enter a phone number that can receive texts.').should('be.visible')
  })
})
