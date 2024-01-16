class DemoBlazePage {
	openDemoPage() {
		cy.visit('https://www.demoblaze.com')
	}

	assertURL() {
		cy.url().should('contain', 'demoblaze.com')
	}

	asserTitle() {
		cy.title().should('contain', 'STORE')
	}

	loginIntoSite() {
		cy.get('#login2').click()
		cy.get('#logInModal').should('be.visible')
		cy.get('#loginusername').type('test', { force: true })
		cy.get('#loginpassword').type('test', { force: true })
		cy.get('.btn-primary').contains('Log in').click()
		cy.get('#nameofuser').should('contain', 'Welcome test')
	}

	addProduct1() {
		cy.fixture('elements.json').as('userData')
		cy.get('@userData').then((user) => {
			cy.get('h4').contains(user.product1).click()
			cy.get('h2').should('contain', user.product1)
		})
		cy.wait(2000)
		cy.get('.btn-success').click({ force: true })
		cy.on('window:alert', (text) => {
			expect(text).to.contains('Product added.')
		})

		cy.get('.nav-link').contains('Home').click()
	}

	addProduct2() {
		cy.wait(2000)
		cy.get('footer').scrollIntoView()
		cy.get('#next2').click()
		cy.fixture('elements.json').as('userData')
		cy.get('@userData').then((user) => {
			cy.get('h4').contains(user.product2).click()
			cy.get('h2').should('contain', user.product2)
		})

		cy.get('.btn-success').click()
		cy.on('window:alert', (text) => {
			expect(text).to.contains('Product added.')
		})
		cy.get('.nav-link').contains('Home').click()
	}

	checkCart() {
		cy.get('#cartur').click()
		cy.get('h2').should('contain', 'Products')
		let sumaDePrecios = 0
		cy.get('tbody tr:nth-child(1) td:nth-child(3)').then(($price1) => {
			sumaDePrecios += parseFloat($price1.text())
		})

		cy.get('tbody tr:nth-child(2) td:nth-child(3)').then(($price2) => {
			sumaDePrecios += parseFloat($price2.text())
		})

		cy.get('#totalp')
			.invoke('text')
			.then((text) => {
				const totalMostrado = parseFloat(text.replace(/[^0-9.]/g, ''))
				expect(sumaDePrecios).to.eq(totalMostrado)
			})
	}

	placeTheOrder() {
		cy.get('.btn.btn-success').click()
		cy.fixture('elements.json').as('userData')
		cy.get('@userData').then((user) => {
			cy.get('.modal-dialog').should('be.visible')
			cy.get('#name').type(user.cname)
			cy.get('#country').type(user.country)
			cy.get('#city').type(user.city)
			cy.get('#card').type(user.cnumber)
			cy.get('#month').type(user.month)
			cy.get('#year').type(user.year)
		})
		cy.get('.btn').contains('Purchase').click()
		cy.get('.sweet-alert').should('be.visible')
		cy.get('h2').should('contain', 'Thank you for your purchase!')
		cy.wait(1000)
		cy.get('.confirm ').contains('OK').click()
	}
}
export default DemoBlazePage
