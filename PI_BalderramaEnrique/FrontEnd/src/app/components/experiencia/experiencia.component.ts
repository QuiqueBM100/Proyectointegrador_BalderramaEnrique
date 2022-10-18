import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public expe: Experiencia[] = [];
  public editExperiencia: Experiencia | undefined
 
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private activatedRouter: ActivatedRoute) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()){
      this.isLogged =  true;
    } else {
      this.isLogged = false;
    }
  }
  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(
      data => {
        this.expe = data;
      }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  public onOpenModal(mode:String, expe?: Experiencia):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode ==='add'){
      button.setAttribute('data-target', '#addEducacionModal');
    }else if(mode ==='edit'){
      this.editExperiencia=expe;
      button.setAttribute('data-target', '#editEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddExperiencia(addForm: NgForm){
    document.getElementById('add-expe-form')?.click();
    this.sExperiencia.save(addForm.value).subscribe({
      next: (response:Experiencia) =>{
        console.log(response);
        this.cargarExperiencia();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }
  public onUpdateExperiencia(expe: Experiencia){
    this.editExperiencia=expe;
    document.getElementById('add-expe-form')?.click();
    this.sExperiencia.update(expe).subscribe({
      next: (response:Experiencia) =>{
        console.log(response);
        this.cargarExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}


