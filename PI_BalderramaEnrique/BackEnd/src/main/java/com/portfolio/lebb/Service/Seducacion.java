/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.lebb.Service;

import com.portfolio.lebb.Entity.Educacion;
import com.portfolio.lebb.Repository.REducacion;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class Seducacion {
    @Autowired
    REducacion rEducacion;
            
    public List<Educacion> list(){
        return rEducacion.findAll();
    }
    
    public Optional<Educacion> getOne(int id) {
        return rEducacion.findById(id);
    }
    
    public Optional<Educacion> getByNombreE(String nombreE){
        return rEducacion.findByNombreE(nombreE);
    }
    
    public void save(Educacion educacion){
        rEducacion.save(educacion);
    }
    
    public Educacion editarEducacion(Educacion educacion){
        return rEducacion.save(educacion);
    }
    
    public void delete(int id){
        rEducacion.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rEducacion.existsById(id);
    }
    
    public boolean existsByNombreE(String nombreE){
        return rEducacion.existsByNombreE(nombreE);
    }
}
