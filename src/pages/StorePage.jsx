import { CaretLeftIcon, MoneyIcon, PixLogoIcon, CreditCardIcon, InstagramLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react"
import { TextSecondary } from "../components/TextSecondary"
import { Link } from "react-router-dom"
import Map from "../components/Map"

export function InfoCard({ children }) {
    return (
        <div className="bg-gray-200 opacity-85 px-4 py-3 rounded-t-2xl ">
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
        <section className="md:w-2xl mx-auto">
            <div className="flex  items-center justify-between border-b-1 border-gray400">
                <Link
                    to="/"
                    className="flex p-3 gap-3 items-center">
                    <CaretLeftIcon size={22} />
                    <h2>Perfil da Loja</h2>
                </Link>
                <div className="flex gap-3 pr-3">
                    <a href="https://www.instagram.com/inbrazzaburger1/">
                        <InstagramLogoIcon size={26} weight="light" className="text-pink-900" />
                    </a>
                    <a href="https://wa.me/5585989814263">
                        <WhatsappLogoIcon size={26} weight="light" className="text-green-900" />
                    </a>
                </div>
            </div>
            <div className="p-3 flex justify-between">
                <div>
                    <h2 className="font-bold text-xl">Inbrazza Burger</h2>
                    <p className="text-sm font-normal">Hambúrguer Feito na Brasa!</p>
                </div>
                <img
                    className="h-14"
                    src="/logo.png" alt="logo inbrazza" />
            </div>
            <InfoCard>Horário de atendimento</InfoCard>
            <div className="p-3">
                <TextSecondary>Domingo: 18h30m às 22h30min</TextSecondary>
                <TextSecondary>Quarta-feira: 18h30m às 22h30m</TextSecondary>
                <TextSecondary>Quinta-feira: 18h30m às 22h30m</TextSecondary>
                <TextSecondary>Sexta-feira: 18h30m às 22h30m</TextSecondary>
                <TextSecondary>Sábado: 18h30m às 22h30m</TextSecondary>
            </div>

            <InfoCard>Formas de Pagamento</InfoCard>
            <div className="flex justify-evenly py-4">
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


        </section>
    )
}