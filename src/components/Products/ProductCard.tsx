type ProductCardProps = {
    name: string;
    price: number;
    image: string;
    description: string;
};

export default function ProductCard({ name, price, image, description }: ProductCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/50 p-6 text-center transition">
            <img
                src={image}
                alt={name}
                className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
            <span className="text-pink-500 dark:text-pink-400 font-bold text-xl">${price}</span>
        </div>
    );
}
