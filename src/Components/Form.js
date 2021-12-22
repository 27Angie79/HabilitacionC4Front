import React from 'react';


const Form = ({product, setProduct}) => {

    const handleSubmit = async (e) =>{
        const productData = {
            reference: e.target.elements.product_reference,
            brand: e.target.elements.product_brand,
            category: e.target.elements.product_category,
            name: e.target.elements.product_name,
            description: e.target.elements.product_description,
            price: parseFloat(e.target.elements.product_price),
            quantity: parseFloat(e.target.elements.product_quantity),
            photography: null
        };
        
        const request = await fetch("http://localhost:8080/api/product/new", {
            method: "POST",
            headers:{
                "Content-type" : "application/json",
            },
            body: JSON.stringify(productData)
        });

        console.log(await request.json());
    }

    function fillValue(property){
        return product !== null? property : ""
    }

  return (
    <form onSubmit={product}>
        <input type="text" id="product_reference" name="product_reference" className='input_product' value={fillValue(product.reference)}/>
        <input type="text" id="product_brand" name="product_brand" className='input_product' value={fillValue(product.brand)}/>
        <input type="text" id="product_category" name="product_category" className='input_product' value={fillValue(product.category)}/>
        <input type="text" id="product_name" name="product_name" className='input_product' value={fillValue(product.name)}/>
        <input type="text" id="product_description" name="product_description" className='input_product' value={fillValue(product.description)}/>
        <input type="number" id="product_price" name="product_price" className='input_product' value={fillValue(product.price)}/>
        <input type="number" id="product_quantity" name="product_quantity" className='input_product' value={fillValue(product.quantity)}/>
    </form>
  );
}

export default Form;
