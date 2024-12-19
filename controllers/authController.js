

const loginUser = (req, res) => {
    res.send("You're on the login page!");
};

const logoutUser = (req, res) => {
    res.send("You logged out!")
}

const handleRegisterUser = (req, res) => {
    const {username, password} = req.body

    if (username && password) {
        res.json({
            message: "Register successfull!"
        })
    } else {
        res.status(400).json({
            message: 'Invalied Credentials!'
        })
    }

    // res.send("You're on register page!")
}

export default { loginUser,logoutUser,handleRegisterUser };
