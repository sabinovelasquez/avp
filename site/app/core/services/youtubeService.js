export default ngModule => {
  ngModule.service('YoutubeService', function YoutubeService(youtubeFactory) {
    const key = 'AIzaSyDLgnIRMVYMj-5r5YY3-qXbRf6CYmAkpH4';
    const service = {
      getVideoById: (id) => {
        return youtubeFactory.getVideoById({
          videoId: id,
          part: 'id,snippet,contentDetails',
          key: key,
        });
      },
      getVideosFromChannelById: (id) => {
        return youtubeFactory.getVideosFromChannelById({
          channelId: id,
          maxResults: 24,
          key: key,
        });
      },
    };
    return service;
  });
};
