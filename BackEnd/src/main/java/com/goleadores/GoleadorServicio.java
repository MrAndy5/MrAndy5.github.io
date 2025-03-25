package com.goleadores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

public class GoleadorServicio {
    @Autowired
    private GoleadorRepositorio goleadorRepositorio;

    //Crear
    public GoleadorModelo crearGoleador(GoleadorModelo goleador) {
        return goleadorRepositorio.save(goleador);
    }

    //Leer
    public List<GoleadorModelo> leerGoleadores() {
        return goleadorRepositorio.findAll();
    }

    public Optional<GoleadorModelo> leerGoleador(Long id) {
        return goleadorRepositorio.findById(id);
    }

    //Actualizar 
    public GoleadorModelo actualizarGoleador(GoleadorModelo goleador) {
        GoleadorModelo goleadorExistente = goleadorRepositorio.findById(goleador.getId()).orElse(null);

        if (goleadorExistente == null) {
            return null;
        }

        goleadorExistente.setNombre(goleador.getNombre());
        goleadorExistente.setGoles(goleador.getGoles());
        goleadorExistente.setPosicion(goleador.getPosicion());

        return goleadorRepositorio.save(goleador);
    }

    //Eliminar
    public boolean eliminarGoleador(Long id) {
        GoleadorModelo goleador = goleadorRepositorio.findById(id).orElse(null);

        if (goleador == null) {
            return false;
        }

        goleadorRepositorio.delete(goleador);
        return true;
    }


}
