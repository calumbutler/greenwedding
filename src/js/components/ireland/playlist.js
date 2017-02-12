import SpotifyWebApi from 'spotify';

export let initPlaylist = () => {
  let spotifyWebApi = new SpotifyWebApi();
  console.log(spotifyWebApi.getAccessToken());
  console.log(spotifyWebApi)
}
