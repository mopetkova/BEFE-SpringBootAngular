import {MaritalStatus} from "./maritalStatus";
import {Skill} from "./skill";

export class Employee {
  employeeId: number;
  name: string;
  surname: string;
  country: string;
  birthDate: Date;
  maritalStatus: MaritalStatus;
  skills: Skill[]
}
