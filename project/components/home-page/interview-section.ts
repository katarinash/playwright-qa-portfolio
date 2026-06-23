import { Page } from "@playwright/test";
import { BaseSection } from "./base-section";

export class InterviewSection extends BaseSection {
    constructor(page: Page) {
        const root = page.locator(".interview-listWrap.section")
        super(root)
    }
}