import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import MainLayout from '@/Layouts/MainLayout';
import { PencilIcon } from 'lucide-react';

export default function Show({ user }) {
    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detail User</h2>}
        >
            <Head><title>Detail User</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Informasi User</h3>
                    <div className="space-y-4 text-sm text-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">ID</p>
                                <p className="text-gray-900 font-medium">{user.id}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="text-gray-900 font-medium">{user.email}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Name</p>
                                <p className="text-gray-900 font-medium">{user.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Created At</p>
                                <p className="text-gray-900 font-medium">{user.created_at}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Updated At</p>
                            <p className="text-gray-900 font-medium">{user.updated_at}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link href={`/admin/users/${user.id}/edit`}>
                            <Button size="sm" className="rounded bg-orange-400 hover:bg-orange-600 text-white"><PencilIcon />Edit</Button>
                        </Link>
                        <Link href="/admin/users">
                            <Button size="sm" variant="outline" className="rounded">Kembali</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}