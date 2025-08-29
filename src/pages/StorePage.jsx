import { CaretLeftIcon, MoneyIcon, PixLogoIcon, CreditCardIcon } from "@phosphor-icons/react"
import { TextSecondary } from "../components/TextSecondary"
import { Link } from "react-router-dom"
import Map from "../components/Map"

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
                className="flex p-3 gap-3 items-center border-b-1 border-gray400">
                <CaretLeftIcon size={22} />
                <h2>Perfil da Loja</h2>
            </Link>
            <div className="p-3 flex justify-between">
                <div>
                    <h2 className="font-bold text-xl">Inbrazza Burger</h2>
                    <p className="text-sm font-normal">Hambúrguer Feito na Brasa!</p>
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
            <div className="flex justify-between p-4">
                <div className="flex flex-col items-center gap-1">
                    <p>Dinheiro</p>
                    <MoneyIcon size={30} className="text-gray-700" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <p>Cartão</p>
                    <CreditCardIcon size={30} className="text-gray-700" />
                </div>
                <div className="flex flex-col items-center gap-1">
                    <p>Pix</p>
                    <PixLogoIcon size={30} className="text-gray-700" />
                </div>
            </div>
            <InfoCard>Localização</InfoCard>
            <div className="p-3">
                <TextSecondary className="py-3">Rua 136, 21 - Timbó, Maracanaú - CE, 61.936-390, Brasil</TextSecondary>
                <div className="rounded-2xl overflow-hidden">
                    <Map />
                </div>
            </div>


        </div>
    )
}