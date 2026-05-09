import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Scale, CheckCircle2, ChevronDown, ChevronUp, FileText, ShieldCheck } from 'lucide-react';
import { pillars } from '@/lib/pageSections';
const regulations = [
    { no: 'PP No. 22/2021', title: 'Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup', scope: 'Nasional', color: 'bg-blue-100 text-blue-700' },
    { no: 'Permen LHK No. 14/2020', title: 'Indeks Standar Pencemar Udara (ISPU)', scope: 'Nasional', color: 'bg-blue-100 text-blue-700' },
    { no: 'WHO AQG 2021', title: 'Air Quality Guidelines — PM2.5 batas 15 µg/m³/hari', scope: 'Internasional', color: 'bg-purple-100 text-purple-700' },
    { no: 'EPA 2019', title: 'Integrated Science Assessment for Particulate Matter', scope: 'Internasional', color: 'bg-purple-100 text-purple-700' },
];

export default function Kebijakan() {
    const [openFaq, setOpenFaq] = useState({});
    const toggle = (pi, fi) => {
        const key = `${pi}-${fi}`;
        setOpenFaq(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <MainLayout
            header={
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 flex items-center gap-2">
                            <Scale className="w-8 h-8 text-blue-600" />
                            Kebijakan & Mitigasi
                        </h2>
                        <p className="text-gray-600 mt-1">
                            Strategi intervensi dan rekomendasi kebijakan berbasis bukti
                        </p>
                    </div>
                </div>
            }
        >
            <Head><title>Kebijakan - SMART-FIC</title></Head>

            {/* HERO */}
            <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 25% 65%, #fdba74 0%, transparent 45%), radial-gradient(circle at 75% 20%, #fde68a 0%, transparent 40%)'
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">

                    {/* TEXT */}
                    <div className="flex-1 text-gray-900">
                        <span className="inline-block bg-orange-100 border border-orange-200 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
                            Kebijakan & Mitigasi
                        </span>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                            Strategi<br />
                            <span className="text-orange-500">Berbasis Bukti</span><br />
                            untuk Udara Bersih
                        </h1>

                        <p className="text-gray-600 text-base leading-relaxed max-w-lg mb-6">
                            Dari intervensi sekolah hingga regulasi industri — pendekatan komprehensif yang menggabungkan teknologi, komunitas, dan kebijakan untuk melindungi kesehatan masyarakat.
                        </p>
                    </div>
                </div>
            </div>
            {/* REGULASI STRIP */}
            <div className="bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
                    <div className="flex items-center gap-2 mb-5">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Regulasi & Standar Acuan</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {regulations.map((r, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                                        <span className="font-bold text-gray-800 text-sm">{r.no}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${r.color}`}>{r.scope}</span>
                                    </div>
                                    <p className="text-gray-500 text-xs leading-snug">{r.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* POLICY PILLARS */}
            {pillars.map((p, pi) => {
                const Icon = p.icon;
                return (
                    <section key={pi} className={p.color.section}>
                        <div className="max-w-6xl mx-auto px-6 md:px-12 py-14 md:py-20">
                            {/* Image + Text */}
                            <div className={`flex flex-col ${pi % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14 mb-10`}>
                                <div className="flex-shrink-0 w-full md:w-[45%]">
                                    <img
                                        src={p.image}
                                        alt={p.imageAlt}
                                        className="rounded-2xl shadow-lg w-full object-cover border border-gray-100"
                                    />
                                </div>
                                <div className="flex-1 items-center mb-3">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`${p.color.bg} rounded-xl p-2.5 shadow`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">{p.title}</h2>
                                    </div>
                                    <p className="text-gray-600 text-base leading-relaxed mb-5">{p.summary}</p>
                                    <ul className="space-y-2">
                                        {p.actions.map((a, ai) => (
                                            <li key={ai} className="flex items-start gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${p.color.bg}`} />
                                                <span className="text-sm text-gray-700"><strong>{a.label}:</strong> {a.desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-100 bg-white shadow-sm">
                                {p.faq.map((f, fi) => {
                                    const key = `${pi}-${fi}`;
                                    const open = !!openFaq[key];
                                    return (
                                        <div key={fi}>
                                            <button
                                                onClick={() => toggle(pi, fi)}
                                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition"
                                            >
                                                <span className="font-semibold text-gray-800 text-sm pr-4">{f.q}</span>
                                                {open
                                                    ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
                                            </button>
                                            {open && (
                                                <div className="px-6 pb-5">
                                                    <p className="text-sm text-gray-600 leading-relaxed border-l-2 border-orange-400 pl-4">{f.a}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {pi < pillars.length - 1 && <div className="border-b border-gray-100" />}
                    </section>
                );
            })}

            {/* FOOTER CTA
            <div className="bg-gradient-to-r from-orange-600 to-amber-600 py-14 px-6 text-center text-white">
                <ShieldCheck className="w-10 h-10 mx-auto mb-3 opacity-60" />
                <h3 className="text-2xl font-extrabold mb-2">Menuju Pembangunan Lingkungan Berkelanjutan</h3>
                <p className="text-orange-100 text-sm max-w-lg mx-auto">
                    Kebijakan efektif membutuhkan sinergi antara sekolah, pemerintah, industri, dan komunitas. Pendekatan berbasis bukti memastikan intervensi tepat sasaran dan berkeadilan.
                </p>
            </div> */}
        </MainLayout>
    );
}