// resources/js/Components/MapView.jsx

import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { STATUS_COLORS } from '@/lib/RiskStandards';
import { useEffect, useRef } from 'react';
export default function MapView({ points, onMarkerClick, selectedPollutant = 'pm25', selectedPoint }) {

    const handleMarkerClick = (id) => {
        onMarkerClick(id);
    };

    const statusColors = STATUS_COLORS;
    const generateMarkerColor = (thq) => {
        if (thq > 2) return statusColors.hazardous.color;
        else if (thq >= 1 && thq <= 2) return statusColors.veryUnhealthy.color;
        else if (thq >= 0.5 && thq < 1) return statusColors.unhealthy.color;
        else if (thq >= 0.1 && thq < 0.5) return statusColors.moderate.color;
        else if (thq < 0.1) return statusColors.good.color;
        else return '#105fb9';
    };
    const markerRefs = useRef({});
    useEffect(() => {
        if (selectedPoint && markerRefs.current[selectedPoint.id]) {
            markerRefs.current[selectedPoint.id].openPopup();
        }
    }, [selectedPoint]);
    return (
        <MapContainer
            center={[-3.88, 122.42]}
            zoom={11}
            style={{ height: '360px', zIndex: 1 }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {points.map(p => {
                const thq = p.average_hqs ? p.average_hqs[selectedPollutant] : null;
                return (
                    <CircleMarker
                        ref={(ref) => {
                            if (ref) markerRefs.current[p.id] = ref;
                        }}
                        key={`${p.id}-${selectedPollutant}`}
                        center={[p.lat, p.lng]}
                        radius={15}
                        weight={3}
                        fillOpacity={0.8}
                        color={thq ? generateMarkerColor(thq) : '#105fb9'}
                        eventHandlers={{
                            click: () => handleMarkerClick(p.id),
                        }}

                    >
                        <Popup
                            closeButton={false}
                        >
                            <b>{p.name}</b>
                        </Popup>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    );
}