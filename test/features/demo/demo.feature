Feature: Demo Feature

    Feature Description
    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then click on first search result
        And URL should match <ExpectedURL>


        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |