import {test} from "@playwright/test";
import { HomePage } from "../pages/home-page";

test("t_01_open_home_page", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
});