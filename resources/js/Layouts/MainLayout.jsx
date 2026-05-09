import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import { Link, usePage } from '@inertiajs/react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Main({ header, children }) {
    const { auth } = usePage().props;
    const { url } = usePage();
    const user = auth?.user;
    const isLoggedIn = !!user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [showingUserDropdown, setShowingUserDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Modern Navbar */}
            <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo Section */}
                        <div className="flex items-center gap-3">
                            <Link href="/" className='flex items-center gap-3 hover:opacity-90 transition'>
                                <div className="bg-white rounded-lg p-2 shadow-md">
                                    <ApplicationLogo className="w-10 h-10 fill-blue-600" />
                                </div>
                                <div>
                                    <div className="text-white text-2xl font-bold">SMART-FIC</div>
                                    <div className="text-blue-100 text-xs hidden md:block">System for Monitoring Air Quality<br /> and Health Risk - Factors, Impact and Consequences</div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-2">
                            <Link
                                href={route('pollutant-quality-map')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url === '/' ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Data Kualitas Udara
                            </Link>
                            <Link
                                href={route('health-risk-map')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url === '/data-resiko-kesehatan' ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Data Risiko Kesehatan
                            </Link>
                            <Link
                                href={route('learning.index')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url.startsWith('/belajar') ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Belajar
                            </Link>
                            <Link
                                href={route('news.index')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url.startsWith('/news') ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Berita
                            </Link>
                            <Link
                                href={route('impact.index')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url.startsWith('/dampak') ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Dampak
                            </Link>
                            <Link
                                href={route('policy.index')}
                                className={`text-blue-100 px-2 hover:text-white transition font-medium ${url.startsWith('/kebijakan') ? 'bg-blue-500 px-4 py-2 rounded' : ''}`}
                            >
                                Kebijakan
                            </Link>
                        </div>

                        {/* User Menu */}
                        <div className="hidden md:flex items-center gap-4">
                            {isLoggedIn ? (
                                <div className="relative">
                                    <button
                                        onClick={() => setShowingUserDropdown(!showingUserDropdown)}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700 text-white transition"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        <span>Menu</span>
                                        <ChevronDown className={`w-4 h-4 transition ${showingUserDropdown ? 'rotate-180' : ''}`} />
                                    </button>

                                    {showingUserDropdown && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                                            <div className="px-4 py-3 border-b border-gray-100">
                                                <p className="text-sm font-semibold text-gray-900">Navigasi Admin</p>
                                            </div>
                                            <Link
                                                href={route('admin.dashboard')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                📊 Dashboard
                                            </Link>
                                            <Link
                                                href={route('points.index')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                🗺️ Data Titik Risiko
                                            </Link>
                                            <Link
                                                href={route('responden.index')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                👥 Data Responden
                                            </Link>
                                            <Link
                                                href={route('pollutant-quality-data.index')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                💨 Data Polutan
                                            </Link>
                                            <Link
                                                href={route('users.index')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                👨‍💼 Data User
                                            </Link>
                                            <Link
                                                href={route('admin.news.index')}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                                            >
                                                📰 Data Berita
                                            </Link>
                                            <div className="border-t border-gray-100">
                                                <Link
                                                    href={route('logout')}
                                                    method="post"
                                                    className="block px-4 py-2 text-red-700 hover:bg-red-50 transition font-medium"
                                                    as='button'
                                                >
                                                    🚪 Logout
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition font-medium"
                                >
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 transition"
                            >
                                {showingNavigationDropdown ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {showingNavigationDropdown && (
                        <div className="md:hidden pb-4 border-t border-blue-700">
                            {isLoggedIn ? (
                                <>
                                    <Link
                                        href={route('admin.dashboard')}
                                        className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                    >
                                        📊 Dashboard
                                    </Link>
                                    <Link
                                        href={route('health-risk-map')}
                                        className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                    >
                                        🗺️ Peta Risiko
                                    </Link>
                                    <Link
                                        href={route('pollutant-quality-map')}
                                        className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                    >
                                        💨 Kualitas Udara
                                    </Link>
                                    <Link
                                        href={route('admin.news.index')}
                                        className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                    >
                                        📰 Berita
                                    </Link>
                                    <div className="border-t border-blue-700 mt-2 pt-2">
                                        <Link
                                            href={route('points.index')}
                                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                        >
                                            Data Titik Risiko
                                        </Link>
                                        <Link
                                            href={route('responden.index')}
                                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                        >
                                            Data Responden
                                        </Link>
                                        <Link
                                            href={route('pollutant-quality-data.index')}
                                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                        >
                                            Data Polutan
                                        </Link>
                                        <Link
                                            href={route('admin.news.index')}
                                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                        >
                                            Data Berita
                                        </Link>
                                        <Link
                                            href={route('users.index')}
                                            className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition"
                                        >
                                            Data User
                                        </Link>
                                    </div>
                                    <div className="border-t border-blue-700 mt-2 pt-2">
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            className="block px-4 py-2 text-red-200 hover:text-red-100 hover:bg-red-600 rounded transition font-medium"
                                            as='button'
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={route('login')}
                                    className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded transition font-medium"
                                >Login</Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* Page Header */}
            {header && (
                <div className="bg-emerald-50 border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        {header}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                {children}
            </main>
        </div>
    );
}
