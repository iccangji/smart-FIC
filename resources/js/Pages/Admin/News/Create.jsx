import React, { useState } from 'react';
import { useForm, Head } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        thumbnail: null,
        status: 'draft',
        published_at: '',
    });

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_]+/g, '-')
            .replace(/^-+|-+$/g, '');
    };

    const handleTitleChange = (e) => {
        const title = e.target.value;
        setData('title', title);
        setData('slug', generateSlug(title));
    };

    const handleContentChange = (e) => {
        const content = e.target.value;
        setData('content', content);
        setData('excerpt', content.substring(0, 150) + (content.length > 150 ? '...' : ''));
    };

    const submit = (e) => {
        e.preventDefault();
        post('/admin/news');
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Berita</h2>}
        >
            <Head><title>Tambah Berita</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Tambah Berita</h3>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="title">Judul</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={handleTitleChange}
                                placeholder="Masukkan judul berita"
                                required
                            />
                            {errors.title && <p className="text-red-500">{errors.title}</p>}
                        </div>
                        <div>
                            <Label htmlFor="content">Konten</Label>
                            <textarea
                                id="content"
                                value={data.content}
                                onChange={handleContentChange}
                                placeholder="Masukkan konten berita"
                                rows="8"
                                className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.content && <p className="text-red-500">{errors.content}</p>}
                        </div>
                        <div>
                            <Label htmlFor="thumbnail">Thumbnail</Label>
                            <Input
                                id="thumbnail"
                                type="file"
                                accept="image/*"
                                onChange={(e) => setData('thumbnail', e.target.files[0])}
                            />
                            {errors.thumbnail && <p className="text-red-500">{errors.thumbnail}</p>}
                        </div>
                        <div>
                            <Label htmlFor="status">Status</Label>
                            <select
                                id="status"
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="draft">Draft</option>
                                <option value="published">Dipublikasikan</option>
                            </select>
                            {errors.status && <p className="text-red-500">{errors.status}</p>}
                        </div>
                        <div>
                            <Label htmlFor="published_at">Tanggal Publikasi</Label>
                            <Input
                                id="published_at"
                                type="datetime-local"
                                value={data.published_at}
                                onChange={(e) => setData('published_at', e.target.value)}
                            />
                            {errors.published_at && <p className="text-red-500">{errors.published_at}</p>}
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