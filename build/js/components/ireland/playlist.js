define(['exports', 'spotify'], function (exports, _spotify) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _SpotifyWebApi = _interopRequireDefault(_spotify);

  var initPlaylist = function initPlaylist() {
    var spotifyWebApi = new _SpotifyWebApi['default']();
    console.log(spotifyWebApi.getAccessToken());
    console.log(spotifyWebApi);
  };
  exports.initPlaylist = initPlaylist;
});
//# sourceMappingURL=playlist.js.map