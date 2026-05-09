import React, { useState } from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import ExposureParametersForm from '@/Components/ExposureParametersForm';
import AdminMapSelector from '@/Components/AdminMapSelector';

export default function Create({ points }) {
    const { data, setData, post, processing, errors } = useForm({
        air_quality_point_id: '',
        lat: '',
        lng: '',
        berat_badan: '',
        waktu_paparan: '',
        durasi_paparan: '',
        frekuensi_exposure: '',
        laju_inhalasi: ''
    });

    const [selectedPointId, setSelectedPointId] = useState(null);

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
        post('/admin/responden');
    };

    return (
        <MainLayout

            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Data Responden</h2>}
        >
            <Head><title>Tambah Responden - Admin</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Tambah Data Responden</h3>
                    <form onSubmit={submit} className="space-y-6">
                        {/* Admin Map Selector */}
                        <div className="">
                            <AdminMapSelector
                                points={points}
                                onPointSelect={handlePointSelect}
                                selectedPointId={selectedPointId}
                            />
                            {errors.air_quality_point_id && <p className="text-red-600 text-sm mt-2">{errors.air_quality_point_id}</p>}
                        </div>

                        {/* Exposure Parameters Form */}
                        <div className="">
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

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan'}
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
