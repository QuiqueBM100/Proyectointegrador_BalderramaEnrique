import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDEComponent implements OnInit {
  persona: persona = new persona("","","","");
  public editPersona: persona | undefined

  constructor(public personaService:PersonaService, private tokenService: TokenService, private activatedRouter: ActivatedRoute) { }
  isLogged = false

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona(): void{
    this.personaService.getPersona().subscribe(
      data =>{
        this.persona = data;
      }
    )
  }

  public onOpenModal(mode:String, persona?: persona):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    
    if(mode ==='edit'){
      this.editPersona=persona;
      button.setAttribute('data-target', '#editPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdatePersona(persona: persona){
    this.editPersona=persona;
    document.getElementById('add-educacion-form')?.click();
    this.personaService.update(persona).subscribe({
      next: (response:persona) =>{
        console.log(response);
        this.cargarPersona();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
