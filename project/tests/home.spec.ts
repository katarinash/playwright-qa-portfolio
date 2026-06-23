import { HomePage } from "../pages/home-page";
import { test } from "./fixtures";
import { communityList, homePageMenu, podcasts, sectionHeadings } from "./home.data";

test.describe("Home page tests", () => {
test.beforeEach(async ({ homePage }) => {
    await homePage.open();
});

test("t_01_check_sidebar_menu_items", async ({ homePage }) => {
    await homePage.sidebarMenu.open();

    await homePage.sidebarMenu.expectItemsCount(10);
    await homePage.sidebarMenu.verifyMenuItems(homePageMenu);
});

test("t_02_check_login_button", async ({ homePage, loginPage }) => {
    await homePage.loginButton.click();
    await loginPage.checkCurrentPage();
});

test("t_03_check_community_button", async ({ homePage, communityPage }) => {
    await homePage.communityButton.click();
    await communityPage.checkCurrentPage();
    await communityPage.verifyHistoriesList(communityList)
});

test("t_04_check_section_headers", async ({ homePage }) => {
    for (const key of Object.keys(homePage.sections) as (keyof typeof homePage.sections)[]) {
        await homePage.sections[key].verifySectionHeading(sectionHeadings[key]);
    }
})

test("t_05_check_news_section_structure", async ({ homePage }) => { 
    await homePage.sections.news.verifyNewsStructure(8);
});

test("t_06_check_podcast_section", async ({ homePage }) => {
    await homePage.sections.podcasts.verifyPodcastItems(podcasts)
})
})