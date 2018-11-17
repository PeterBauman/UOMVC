import {Injectable} from "@angular/core";

@Injectable()
export class UomApi {

  constructor() {
  }

  getCities(){
    return ["ROSARIO", "CASILDA", "SANTA FE", "ROLDAN", "ARROYO SECO", "EMPALME"];
  }

  getProfessionals() {
    return ['Dra. Pereyra Ana', 'Dr. Mauricio Donnari']
  }

  

}