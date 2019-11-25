import { Shotgun } from "./shotgun.model";

export interface Famille {
  id: number;
  nomFamille: string;
  listeShotguns?: Array<Shotgun>;
}
