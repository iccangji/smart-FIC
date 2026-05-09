import React, { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import PrimaryButton from '@/Components/PrimaryButton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import MainLayout from '@/Layouts/MainLayout';
import Modal from '@/Components/Modal';
import { PencilIcon, Trash2Icon } from 'lucide-react';
import Pagination from '@/Components/Pagination';

export default function Index({ pollutants }) {
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [selectedDataId, setSelectedDataId] = useState(0);

    const handleDeleteClick = (dataId) => {
        setSelectedDataId(dataId);
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        router.delete(route('pollutant-quality-data.destroy', selectedDataId), {
            onSuccess: () => {
                setIsDeleteConfirmOpen(false);
                setSelectedDataId(0);
            }
        });
    };

    const getPollutantStatus = (pm25, pm10, so2, no2, co) => {
        const values = [pm25, pm10, so2, no2, co].filter(v => v !== null && v !== undefined);
        if (values.length === 0) return 'Unknown';
        const avg = values.reduce((a, b) => a + b, 0) / values.length;
        if (avg < 25) return 'Aman';
        if (avg < 50) return 'Sedang';
        if (avg < 75) return 'Tidak Sehat';
        return 'Berbahaya';
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            'Aman': 'bg-green-500',
            'Sedang': 'bg-yellow-500',
            'Tidak Sehat': 'bg-orange-500',
            'Berbahaya': 'bg-red-500',
            '-': 'bg-gray-500'
        };
        const bgColor = statusMap[status] || 'bg-gray-500';
        return <span className={`px-3 py-1 text-xs font-semibold text-white ${bgColor} rounded-full`}>{status}</span>;
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data Kualitas Udara</h2>}
        >
            <Head><title>Admin - Data Kualitas Udara</title></Head>
            <div className="p-4 md:p-6">
                <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Daftar Data Polutan</h3>
                        <Link href={route('pollutant-quality-data.create')}>
                            <PrimaryButton>Tambah Data</PrimaryButton>
                        </Link>
                    </div>
                    {pollutants.data.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-600">Belum ada data polutan.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Nama Lokasi</TableHead>
                                        <TableHead>PM2.5</TableHead>
                                        <TableHead>PM10</TableHead>
                                        <TableHead>SO₂</TableHead>
                                        <TableHead>NO₂</TableHead>
                                        <TableHead>CO</TableHead>
                                        {/* <TableHead>Status</TableHead> */}
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {pollutants.data.map((item, index) => {
                                        const status = getPollutantStatus(item.pm25, item.pm10, item.so2, item.no2, item.co);
                                        return (
                                            <TableRow key={item.id}>
                                                <TableCell>{index + pollutants.from}</TableCell>
                                                <TableCell className="font-medium">{item.name}</TableCell>
                                                <TableCell>{item.pm25}</TableCell>
                                                <TableCell>{item.pm10}</TableCell>
                                                <TableCell>{item.so2}</TableCell>
                                                <TableCell>{item.no2}</TableCell>
                                                <TableCell>{item.co}</TableCell>
                                                {/* <TableCell>{getStatusBadge(status)}</TableCell> */}
                                                <TableCell className="flex gap-2">
                                                    <Link href={route('pollutant-quality-data.edit', item.id)}>
                                                        <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon size={16} />Edit</Button>
                                                    </Link>
                                                    <Button
                                                        size="sm"
                                                        className="rounded bg-red-500 hover:bg-red-600 text-white"
                                                        onClick={() => handleDeleteClick(item.id)}
                                                    >
                                                        <Trash2Icon size={16} />Hapus
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                            <Pagination links={pollutants.links} />
                        </div>
                    )}
                </div>
            </div>

            <Modal show={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
                <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Konfirmasi Penghapusan</h2>
                    <p className="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</p>
                    <div className="flex gap-3 justify-end">
                        <Button variant="outline" onClick={() => setIsDeleteConfirmOpen(false)}>
                            Batal
                        </Button>
                        <Button
                            className="bg-red-600 hover:bg-red-700 text-white"
                            onClick={confirmDelete}
                        >
                            Hapus
                        </Button>
                    </div>
                </div>
            </Modal>
        </MainLayout>
    );
}
