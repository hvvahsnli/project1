const testimonials = [
    {
        id: 1,
        name: "Linda R.",
        text: "This salon is amazing! The staff is so friendly and professional. I always leave feeling fabulous.",
        image: "/images/testimonials/person-1.jpg"
    },
    {
        id: 2,
        name: "Sarah M.",
        text: "Their attention to detail is unmatched. I wouldn’t trust anyone else with my skincare!",
        image: "/images/testimonials/person-2.jpg"
    },
    {
        id: 3,
        name: "James T.",
        text: "I had a wonderful experience. The environment is clean and relaxing. Highly recommend!",
        image: "/images/testimonials/person-4.jpg"
    },
    {
        id: 4,
        name: "Daniel K.",
        text: "I had a wonderful experience. The environment is clean and relaxing. Highly recommend!",
        image: "/images/testimonials/person-3.jpg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-black" id="testimonials">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
                    What Our Clients Say
                </h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 ">
                    {testimonials.map(({ id, name, text, image }) => (
                        <div
                            key={id}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-black/40 hover:shadow-xl dark:hover:shadow-pink-500/50 transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 dark:border-pink-600"
                                />
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                “{text}”
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
