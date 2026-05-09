import React, { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import PrimaryButton from '@/Components/PrimaryButton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import MainLayout from '@/Layouts/MainLayout';
import Modal from '@/Components/Modal';
import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import Pagination from '@/Components/Pagination';

export default function Index({ points }) {
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [selectedPointId, setSelectedPointId] = useState(0);
    const [selectedPointName, setSelectedPointName] = useState('');

    const handleDeleteClick = (pointId, pointName) => {
        setSelectedPointId(pointId);
        setSelectedPointName(pointName);
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        router.delete(`/admin/points/${selectedPointId}`, {
            onSuccess: () => {
                setIsDeleteConfirmOpen(false);
                setSelectedPointId(0);
                setSelectedPointName('');
            }
        });
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Titik Kualitas Udara</h2>}
        >
            <Head><title>Data Master - Titik Kualitas Udara</title></Head>
            <div className="p-4 md:p-6">
                <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Daftar Titik Kualitas Udara</h3>
                        <Link href="/admin/points/create">
                            <PrimaryButton>Tambah Titik</PrimaryButton>
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Nama</TableHead>
                                    <TableHead>Lat</TableHead>
                                    <TableHead>Lng</TableHead>
                                    <TableHead>PM2.5</TableHead>
                                    <TableHead>PM10</TableHead>
                                    <TableHead>SO2</TableHead>
                                    <TableHead>CO</TableHead>
                                    <TableHead>NO2</TableHead>
                                    <TableHead>Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {points.data.map((point, index) => (
                                    <TableRow key={point.id}>
                                        <TableCell>{points.from + index}</TableCell>
                                        <TableCell>{point.name}</TableCell>
                                        <TableCell>{point.lat}</TableCell>
                                        <TableCell>{point.lng}</TableCell>
                                        <TableCell>{point.pm25}</TableCell>
                                        <TableCell>{point.pm10}</TableCell>
                                        <TableCell>{point.so2}</TableCell>
                                        <TableCell>{point.co}</TableCell>
                                        <TableCell>{point.no2}</TableCell>
                                        <TableCell className="flex gap-2">
                                            <Link href={`/admin/points/${point.id}/edit`}>
                                                <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon />Edit</Button>
                                            </Link>
                                            <Button
                                                size="sm"
                                                className="rounded bg-red-500 hover:bg-red-600 text-white"
                                                onClick={() => handleDeleteClick(point.id, point.name)}
                                            >
                                                <Trash2Icon /> Hapus
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Pagination links={points.links} />
                    </div>
                </div>
            </div>

            {isDeleteConfirmOpen && (
                <Modal show={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
                    <div className="p-6 text-start flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900">Hapus Titik Kualitas Udara</h3>
                        <p className="text-sm text-gray-600">
                            Anda yakin ingin menghapus titik <strong>"{selectedPointName}"</strong>?
                        </p>
                        <div className="flex gap-2 justify-end">
                            <Button
                                variant="outline"
                                onClick={() => setIsDeleteConfirmOpen(false)}
                            >
                                Batal
                            </Button>
                            <Button
                                variant="destructive"
                                className='bg-red-500 hover:bg-red-600 text-white'
                                onClick={confirmDelete}
                            >
                                Hapus
                            </Button>
                        </div>
                    </div>
                </Modal>
            )}
        </MainLayout>
    );
}