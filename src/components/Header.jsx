import banner from "../assets/home-banner.jpeg"
import logo from "../assets/logo.png"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { ShareNetworkIcon } from "@phosphor-icons/react"
import { StoreStatus } from "./StoreStatus"


export function Header() {

    return (
        <header>
            <div>
                <img
                    className="w-full h-28 md:h-[400px] md:w-3/4 lg:w-2/3 mx-auto md:rounded-b-2xl border-b-4 border-red-600"
                    src={banner}
                    alt="Banner da página inicial" />
            </div>

            <div className="mx-4 border border-gray-400 rounded-2xl -mt-4 bg-white z-50 relative">
                <div className="flex items-center justify-between my-1">
                    <div>
                        <div className="flex items-center">
                            <img
                                className="w-14 drop-shadow-sm  grayscale-25"
                                src={logo} alt="Logo Inbrazza" />
                            <div>
                                <h1 className="font-bold text-lg">Inbrazza Burger</h1>
                                <p className="text-[10px] font-light">Pedido mínimo R$ 12,00</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2.5 mr-2.5">
                        <div className="bg-red-200 p-1 rounded-3xl cursor-pointer">
                            <MagnifyingGlassIcon size={18} color="#D5170D" weight="bold" />
                        </div>
                        <div className="bg-red-200 p-1 rounded-3xl cursor-pointer">
                            <ShareNetworkIcon size={18} color="#D5170D" weight="bold" />
                        </div>
                    </div>
                </div>
                <div>
                    <StoreStatus />
                </div>
            </div>


        </header>
    )
}