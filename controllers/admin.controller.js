const adminModel = require(`../models/index`).admin;
const Op = require(`sequelize`).Op;
const bcrypt = require("bcrypt")


//mendaptkan semua data dalam tabel
exports.getAllAdmin = async (request, response) => {
    console.log(adminModel);
   let admins = await adminModel.findAll()
   return response.json({
    success: true,
    data: admins,
    message: `all admin have been loaded`
   })
};

exports.addAdmin = async (request, response) => {
    let newAdmin = {
        name: request.body.name,
        email: request.body.email,
        password: bcrypt.hashSync(request.body.password,10)
    }
    adminModel.create(newAdmin)
    .then(result => {
        response.json ({
            message: "Data Berhasil Ditambahkan",
            data: result
        })
    })
    .catch(error => {
        return response.json({
            success: false,
            message: error.message
        })
    })
};