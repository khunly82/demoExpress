import { PRODUCTS } from "../fake_data.js";
import { request } from 'express';

export const ShopController = {
    /**
     * @param {request} req 
     * @param {*} res 
     */
    shop: (req, res) => {

        const category =  req.query.cat;

        let products = PRODUCTS;
        if(category) {
            products = products.filter(p => p.categorie === category);
        }

        const categories = 
           [...new Set(PRODUCTS.map(p => p.categorie))];

        res.render('shop.ejs', { 
            products,
            categories,
            category,
        });
    }
}