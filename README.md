# Screenshoter app

Simple server app for making screenshoot of any webpage.

This app has two implementations using:
 - [puppeteer](https://github.com/GoogleChrome/puppeteer);
 - [phantomjs-node](https://github.com/amir20/phantomjs-node).

 All implmentaions has config for deploy and run in heroku dynos(containers).

 ## Resume

 #### phantomjs
 - easier deploy;
 - smaller size *and resources usage (I'm not sure of that)*.

  #### puppeteer
 - easier usage;
 - more possibilities.

 I think phantomjs better way for simple crawling, but puppeteer good choice for testing or hacking.
