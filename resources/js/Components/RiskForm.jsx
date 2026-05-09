// resources/js/Components/RiskForm.jsx

import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Modal from "@/components/Modal"

export default function RiskForm({ onSubmit, isCalculating }) {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [form, setForm] = useState({
        bw: 0,
        et: 0,
        ef: 0,
        ir: 0,
        time: 'realtime'
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const submit = () => {
        if (Object.values(form).every(value => value !== 0 && value !== '')) onSubmit(form);
        else {
            setIsAlertOpen(true);
            return;
        };
    }

    const timeOptions = [
        { value: 'realtime', label: 'Realtime' },
        { value: '5years', label: '5 Tahun' },
        { value: '10years', label: '10 Tahun' },
        { value: '15years', label: '15 Tahun' },
        { value: '20years', label: '20 Tahun' },
        { value: '25years', label: '25 Tahun' },
        { value: '30years', label: '30 Tahun' },
    ]

    return (
        <div className='flex flex-col gap-2'>
            {isAlertOpen && (
                <Modal show={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
                    <div className="p-6 text-start flex flex-col gap-4">
                        <h3 className="text-lg font-medium text-gray-900">Data Tidak Lengkap</h3>
                        <p className="text-sm text-gray-600">Pastikan semua field telah diisi dengan benar.</p>
                        <div className="flex gap-2 justify-end">
                            <PrimaryButton onClick={() => setIsAlertOpen(false)}>Tutup</PrimaryButton>
                        </div>
                    </div>
                </Modal>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Berat Badan</FieldLabel>
                    <Input
                        placeholder="Berat Badan (kg)"
                        onChange={e => handleChange('bw', e.target.value)}
                        type="number"
                    />
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Waktu Paparan (jam/hari)</FieldLabel>
                    <Input
                        placeholder="Waktu Paparan (jam/hari)"
                        onChange={e => handleChange('et', e.target.value)}
                        type="number"
                    />
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Frekuensi (hari/tahun)</FieldLabel>
                    <Input
                        placeholder="Frekuensi (hari/tahun)"
                        onChange={e => handleChange('ef', e.target.value)}
                        type="number"
                    />
                </Field>
                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Laju Inhalasi</FieldLabel>
                    <Input
                        placeholder="Laju Inhalasi"
                        onChange={e => handleChange('ir', e.target.value)}
                        type="number"
                    />
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Waktu THQ</FieldLabel>
                    <Select defaultValue="realtime">
                        <SelectTrigger className="w-full max-w-48">
                            <SelectValue placeholder="Pilih waktu" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700">
                                {timeOptions.map(option => (
                                    <SelectItem key={option.value} value={option.value} onSelect={() => handleChange('time', option.value)}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </Field>
            </div>
            <PrimaryButton onClick={submit} className="self-start mt-2" disabled={isCalculating}>
                {isCalculating ? 'Menghitung...' : 'Hitung Risiko'}
            </PrimaryButton>
        </div>
    );
}