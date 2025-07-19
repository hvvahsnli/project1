import { useState, type ChangeEvent } from 'react';
import Footer from '../components/Footer';
import ProductsBanner from '../components/Products/ProductsBanner';
import SearchInput from '../components/Products/SearchInput';
import ProductsGrid from '../components/Products/ProductsGrid';
import { products } from '../data/products';

export default function Products() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    return (
        <>
            <ProductsBanner />
            <SearchInput value={searchTerm} onChange={handleSearch} />
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
                        Our Products
                    </h2>
                    <ProductsGrid products={filteredProducts} />
                </div>
            </section>
            <Footer />
        </>
    );
}
