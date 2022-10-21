package com.portfolio.lebb.Controller;

import com.portfolio.lebb.Entity.Persona;
import com.portfolio.lebb.Service.ImpPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "https://frontendlebb.web.app")
public class PersonaController {
    @Autowired ImpPersonaService impPersonaService;
    
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return impPersonaService.getPersona();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona){
        impPersonaService.save(persona);
        return "La persona fue  creada correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
    impPersonaService.deletePersona(id);
    return "La persona fue eliminada correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/update")
    public ResponseEntity<Persona> editarPersona(@RequestBody Persona persona){
       
        Persona updatePersona = impPersonaService.editarPersona(persona);
        return new ResponseEntity<>(updatePersona, HttpStatus.OK);
        
    }
    
    @GetMapping("/personas/traer/perfil")
    public Persona findPersona(){
    return impPersonaService.findPersona((long)1);
    }
}
