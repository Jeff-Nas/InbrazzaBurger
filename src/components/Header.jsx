import banner from "../assets/home-banner.png"
import logo from "../assets/logo.png"
import { MagnifyingGlassIcon, ShareNetworkIcon, CaretRightIcon } from "@phosphor-icons/react"
import { StoreStatus } from "./StoreStatus"
import { Link } from "react-router-dom"


export function Header() {

    return (
        <header>
            <div className="flex flex-col items-center">
                <div>
                    <img
                        className="w-full md:h-auto md:w-3/4 lg:w-2/3 mx-auto md:rounded-b-2xl border-b-4 border-red-600"
                        src={banner}
                        alt="Banner da página inicial" />
                </div>
                <div className="w-[90%] md:w-2/3 lg:w-3/5 h-auto border  border-gray-400 rounded-2xl -mt-4 bg-white z-50 relative">
                    <div className="flex items-center my-1">
                        <div className="flex w-full ">
                            <div className="flex items-center w-full grow">
                                <img
                                    className="w-14 drop-shadow-sm grayscale-25"
                                    src={logo} alt="Logo Inbrazza" />
                                <Link
                                    to="/profile/inbrazzaburger"
                                    className="w-full"
                                >
                                    <div>
                                        <div className="flex items-center gap-6">
                                            <h1 className="font-bold text-lg lg:text-2xl">Inbrazza Burger</h1>
                                            <CaretRightIcon />
                                        </div>
                                        <p className="text-[10px] font-light lg:text-xs">Pedido mínimo R$ 12,00</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex gap-2.5 mr-2.5">
                            <button
                                aria-label="Pesquisar"
                                className="bg-red-200 p-1 rounded-3xl cursor-pointer"
                            >
                                <MagnifyingGlassIcon size={18} color="#D5170D" weight="bold" />
                            </button>
                            <button
                                className="bg-red-200 p-1 rounded-3xl cursor-pointer"
                            >
                                <ShareNetworkIcon size={18} color="#D5170D" weight="bold" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <StoreStatus />
                    </div>
                </div>
            </div>


        </header>
    )
}