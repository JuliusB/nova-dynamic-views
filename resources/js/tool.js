Nova.booting((Vue, router, store) => {
  Vue.component('custom-attach-header', require('./components/CustomAttachHeader'))
  Vue.component('custom-create-header', require('./components/CustomCreateHeader'))
  Vue.component('custom-dashboard-header', require('./components/CustomDashboardHeader'))
  Vue.component('custom-detail-header', require('./components/CustomDetailHeader'))
  Vue.component('custom-detail-toolbar', require('./components/CustomDetailToolbar'))
  Vue.component('custom-index-header', require('./components/CustomIndexHeader'))
  Vue.component('custom-index-toolbar', require('./components/CustomIndexToolbar'))
  Vue.component('custom-lens-header', require('./components/CustomLensHeader'))
  Vue.component('custom-update-attach-header', require('./components/CustomUpdateAttachedHeader'))
  Vue.component('custom-update-header', require('./components/CustomUpdateHeader'))

  // router.addRoutes([
  //   {
  //     name: 'nova-dynamic-views',
  //     path: '/nova-dynamic-views',
  //     component: require('./components/Tool'),
  //   },
  // ])
})
