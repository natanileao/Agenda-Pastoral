document.getElementById("formulario").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        tel: document.getElementById("tel").value,
        pedidos: document.getElementById("pedidos").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("http://localhost:3002/enviar-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        alert(result);
    } catch (error) {
        alert("Erro ao enviar");
    }
});