import { PodcastItems } from "../types/podcast-types";
import { SectionHeading, SectionKey } from "../types/section-registry";
import { MenuItem } from "../types/sidemenu-types";

export const homePageMenu: MenuItem[] = [
  {
    name: "Спільнота",
    href: "https://theukrainians.org/community/"
  },
  {
    name: "Інтерв’ю",
    href: "https://theukrainians.org/category/interview/"
  },
  {
    name: "Думки",
    href: "https://theukrainians.org/category/opinion/"
  },
  {
    name: "Репортажі",
    href: "https://theukrainians.org/category/reportages/"
  },
  {
    name: "Журнал",
    href: "https://theukrainians.org/category/reporters/"
  },
  {
    name: "Спецпроєкти",
    href: "https://theukrainians.org/category/specials/"
  },
  {
    name: "Відео",
    href: "https://theukrainians.org/category/video/"
  },
  {
    name: "Новини",
    href: "/news/"
  },
  {
    name: "Події",
    href: "https://theukrainians.org/events/"
  },
  {
    name: "Магазин",
    href: "https://shop.theukrainians.org/"
  }
];  

export const communityList = [
  "друкований журнал Reporters",
  "амбасадорська торба",
  "книжковий клуб",
  "ексклюзивні фрагменти ютуб-шоу",
  "закритий канал Спільноти",
  "доступ до всіх матеріалів на сайті",
  "мейл-розсилка для своїх",
  "знижки на книжки і не тільки"
];

export const sectionHeadings: Record<SectionKey, SectionHeading>  = {
    news: { title: "Новини", link: "https://theukrainians.org/news/", more: "більше новин" },
    video: { title: "Відео", link: "https://theukrainians.org/category/video", more: "більше відео" },
    thoughts: { title: "Думки", link: "https://theukrainians.org/category/opinion", more: "читати ще" },
    events: { title: "Події", link: "https://theukrainians.org/events", more: "усі події" },
    podcasts: { title: "Подкасти", link: "https://soundcloud.com/the-ukrainians", more: "більше подкастів" },
    popular: { title: "Популярне", link: "https://theukrainians.org/popular/", more: "читати ще" },
    reporters: { title: "Репортажі", link: "https://theukrainians.org/category/reportages/", more: "всі репортажі" },
    interview: { title: "Iнтерв’ю", link: "https://theukrainians.org/category/interview/", more: "всі інтервʼю" },
    projects: { title: "Спецпроєкти", link: "https://theukrainians.org/category/specials/", more: "всі спецпроєкти" },
};

export const podcasts: PodcastItems[] = [
  {
    href: "https://li.sten.to/m593mj3n",
    image: "https://theukrainians.org/wp-content/uploads/2025/12/behonii2.0_1-1440x1440.jpg",
    title: "Я соромлюся своїх нарцисів"
  },
  {
    href: "https://li.sten.to/planet-of-the-people",
    image: "https://theukrainians.org/wp-content/uploads/2025/12/dce3df2e313ffc6a95b20bda05ca6a13042045eb64b564dd68d569418da39fa9.jpg",
    title: "«Планета людей» в аудіо"
  },
  {
    href: "https://li.sten.to/how-did-we-s1e4",
    image: "https://theukrainians.org/wp-content/uploads/2023/08/iak-my-kokhalysia-1024x1024.png",
    title: "Як українці говорили про секс"
  },
  {
    href: "https://li.sten.to/9tfmk1w9",
    image: "https://theukrainians.org/wp-content/uploads/2024/04/pravyla-gry-1-1440x1440.jpeg",
    title: "Наші міста як проєкція української ідентичності"
  },
  {
    href: "https://li.sten.to/hrytsak-podcast",
    image: "https://theukrainians.org/wp-content/uploads/2023/12/Hrytsak-Ukrainasmall.png",
    title: "Подкаст Ярослава Грицака"
  }
];