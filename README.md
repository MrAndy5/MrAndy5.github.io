#Práctica 3: API REST

<a href="https://mrandy5.github.io/index.html#inicio" target="_blank">
    <button>Visita la web</button>
</a>

###Cambios introducidos:

1. **Creación APIres Goleadores**
   - He programado desde cero la APIrest que permite conocer los     goleadores del equipo.
   - Cada goleador tiene un nombre, posición y goles
   - Las operaciones que se pueden realizar son:
   | Método | Endpoint                    | Descripción                         | Body requerido |
|--------|-----------------------------|-------------------------------------|----------------|
| `POST` | `/api/goleadores`           | Crear un nuevo goleador             | ✅              |
| `GET`  | `/api/goleadores`           | Obtener todos los goleadores        | ❌              |
| `GET`  | `/api/goleadores/{id}`      | Obtener un goleador por ID          | ❌              |
| `PUT`  | `/api/goleadores/{id}`      | Actualizar un goleador existente    | ✅              |
| `DELETE` | `/api/goleadores/{id}`    | Eliminar un goleador por ID         | ❌              |

2. **Optimización CSS**
   - Ya no hay CSS por separado para cada página, además se ha optimizado el ancho de las secciones para hacer más visibles los anuncios

3. **Optimización JS**
   - Todas las tareas de javaScripto son realizados en un único archivo en vez de tres por separado
    


