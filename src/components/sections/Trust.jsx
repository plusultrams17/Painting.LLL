import { motion } from 'framer-motion';
import VideoPlaceholder from '../common/VideoPlaceholder';

const Trust = () => {
    const cards = [
        {
            title: "挨拶と礼儀",
            desc: "現場への到着時、休憩時、終了時。施主様だけでなく近隣の方々へも、敬意を持って接します。",
            image: null
        },
        {
            title: "整理整頓",
            desc: "道具は常に整然と並べ、作業後の現場は来た時よりも美しく。心は現場に表れます。",
            image: "/images/trust-tools.png"
        },
        {
            title: "細やかな気配り",
            desc: "玄関での靴の揃え方ひとつにも私たちの姿勢は表れます。安心してお任せいただくために。",
            image: null
        }
    ];

    return (
        <section id="trust" className="py-24 bg-navy-light relative border-t border-white/5">
            <div className="container mx-auto px-5">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">
                    TRUST<span className="block text-sm font-sans text-gold mt-2">安心の資産</span>
                </h2>
                <p className="text-center text-gray-400 mb-16">技術だけでは足りない。「人」としての品格を。</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-navy p-0 border border-white/5 hover:border-gold transition-colors duration-300 group"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                {card.image ? (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <VideoPlaceholder />
                                )}
                            </div>
                            <div className="p-8 text-center">
                                <h4 className="text-xl font-bold text-gold mb-4">{card.title}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
