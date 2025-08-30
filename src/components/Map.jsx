import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
    const center = { lat: -3.8767460144116748, lng: -38.599790832938616 }
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "200px" }}
                center={center}
                zoom={18}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript >
    )
}