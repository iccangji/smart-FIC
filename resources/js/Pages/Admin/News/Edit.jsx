import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import MainLayout from '@/Layouts/MainLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Edit({ news }) {
    const { data, setData, put, processing, errors } = useForm({
        title: news.title,
        slug: news.slug,
        excerpt: news.excerpt,
        content: news.content,
        thumbnail: null,
        status: news.status,
        published_at: news.published_at,
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
        setData('content', e.target.value);
        setData('excerpt', e.target.value.substring(0, 150) + (e.target.value.length > 150 ? '...' : ''));
    }

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/news/${news.id}`);
    };

    return (
        <MainLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Berita</h2>}
        >
            <Head><title>Edit Berita</title></Head>
            <div className="p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-white overflow-hidden shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">Form Edit Berita</h3>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="title">Judul</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={handleTitleChange}
                                placeholder="Masukkan judul berita"
                                className='w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
                                className="w-full px-3 py-2 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                required
                            />
                            {errors.content && <p className="text-red-500">{errors.content}</p>}
                        </div>
                        <div>
                            <Label htmlFor="thumbnail">Thumbnail</Label>
                            {news.thumbnail && (
                                <div className="mb-2">
                                    <p className="text-sm text-gray-600">Thumbnail saat ini:</p>
                                    <img src={`/storage/${news.thumbnail}`} alt="Thumbnail" className="w-32 h-32 object-cover rounded" />
                                </div>
                            )}
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
                                value={data.published_at ? data.published_at.replace(' ', 'T').slice(0, 16) : ''}
                                onChange={(e) => setData('published_at', e.target.value)}
                            />
                            {errors.published_at && <p className="text-red-500">{errors.published_at}</p>}
                        </div>
                        <div className="flex gap-2 pt-4">
                            <PrimaryButton type="submit" disabled={processing}>Perbarui</PrimaryButton>
                            <Button type="button" variant="outline" onClick={() => window.history.back()}>Batal</Button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}