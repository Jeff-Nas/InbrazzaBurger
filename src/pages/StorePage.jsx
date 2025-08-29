import { CaretLeftIcon } from "@phosphor-icons/react"
import { TextSecondary } from "../components/TextSecondary"
import { Link } from "react-router-dom"

export function InfoCard({ children }) {
    return (
        <div className="bg-gray-200 opacity-85 p-4 rounded-t-2xl border-b-1 border-gray-400">
            <span
                className="font-bold"
            >
                {children}
            </span>
        </div>
    )
}

export function StorePage() {
    return (
        <div>
            <Link
                to="/"
                className="flex p-3 gap-3 items-center border-b-1 border-gray-300">
                <CaretLeftIcon size={22} />
                <h2>Perfil da Loja</h2>
            </Link>
            <div className="p-3 flex justify-between">
                <div>
                    <h2 className="font-bold text-xl">Inbrazza Burger</h2>
                    <p className="text-sm">Hambúrguer Feito na Brasa!</p>
                </div>
                <img
                    className="h-14"
                    src="/public/logo.png" alt="logo inbrazza" />
            </div>
            <InfoCard>Horário de atendimento</InfoCard>
            <div className="p-3">
                <TextSecondary>Domingo: 18h30m às 22h303min</TextSecondary>
                <TextSecondary>Quarta-feira: 18h30m às 22h303m</TextSecondary>
                <TextSecondary>Quta-feira: 18h30m às 22h303m</TextSecondary>
                <TextSecondary>Sexta-feira: 18h30m às 22h303m</TextSecondary>
                <TextSecondary>Sábado: 18h30m às 22h303m</TextSecondary>
            </div>
            <InfoCard>Formas de Pagamento</InfoCard>
        </div>
    )
}