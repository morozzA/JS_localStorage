import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(videoCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function videoCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
