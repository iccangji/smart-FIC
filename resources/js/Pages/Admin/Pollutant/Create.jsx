import React from 'react';
import { useForm, Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Input } from '@/Components/ui/input';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        lat: '',
        lng: '',
        pm25: '',
        pm10: '',
        so2: '',
        co: '',
        no2: '',
        suhu: '',
        kelembaban: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('pollutant-quality-data.store'));
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Data Kualitas Udara</h2>}
        >
            <Head><title>Tambah Data Kualitas Udara - Admin</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Tambah Data Polutan</h3>
                    <form onSubmit={submit} className="space-y-6">
                        {/* Location Info */}
                        <div className="border-b pb-6">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">Informasi Lokasi</h4>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nama Lokasi *
                                    </label>
                                    <Input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Contoh: UA 1"
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Latitude *
                                        </label>
                                        <Input
                                            type="number"
                                            step="0.00001"
                                            value={data.lat}
                                            onChange={(e) => setData('lat', e.target.value)}
                                            placeholder="-3.83364"
                                            className={errors.lat ? 'border-red-500' : ''}
                                        />
                                        {errors.lat && (
                                            <p className="text-red-600 text-sm mt-1">{errors.lat}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Longitude *
                                        </label>
                                        <Input
                                            type="number"
                                            step="0.00001"
                                            value={data.lng}
                                            onChange={(e) => setData('lng', e.target.value)}
                                            placeholder="122.46945"
                                            className={errors.lng ? 'border-red-500' : ''}
                                        />
                                        {errors.lng && (
                                            <p className="text-red-600 text-sm mt-1">{errors.lng}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pollutants */}
                        <div className="border-b pb-6">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">Data Polutan</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        PM2.5 (µg/m³)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.pm25}
                                        onChange={(e) => setData('pm25', e.target.value)}
                                        placeholder="45"
                                    />
                                    {errors.pm25 && (
                                        <p className="text-red-600 text-sm mt-1">{errors.pm25}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        PM10 (µg/m³)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.pm10}
                                        onChange={(e) => setData('pm10', e.target.value)}
                                        placeholder="82"
                                    />
                                    {errors.pm10 && (
                                        <p className="text-red-600 text-sm mt-1">{errors.pm10}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        SO₂ (µg/m³)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.so2}
                                        onChange={(e) => setData('so2', e.target.value)}
                                        placeholder="110"
                                    />
                                    {errors.so2 && (
                                        <p className="text-red-600 text-sm mt-1">{errors.so2}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        NO₂ (µg/m³)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.no2}
                                        onChange={(e) => setData('no2', e.target.value)}
                                        placeholder="135"
                                    />
                                    {errors.no2 && (
                                        <p className="text-red-600 text-sm mt-1">{errors.no2}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        CO (mg/m³)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.co}
                                        onChange={(e) => setData('co', e.target.value)}
                                        placeholder="4.8"
                                    />
                                    {errors.co && (
                                        <p className="text-red-600 text-sm mt-1">{errors.co}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Climate */}
                        <div className="pb-6">
                            <h4 className="text-md font-semibold text-gray-900 mb-4">Kondisi Iklim</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Suhu (°C)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.suhu}
                                        onChange={(e) => setData('suhu', e.target.value)}
                                        placeholder="32.1"
                                    />
                                    {errors.suhu && (
                                        <p className="text-red-600 text-sm mt-1">{errors.suhu}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kelembaban (%)
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={data.kelembaban}
                                        onChange={(e) => setData('kelembaban', e.target.value)}
                                        placeholder="68"
                                    />
                                    {errors.kelembaban && (
                                        <p className="text-red-600 text-sm mt-1">{errors.kelembaban}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                            <PrimaryButton type="submit" disabled={processing}>
                                {processing ? 'Menyimpan...' : 'Simpan'}
                            </PrimaryButton>
                            <Link href={route('pollutant-quality-data.index')}>
                                <Button type="button" variant="outline">Batal</Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
