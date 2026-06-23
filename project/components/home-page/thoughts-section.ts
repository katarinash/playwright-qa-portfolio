import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class ThoughtsSection extends BaseSection {
    constructor( page: Page) {
        const root = page.locator("xpath=//div[@class ='other-news-listWrap section']");
        super(root)
    }
}