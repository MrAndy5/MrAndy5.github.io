package com.pat.goleadores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GoleadoresServicio {
    @Autowired
    private GoleadoresRepositorio goleadoresRepositorio;

    //Crear
    public GoleadoresModel crearGoleador(GoleadoresModel goleador){
        return goleadoresRepositorio.save(goleador);
    }

    public List<GoleadoresModel> crearGoleadores(List<GoleadoresModel> goleadores) {
        return goleadoresRepositorio.saveAll(goleadores);
    }


    //Leer
    public GoleadoresModel leerGoleador(Long id){
        return goleadoresRepositorio.findById(id).get();
    }

    public List<GoleadoresModel> leerGoleadores(){
        return goleadoresRepositorio.findAll();
    }

    //Actualizar
    public GoleadoresModel actualizarGoleador(GoleadoresModel goleador){
        GoleadoresModel goleadorExistente = goleadoresRepositorio.findByNombre(goleador.getNombre());

        if(goleadorExistente == null){
            return null;
        }

        goleadorExistente.setGoles(goleador.getGoles());
        goleadorExistente.setPosicion(goleador.getPosicion());
        goleadorExistente.setNombre(goleador.getNombre());

        return goleadoresRepositorio.save(goleadorExistente);

    }

    //Eliminar
    public boolean eliminarGoleador(Long id){
        GoleadoresModel goleadorExistente = goleadoresRepositorio.findById(id).get();

        if(goleadorExistente == null){
            return false;
        }

        goleadoresRepositorio.delete(goleadorExistente);
        return true;
    }
}
