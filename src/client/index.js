import { performAction , retrieveData} from "./js/app";
import { GeoName } from "./js/geoname";
import { Weatherbit } from './js/Weatherbit';
import { pixabay } from './js/pixabay';

import img from './media/airplain.png';
//const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
import './styles/style.scss';


export{ performAction, GeoName, Weatherbit, pixabay, retrieveData}