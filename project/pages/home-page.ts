import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { NewsSection } from "../components/news-section";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page, "/");
  }

  get newsSection() {
    return new NewsSection(this.page);
  }
}