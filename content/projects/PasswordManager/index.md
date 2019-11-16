---
path: "/password-manager"
cover: "./Screenshot1.png"
screenshots: ["./Screenshot1.png", "./Screenshot2.png", "./Screenshot3.png", "./Screenshot4.png"]
date: "2019"
title: "Password Manager"
subtitle: "A static website which allows you to manage sensitive data in your preferred cloud platform"
github: "https://github.com/fernandreu/password-manager"
published: true
tags: ['TypeScript', 'Angular', 'Web']
---
### A static website which allows you to manage sensitive data in your preferred cloud platform

While there are many fully featured, web-based password managers out there, their means of storing /
manipulating sensitive data might not be entirely clear, which hence can raise some security and data
privacy concerns to users. This **WIP** project is an alternative to those as a means of mitigating those
concerns.

In terms of data storage, this is achieved by not having storage infrastructure at all. Instead, the app
delegates that responsibility to a well-known cloud service of the user's choice. All your personal data
will be encrypted (using your master password) and stored in a private folder on that cloud service. No
other app will have access to that data, and only you have access to the master password.

In terms of data manipulation, the most suspicious users can also rest assured, as all the app's code is
publicly available on GitHub. Therefore, every single line of code can be inspected to ensure no insecure /
malicious actions are taking place with sensitive data.

This project uses CI / CD practices (via Travis CI) to ensure everything is properly tested prior to being
automatically deployed to [GitHub Pages](https://fernando.andreu.info/password-manager).

_Note: Dropbox is currently the only available cloud service; integration with OneDrive and Google Drive is 
ongoing._
