export class Contact {
    title = "Contact"
    #info

    constructor(contactInfo) {
        this.#info = contactInfo
    }

    render() {
        const contact = document.createElement('section')
        const heading = document.createElement('h2')
        const paragraph = document.createElement('p')

        heading.innerHTML = 'Come Sip With Us'
        paragraph.innerHTML = this.#info

        contact.appendChild(heading)
        contact.appendChild(paragraph)

        return contact
    }
}