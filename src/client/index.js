import { performAction , retrieveData} from "./js/app";
import { GeoName } from "./js/geoname";
import { Weatherbit } from './js/Weatherbit';
import { pixabay } from './js/pixabay';

import img from './media/airplain.png';
// after testing uncomment
//import (require.context('./media/', true, /\.(png|jpe?g|svg)$/));
import './styles/style.scss';


export{ performAction, GeoName, Weatherbit, pixabay, retrieveData}