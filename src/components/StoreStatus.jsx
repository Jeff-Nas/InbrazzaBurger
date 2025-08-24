
import { useState, useEffect } from "react";

const horarios = {
    0: { abre: "18:30", fecha: "22:30" }, //Domingo
    3: { abre: "18:30", fecha: "22:30" },
    4: { abre: "18:30", fecha: "22:30" },
    5: { abre: "18:30", fecha: "22:30" },
    6: { abre: "18:30", fecha: "22:30" }
};

function parseHora(horaStr) {
    const [h, m] = horaStr.split(":").map(Number);
    return h * 60 + m;
}

export function StoreStatus() {
    const [status, setStatus] = useState("");


    useEffect(() => {
        const agora = new Date();
        const diaSemana = agora.getDay();
        const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

        if (horarios[diaSemana]) {
            const abre = parseHora(horarios[diaSemana].abre);
            const fecha = parseHora(horarios[diaSemana].fecha);

            if (minutosAgora >= abre && minutosAgora <= fecha) {
                setStatus(`Loja aberta - Fecha às ${horarios[diaSemana].fecha}.`);
            } else {
                setStatus(`Loja fechada - Abre às ${horarios[diaSemana].abre}.`);
            }
        } else {
            setStatus("Loja fechada hoje.")
        }
    }, []);

    return (
        <div
            className={`p-1.5 rounded-2xl text-center text-xs ${status.includes("aberta")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
        >
            {status}
        </div>
    )
}