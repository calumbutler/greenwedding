define(['exports', 'spotify'], function (exports, _spotify) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _SpotifyWebApi = _interopRequireDefault(_spotify);

  var initPlaylist = function initPlaylist() {
    var spotifyWebApi = new _SpotifyWebApi['default']();
    console.log(spotifyWebApi);
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == XMLHttpRequest.DONE) {
    //       console.log(xhr.responseText);
    //   }
    // }
    //window.open( 'https://accounts.spotify.com/authorize?client_id=e6039d2191f146e3a7e5a8bd17264df3&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fwedding%2Fcallback%2F&scope=user-read-private%20user-read-email&response_type=token&state=123', '_self');
    // xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    // xhr.setRequestHeader('Content-type', 'application/json');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // //xhr.setRequestHeader('grant-type', 'client_credentials');
    // let base64 = 'Basic ' + new Buffer('e6039d2191f146e3a7e5a8bd17264df3:a9d2bfc217864070ba8c820692b3f166').toString('base64');;
    // //xhr.setRequestHeader('Authorization', base64);

    // xhr.send(null);
    // 'e6039d2191f146e3a7e5a8bd17264df3'
    // 'a9d2bfc217864070ba8c820692b3f166'

    console.log(spotifyWebApi);
    spotifyApi.setAccessToken('BQBuXftC0dlznOp743QH_oBs1_p25OEUmgGIhxFynv7iDRelcDA8qyuatboIpmatjN1BFL0Y4RZ32krIeEsyo56hKU20KB3xqVYlNZE3gExiaNbCiITrY5bqes0RpZb9lDtjIx4CHFn3v6noRuaymfkCXYJTcR-SviQ');

    spotifyApi.getPlaylist('jmperezperez', '4vHIKV7j4QcZwgzGQcZg1x').then(function (data) {
      console.log('User playlist', data);
    }, function (err) {
      console.error(err);
    });
  };
  exports.initPlaylist = initPlaylist;
});
//# sourceMappingURL=playlist.js.map