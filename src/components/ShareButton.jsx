import { ShareNetworkIcon } from "@phosphor-icons/react";

export function ShareButton({ className, title, text, url, size }) {
    const handleShare = async () => {
        const shareData = { title, text, url };


        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert("Compartilhamento não suportado neste dispositivo. Copie o link: " + shareData.url);
            }
        } catch (err) {
            console.log("Erro ao compartilhar:", err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className={`p-1.5 rounded-3xl cursor-pointer ${className}`}
        >
            <ShareNetworkIcon
                weight="bold"
                size={size}
            />
        </button>
    )
}