import banner from "../assets/home-banner.jpeg"
import logo from "../assets/logo.png"

export function Header() {

    return (
        <header>
            <div>
                <img
                    className="w-full h-28 md:h-[400px] md:w-3/4 lg:w-2/3 mx-auto md:rounded-b-2xl border-b-4 border-red-600"
                    src={banner}
                    alt="Banner da página inicial" />
            </div>
            <div>
                <div className="flex items-center">
                    <img
                        className="w-14 drop-shadow-sm drop-shadow-red-500 grayscale-25"
                        src={logo} alt="Logo Inbrazza" />
                    <h1 className="font-oswald font-bold text-lg ">Inbrazza Burger</h1>
                </div>
            </div>

        </header>
    )
}