import {Component, Input, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MaritalStatusService} from "../maritalStatus.service";
import {MaritalStatus} from "../maritalStatus";
import {Skill} from "../skill";
import {SkillService} from "../skill.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class UpdateComponent implements OnInit {
  title = 'Update Employee';
  message = '';

  @Input() employee: Employee;

  maritalStatues: MaritalStatus[] = [];
  skills: Skill[] = [];
  employeeForm: FormGroup;

  constructor(
    // private router: ActivatedRoute,
    private employeeService: EmployeeService, private maritalStatusService: MaritalStatusService, private skillsService: SkillService,
    private formBuilder: FormBuilder
  ) {
  }


  ngOnInit() {
    console.log("Employe:  - ");
    console.log(this.employee);

    this.getSkills();
    this.getMaritalStatues();
    this.createForm();
    this.rebuildForm();
  }

  createForm() {
    //formControl/ArrayName in html
    this.employeeForm = this.formBuilder.group(
      {
        employeeId: [''],
        name: ['', Validators.required],
        surname: ['', Validators.required],
        country: [''],
        birthDate: [''],
        maritalStatus: ['', Validators.required],
        newSkill: '',
        skillArray: this.formBuilder.array([]),
        // skk: this.formBuilder.array([{}]),
      });

  }

  onSubmit() {
    this.rebuildForm();
    this.employee = this.prepareSaveEmployee();
    if (this.employee.name == '' || this.employee.surname == '' || this.employee.maritalStatus.maritalStatusId == null) {
      this.message = 'Errore durante la update Employee';
    }
    else {
      this.employeeService.saveEmployee(this.employee).subscribe(
        data => this.message = 'Employee aggiornato con sucesso');

    }

  }


  prepareSaveEmployee(): Employee {
    const formModel = this.employeeForm.value;
    console.log(formModel);

    const skillsList: Skill[] = formModel.skillArray.map((skill: Skill) => {
      return Object.assign({}, skill);
    });

    const saveEmployee: Employee = {
      employeeId: this.employee.employeeId,
      name: formModel.name,
      surname: formModel.surname,
      country: formModel.country,
      birthDate: formModel.birthDate,
      maritalStatus: formModel.maritalStatus,
      skills: skillsList
    };
    return saveEmployee;
  }

  //popolazione form
  rebuildForm() {
    this.employeeForm.reset({
      id: this.employee.employeeId,
      name: this.employee.name,
      surname: this.employee.surname,
      country: this.employee.country,
      birthDate: this.employee.birthDate,
      maritalStatus: this.maritalStatues
        .filter(ms => ms.maritalStatusId === this.employee.maritalStatus.maritalStatusId)[0],
    });
    this.setSkills(this.employee.skills);
    this.setDifferenceSkills();
  }

  setSkills(skills: Skill[]) {
    const skillsFGs = skills.map(skill => this.formBuilder.group(skill));
    const skillFormArray = this.formBuilder.array(skillsFGs);
    this.employeeForm.setControl('skillArray', skillFormArray);
  }

  setDifferenceSkills() {
    const formModel = this.employeeForm.value;

    const skillsList: Skill[] = formModel.skillArray.map((skill: Skill) => {
      return Object.assign({}, skill);
    });

    this.skills.filter(item => skillsList.indexOf(item) > 0);

  }

  getSkillList(): FormArray {
    return this.employeeForm.get('skillArray') as FormArray;
  }

  addSkill(newSkill) {
    const formModel = this.employeeForm.value;

    const skillsList: Skill[] = formModel.skillArray.map((skill: Skill) => {
      return Object.assign({}, skill);
    });

    const skillDuplicate = skillsList.find(sk => sk.name === newSkill.trim());
    if (skillDuplicate === (null || undefined)) {
      this.getSkillList().push(this.formBuilder.group(
        this.skills.find(sk => sk.name === newSkill.trim())
      ));
    }
  }

  removeSkill(index: number) {
    this.getSkillList().removeAt(index);
  }

  getMaritalStatues(): void {
    console.log("MS: " + this.maritalStatusService.getMaritalStatues())
    this.maritalStatusService.getMaritalStatues()
      .subscribe(maritalStatues => this.maritalStatues = maritalStatues);
  }

  getSkills() {
    this.skillsService.getSkills().subscribe(skills => this.skills = skills);
  }


}
