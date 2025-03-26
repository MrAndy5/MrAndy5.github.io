#Práctica 4: Creación APIrest

<a href="https://mrandy5.github.io/index.html#inicio" target="_blank">
    <button>Visita la web</button>
</a>

###Cambios introducidos:

1. **Creación APIres Goleadores**
   - He programado desde cero la APIrest que permite conocer los     goleadores del equipo.
   - Cada goleador tiene un nombre, posición y goles
   - Las operaciones que se pueden realizar son:
   - ## 🧪 Endpoints disponibles

| Método   | Endpoint                | Descripción                      | Body requerido |
|----------|-------------------------|----------------------------------|----------------|
| `POST`   | `/api/goleadores`       | Crear un nuevo goleador          | ✅ Sí           |
| `GET`    | `/api/goleadores`       | Obtener todos los goleadores     | ❌ No           |
| `GET`    | `/api/goleadores/{id}`  | Obtener un goleador por ID       | ❌ No           |
| `PUT`    | `/api/goleadores/{id}`  | Actualizar un goleador existente | ✅ Sí           |
| `DELETE` | `/api/goleadores/{id}`  | Eliminar un goleador por ID      | ❌ No           |


2. **Implementación**
   - Para introducir goleadores se utiliza postman
   - Se pueden ver los datos introducidos en http://localhost:8081/h2-console

3. **Despliegue Web**
   - Se ha implementado la API en la página web de prácticas anteriores, dentro de la página estádisticas bajo el título de goleadores Temporada 24/25
    


