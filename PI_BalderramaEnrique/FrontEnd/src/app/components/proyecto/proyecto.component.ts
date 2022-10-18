import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  public proyecto: Proyecto[] = [];
  public editProyecto: Proyecto | undefined 

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService, private activatedRouter: ActivatedRoute) { }
  isLogged = false

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if(id !=undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  public onOpenModal(mode:String, proyecto?: Proyecto):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode ==='add'){
      button.setAttribute('data-target', '#addProyectoModal');
    }else if(mode ==='edit'){
      this.editProyecto=proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddProyecto(addForm: NgForm){
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoS.save(addForm.value).subscribe({
      next: (response:Proyecto) =>{
        console.log(response);
        this.cargarProyecto();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      } 
    })
  }

  public onUpdateProyecto(proyecto: Proyecto){
    this.editProyecto=proyecto;
    document.getElementById('add-proyecto-form')?.click();
    this.proyectoS.update(proyecto).subscribe({
      next: (response:Proyecto) =>{
        console.log(response);
        this.cargarProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
