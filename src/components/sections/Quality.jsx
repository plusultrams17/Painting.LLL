import { motion } from 'framer-motion';
import VideoPlaceholder from '../common/VideoPlaceholder';

const Quality = () => {
    const items = [
        {
            title: "見えない所も手を抜かない",
            desc: "塗装の命は「養生」と「下地処理」にあります。完成してしまえば見えなくなる部分ですが、家を長持ちさせるためには最も重要な工程です。私たちは、この「見えない所」にこそ、最大の情熱を注ぎます。",
            label: "養生：ミリ単位のこだわり",
            image: "/images/quality-masking.png",
            reverse: false
        },
        {
            title: "10年後を見据えた仕事",
            desc: "ただ色を塗るだけなら、誰でもできます。しかし、10年後も美しさを保つには、建材の状態を見極め、最適な塗料と工法を選ぶ眼が必要です。私たちの仕事は、「塗る」ことではなく「守る」ことです。",
            label: "下地：徹底的な処理",
            image: "/images/quality-brush.png",
            reverse: true
        }
    ];

    return (
        <section id="quality" className="py-24 bg-navy text-white">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gold">
                    QUALITY<span className="block text-sm font-sans text-gold mt-2">技術の資産</span>
                </h2>

                <div className="flex flex-col gap-24">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
                        >
                            {/* Media */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded shadow-2xl overflow-hidden border border-white/5 group">
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-4 right-4 bg-navy/80 px-4 py-1 text-xs text-white border border-gold">
                                    {item.label}
                                </div>
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-gold leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-justify">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quality;
