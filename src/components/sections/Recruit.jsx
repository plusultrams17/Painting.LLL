import { motion } from 'framer-motion';
import VideoPlaceholder from '../common/VideoPlaceholder';

const Recruit = () => {
    const timeline = [
        { time: "08:00", title: "現場到着・朝礼", desc: "1日の流れを確認し、安全第一でスタート。", image: null },
        { time: "12:00", title: "昼休憩・談笑", desc: "真剣な眼差しから一転、仲間との笑顔の時間。オンとオフの切り替えも一流の証。", image: "/images/recruit-team.png" },
        { time: "17:00", title: "作業終了・清掃", desc: "明日への準備を整え、夕日を背に帰路へ。", image: "/images/recruit-silhouette.png" },
    ];

    return (
        <section id="recruit" className="py-24 bg-navy relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/recruit-silhouette.png"
                    alt="背景"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy z-0"></div>

            <div className="container mx-auto px-5 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-6 text-gold">
                    RECRUIT<span className="block text-sm font-sans text-white/70 mt-2">憧れの資産</span>
                </h2>
                <p className="text-center text-xl font-serif mb-20">職人は、カッコいい。</p>

                <div className="max-w-3xl mx-auto relative pt-10 pb-10">
                    {/* Center Line */}
                    <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-gold transform md:-translate-x-1/2"></div>

                    <div className="flex flex-col gap-16">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
                            >
                                {/* Empty space for alternate side */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-navy border-2 border-gold rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5 z-20"></div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                                    <div className="bg-navy-light/90 border border-gold/30 p-6 rounded-lg backdrop-blur-sm">
                                        <span className="inline-block bg-gold text-navy font-bold px-3 py-1 rounded text-sm mb-3">
                                            {item.time}
                                        </span>
                                        <h3 className="text-lg font-bold text-gold mb-2">{item.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                                        <div className="h-32 w-full rounded overflow-hidden">
                                            {item.image ? (
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                            ) : (
                                                <VideoPlaceholder className="opacity-80" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <a href="#contact" className="inline-block bg-gold text-navy font-bold py-4 px-10 rounded hover:bg-gold-hover transition-transform hover:-translate-y-1 shadow-lg">
                            採用への応募はこちら
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recruit;
