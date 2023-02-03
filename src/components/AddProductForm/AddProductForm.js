import React, { useState ,useRef} from 'react';
import './AddProductForm.css';
import { createNewProductFetch,imageProductUploaderFetch } from '../../utils/firebaseFetch';
 

const  AddProductForm = (props) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [image, setImage] = useState(null);

  const fileInput = useRef();

  const {handleCloseModalAddProduct} = props   


  const handleSubmit = (event) => {

    event.preventDefault();
    if (image) {
        //sube la imagen y setea la url imageURL 
        handleImageUpload();
    } else { 
    alert('Imagen no cargada');
    return
    }

    if (imageUrl){
            const product = {
                'name': name,
                'price': price,
                'description' : description,
                'stock': stock,
                'category':categories,
                'imageUrl': imageUrl
            }            
            createNewProductFetch(product);
            handleCloseModalAddProduct();
    }

  }

    const  handleCheckboxChange = (e, category) => {
        const { checked } = e.target;
        const updatedCategories = [...categories];
        if (checked && !updatedCategories.includes(category)) {
        updatedCategories.push(category);
        } else if (!checked && updatedCategories.includes(category)) {
        updatedCategories.splice(updatedCategories.indexOf(category), 1);
        }
        setCategories(updatedCategories);
        }

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileExtension = image.name.slice((image.name.lastIndexOf(".") - 1 >>> 0) + 2);
        //validamos extension de la imagen cargada
        if (!validExtensions.includes(fileExtension.toLowerCase())) {
          alert('Solo se permiten imágenes con extensión .jpg, .jpeg, .png o .gif');
          //vaciamos el input de imagenes 
          fileInput.current.value = null;
          return;
        } else {
            setImage(image);
            console.log(image.name)
        }
      }

    const handleImageUpload = async () => {
        const url = await imageProductUploaderFetch(image,name);
        setImageUrl(url);
        // console.log(imageURL);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="row">

            <div className="form-outline col-md-6">
                <label className="form-label">Nombre:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
                className="form-control form-input" required/>
            </div>
            <div className="form-outline col-md-2 offset-md-1">
                <label className="form-label">Precio:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} 
                className="form-control form-input" required/>
            </div>
            <div className="form-outline col-md-2 offset-md-1">
                <label className="form-label">Stock:</label>
                <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} 
                className="form-control form-input"/>
            </div>
            <div className="form-outline col-md-12">
                <label className="form-label mt-3">Descripción:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                className="form-control form-input" required/>
            </div>

            <label className="form-label mt-3">Categorías:</label>
            <div className="form-outline row ">
                    <div className="form-check col-md-4">
                        <label className="form-label d-block">
                        <input type="checkbox" checked={categories.includes('arboles')} 
                            onChange={(e) => handleCheckboxChange(e, 'arboles')} 
                            className="form-control form-check-input me-2"/>
                        Árboles</label>
                        

                       
                        <label className="form-label d-block">
                        <input type="checkbox"checked={categories.includes('huerta-organica')} 
                        onChange={(e) => handleCheckboxChange(e, 'huerta-organica')}
                        className="form-control form-check-input me-2"/>
                        Huerta Organica
                        </label>

                        <label className="form-label d-block">
                        <input type="checkbox"checked={categories.includes('arbustos')} 
                        onChange={(e) => handleCheckboxChange(e, 'arbustos')}
                        className="form-control form-check-input me-2"/>
                        Arbustos
                        </label>


                    </div>
                    <div className="form-check col-md-4">

                        <label className="form-label d-block">
                        <input type="checkbox" checked={categories.includes('plantas-interior')} 
                        onChange={(e) => handleCheckboxChange(e, 'plantas-interior')} 
                        className="form-control form-check-input me-2"/>
                        Plantas de interior
                        </label>

                        <label className="form-label d-block">
                        <input type="checkbox" checked={categories.includes('plantas-perennes')} 
                            onChange={(e) => handleCheckboxChange(e, 'plantas-perennes')} 
                            className="form-control form-check-input me-2"/>
                        Plantas perennes</label>
                        
                        <label className="form-label d-block">
                        <input type="checkbox" checked={categories.includes('plantas-anuales')} 
                        onChange={(e) => handleCheckboxChange(e, 'plantas-anuales')} 
                        className="form-control form-check-input me-2"/>
                        Plantas anuales
                        </label>

                    </div>
            </div>
        <div className="row  mt-4">
           
                <div className="col-md-9">
                    <label className="form-label me-2">Imagen:</label>
                    <input type="file" onChange={(e) => handleImageChange(e)} ref={fileInput}/>
                </div>

                <div className="col-md-3">
                <div class="row">
                    <button type='submit' className="btn btn-primary">
                        Agregar producto
                    </button>
                </div>
                </div>
           
        </div>
    </div>

</form>
)
}

export default AddProductForm;