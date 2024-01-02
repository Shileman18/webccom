const User = require("../model/regUser");
var jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");


const createUser = async (req, res) => {
  const { fname, lastname, email, password } =
    req.fields;

  if (!(fname && lastname && email && password )) {
    res.status(400).send("provide valid input");
  } else {
    if (await User.findOne({ email: email })) {
      res.send("user already existed");
    } else {
      const enc_password = await bcrypt.hash(password, 10);

      let user = await User.create({
       
        fname: fname,
        lastname: lastname,
        email: email,
        password:enc_password,
        
      });

      const token = jwt.sign({ email: email }, process.env.TOKEN_KEY, {
        expiresIn: "5h",
      });

      user.token = token;

      res.json(user)
    }
  }
};

const loginpage = async (req, res) => {
  const { email, password } = req.fields;

  if (!(email && password)) {
    res.status(400).send("provide valid input");
  } else {
    let user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = await jwt.sign({ email: email }, process.env.TOKEN_KEY, {
        expiresIn: "5h",
      });

      user.token = token;

      res.json(user);
    } else {
      res.status(403).send("Incorrect username Or password!!!");
    }
  }
};


const forgetpassword = async (req, res) => {
  const { email } = req.fields;

  // Step 3: Generate Token
  const token = crypto.randomBytes(20).toString('hex');

  // Step 4: Token Expiration (e.g., 1 hour)
  const tokenExpiration = Date.now() + 100*60*60;

  try {
      // Step 5: Save Token and Expiration in the User Model
      const user = await User.findOneAndUpdate({ email },
         {
         
           resetPasswordToken: token,
            resetPasswordExpires: tokenExpiration
           },
           { new: true });

      if (!user) {
          return res.send('User not found');
      }
      console.log(token);
      // Step 6: Send Email with Reset Link
      const transporter = nodemailer.createTransport({
        host: "shilemanbhagavan@gmail.com",
          service: 'gmail',
          port: 587,
          auth: {
              user: 'shilemanbhagavan@gmail.com',
              pass: 'dxhxdzgmqiaeyawg',
          },
      });

      const mailOptions = {
          from: 'shilemanbhagavan@gmail.com',
          to: user.email,
          subject: 'Password Reset',
          text: `Click the following link to reset your password: http://localhost:3000/reset-password/${token}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.error(error);
          } else {
              console.log('Email sent: ' + info.response);
          }
      });

      res.send('forgotPassword  email sent');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

const getAllUsers=async(req,res)=>{
  try{
    const getUsers=await User.find();
    res.json(getUsers)

  }catch(error){
    throw new Error(error)
  }
}

const getUsers=async(req,res)=>{
  const {id}=req.params
  try{
    const getUsers=await User.findById(id);
    res.json(getUsers)

  }catch(error){
    throw new Error(error)
  }
}

const deleteUsers=async(req,res)=>{
  const {id}=req.params
  try{
    const deleteUsers=await User.findByIdAndDelete(id);
    res.json(deleteUsers)

  }catch(error){
    throw new Error(error)
  }
}

const updateUsers=async(req,res)=>{
  const {id}=req.params
  try{
    const updateUsers=await User.findByIdAndUpdate(id,req.fields,{new: true 

    })
    
    res.json(updateUsers)

  }catch(error){
    throw new Error(error)
  }
}

const resetpassword =async (req, res) => {
  const token = req.params.token;
  const newPassword = req.body.password;

  // Verify the token and expiration here

  try {
      // Step 7: Update Password in the Database
      const user = await User.findOneAndUpdate(
          { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } },
          { password: null, resetPasswordToken: null, resetPasswordExpires: null },
          { new: true }
      );

      if (!user) {
          return res.send('Invalid or expired token');
      }

      res.send('Password reset successfully');
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

const resetGetpassword = async (req, res) => {
  try {
    const { token } = req.params;

    // Find the user by the reset password token and check if it's not expired
    const user = await User.findOne({
      resetPasswordToken: token,

      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid or expired token" });
    }

    // Render a password reset form or redirect to a page with the form
    res.send(token); // Adjust based on your frontend setup
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  loginpage,
  forgetpassword,
  resetpassword,
  resetGetpassword,
  getAllUsers,getUsers,
  deleteUsers,updateUsers
};
