export default ngModule => {
  ngModule.controller('MainCtrl', function MainCtrl() {
    this.parallaxBg = '../core/img/header.jpg';
  });
  ngModule.controller('VideosCtrl', function VideosCtrl(YoutubeService) {
    YoutubeService.getVideoById('04NFbC86gLc').then( (response) => {
      this.items = response.data.items;
    }).catch( (error) => {
      this.error = error;
    });
    YoutubeService.getVideosFromChannelById('UCbuSvPzveKFD73hLxThMeng').then( (response) => {
      // this.items = response.data.items;
    }).catch( (error) => {
      this.error = error;
    });
  });
};
