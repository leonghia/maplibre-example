import maplibregl from "maplibre-gl";
import { mapUrl, mapKey, center, zoom } from "./config";
import { Location } from "./Location";
import { Mappable } from "./Mappable";

export class CustomMap {
  private _map: maplibregl.Map;

  public constructor(containerId: string) {
    this._map = new maplibregl.Map({
      container: containerId, // container id
      style: `${mapUrl}/goong_map_web.json?api_key=${mapKey}`, // style URL
      center: center, // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
  }

  private _addMarker(mappable: Mappable) {
    // create the popup
    const popup = new maplibregl.Popup({ offset: 25 }).setText(
      mappable.markerContent()
    );

    // create the marker
    new maplibregl.Marker({ color: "#ef4444", className: "nghia-marker" })
      .setLngLat([mappable.location.lng, mappable.location.lat])
      .setPopup(popup) // sets a popup on this marker
      .addTo(this._map);
  }

  public addMarkers(startMappble: Mappable, endMappable: Mappable) {
    this._addMarker(startMappble);
    this._addMarker(endMappable);
    const midPoint: Location = {
      lng: (startMappble.location.lng + endMappable.location.lng) / 2,
      lat: (startMappble.location.lat + endMappable.location.lat) / 2,
    };
    this._map.flyTo({ center: [midPoint.lng, midPoint.lat], zoom: zoom });
  }

  public init(): void {}
}
