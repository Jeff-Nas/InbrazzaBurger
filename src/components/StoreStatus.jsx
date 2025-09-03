
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

        const abreHoje = [0, 3, 4, 5, 6].includes(diaSemana)

        if (abreHoje) {

            const abre = parseHora(horarios[diaSemana].abre);
            const fecha = parseHora(horarios[diaSemana].fecha);

            if (minutosAgora >= abre && minutosAgora <= fecha) {
                setStatus(`Loja aberta - Fecha às ${horarios[diaSemana].fecha}.`);
            } else if (minutosAgora > fecha) {
                if (diaSemana === 0) {
                    setStatus('Loja fechada, abre quarta às 18h30')
                } else {
                    setStatus(`Loja fechada - Abre amanhã às ${horarios[diaSemana].abre}.`);
                }

            } else {
                setStatus(`Loja fechada - Abre hoje às ${horarios[diaSemana].abre}.`);
            }
        } else {
            setStatus('Loja fechada, abre quarta às 18h30')
        }
    }, []);

    return (
        <div
            className={`p-1.5 rounded-2xl text-center text-xs lg:text-sm ${status.includes("aberta")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
        >
            {status}
        </div>
    )
}