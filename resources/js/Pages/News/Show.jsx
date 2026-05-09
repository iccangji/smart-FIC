import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { Calendar, User, AlertTriangle } from 'lucide-react';

export default function Show({ news, related = [] }) {

    return (
        <MainLayout
            header={
                <div>
                    <h2 className="font-bold text-3xl text-gray-900">
                        {news.title}
                    </h2>
                    <div className="flex gap-4 text-sm text-gray-600 mt-2">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {news.published_at.substring(0, 10)}
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {news.author?.name}
                        </span>
                    </div>
                </div>
            }
        >
            <Head title={news.title} />

            <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                    {/* CONTENT */}
                    <div className="md:col-span-3 bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <img src={`/storage/${news.thumbnail}`} className="w-full h-72 object-cover" />

                        <div className="p-6">
                            <div
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br>') }}
                            />
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        {/* RELATED */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sticky top-4">
                            <div className="font-bold mb-3 text-gray-800">Berita Terkait</div>

                            <div className="space-y-3">
                                {related.map(item => (
                                    <a key={item.id} href={`/news/${item.slug}`}>
                                        <div className="flex gap-3 hover:bg-gray-50 p-2 rounded">
                                            <img
                                                src={`/storage/${item.thumbnail}`}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <div className="text-sm font-semibold text-gray-800 line-clamp-2">
                                                    {item.title}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}