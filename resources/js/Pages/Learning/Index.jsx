import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { BookOpen, ChevronDown, ChevronUp, ArrowRight, Wind, FlaskConical, BarChart2, TrendingUp, Atom } from 'lucide-react';
import { learningSections as sections } from '@/lib/pageSections';
const highlights = [
    { icon: Wind, label: 'Polutan Utama', value: '5 Jenis', sub: 'PM2.5, PM10, SO₂, NO₂, CO', color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { icon: FlaskConical, label: 'Metode Risiko', value: 'Monte Carlo', sub: 'Simulasi probabilistik', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: BarChart2, label: 'Standar Acuan', value: 'ISPU 2020', sub: 'Permen LHK No. 14', color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { icon: TrendingUp, label: 'Analisis', value: 'Sensitivitas', sub: 'Faktor dominan risiko', color: 'text-orange-600', bg: 'bg-orange-50' },
];

export default function Belajar() {
    const [openFaq, setOpenFaq] = useState({});
    const toggle = (secId, idx) =>
        setOpenFaq(prev => ({ ...prev, [`${secId}-${idx}`]: !prev[`${secId}-${idx}`] }));

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                            <BookOpen className="w-8 h-8 text-blue-600" />
                            Pusat Belajar
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Materi ilmiah risiko polusi udara terhadap kesehatan siswa
                        </p>
                    </div>
                </div>
            }
        >
            <Head><title>Belajar - SMART-FIC</title></Head>

            {/* HERO */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 70%, #6ee7b7 0%, transparent 45%), radial-gradient(circle at 80% 15%, #5eead4 0%, transparent 40%)'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">

                    {/* TEXT */}
                    <div className="flex-1 text-gray-900">
                        <span className="inline-block bg-emerald-100 border border-emerald-200 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                            Edukasi
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                            Memahami<br />
                            <span className="text-emerald-500">Polusi Udara</span><br />
                            & Dampaknya
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-6">
                            Pelajari dasar-dasar kualitas udara, jenis polutan, serta bagaimana paparan lingkungan mempengaruhi kesehatan manusia untuk meningkatkan kesadaran dan pencegahan dini.
                        </p>
                    </div>
                </div>
            </div>

            {/* STATS STRIP */}
            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {highlights.map(({ icon: Icon, label, value, sub, color, bg }) => (
                        <div key={label} className={`${bg} rounded-xl p-4 flex items-start gap-3 border border-gray-100`}>
                            <div className={`${color} mt-0.5`}><Icon className="w-5 h-5" /></div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium">{label}</p>
                                <p className={`text-base font-extrabold ${color}`}>{value}</p>
                                <p className="text-xs text-gray-400">{sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ALTERNATING CONTENT SECTIONS */}
            {sections.map((sec, si) => (
                <section key={sec.id} className={si % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
                        {/* Image + Text Row */}
                        <div className={`flex flex-col ${sec.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 mb-10`}>
                            <div className="flex-shrink-0 w-full md:w-[45%]">
                                <div className="relative group">
                                    <div className={`absolute -inset-3 ${sec.accent} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                                    <img
                                        src={sec.image}
                                        alt={sec.imageAlt}
                                        className="relative rounded-2xl shadow-lg w-full object-cover border border-gray-100"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">{sec.title}</h2>
                                <p className="text-gray-600 leading-relaxed text-base">{sec.body}</p>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
                            {sec.topics.map((t, i) => {
                                const key = `${sec.id}-${i}`;
                                const open = !!openFaq[key];
                                return (
                                    <div key={i}>
                                        <button
                                            onClick={() => toggle(sec.id, i)}
                                            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
                                        >
                                            <span className="font-semibold text-gray-800 text-sm pr-4">{t.q}</span>
                                            {open
                                                ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                                        </button>
                                        {open && (
                                            <div className="px-6 pb-5">
                                                <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-cyan-400 pl-4">{t.a}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {si < sections.length - 1 && <div className="border-b border-gray-100" />}
                </section>
            ))}

            {/* FOOTER CTA */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-14 px-6 text-center text-white text-sm">
                Sumber: Muh. Taufik Hidayat MS, Anwar Mallongi, Atjo Wahyu (2025). <em>Probabilitas Risiko Polusi Udara terhadap Kesehatan Siswa di Kawasan Industri.</em>
            </div>
        </MainLayout>
    );
}