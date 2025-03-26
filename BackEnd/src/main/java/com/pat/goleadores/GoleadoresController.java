package com.pat.goleadores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/goleadores")
public class GoleadoresController {
    @Autowired
    private GoleadoresServicio goleadoresService;

    @PostMapping
    public GoleadoresModel crearGoleador(@RequestBody GoleadoresModel Goleador) {
        return goleadoresService.crearGoleador(Goleador);
    }

    @GetMapping
    public List<GoleadoresModel> leerGoleadores(){
        return goleadoresService.leerGoleadores();
    }

    @GetMapping("/{id}")
    public GoleadoresModel leerGoleador(Long id){
        return goleadoresService.leerGoleador(id);
    }

    @PutMapping("/{id}")
    public GoleadoresModel actualizarGoleador(@RequestBody GoleadoresModel Goleador){
        return goleadoresService.actualizarGoleador(Goleador);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarGoleador(Long id){
        return goleadoresService.eliminarGoleador(id);
    }

}
