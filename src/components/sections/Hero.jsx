import { motion } from 'framer-motion';
import VideoPlaceholder from '../common/VideoPlaceholder';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="高級塗装店の施工現場"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white p-5">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-lg md:text-xl tracking-[0.2em] mb-4"
                >
                    見えない所こそ、美しく。
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-8 text-shadow-lg"
                >
                    本物の塗装は<br />細部に宿る
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-base md:text-lg leading-relaxed"
                >
                    安売りはしません。<br />
                    ただ、あなたの大切な家を<br />
                    「作品」として守り抜くだけです。
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
