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



