import { Given,When,Then} from "@wdio/cucumber-framework";
import {Key} from "webdriverio"

Given(/^Google page is opened$/,async function(){

     await browser.url('https://www.google.com/')
})

When(/^Search with (.*)$/,async function(searchItem){

    (await $('[title="Search"]')).setValue(searchItem);
    //await browser.keys("Enter");
    await browser.keys([Key.ArrowDown]);
    await browser.keys([Key.Enter]);
})

Then(/^click on first search result$/,async function(){

    (await $$('//div[@lang="en"]//a//div//cite'))[0].click()
})

Then(/^URL should match (.*)$/,async function(url){

    expect(await browser.getUrl()).toEqual(url);
})

Given(/^Webpage is opened$/,async function(){

    await browser.url('/inputs')
    await browser.setTimeout({implicit:10000,pageLoad:8000,script:10000})
    await browser.maximizeWindow();
})

When(/^Perform web Intraction$/,async function(){

    let inputType= $(`[type="number"]`);
    await inputType.setValue(`1234`);
    //Clear then send text : setValue

    await inputType.scrollIntoView();

    await inputType.addValue(`5678`);
    // Add value but not clear the field , used in file upload (like sendKeys but this method not clear the field so we'll use this)

    console.log(`Value is : ${await inputType.getValue()}`);

    await browser.pause(2000);
})
























// const element = $('#yourElementSelector');

// // Using async/await
// await element.click();
// await element.setValue('some text');
// const text = await element.getText();
// console.log('Element text:', text);

// // Using promises
// element.click().then(() => {
//     return element.setValue('some text');
// }).then(() => {
//     return element.getText();
// }).then((text) => {
//     console.log('Element text:', text);
// });



