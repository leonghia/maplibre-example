import "maplibre-gl/dist/maplibre-gl.css";
import "./style.css";
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");
customMap.init();
customMap.addMarkers(user, company);
