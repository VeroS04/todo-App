import { useState } from "react";
import { categoriesService } from "../../services"
import { Category } from "../../types";

const Categories = () => {

  const [categories, setCategorie] = useState<Category[]>([])

  const obtenerCategorias = async () => {
    const rta = await categoriesService.getAll();

     setCategorie(rta)
  }

  if(!categories.length) obtenerCategorias()

  const borrarCategoria = async (id: string) => {
    await categoriesService.remove(id);
    obtenerCategorias()
  }

  return (
   <div>
    <hr />
    <h1>Categorias</h1>
    <table border={1}>
      <thead>
        <tr>
          <td>ID</td>
          <th>Name</th>
          <th>Color</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((elem) => {
            return(
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.color}</td>
                <td>
                  <button className="btn" onClick={() => borrarCategoria(elem.id)}>Borrar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
      
    <hr />
   </div>
  )

}

export { Categories }