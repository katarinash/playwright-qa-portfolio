import { Locator, Page } from "@playwright/test";
import { UniversalPage } from "./universal-page";

export class HomePage extends UniversalPage {

  constructor(page: Page) {
    super(page, "/");
  }
}