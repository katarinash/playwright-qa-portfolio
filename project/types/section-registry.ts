import { NewsSection } from "../components/home-page/news-section";
import { VideoSection } from "../components/home-page/video-section";
import { ThoughtsSection } from "../components/home-page/thoughts-section";
import { EventsSection } from "../components/home-page/events-section";
import { PodcastsSection } from "../components/home-page/podcasts-section";
import { PopularSection } from "../components/home-page/popular-section";
import { ReportersSection } from "../components/home-page/reporters-section";
import { InterviewSection } from "../components/home-page/interview-section";
import { ProjectsSection } from "../components/home-page/projects-section";

export type SectionKey = "news" | "video" | "thoughts" | "events" | "podcasts" | "popular" | "reporters" | "interview" | "projects"

export type SectionHeading = {
    title: string;
    link: string;
    more: string;
}

export type SectionRegistry = {
    [K in SectionKey]:
    K extends "news" ? NewsSection :
    K extends "video" ? VideoSection :
    K extends "thoughts" ? ThoughtsSection :
    K extends "events" ? EventsSection :
    K extends "podcasts" ? PodcastsSection :
    K extends "popular" ? PopularSection :
    K extends "reporters" ? ReportersSection :
    K extends "interview" ? InterviewSection :
    K extends "projects" ? ProjectsSection :
    never;
}