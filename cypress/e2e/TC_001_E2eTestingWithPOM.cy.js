import DemoBlazePage from '../pages/DemoBlazePage'

describe('test on DemoBlaze', () => {
	it('add 2 products to car and finalizace the purchace', () => {
		const demoBlazePage = new DemoBlazePage()
		demoBlazePage.openDemoPage()
		demoBlazePage.assertURL()
		demoBlazePage.asserTitle()
		demoBlazePage.loginIntoSite()
		demoBlazePage.addProduct1()
		demoBlazePage.asserTitle()
		demoBlazePage.addProduct2()
		demoBlazePage.checkCart()
		demoBlazePage.placeTheOrder()
	})
})
