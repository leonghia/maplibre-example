import { faker } from "@faker-js/faker";
import { Location } from "./Location";
import { longitudeBounds, latitudeBounds } from "./config";
import { Mappable } from "./Mappable";

export class User implements Mappable {
  private _name: string;
  private _location: Location;

  public constructor() {
    this._name = faker.person.firstName();
    this._location = {
      lng: faker.location.longitude(longitudeBounds),
      lat: faker.location.latitude(latitudeBounds),
    };
  }

  public get name(): string {
    return this._name;
  }

  public get location(): Location {
    return this._location;
  }

  public markerContent(): string {
    return `User: ${this._name}`;
  }
}
