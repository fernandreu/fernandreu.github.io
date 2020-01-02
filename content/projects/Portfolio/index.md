---
path: "/portfolio"
cover: "./Screenshot1.png"
screenshots: ["./Screenshot1.png", "./Screenshot2.png", "./Screenshot3.png"]
date: "2019-11"
title: "This Portfolio"
subtitle: "A static portfolio website hosted in GitHub Pages"
github: "https://github.com/fernandreu/fernandreu.github.io"
published: true
tags: ['React', 'Gatsby', 'JavaScript', 'Node.js', 'Web']
---
### A static portfolio website hosted in GitHub Pages

All info regarding every project (title, tags, content, screenshots, etc.) is kept in a folder
within the repository. As with any typical [Gatsby](https://www.gatsbyjs.org/) website, GraphQL
is used to parse this info and render the corresponding web sections. No external CDN is needed.

The build / deployment is completely automated via GitHub Actions, creating a new static 
build of the website on any push to the `dev` branch which then gets pushed to the
`master` branch.

The [Contact Me](/contact) section sends all form data to an AWS Lambda function, which in turn
sends me back an email with that data via Amazon SES.
