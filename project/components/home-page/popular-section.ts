import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class PopularSection extends BaseSection {
    constructor( page: Page) {
        const root = page.locator(".popular-news-listWrap.section")
        super(root)
    }
}