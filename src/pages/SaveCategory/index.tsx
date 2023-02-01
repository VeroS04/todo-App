import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { categoriesService } from "../../services";

const SaveCategory = () => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const [ifError, setIfError] = useState(false)

  const navigate = useNavigate();
  const { id } = useParams();

  const obtenerCategoriaAEditar = async () => {
    if (id) {
      const rta = await categoriesService.get(id);
      setName(rta.name)
      setColor(rta.color)
    }
  };

  if (id && name === "" && color === "") obtenerCategoriaAEditar()

  const sendForm = async (e: any) => {
    e.preventDefault();

    setIfError(false)

    const rta = await categoriesService.add({ color, name })

    if (rta) {
      navigate('/categories')
    } else {
      setIfError(true)
    }
  };

  return (
    <div>
      <form onSubmit={sendForm}>
        <div>
          <label htmlFor="name-control">Nombre</label>
          <input
            type="text"
            name="name"
            id="name-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color-control">Color</label>
          <input
            type="color"
            name="color"
            id="color-control"
            value={color}
            onChange={(e) => setColor(e.target.value)} />
        </div>
        <button type="submit">Enviar</button>
        {
          ifError && <p style={{ color: 'red' }}>Hubo un error</p>
        }
      </form>
    </div>
  )
};

export { SaveCategory };