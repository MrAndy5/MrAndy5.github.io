package com.goleadores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoleadorRepositorio extends JpaRepository<GoleadorModelo, Long> {

    GoleadorModelo findByNombre(String nombre);
}