/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.lebb.Service;

import com.portfolio.lebb.Entity.Proyecto;
import com.portfolio.lebb.Repository.RProyecto;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SProyecto {
    @Autowired
    RProyecto rProyecto;
    
    public List<Proyecto> list(){
        return rProyecto.findAll();
    }
    
    public Optional<Proyecto> getOne(int id) {
        return rProyecto.findById(id);
    }
    
    public Optional<Proyecto> getByNombreP(String nombreP){
        return rProyecto.findByNombreP(nombreP);
    }
    
    public void save(Proyecto proyecto){
        rProyecto.save(proyecto);
    }
    
    public Proyecto editarProyecto(Proyecto proyecto){
        return rProyecto.save(proyecto);
    }
    
    public void delete(int id){
        rProyecto.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rProyecto.existsById(id);
    }
    
    public boolean existsByNombreP(String nombreP){
        return rProyecto.existsByNombreP(nombreP);
    }
    
}
