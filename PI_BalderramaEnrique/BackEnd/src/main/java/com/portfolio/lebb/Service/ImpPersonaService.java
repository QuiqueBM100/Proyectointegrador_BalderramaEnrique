package com.portfolio.lebb.Service;

import com.portfolio.lebb.Entity.Persona;
import com.portfolio.lebb.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ImpPersonaService{
    @Autowired 
    IPersonaRepository ipersonaRepository;

    
    public List<Persona> getPersona() {
        List<Persona> persona = ipersonaRepository.findAll();
        return persona;
    }

    
    public void save(Persona persona) {
        ipersonaRepository.save(persona);
    }
    
    public Persona editarPersona(Persona persona){
        return ipersonaRepository.save(persona);
    }

    
    public void deletePersona(int id) {
       ipersonaRepository.deleteById(id);
    }

    
    public Persona findPersona(int id) {
        Persona persona = ipersonaRepository.findById(id).orElse(null);
        return persona;
    }
    
}
