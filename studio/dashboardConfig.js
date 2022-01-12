export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61de502b50297e9aaa96d2cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5wnduuhs',
                  apiId: 'ee74bd21-da46-4d32-ba83-33f1a99a4e7d'
                },
                {
                  buildHookId: '61de502c2727ee8e67c21b7b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3rc51ngv',
                  apiId: '55ec8d66-122e-419a-bd68-7b05124a291d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lcouso-byte/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3rc51ngv.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
