export default ngModule => {
  ngModule.service('YoutubeService', function YoutubeService(youtubeFactory) {
    const service = {
      getVideosFromChannelById: (id) => {
        return youtubeFactory.getVideosFromChannelById({
          channelId: id,
          maxResults: 24,
          key: 'AIzaSyDLgnIRMVYMj-5r5YY3-qXbRf6CYmAkpH4',
        });
      },
    };
    return service;
  });
};
