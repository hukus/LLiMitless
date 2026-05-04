import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "LLiMitless Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: process.env.QUARTZ_BASE_URL ?? "hukus.github.io/LLiMitless",
    ignorePatterns: ["private", "templates", ".obsidian", "raw", "_archive", "TODO.md", "IDEAS.md"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfaf7",
          lightgray: "#e7e3db",
          gray: "#b9b2a7",
          darkgray: "#4f555f",
          dark: "#202326",
          secondary: "#265f73",
          tertiary: "#6f7f4f",
          highlight: "rgba(38, 95, 115, 0.13)",
          textHighlight: "#fff1a6",
        },
        darkMode: {
          light: "#171819",
          lightgray: "#34383a",
          gray: "#697074",
          darkgray: "#d7d0c6",
          dark: "#f3efe7",
          secondary: "#8db9c7",
          tertiary: "#b8c788",
          highlight: "rgba(141, 185, 199, 0.16)",
          textHighlight: "#5a4c16",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: true, lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
