const Users = require("../models/userModel"); //Schema
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Payments = require("../models/paymentModel");

const userCtrl = {
  signup: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "This Email already exists" });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });
      await newUser.save();

      //jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accesstoken });

      // res.json("sign up sucess full")
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user) return res.status(400).json({ msg: "Email id wrong" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: " Password wrong" });

      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json("Loged out sucessful");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please login or Signup" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please login or Signup" });
        const accesstoken = createAccessToken({ id: user.id });
        res.json({ accesstoken });
      });
      // res.json({rf_token})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ mag: "User is not found" });

      res.json(user);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  getallUser: async (req, res) => {
    try {

      const users = await Users.find().select("-password");
      res.json(users);


    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

 updateUser: async (req, res) => {
        try {
            const {name,email} = req.body
            await Users.findOneAndUpdate({_id:req.user.id},{
                name,email
            })
            res.json({msg:"Update Success"})

        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
 },
 
 updateUserRole: async (req, res) => {
    try {
        const {role} = req.body
        await Users.findOneAndUpdate({_id:req.params.id},{
            role
        })
        res.json({msg:"Update Success"})

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
},

deleteUser: async (req, res) => {
    try {
        
        await Users.findByIdAndDelete(req.params.id)
            
        
        res.json({msg:"Deleted Success"})

    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
},


 
  addCart: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id);
      if (!user) return res.status(400).json({ msg: "User doesn't exist." });

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          cart: req.body.cart,
        }
      );
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  history: async (req, res) => {
    try {
      const history = await Payments.find({ user_id: req.user.id });
      res.json(history);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userCtrl;
