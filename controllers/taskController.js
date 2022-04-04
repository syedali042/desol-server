module.exports = {
    authenticateUser: async (req, res) => {
        try {

            const hardCodeUserEmail = 'amjad@gmail.com';
            const hardCodeUserPassword = '123456abc';
            const {email, password} = req.body;
            if (email !== null || undefined && password!==null || undefined){ 
                if(email === hardCodeUserEmail && password === hardCodeUserPassword){
                    res.status(200).send({status:200, msg: 'User Authenticated', data:{...req.body}});
                }else{
                    res.status(203).send({status:203, msg: 'User Not Exist'});
                }
            }else{
                res.status(204).send({status:204, msg: 'Email & Password Can\'t be Empty'});
            }
        } catch (error) {
            res.status(500).send({msg: 'Internal Server Error'});
        }
    },
    addVehicle: async (req, res) => {
        console.log(req.body);
        try {
            const files = req.files;
            var data = [];
            files.forEach((f)=>{
                data.push(f.filename);
            })
            // const {name, email, phoneNo} = req.body;
            return res.status(200).send({msg: "Uploaded ", data:data});
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
}

