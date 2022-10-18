import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  public skill: Skill[] = [];
  public editSkill: Skill | undefined 


  constructor(private skillService: SkillService, private tokenService: TokenService,
     private activatedRouter: ActivatedRoute) { }
  isLogged = false

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkill(): void{
    this.skillService.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.skillService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la Skill");
        }
      )
    }
  }
  public onOpenModal(mode:String, skill?: Skill):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode ==='add'){
      button.setAttribute('data-target', '#addSkillModal');
    }else if(mode ==='edit'){
      this.editSkill=skill;
      button.setAttribute('data-target', '#editSkillModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddSkill(addForm: NgForm){
    document.getElementById('add-skill-form')?.click();
    this.skillService.save(addForm.value).subscribe({
      next: (response:Skill) =>{
        console.log(response);
        this.cargarSkill();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }
  public onUpdateSkill(skill: Skill){
    this.editSkill=skill;
    document.getElementById('add-skill-form')?.click();
    this.skillService.update(skill).subscribe({
      next: (response:Skill) =>{
        console.log(response);
        this.cargarSkill();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
