import React, { useState } from 'react';
import { Link, Head, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import PrimaryButton from '@/Components/PrimaryButton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import MainLayout from '@/Layouts/MainLayout';
import Modal from '@/Components/Modal';
import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import Pagination from '@/Components/Pagination';

export default function Index({ news }) {
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [selectedNewsId, setSelectedNewsId] = useState(0);
    const [selectedNewsTitle, setSelectedNewsTitle] = useState('');

    const handleDeleteClick = (newsId, newsTitle) => {
        setSelectedNewsId(newsId);
        setSelectedNewsTitle(newsTitle);
        setIsDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        router.delete(`/admin/news/${selectedNewsId}`, {
            onSuccess: () => {
                setIsDeleteConfirmOpen(false);
                setSelectedNewsId(0);
                setSelectedNewsTitle('');
            }
        });
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manajemen Berita</h2>}
        >
            <Head><title>Data Master - Berita</title></Head>
            <div className="p-4 md:p-6">
                <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <div className="mb-4 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900">Daftar Berita</h3>
                        <Link href="/admin/news/create">
                            <PrimaryButton>Tambah Berita</PrimaryButton>
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Judul</TableHead>
                                    <TableHead>Penulis</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Tanggal Publikasi</TableHead>
                                    <TableHead>Aksi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {news.data.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{news.from + index}</TableCell>
                                        <TableCell className="max-w-xs truncate">{item.title}</TableCell>
                                        <TableCell>{item.author?.name || 'N/A'}</TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold ${item.status === 'published'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {item.status === 'published' ? 'Dipublikasikan' : 'Draft'}
                                            </span>
                                        </TableCell>
                                        <TableCell>{item.published_at ? formatDate(item.published_at) : '-'}</TableCell>
                                        <TableCell className="flex gap-2">
                                            <Link href={`/admin/news/${item.id}/edit`}>
                                                <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon />Edit</Button>
                                            </Link>
                                            <Button
                                                size="sm"
                                                className="rounded bg-red-500 hover:bg-red-600 text-white"
                                                onClick={() => handleDeleteClick(item.id, item.title)}
                                            >
                                                <Trash2Icon /> Hapus
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Pagination links={news.links} />
                    </div>
                </div>
            </div>

            {isDeleteConfirmOpen && (
                <Modal show={isDeleteConfirmOpen} onClose={() => setIsDeleteConfirmOpen(false)}>
                    <div className="p-6 text-start flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900">Hapus Berita</h3>
                        <p className="text-sm text-gray-600">
                            Anda yakin ingin menghapus berita <strong>"{selectedNewsTitle}"</strong>?
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