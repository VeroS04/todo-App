import { useState } from "react";
import { categoriesService } from "../../services";

const SaveCategory = () => {

  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const [ifError, setIfError] = useState(false)

  const sendForm = async (e: any) => {
    e.preventDefault();

    const rta = await categoriesService.add({ color, name })
    
    if (rta) {
      setName('')
      setColor('')
    }else {
      setIfError(true)
    }
  };

  return (
    <div>
    <hr />
      <form onSubmit={sendForm}>
        <div>
          <label htmlFor="name-control">Nombre</label>
          <input 
            type="text" 
            name="name" 
            id="name-control" 
            value={name}
            onChange= { (e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="color-control">Color</label>
          <input 
            type="color" 
            name="color" 
            id="color-control" 
            value={color}
            onChange= { (e) => setColor(e.target.value)}/>
        </div>
        <button type="submit">Enviar</button>
        {
          ifError && <p style={{color: 'red'}}>Hubo un error</p>
        }
      </form>
    <hr />
   </div>
  )
};

export { SaveCategory };