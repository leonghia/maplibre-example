import { faker } from "@faker-js/faker";
import { Location } from "./Location";
import { latitudeBounds, longitudeBounds } from "./config";
import { Mappable } from "./Mappable";

export class Company implements Mappable {
  private _name: string;
  private _catchPhrase: string;
  private _location: Location;

  public constructor() {
    this._name = faker.company.name();
    this._catchPhrase = faker.company.catchPhrase();
    this._location = {
      lng: faker.location.longitude(longitudeBounds),
      lat: faker.location.latitude(latitudeBounds),
    };
  }

  public get name(): string {
    return this._name;
  }

  public get catchPhrase(): string {
    return this._catchPhrase;
  }

  public get location(): Location {
    return this._location;
  }

  public markerContent(): string {
    return `Company: ${this._name}`;
  }
}
