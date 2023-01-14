import { useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesService } from "../../services";

const SaveCategory = () => {
  const [catName, setCatName] = useState("");

  const { categroyId } = useParams();

  const fetchCategory = () => {
    if (categroyId) {
      categoriesService.get(categroyId).then((data) => {
        setCatName(data.name);
      })
    }
  };
  if(catName === '') fetchCategory()

  const saveCategory = (e: any) => {
    e.preventDefault();

    categoriesService.add({ name: catName });
  };

  return (
    <>
      <h1>Guardar Categoría</h1>
      <form onSubmit={saveCategory}>
        <div className="form-group">
          <label htmlFor="name-category">Nombre</label>
          <input
            type="text"
            name="name"
            id="name-category"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export { SaveCategory };