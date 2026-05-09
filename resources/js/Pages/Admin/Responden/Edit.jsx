import React, { useState, useEffect } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import ExposureParametersForm from '@/Components/ExposureParametersForm';
import AdminMapSelector from '@/Components/AdminMapSelector';

export default function Edit({ responden, points }) {
    const { data, setData, put, processing, errors } = useForm({
        air_quality_point_id: responden.air_quality_point_id || '',
        lat: responden.lat || '',
        lng: responden.lng || '',
        berat_badan: responden.berat_badan || '',
        waktu_paparan: responden.waktu_paparan || '',
        durasi_paparan: responden.durasi_paparan || '',
        frekuensi_exposure: responden.frekuensi_exposure || '',
        laju_inhalasi: responden.laju_inhalasi || ''
    });

    const [selectedPointId, setSelectedPointId] = useState(responden.air_quality_point_id);

    const getStatusFromTHQ = (thq) => {
        if (thq >= 2) {
            return { label: 'Sangat Tinggi', textColor: 'text-red-600' };
        } else if (thq >= 1) {
            return { label: 'Tinggi', textColor: 'text-orange-600' };
        } else if (thq >= 0.5) {
            return { label: 'Sedang', textColor: 'text-yellow-600' };
        } else if (thq >= 0.1) {
            return { label: 'Rendah', textColor: 'text-lime-600' };
        } else {
            return { label: 'Sangat Rendah', textColor: 'text-green-600' };
        }
    };

    const handlePointSelect = (point) => {
        setSelectedPointId(point.id);
        setData({
            ...data,
            air_quality_point_id: point.id,
            lat: point.lat,
            lng: point.lng
        });
    };

    const handleParameterChange = (field, value) => {
        setData(field, value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!selectedPointId) {
            alert('Pilih lokasi titik pemantauan terlebih dahulu');
            return;
        }
        put(`/admin/responden/${responden.id}`);
    };

    const statusInfo = getStatusFromTHQ(responden.thq);

    return (
        <MainLayout

            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Data Responden</h2>}
        >
            <Head><title>Edit Responden - Admin</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Edit Data Responden</h3>
                    <form onSubmit={submit} className="space-y-6">
                        {/* Admin Map Selector */}
                        <div className="border-b pb-6">
                            <AdminMapSelector
                                points={points}
                                onPointSelect={handlePointSelect}
                                selectedPointId={selectedPointId}
                            />
                            {errors.air_quality_point_id && <p className="text-red-600 text-sm mt-2">{errors.air_quality_point_id}</p>}
                        </div>

                        {/* Exposure Parameters Form */}
                        <div className="border-b pb-6">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">Parameter Paparan</h4>
                            <ExposureParametersForm
                                values={{
                                    berat_badan: data.berat_badan,
                                    waktu_paparan: data.waktu_paparan,
                                    durasi_paparan: data.durasi_paparan,
                                    frekuensi_exposure: data.frekuensi_exposure,
                                    laju_inhalasi: data.laju_inhalasi
                                }}
                                onChange={handleParameterChange}
                                errors={errors}
                                hideWaktuThq={true}
                            />
                        </div>

                        {/* Current Results */}
                        {responden.thq && (
                            <div className="border-b pb-6">
                                <h4 className="text-md font-semibold text-gray-900 mb-4">Hasil Perhitungan Terkini</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-xs text-gray-600 uppercase tracking-wide">THQ</p>
                                        <p className="text-2xl font-bold text-gray-900">{responden.thq.toFixed(3)}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-xs text-gray-600 uppercase tracking-wide">Status</p>
                                        <p className={`text-lg font-bold ${statusInfo.textColor}`}>
                                            {statusInfo.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                {processing ? 'Memperbarui...' : 'Perbarui'}
                            </PrimaryButton>
                            <Link href="/admin/responden">
                                <Button type="button" variant="outline">Batal</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
