import { MapContainer, TileLayer, CircleMarker, Popup, LayerGroup } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import { getMarkerColor, getPollutantStatus, getStatusInfo, POLLUTANT_LABELS } from '@/lib/pollutantStandards';

export default function PollutantMapView({
    points,
    selectedPollutant = 'pm25',
    onMarkerClick,
    selectedPoint,
    selectedStandard = 'pp'
}) {
    const handleMarkerClick = (id) => {
        if (onMarkerClick) {
            onMarkerClick(id);
        }
    };
    const markerRefs = useRef({});
    useEffect(() => {
        if (selectedPoint && markerRefs.current[selectedPoint.id]) {
            markerRefs.current[selectedPoint.id].openPopup();
        }
    }, [selectedPoint]);
    return (
        <MapContainer
            center={[-3.88, 122.43]}
            zoom={11}
            style={{ height: '360px', zIndex: 1, borderRadius: '0.5rem' }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <LayerGroup>
                {points.map(point => {
                    const pollutantValue = point[selectedPollutant];
                    const markerColor = getMarkerColor(selectedPollutant, pollutantValue, selectedStandard);
                    const status = getPollutantStatus(selectedPollutant, pollutantValue, selectedStandard);
                    const statusInfo = getStatusInfo(status);

                    return (
                        <CircleMarker
                            ref={(ref) => {
                                if (ref) markerRefs.current[point.id] = ref;
                            }}
                            key={`${point.id}-${selectedPollutant}-${selectedStandard}`}
                            center={[point.lat, point.lng]}
                            radius={15}
                            color={markerColor}
                            weight={3}
                            fillOpacity={0.8}
                            eventHandlers={{
                                click: () => handleMarkerClick(point.id),
                            }}
                        >
                            <Popup closeButton={false}>
                                <div>
                                    <b>{point.name}</b>
                                    <p className="text-xs mt-1">
                                        <span className="font-medium">{POLLUTANT_LABELS[selectedPollutant]?.label}:</span>{' '}
                                        {pollutantValue} {POLLUTANT_LABELS[selectedPollutant]?.unit}
                                    </p>
                                    <p className="text-xs" style={{ color: markerColor }}>
                                        Status: {statusInfo.label}
                                    </p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </LayerGroup>
        </MapContainer >
    );
}
