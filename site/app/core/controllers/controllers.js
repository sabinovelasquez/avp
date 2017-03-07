export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl() {
    this.parallaxBg = '../core/img/header.jpg';
  });
  ngModule.controller('VideosCtrl', function VideosCtrl(YoutubeService) {
    YoutubeService.getVideosFromChannelById('UCve7_yAZHFNipzeAGBI5t9g').then( (response) => {
      this.items = response.data.items;
    }).catch( (error) => {
      this.error = error;
    });
  });
};
