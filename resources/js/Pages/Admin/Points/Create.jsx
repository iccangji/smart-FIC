import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';

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
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/points');
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Titik Kualitas Udara</h2>}
        >
            <Head><title>Tambah Titik - Kualitas Udara</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Tambah Titik Kualitas Udara</h3>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div>
                            <Label htmlFor="lat">Latitude</Label>
                            <Input
                                id="lat"
                                type="number"
                                step="any"
                                value={data.lat}
                                onChange={(e) => setData('lat', e.target.value)}
                                required
                            />
                            {errors.lat && <p className="text-red-500">{errors.lat}</p>}
                        </div>
                        <div>
                            <Label htmlFor="lng">Longitude</Label>
                            <Input
                                id="lng"
                                type="number"
                                step="any"
                                value={data.lng}
                                onChange={(e) => setData('lng', e.target.value)}
                                required
                            />
                            {errors.lng && <p className="text-red-500">{errors.lng}</p>}
                        </div>
                        <div>
                            <Label htmlFor="pm25">PM2.5</Label>
                            <Input
                                id="pm25"
                                type="number"
                                step="any"
                                value={data.pm25}
                                onChange={(e) => setData('pm25', e.target.value)}
                                required
                            />
                            {errors.pm25 && <p className="text-red-500">{errors.pm25}</p>}
                        </div>
                        <div>
                            <Label htmlFor="pm10">PM10</Label>
                            <Input
                                id="pm10"
                                type="number"
                                step="any"
                                value={data.pm10}
                                onChange={(e) => setData('pm10', e.target.value)}
                                required
                            />
                            {errors.pm10 && <p className="text-red-500">{errors.pm10}</p>}
                        </div>
                        <div>
                            <Label htmlFor="so2">SO2</Label>
                            <Input
                                id="so2"
                                type="number"
                                step="any"
                                value={data.so2}
                                onChange={(e) => setData('so2', e.target.value)}
                                required
                            />
                            {errors.so2 && <p className="text-red-500">{errors.so2}</p>}
                        </div>
                        <div>
                            <Label htmlFor="co">CO</Label>
                            <Input
                                id="co"
                                type="number"
                                step="any"
                                value={data.co}
                                onChange={(e) => setData('co', e.target.value)}
                                required
                            />
                            {errors.co && <p className="text-red-500">{errors.co}</p>}
                        </div>
                        <div>
                            <Label htmlFor="no2">NO2</Label>
                            <Input
                                id="no2"
                                type="number"
                                step="any"
                                value={data.no2}
                                onChange={(e) => setData('no2', e.target.value)}
                                required
                            />
                            {errors.no2 && <p className="text-red-500">{errors.no2}</p>}
                        </div>
                        <div className="flex gap-2 pt-4">
                            <PrimaryButton type="submit" disabled={processing}>Simpan</PrimaryButton>
                            <Button type="button" variant="outline" onClick={() => window.history.back()}>Batal</Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}