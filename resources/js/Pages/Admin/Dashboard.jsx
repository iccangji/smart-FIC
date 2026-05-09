import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { BarChart3, Map, Droplets, Users, AlertCircle, TrendingUp, Plus, Newspaper } from 'lucide-react';

export default function Dashboard({ stats }) {
    const StatCard = ({ icon: Icon, title, count, color, bgGradient }) => (
        <Link href={color.route}>
            <div className={`${bgGradient} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer transform hover:scale-105 border border-gray-200`}>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-600 text-sm font-medium">{title}</p>
                        <p className="text-4xl font-bold text-gray-900 mt-2">{count}</p>
                    </div>
                    <div className={`${color.bgColor} rounded-xl p-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>
        </Link>
    );

    const statCards = [
        {
            icon: Users,
            title: "Data Responden",
            count: stats.responden_count,
            color: { bgColor: 'bg-blue-500', route: route('responden.index') },
            bgGradient: 'bg-gradient-to-br from-blue-50 to-gray-50'
        },
        {
            icon: Map,
            title: "Titik Risiko Kesehatan",
            count: stats.air_quality_points_count,
            color: { bgColor: 'bg-green-500', route: route('points.index') },
            bgGradient: 'bg-gradient-to-br from-green-50 to-gray-50'
        },
        {
            icon: Droplets,
            title: "Data Polutan",
            count: stats.pollutant_data_count,
            color: { bgColor: 'bg-purple-500', route: route('pollutant-quality-data.index') },
            bgGradient: 'bg-gradient-to-br from-purple-50 to-gray-50'
        },
        {
            icon: Newspaper,
            title: "Berita",
            count: stats.news_count,
            color: { bgColor: 'bg-amber-500', route: route('admin.news.index') },
            bgGradient: 'bg-gradient-to-br from-amber-50 to-gray-50'
        },
        {
            icon: BarChart3,
            title: "Total User",
            count: stats.users_count,
            color: { bgColor: 'bg-orange-500', route: route('users.index') },
            bgGradient: 'bg-gradient-to-br from-orange-50 to-gray-50'
        }
    ];

    const getStatusColor = (thq) => {
        if (thq >= 2) return 'text-red-600 bg-red-100 border-red-300';
        if (thq >= 1) return 'text-orange-600 bg-orange-100 border-orange-300';
        if (thq >= 0.5) return 'text-yellow-600 bg-yellow-100 border-yellow-300';
        if (thq >= 0.1) return 'text-blue-600 bg-blue-100 border-blue-300';
        return 'text-green-600 bg-green-100 border-green-300';
    };

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900">Dashboard Admin</h2>
                        <p className="text-gray-600 mt-1">Pantau sistem manajemen risiko kesehatan udara</p>
                    </div>
                </div>
            }
        >
            <Head><title>Admin Dashboard - SMART-FIC</title></Head>

            <div className="p-4 md:p-8">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {statCards.map((card, index) => (
                        <StatCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            count={card.count}
                            color={card.color}
                            bgGradient={card.bgGradient}
                        />
                    ))}
                </div>

                {/* Recent Data Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Recent Responden */}
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-white" />
                                <h3 className="text-lg font-bold text-white">Data Responden Terbaru</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            {stats.recent_responden.length > 0 ? (
                                <div className="space-y-3">
                                    {stats.recent_responden.map((item, index) => (
                                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{item.location}</p>
                                                    <p className="text-xs text-gray-500">
                                                        {new Date(item.created_at).toLocaleDateString('id-ID')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <p>Belum ada data responden</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                Akses Cepat - Tambah Data
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 align-items-start">
                                <Link href={route('responden.create')} className="block">
                                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                                        👥 Responden Baru
                                    </button>
                                </Link>
                                <Link href={route('points.create')} className="block">
                                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                                        🗺️ Titik Udara Baru
                                    </button>
                                </Link>
                                <Link href={route('pollutant-quality-data.create')} className="block">
                                    <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                                        💨 Polutan Baru
                                    </button>
                                </Link>
                                <Link href={route('admin.news.create')} className="block">
                                    <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                                        📰 Berita Baru
                                    </button>
                                </Link>
                                <Link href={route('users.create')} className="block">
                                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                                        👨‍💼 User Baru
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
