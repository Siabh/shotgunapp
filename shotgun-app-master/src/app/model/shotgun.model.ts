import { PartieCommune } from "./partie-commune.model";
import { Famille } from "./famille.model";

export interface Shotgun {
  id: number;
  name: string;
  shotgunCreationDate: Date;
  shotgunDate: Date;
  shotgunFamille: Famille;
  shotgunPlace: PartieCommune;
  shotgunComments: string;
}
