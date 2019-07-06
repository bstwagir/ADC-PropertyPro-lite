
const userList=[];

const signUp = (req,res) => {

  const {firstName,lastName,email,password,phoneNumber,address,isAdmin,} = req.body;

  if(!firstName||!lastName||!email||!password||!phoneNumber||!address||!isAdmin){
    res.status(400).json({
      status: 400,
      message: 'Form incorrectly filled, verify and try again',
    });
    return;
  }
  const user = {
    token: '45erkjherht45495783',
    id : userList.length,
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    address,
    isAdmin,
  };
   res.status(201).json({
    status:'success',
    data:{
      token: '45erkjherht45495783',
      id : userList.length,
      firstName,
      lastName,
      email,
    },
  });

userList.push(user);

};

export default signUp
