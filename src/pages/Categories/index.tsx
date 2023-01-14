import { useState } from "react"
import { Link } from "react-router-dom"
import { categoriesService } from "../../services"
import { Category } from "../../types"

const Categories = () => {

  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = () => {
    categoriesService.getAll().then(data =>{
      setCategories(data as Category[])
    })
  }

  fetchCategories()

  return(
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => {
            return (
              <tr>
                <td>
                  <Link to={`/categories/save/${cat.id}`}>{cat.id}</Link>
                </td>
                <td>{cat.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )

}

export { Categories }