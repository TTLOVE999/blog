export default [{
  path: 'links',
  component: () => import('empty-component'),
  children: [{
    path: '/',
    name: 'dashboard.link',
    component: () => import('./Link')
  }, {
    path: 'create',
    name: 'dashboard.link.create',
    component: () => import('./Create')
  }, {
    path: ':id/edit',
    name: 'dashboard.link.edit',
    component: () => import('./Edit')
  }]
}]
