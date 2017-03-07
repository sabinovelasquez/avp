export default ngModule => {
  ngModule.config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('main', {
        url: '/',
        template: require('../main/main.jade'),
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
      .state('videos', {
        url: '/videos',
        template: require('../main/videos/videos.jade'),
        controller: 'VideosCtrl',
        controllerAs: 'videos',
      });
    }
  );
};
