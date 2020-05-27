import App from './app';
import token from './mapbox-token';
import './ress';
import './style';

mapboxgl.accessToken = token;
mapboxgl.prewarm();

export default App;
