---
path: "/office-ribbonx-editor"
cover: "./Screenshot1.png"
date: "2019-01-01"
title: "Office RibbonX Editor"
subtitle: "Edit UI files for Microsoft Office documents easily"
github: "https://github.com/fernandreu/office-ribbonx-editor"
published: true
tags: ['C#', 'WPF', 'Desktop']
---
### Edit UI files for Microsoft Office documents easily

This project is a migration from Windows Forms to WPF of the original [project](https://github.com/OfficeDev/office-custom-ui-editor/) by Microsoft, taking advantage of
the MVVM pattern to produce a more streamlined UI while adding extra features.

The main feature added is the use of a [ScintillaNET](https://github.com/jacobslusser/ScintillaNET) text editor with advanced capabilities,
such as line numbering and quick syntax highlighting. Several editor settings, such as font size and colors,
can be customized.

In addition, a _reload on save_ mechanism ensures that no data is lost when saving an Office document
that was modified externally at the same time.

Other features added are: a recent file list, extra editor actions and the possibility of having more than
one Office document open simultaneously.

The project uses CI/CD practices (via Azure Pipelines) to ensure newer versions are fully
tested before become available to the user. In addition, new releases are automatically created on GitHub
when new Git tags (e.g. `v1.0`) gets pushed to the repository.
