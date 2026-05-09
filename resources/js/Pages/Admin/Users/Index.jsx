import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { EyeIcon, PencilIcon, Trash2Icon } from 'lucide-react';
import Pagination from '@/Components/Pagination';

export default function Index({ users }) {
    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manajemen User</h2>}
        >
            <Head><title>Users</title></Head>
            <div className="p-4 md:p-6">
                <div className="bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">Daftar User</h3>
                            <p className="text-sm text-gray-500">Kelola akun pengguna aplikasi.</p>
                        </div>
                        <Link href="/admin/users/create">
                            <PrimaryButton>Tambah User</PrimaryButton>
                        </Link>
                    </div>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.data.map((user, index) => (
                                    <TableRow key={user.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell className="flex flex-wrap gap-2">
                                            <Link href={`/admin/users/${user.id}`}>
                                                <Button size="sm" className="rounded bg-blue-500 hover:bg-blue-600 text-white"><EyeIcon />Lihat</Button>
                                            </Link>
                                            <Link href={`/admin/users/${user.id}/edit`}>
                                                <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon />Edit</Button>
                                            </Link>
                                            {users.length > 1 && (
                                                <Link href={`/admin/users/${user.id}`} method="delete" as="button">
                                                    <Button size="sm" className="rounded bg-red-500 hover:bg-red-600 text-white"><Trash2Icon />Hapus</Button>
                                                </Link>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Pagination links={users.links} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}