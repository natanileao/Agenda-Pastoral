const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/enviar-email", async (req, res) => {
    const { name, tel, pedidos, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "leonardoleao040@gmail.com",
                pass:""
            }
        });

        let mailOptions = {
            from: '"Pedidos do Site" <leonardoleao040@gmail.com>',
            to: "leonardoleao040@gmail.com",
            subject: "Novo Pedido da Agenda Pastoral",
            html: `
                <h2>Novo Pedido da Agenda Pastoral</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Telefone:</strong> ${tel}</p>
                <p><strong>Tipo:</strong> ${pedidos}</p>
                <p><strong>Mensagem:</strong> ${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send("Email enviado com sucesso!");
    } catch (error) {
        console.error("ERRO REAL:", error);
        res.status(500).send("Erro ao enviar email");
    }
});

app.listen(3002, () => {
    console.log("Servidor rodando na porta 3002");
});
