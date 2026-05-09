import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { Newspaper, TrendingUp } from 'lucide-react';
import { AlertCircle } from 'lucide-react';
export default function Index({ news }) {

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                            <Newspaper className="w-8 h-8 text-blue-600" />
                            Berita & Informasi
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Update terbaru terkait kualitas udara dan kesehatan lingkungan
                        </p>
                    </div>
                </div>
            }
        >
            <Head title="Berita" />
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 70%, #93c5fd 0%, transparent 45%), radial-gradient(circle at 80% 15%, #c7d2fe 0%, transparent 40%)'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">

                    {/* TEXT */}
                    <div className="flex-1 text-gray-900">
                        <span className="inline-block bg-blue-100 border border-blue-200 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                            Berita & Update
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                            Informasi Terbaru<br />
                            <span className="text-blue-500">Kualitas Udara</span><br />
                            & Kesehatan Lingkungan
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-6">
                            Dapatkan berita terkini seputar kondisi kualitas udara, dampak kesehatan, serta kebijakan lingkungan dari berbagai sumber terpercaya untuk meningkatkan kesadaran masyarakat.
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-8 space-y-6">
                <div className="text-xl font-bold">Artikel Unggulan</div>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* FEATURED */}
                    {news.data.slice(0, 2).map(featured =>
                        <Link href={`/news/${featured.slug}`}>
                            <div className="bg-white shadow-md overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200">
                                <img src={`/storage/${featured.thumbnail}`} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <div className="text-sm text-blue-600 font-semibold mb-2 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4" /> Highlight
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{featured.title}</h2>
                                    <p className="text-gray-600 mt-2">{featured.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>

                <div className="p-4"></div>

                <div className="text-xl font-bold">Artikel Terbaru</div>
                {/* LIST */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {news.data.slice(2).map(item => (
                        <Link key={item.id} href={`/news/${item.slug}`}>
                            <div className="bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-200">
                                <img src={`/storage/${item.thumbnail}`} className="h-40 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </MainLayout>
    );
}   