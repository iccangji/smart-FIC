import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

    return (
        <div className="flex items-center justify-start gap-1 mt-6">
            {links.map((link, i) => (
                <Link
                    key={i}
                    href={link.url ?? '#'}
                    preserveScroll
                    className={`
                        px-3 py-1.5 rounded text-sm border transition
                        ${!link.url ? 'text-gray-400 border-gray-200 cursor-not-allowed pointer-events-none' : 'border-gray-300 hover:bg-gray-100'}
                        ${link.active ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-600' : ''}
                    `}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}