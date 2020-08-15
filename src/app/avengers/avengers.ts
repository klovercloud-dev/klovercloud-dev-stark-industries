export class Avengers {
  code: string
  name: string
  position: string
  image: object
  imageName: string
  missions: Array<string>

  constructor( code: string, name: string, position: string, image: object, imageName: string, missions: string[]) {
    this.code = code;
    this.name = name;
    this.position = position;
    this.image = image;
    this.imageName = imageName;
    this.missions = missions;
  }
  static parse(obj: any) {
    var objects: Array<Avengers>
    objects=obj
     return objects
  }

}
