import towerClimberScreenshot from './img/tower-climber-screenshot.png';
import microDexScreenshot from './img/micro-dex-screenshot.png';
import realArticlesScreenshot from './img/real-articles-screenshot.png';
import bookstoreScreenshot from './img/bookstore-screenshot.png';
import meetingBookerScreenshot from './img/meeting-booker-screenshot.png';

const projects = [
  {
    title: "Tower Climber Game",
    description: "Mountain Climber is a platform game inspired by the 80s games of this genre. Players climb through five levels of increasing difficulty until they reach the flag. Built with JavaScript and Phaser3.",
    screenshot: towerClimberScreenshot,
    index: 0,
    repo: "https://github.com/MiguelDP4/catalogue-statistics",
    demo: "http://micro-dex.herokuapp.com/",
  },
  {
    title: "Micro-Dex",
    description: "This is a super basic poke-dex application. Users can search, filter and sort Pokemon by type and name. Built with JavaScript, React and Redux.",
    screenshot: microDexScreenshot,
    index: 1,
    repo: "https://github.com/MiguelDP4/catalogue-statistics",
    demo: "http://micro-dex.herokuapp.com/",
  },
  {
    title: "Real Articles",
    description: "Real articles is a web application where users can register and write their own articles. Logged-in users can also vote for articles, and highest ranked articles are showcased. Built with Ruby and Ruby on Rails.",
    screenshot: realArticlesScreenshot,
    index: 2,
    repo: "https://github.com/MiguelDP4/real-articles",
    demo: "https://real-articles-demo.herokuapp.com/",
  },
  {
    title: "Bookstore front-end",
    description: "This is a bookstore app, where users can add, remove and filter book records. Built with JavaScript, React, and Redux.",
    screenshot: bookstoreScreenshot,
    index: 3,
    repo: "https://magic-bookstore10.herokuapp.com/",
    demo: "https://github.com/fedgut/Bookstore-CMS",
  },
  {
    title: "Meeting Booker",
    description: "This project simulates a conference room booking application for a fictitious company. Employees can book a conference room at certain hour and day; each user can create as many bookings as they like. Built with JavaScript, React, and Redux.",
    screenshot: meetingBookerScreenshot,
    index: 4,
    repo: "https://github.com/MiguelDP4/meeting-booker",
    demo: "https://meeting-booker.herokuapp.com/",
  },
];

export default projects;