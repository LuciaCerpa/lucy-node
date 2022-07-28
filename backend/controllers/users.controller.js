import User from "../models/userModel.js";


export const loginController = async (req, res)=>{
    try {
        
        const { userId, password } = req.body;
        console.log(userId);
        const user = await User.findOne({userId, password, verified:true});

        if(user){
        res.status(200).send(user);
        }else{
            res.json({
                message: "Login Fail",
                user,
            })
        }

    } catch (error) {
        console.log(error)
    }
}


export const getAllUsers= async (req, res)=>{
    try {
        
        const users = await User.find();

        res.status(200).send(users);

    } catch (error) {
        console.log(error)
    }
}


export const createUser= async (req, res)=>{
    try {
            const newUser = new User({...req.body, verified:true});
            await newUser.save();
            res.status(201).send("New User added Successfully!");

    } catch (error) {
        console.log(error)
    }
}

export const updateUser= async (req, res)=>{
    try {
            await User.findOneAndUpdate({_id:req.body.userId}, req.body, {new: true})
            res.status(200).json("User Updated Successfully!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
}

export const deleteUser= async (req, res)=>{
    try {
            await User.findOneAndRemove({_id:req.body.productId}, req.body)
            res.status(200).json("User Deleted Successfully!");
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
}
