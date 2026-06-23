import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { NewsSection } from "../components/home-page/news-section";
import { PodcastsSection } from "../components/home-page/podcasts-section";
import { VideoSection } from "../components/home-page/video-section";
import { ThoughtsSection } from "../components/home-page/thoughts-section";
import { EventsSection } from "../components/home-page/events-section";
import { PopularSection } from "../components/home-page/popular-section";
import { ReportersSection } from "../components/home-page/reporters-section";
import { InterviewSection } from "../components/home-page/interview-section";
import { ProjectsSection } from "../components/home-page/projects-section";
import { SectionRegistry } from "../types/section-registry";

export class HomePage extends BasePage {
  readonly sections: SectionRegistry;

  constructor(page: Page) {
    super(page, "/");
    this.sections = {
      news: new NewsSection(page),
      podcasts: new PodcastsSection(page),
      video: new VideoSection(page),
      thoughts: new ThoughtsSection(page),
      events: new EventsSection(page),
      popular: new PopularSection(page),
      reporters: new ReportersSection(page),
      interview: new InterviewSection(page),
      projects: new ProjectsSection(page)
    };
  }
}