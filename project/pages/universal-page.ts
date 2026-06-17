/// <reference types="node" />
import process from "process";
import { Locator, Page, expect } from "@playwright/test";

export class UniversalPage {
  protected page: Page;
  protected BASE_URL: string;
  protected pageUrl: string;

  constructor(page: Page, pageUrl: string, baseUrl?: string ) {
    this.page = page;
    this.BASE_URL = (baseUrl ?? process.env.BASE_URL ?? '').replace(/\/$/, '');

    if (!this.BASE_URL) {
      throw new Error('BASE_URL is not defined. Set it in .env or pass a baseUrl argument.');
    }

    this.pageUrl = `${this.BASE_URL}${pageUrl.startsWith('/') ? pageUrl : `/${pageUrl}`}`;
  }

  async open() {
    await this.page.goto(this.pageUrl);
    await expect(this.page).toHaveURL(this.pageUrl);
  }

  async checkCurrentPage() {
    await expect(this.page).toHaveURL(new RegExp(this.pageUrl));
  }
}