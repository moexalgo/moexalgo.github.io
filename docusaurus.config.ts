// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "ALGOPACK",
  tagline: "ALGOPACK",
  url: "https://moexalgo.github.io",
  baseUrl: "/",
  organizationName: "moexalgo", 
  projectName: "moexalgo.github.io",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },
  
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7/css/all.min.css",
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: ({docPath}) => {
            if (docPath.startsWith('examples/')) {
              const notebookPath = docPath.replace('.mdx', '.ipynb').replace('docs/', '');
              return `https://github.com/moexalgo/moexalgo.github.io/edit/main/${notebookPath}`;
            }
            return `https://github.com/moexalgo/moexalgo.github.io/edit/main/docs/${docPath}`;
          },
          docItemComponent: "@theme/ApiItem",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/github-repo.css"),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  

  themeConfig:
    { 
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "ALGOPACK",
        logo: {
          alt: "ALGOPACK",
          src: "img/AlgoPack.png",
          href: '/',
        },
        style: 'primary',
        items: [
        {
          label: "API",
          position: "left",
          to: "/docs/api",
        },
        {
          type: 'docSidebar',
          sidebarId: 'datasetsSidebar',
          position: 'left',
          label: 'Датасеты',
        },
        {
          type: 'docSidebar',
          sidebarId: 'descriptionSidebar',
          position: 'left',
          label: 'Описание данных',
        },
        {
          type: 'docSidebar',
          sidebarId: 'methodologySidebar',
          position: 'left',
          label: 'Методология',
        },
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Примеры',
        },
        {
          type: 'docSidebar',
          sidebarId: 'pythonSidebar',
          position: 'left',
          label: 'Python',
        },
        {
          type: 'docSidebar',
          sidebarId: 'contactsSidebar',
          position: 'left',
          label: 'Обратная связь',
        },
        {
          type: 'search',
          position: 'right', // or 'right'
        },
        {
          type: 'custom-github-repo',
          position: 'right',
          owner: 'moexalgo',
          repo: 'moexalgo'
        },
        ],
      },
      prism: {
        additionalLanguages: [
          "ruby",
          "csharp",
          "php",
          "java",
          "powershell",
          "json",
          "bash",
          "r",
        ],
      },
      languageTabs: [
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
      },
      {
        highlight: "bash",
        language: "curl",
        logoClass: "curl",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "r",
        language: "r",
        logoClass: "r",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "rust",
        language: "rust",
        logoClass: "rust",
      },
      {
        highlight: "kotlin",
        language: "kotlin",
        logoClass: "kotlin",
      },
      {
        highlight: "swift",
        language: "swift",
        logoClass: "swift",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
      {
        highlight: "c",
        language: "c",
        logoClass: "c",
      },
    ],
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          algopack: {
            specPath: "static/openapi/openapi.yaml",
            outputDir: "docs/api",
            infoTemplate: 'docs/algopack-api.mdx',
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
    {
      indexDocs: true,
      indexBlog: true,
      indexPages: true,
      language: ["en", "ru"],
      maxSearchResults: 8,
    }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}
