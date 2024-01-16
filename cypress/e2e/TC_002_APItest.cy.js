describe('DemoBlaze API testing', () => {
	it('Sign new user', () => {
		cy.request({
			method: 'POST',
			url: 'https://api.demoblaze.com/signup',
			body: {
				password: '123456789',
				username: 'Mdelgado',
			},
		}).as('signup')
		cy.get('@signup').its('status').should('equal', 200)
	})

	it('Sign existing user', () => {
		cy.request({
			method: 'POST',
			url: 'https://api.demoblaze.com/signup',
			body: {
				password: 'test',
				username: 'test',
			},
		}).as('signup')
		cy.get('@signup').then((res) => {
			cy.log(res)
			expect(res.body.errorMessage).to.equal('This user already exist.')
		})
	})

	it('login regitred user', () => {
		cy.request({
			method: 'POST',
			url: 'https://api.demoblaze.com/login',
			body: {
				password: '123456789',
				username: 'Mdelgado',
			},
		}).as('login')
		cy.get('@login').its('status').should('equal', 200)
	})

	it('try login with non existing user', () => {
		cy.request({
			method: 'POST',
			url: 'https://api.demoblaze.com/login',
			body: {
				password: 'no',
				username: 'imnotuser',
			},
		}).as('login')
		cy.get('@login').then((res) => {
			cy.log(res)
			expect(res.body.errorMessage).to.equal('User does not exist.')
		})
	})
})
