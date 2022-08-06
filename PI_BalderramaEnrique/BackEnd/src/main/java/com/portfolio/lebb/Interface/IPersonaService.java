package com.portfolio.lebb.Interface;

import com.portfolio.lebb.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer una lista de Personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto por busqueda por id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);
    
}
