
export default function ProductsBanner() {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden m-0 p-0">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/products-banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-black/60 backdrop-blur-md rounded-2xl max-w-md p-6 md:p-8 text-white shadow-xl space-y-3">
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Discover Our<br />Beauty Collection</h1>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                    Elevate your natural glow with premium skincare & cosmetic products.
                </p>
            </div>
        </section>
    );
}
