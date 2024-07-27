import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'ACCSES TOKEN' });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hola soy el Server")

})

app.post("/create_preference", async (req, res) => {
    try {
        const body = {
            items: [{
                title: req.body.title,
                quantity: parseInt(req.body.quantity),
                unit_price: parseFloat(req.body.price),
                currency_id: "ARS"
            }],
            back_urls: {
                success: "https://github.com/PiensaMcfly",
                failure: "https://github.com/PiensaMcfly",
                pending: "https://github.com/PiensaMcfly"
            },
            auto_return: "approved",
        };
        const preference = new Preference(client)
        const result = await preference.create({ body })
        res.json({
            id: result.id,

        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al crear la preferencia :("
        });
    }

});


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})