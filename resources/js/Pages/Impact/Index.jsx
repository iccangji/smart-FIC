import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { HeartPulse, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { impactSections as impactCards } from '@/lib/pageSections';

const statBanner = [
    { value: '7 Juta', label: 'kematian/tahun akibat polusi udara', color: 'text-red-400' },
    { value: '13%', label: 'lebih lambat perkembangan memori anak (Sunyer et al., 2015)', color: 'text-orange-400' },
    { value: '2–3×', label: 'lebih banyak polutan terhirup anak vs dewasa', color: 'text-amber-400' },
    { value: '500–1000m', label: 'radius risiko sekolah dari kawasan industri', color: 'text-cyan-400' },
];

const pollutants = [
    { label: 'PM2.5', pct: 92, color: 'bg-red-500', risk: 'Sangat Tinggi', desc: 'Menembus alveolus, inflamasi sistemik' },
    { label: 'PM10', pct: 75, color: 'bg-orange-500', risk: 'Tinggi', desc: 'Gangguan saluran napas atas & bawah' },
    { label: 'NO₂', pct: 65, color: 'bg-amber-500', risk: 'Sedang-Tinggi', desc: 'Pemicu asma, iritasi bronkus' },
    { label: 'SO₂', pct: 55, color: 'bg-yellow-500', risk: 'Sedang', desc: 'Iritan saluran pernapasan' },
    { label: 'CO', pct: 50, color: 'bg-lime-500', risk: 'Sedang', desc: 'Hambat pengikatan O₂ dalam darah' },
];


export default function Dampak() {
    const [openFaq, setOpenFaq] = useState({});
    const toggle = (cardIdx, faqIdx) => {
        const key = `${cardIdx}-${faqIdx}`;
        setOpenFaq(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                            <HeartPulse className="w-8 h-8 text-blue-600" />
                            Dampak Kesehatan
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Efek polusi udara terhadap kesehatan siswa di kawasan industri
                        </p>
                    </div>
                </div>
            }
        >
            <Head><title>Dampak - SMART-FIC</title></Head>

            {/* HERO */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 20% 70%, #fca5a5 0%, transparent 45%), radial-gradient(circle at 80% 15%, #fdba74 0%, transparent 40%)'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">

                    {/* TEXT */}
                    <div className="flex-1 text-gray-900">
                        <span className="inline-block bg-red-100 border border-red-200 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                            Dampak Kesehatan
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                            Polusi Udara<br />
                            <span className="text-red-500">Membahayakan</span><br />
                            Generasi Penerus
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-6">
                            Paparan polutan di kawasan industri menimbulkan efek akut, kronis, dan neurokognitif pada siswa — kelompok yang paling rentan secara biologis dan fisiologis.
                        </p>

                        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 max-w-md">
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <p className="text-red-700 text-sm">
                                WHO: Polusi udara menyebabkan <strong>lebih dari 7 juta kematian prematur</strong> setiap tahun secara global.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* POLLUTANT RISK BAR */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="flex-shrink-0 w-full md:w-[40%]">
                            <img
                                src="https://images.unsplash.com/photo-1580064461598-505b080a8242"
                                alt="Indeks risiko polutan"
                                className="rounded-2xl shadow-md border border-gray-100 w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">Tingkat Risiko per Polutan</span>
                            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Seberapa Berbahaya Setiap Polutan bagi Siswa?</h2>
                            <div className="space-y-4">
                                {pollutants.map((p) => (
                                    <div key={p.label}>
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-800 text-sm w-10">{p.label}</span>
                                                <span className="text-gray-400 text-xs">{p.desc}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500">{p.risk}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                            <div className={`${p.color} h-2.5 rounded-full`} style={{ width: `${p.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-4 italic">* Berdasarkan kajian epidemiologi dan ambang batas ISPU 2020</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* IMPACT SECTIONS */}
            {impactCards.map((card, ci) => {
                const Icon = card.icon;
                return (
                    <section key={ci} className={ci % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
                            <div className={`flex flex-col ${ci % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14 mb-10`}>
                                {/* Image */}
                                <div className="flex-shrink-0 w-full md:w-[45%]">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="rounded-2xl shadow-lg w-full object-cover border border-gray-100"
                                    />
                                </div>
                                {/* Text */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`${card.iconBg} rounded-xl p-2.5 shadow`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${card.tagColor}`}>{card.tag}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">{card.title}</h2>
                                    <ul className="space-y-2">
                                        {card.items.map((item, ii) => (
                                            <li key={ii} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${card.iconBg}`} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
                                {card.faq.map((f, fi) => {
                                    const key = `${ci}-${fi}`;
                                    const open = !!openFaq[key];
                                    return (
                                        <div key={fi}>
                                            <button
                                                onClick={() => toggle(ci, fi)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
                                            >
                                                <span className="font-semibold text-gray-800 text-sm pr-4">{f.q}</span>
                                                {open
                                                    ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                                            </button>
                                            {open && (
                                                <div className="px-6 pb-5">
                                                    <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-red-400 pl-4">{f.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {ci < impactCards.length - 1 && <div className="border-b border-gray-100" />}
                    </section>
                );
            })}
        </MainLayout>
    );
}