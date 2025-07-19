import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type AboutProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const About = ({ darkMode, setDarkMode }: AboutProps) => {
    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="max-w-6xl mx-auto px-4 text-gray-800 dark:text-gray-100 flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-6 text-center">Who We Are</h2>

                    <div className="space-y-6 text-lg leading-snug">
                        <p>
                            At <span className="font-semibold text-pink-600 dark:text-pink-400">Glamora Beauty Studio</span>, we believe that beauty is personal, and every individual deserves to feel radiant and confident. Our team is made up of experienced professionals passionate about helping you look and feel your best.
                        </p>

                        <p>
                            With years of expertise in the beauty industry, we specialize in a range of services including makeup, skincare, and personalized beauty consultations. We use only top-quality, safe, and cruelty-free products in everything we do.
                        </p>

                        <p>
                            Our space is designed to be relaxing and welcoming, ensuring that your experience is as enjoyable as the results. Whether you're preparing for a big event or just treating yourself, we’re here to deliver excellence with every service.
                        </p>

                        <p>
                            We are proud to serve a community that values both inner and outer beauty. Thank you for choosing us on your beauty journey!
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl shadow-xl mt-10">
                        <img
                            src="/images/about/about-1.jpg"
                            alt="Team providing beauty services"
                            className="w-full h-full object-cover dark:filter dark:brightness-75 dark:contrast-100"
                        />
                    </div>
                </div>
            </section>

            <section id="healthy-skin" className="bg-green-50 dark:bg-gray-900 py-16">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-6">Healthy Skin, Happy You</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Your skin is your body's largest organ — caring for it means caring for yourself. Our natural and nourishing skincare treatments are designed to revitalize and protect your skin’s health, leaving you with a radiant, glowing complexion.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-black/40 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Nourishing Ingredients</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We use only organic and skin-friendly products to provide gentle yet effective care.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-black/40 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Customized Treatments</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Every skin is unique, so we tailor our services to meet your specific needs.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-black/40 hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Long-lasting Results</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our expert care helps maintain your skin’s health and beauty over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="beauty" className="bg-pink-50 dark:bg-gray-900 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-4">Beauty, Perfected</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Experience the magic of professional makeup artistry. Whether it’s your big day, a special event, or just a moment for yourself — we make every detail flawless.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-10">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-black/40 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Tailored to You</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Every face is unique. Our artists craft looks that highlight your natural beauty while aligning with your style and preferences.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-black/40 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Premium Products</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We use only the finest, skin-friendly, and cruelty-free products to ensure long-lasting, radiant results.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-black/40 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Memorable Experience</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                More than a service — it's a moment of transformation. Leave feeling confident, elegant, and empowered.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default About;
