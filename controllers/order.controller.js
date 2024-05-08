//import model
const orderDetailModel = require("../models/index").order_detail;
const orderModel = require("../models/index").order_list;
const foodModel = require("../models/index").food;

exports.getAllOrder = async (req, res) => {
    try {
        const data = await orderModel.findAll({
            include: {
                model: orderDetailModel,
                as: "order_detail"
            }
        });
        return res.json(data)
    } catch (error) {
        console.log(error)
    }
};

exports.addOrder = async (req, res) => {
    try {
        await orderModel
            .create({
                customer_name: req.body.customer_name,
                table_number: req.body.table_number,
                order_date: req.body.order_date
            })
            .then((details) => {
                req.body.order_detail.map(async (detail) => {
                    await orderDetailModel.create({
                        order_id: details.id,
                        price: req.body.price,
                        ...detail,
                    });
                });
                return res.json(details);
            })
    } catch (error) {
        res.json(error);
    }
};