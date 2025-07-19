import ProductCard from './ProductCard';

type Product = {
    id: string | number;
    name: string;
    price: number;
    image: string;
    description: string;
};

interface ProductsGridProps {
    products: Product[];
}

export default function ProductsGrid({ products }: ProductsGridProps) {
    if (products.length === 0) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-400 text-lg mt-10">
                No products found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                />
            ))}
        </div>
    );
}
