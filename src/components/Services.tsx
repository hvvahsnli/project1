import { FaSpa, FaShippingFast, FaBrush, FaRegComments } from 'react-icons/fa';

const services = [
    {
        icon: <FaBrush className='text-4xl' />,
        title: 'Makeup Artistry',
        desc: 'Professional makeup services for every occasion.',
    },
    {
        icon: <FaSpa className='text-4xl' />,
        title: 'Skin Care',
        desc: 'Natural treatments to keep your skin healthy and glowing.',
    },
    {
        icon: <FaRegComments className='text-4xl' />,
        title: 'Beauty Consultation',
        desc: 'Personalized advice tailored to your beauty needs.',
    },
    {
        icon: <FaShippingFast className='text-4xl' />,
        title: 'Product Delivery',
        desc: 'Fast and reliable delivery of beauty products.',
    },
];

const Services = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-gray-200">
                    Our Services
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="h-auto flex flex-col items-center justify-center p-10 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-700 hover:shadow-xl dark:hover:shadow-pink-900 transition-shadow duration-300 hover:bg-pink-50 dark:hover:bg-pink-900"
                        >
                            <div className="text-pink-500 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-md">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Services;
