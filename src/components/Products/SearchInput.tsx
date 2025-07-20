import React from 'react';

type SearchInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <section className="w-full bg-gray-100 dark:bg-black py-7 transition-colors">
            <div className="max-w-3xl mx-auto px-4">
                <input
                    type="text"
                    value={value}
                    placeholder="Search for a product..."
                    onChange={onChange}
                    className="w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-700 text-lg text-gray-900 dark:text-gray-100 shadow-md dark:shadow-black/40 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500 transition"
                />
            </div>
        </section>
    );
}
