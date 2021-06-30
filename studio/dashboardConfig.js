export default {
  widgets: [
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
                  buildHookId: '60dcb2a0ef6b966beae60017',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bt6q821t',
                  apiId: 'a0f5f6de-a3fe-494c-bc1f-5ec48e87756a'
                },
                {
                  buildHookId: '60dcb2a0395dea67d0573c97',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9zaagxom',
                  apiId: '3cde71a7-8c7f-44fc-bd14-2c55ec14ae1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/freshyill/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9zaagxom.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
