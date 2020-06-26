var homepage=require('../pages/homepage.js');

describe('demo calculator test', function () {

    it('addition test', function () {
//console.log(homepage);
        //browser.get('http://juliemr.github.io/protractor-demo/');

       // element(by.model('first')).sendKeys('2');
       
    homepage.get('http://juliemr.github.io/protractor-demo/');

      homepage.enterFirstNumber('3');


       homepage.enterSecondNumber('3');


        homepage.clickGo();


       homepage.verifyResult('6');

//element(by.model('second')).sendKeys('4');

      //  element(by.css('[ng-click="doAddition()"]')).click();


      // var result = element(by.cssContainingText('.ng-binding', '6'));






      // expect(result.getText()).toEqual(6);


        browser.sleep(2000);
    });


});