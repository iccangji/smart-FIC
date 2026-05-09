import { useState } from 'react';
import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function ExposureParametersForm({
    values = {
        berat_badan: '',
        waktu_paparan: '',
        frekuensi_exposure: '',
        laju_inhalasi: '',
        waktu_thq: 'realtime'
    },
    onChange,
    errors = {},
    hideWaktuThq = false
}) {
    const timeOptions = [
        { value: 'realtime', label: 'Realtime' },
        { value: '5years', label: '5 Tahun' },
        { value: '10years', label: '10 Tahun' },
        { value: '15years', label: '15 Tahun' },
        { value: '20years', label: '20 Tahun' },
        { value: '25years', label: '25 Tahun' },
        { value: '30years', label: '30 Tahun' },
    ]

    const handleSelectChange = (fieldName, value) => {
        onChange(fieldName, value);
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Berat Badan (kg) *</FieldLabel>
                    <Input
                        placeholder="Berat Badan (kg)"
                        onChange={e => onChange('berat_badan', e.target.value)}
                        type="number"
                        value={values.berat_badan}
                    />
                    {errors.berat_badan && <p className="text-red-600 text-xs mt-1">{errors.berat_badan[0]}</p>}
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Waktu Paparan (jam/hari) *</FieldLabel>
                    <Input
                        placeholder="Waktu Paparan (jam/hari)"
                        onChange={e => onChange('waktu_paparan', e.target.value)}
                        type="number"
                        value={values.waktu_paparan}
                    />
                    {errors.waktu_paparan && <p className="text-red-600 text-xs mt-1">{errors.waktu_paparan[0]}</p>}
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Durasi Paparan (tahun) *</FieldLabel>
                    <Input
                        placeholder="Durasi Paparan (tahun)"
                        onChange={e => onChange('durasi_paparan', e.target.value)}
                        type="number"
                        value={values.durasi_paparan}
                    />
                    {errors.durasi_paparan && <p className="text-red-600 text-xs mt-1">{errors.durasi_paparan[0]}</p>}
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Frekuensi (hari/tahun) *</FieldLabel>
                    <Input
                        placeholder="Frekuensi (hari/tahun)"
                        onChange={e => onChange('frekuensi_exposure', e.target.value)}
                        type="number"
                        value={values.frekuensi_exposure}
                    />
                    {errors.frekuensi_exposure && <p className="text-red-600 text-xs mt-1">{errors.frekuensi_exposure[0]}</p>}
                </Field>

                <Field>
                    <FieldLabel className='text-sm font-medium text-gray-700'>Laju Inhalasi *</FieldLabel>
                    <Input
                        placeholder="Laju Inhalasi"
                        onChange={e => onChange('laju_inhalasi', e.target.value)}
                        type="number"
                        value={values.laju_inhalasi}
                    />
                    {errors.laju_inhalasi && <p className="text-red-600 text-xs mt-1">{errors.laju_inhalasi[0]}</p>}
                </Field>

                {!hideWaktuThq && (
                    <Field>
                        <FieldLabel className='text-sm font-medium text-gray-700'>Periode Waktu THQ *</FieldLabel>
                        <Select value={values.waktu_thq || 'realtime'} onValueChange={(val) => handleSelectChange('waktu_thq', val)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Pilih waktu" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700">
                                    {timeOptions.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {errors.waktu_thq && <p className="text-red-600 text-xs mt-1">{errors.waktu_thq[0]}</p>}
                    </Field>
                )}
            </div>
        </div>
    );
}
