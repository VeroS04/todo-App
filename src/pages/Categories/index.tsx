import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { categoriesService } from "../../services"
import { Category } from "../../types";

const Categories = () => {

  const [categories, setCategorie] = useState<Category[]>([])

  const navigate = useNavigate()

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
    <h1>Categorias</h1>
    <table className="table">
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
                  <Button
                    variant="danger" 
                    icon="trash"
                    handleClick={() =>borrarCategoria(elem.id)}
                  />
                  <Button 
                    variant="primary" 
                    icon="pencil"
                    handleClick={() => navigate(`/categories/save/${elem.id}`)}
                  />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   </div>
  )

}

export { Categories }