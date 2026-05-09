import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useRef } from 'react';

export default function AdminMapSelector({ points, onPointSelect, selectedPointId }) {
    const markerRef = useRef(null);

    const generateMarkerColor = (pointId) => {
        if (selectedPointId === pointId) {
            return 'blue';
        }
        return 'gray';
    };

    const generateMarkerWeight = (pointId) => {
        if (selectedPointId === pointId) {
            return 4;
        }
        return 2;
    };

    const handleMarkerClick = (point) => {
        onPointSelect(point);
    };

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700">Pilih Lokasi Titik Pemantauan *</p>
            <MapContainer
                center={[-3.88, 122.42]}
                zoom={12}
                style={{ height: '400px', zIndex: 1, border: '2px solid #e5e7eb', borderRadius: '0.5rem' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {points.map(p => (
                    <CircleMarker
                        key={`${p.id}-${selectedPointId}`}
                        center={[p.lat, p.lng]}
                        radius={selectedPointId === p.id ? 18 : 15}
                        color={generateMarkerColor(p.id)}
                        weight={generateMarkerWeight(p.id)}
                        fillOpacity={0.7}
                        eventHandlers={{
                            click: () => handleMarkerClick(p),
                        }}
                    >
                        <Popup closeButton={false}>
                            <div>
                                <b>{p.name}</b>
                                <p className="text-xs mt-1">Klik untuk memilih</p>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
            {selectedPointId && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700">
                    ✓ Titik lokasi terpilih: <strong>{points.find(p => p.id === selectedPointId)?.name}</strong>
                </div>
            )}
        </div>
    );
}
