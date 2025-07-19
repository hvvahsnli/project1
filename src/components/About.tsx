import { useNavigate } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function About() {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white dark:bg-gray-900" id="about">
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <img
                        src="/images/about/about.jpg"
                        alt="Team providing beauty services"
                        className="w-full h-full max-h-[500px] object-cover
             dark:filter dark:brightness-75 dark:contrast-100"
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-snug">
                        About Us
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8">
                        We are a leading beauty service provider, dedicated to enhancing your natural beauty with our professional services and personalized care.
                    </p>

                    <button
                        onClick={() => {
                            navigate('/about');
                            window.scrollTo(0, 0);
                        }}
                        className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center"
                    >
                        Learn More
                        <ArrowRightAltIcon className="ms-1" />
                    </button>
                </div>
            </div>
        </section>
    );
}
