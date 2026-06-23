import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class VideoSection extends BaseSection {
    constructor( page: Page ) {
        const root = page.locator(".other-news-listWrap.video-news.section")
        super(root)
    }
}