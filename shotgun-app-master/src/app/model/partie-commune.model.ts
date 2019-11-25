import { Shotgun } from "./shotgun.model";
import { Residence } from "./residence.model";

export interface PartieCommune {
  id: number;
  name: string;
  localisation: Residence;
  listeShotguns?: Array<Shotgun>;
}
