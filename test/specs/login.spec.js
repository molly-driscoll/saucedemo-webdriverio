const loginPage = require('../pages/login.page');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Login', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('should be able to login with the standard user', () => {
        loginPage.loginWithStandardUser();

        expect(browser.getUrl()).to.include('/inventory.html');
        assert.include(browser.getUrl(), 'inventory.html');

    });


});