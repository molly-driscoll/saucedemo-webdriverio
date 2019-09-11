const loginPage = require('../pages/login.page');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Login', () => {
    beforeEach(() => {
        browser.url('/');
    });

    // //it('should be able to login with the standard user', () => {
    //     loginPage.loginWithStandardUser();
    //
    //     expect(browser.getUrl()).to.include('/inventory.html');
    //     assert.include(browser.getUrl(), 'inventory.html');
    //
    // });

    it('pageLoad and speedIndex has exceeded the baseline metrics', () => {
        const output = browser.execute('sauce:performance', {
            name: 'Login',
            metrics: ['speedIndex', 'load'],
        });
        const { result, details } = output;
        return assert.equal(
            result, 'pass',
            `Regression detected for metrics
                ${JSON.stringify(details, null, 4)}`,
        );
    });



});