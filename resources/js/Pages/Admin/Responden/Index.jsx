import React, { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import PrimaryButton from '@/Components/PrimaryButton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import MainLayout from '@/Layouts/MainLayout';
import Modal from '@/Components/Modal';
import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import Pagination from '@/Components/Pagination';

export default function Index({ respondens }) {

    console.log(respondens);


    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [selectedRespondenId, setSelectedRespondenId] = useState(0);

    const handleDeleteClick = (respondenId) => {
        setSelectedRespondenId(respondenId);
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        router.delete(`/admin/responden/${selectedRespondenId}`, {
            onSuccess: () => {
                setIsDeleteConfirmOpen(false);
                setSelectedRespondenId(0);
            }
        });
    };

    const getStatusFromTHQ = (thq) => {
        if (thq >= 2) {
            return { label: 'Sangat Tinggi', bgColor: 'bg-red-600' };
        } else if (thq >= 1) {
            return { label: 'Tinggi', bgColor: 'bg-red-500' };
        } else if (thq >= 0.5) {
            return { label: 'Sedang', bgColor: 'bg-orange-500' };
        } else if (thq >= 0.1) {
            return { label: 'Rendah', bgColor: 'bg-yellow-500' };
        } else {
            return { label: 'Sangat Rendah', bgColor: 'bg-green-500' };
        }
    };

    const getStatusBadge = (thq) => {
        const { label, bgColor } = getStatusFromTHQ(thq);
        return <span className={`px-3 py-1 text-xs font-semibold text-white ${bgColor} rounded-full`}>{label}</span>;
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data Responden</h2>}
        >
            <Head><title>Admin - Data Responden</title></Head>
            <div className="p-4 md:p-6">
                <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Daftar Responden</h3>
                        <Link href="/admin/responden/create">
                            <PrimaryButton>Tambah Responden</PrimaryButton>
                        </Link>
                    </div>
                    {respondens.data.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-600">Belum ada data responden.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Lokasi</TableHead>
                                        <TableHead>Berat Badan (kg)</TableHead>
                                        <TableHead>Waktu Paparan (jam/hari)</TableHead>
                                        <TableHead>Durasi Paparan (tahun)</TableHead>
                                        <TableHead>Frekuensi (hari/tahun)</TableHead>
                                        <TableHead>Laju Inhalasi</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead>Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {respondens.data.map((responden, index) => (
                                        <TableRow key={responden.id}>
                                            <TableCell>{respondens.from + index}</TableCell>
                                            <TableCell className="font-medium">{responden.air_quality_point?.name || 'N/A'}</TableCell>
                                            <TableCell>{responden.berat_badan}</TableCell>
                                            <TableCell>{responden.waktu_paparan}</TableCell>
                                            <TableCell>{responden.durasi_paparan}</TableCell>
                                            <TableCell>{responden.frekuensi_exposure}</TableCell>
                                            <TableCell>{responden.laju_inhalasi}</TableCell>
                                            <TableCell className="text-xs">{new Date(responden.created_at).toLocaleDateString('id-ID')}</TableCell>
                                            <TableCell className="flex gap-2">
                                                <Link href={`/admin/responden/${responden.id}/edit`}>
                                                    <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon size={16} />Edit</Button>
                                                </Link>
                                                <Button
                                                    size="sm"
                                                    className="rounded bg-red-500 hover:bg-red-600 text-white"
                                                    onClick={() => handleDeleteClick(responden.id)}
                                                >
                                                    <Trash2Icon size={16} /> Hapus
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Pagination links={respondens.links} />
                        </div>
                    )}
                </div>
            </div>

            {isDeleteConfirmOpen && (
                <Modal show={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
                    <div className="p-6 text-start flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900">Hapus Data Responden</h3>
                        <p className="text-sm text-gray-600">
                            Anda yakin ingin menghapus data responden ini? Tindakan ini tidak dapat dibatalkan.
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
