import Product from "../models/productModel.js";

export const getAllproducts= async (req, res)=>{
    try {
        
        const products = await Product.find();

        res.status(200).send(products);

    } catch (error) {
        console.log(error)
    }
}


export const createProduct= async (req, res)=>{
    try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).send("Product Created Successfully!");

    } catch (error) {
        console.log(error)
    }
}

export const updateProduct= async (req, res)=>{
    try {
            await Product.findOneAndUpdate({_id:req.body.productId}, req.body, {new: true})
            res.status(200).json("Product Updated Successfully!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
}

export const deleteProduct= async (req, res)=>{
    try {
            await Product.findOneAndRemove({_id:req.body.productId}, req.body)
            res.status(200).json("Product Deleted Successfully!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
}
