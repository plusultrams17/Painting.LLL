const Contact = () => {
    return (
        <section id="contact" className="relative py-24 text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/contact-bg.png"
                    alt="お問い合わせ背景"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
            </div>

            <div className="container mx-auto px-5 relative z-20">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gold">
                    CONTACT<span className="block text-sm font-sans text-gold mt-2">お問い合わせ</span>
                </h2>

                <div className="max-w-2xl mx-auto bg-navy border border-white/10 p-8 md:p-12 rounded-lg shadow-xl">
                    {/* LINE CTA */}
                    <div className="text-center border-b border-white/10 pb-10 mb-10">
                        <p className="mb-6 text-lg">お見積り・採用のご相談は<br />LINEからがスムーズです</p>
                        <a href="#" className="inline-block bg-[#06C755] text-white font-bold py-4 px-12 rounded-full hover:bg-[#05b54c] transition-transform hover:-translate-y-1">
                            LINEで相談する
                        </a>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <div className="relative">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy px-4 text-gray-500 text-sm">Or</span>
                        </div>

                        <div>
                            <label className="block text-gray-400 mb-2">お名前</label>
                            <input type="text" placeholder="例：山田 太郎" className="w-full bg-navy-light border border-white/10 rounded p-3 text-white focus:outline-none focus:border-gold transition-colors" />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">電話番号</label>
                            <input type="tel" placeholder="例：090-1234-5678" className="w-full bg-navy-light border border-white/10 rounded p-3 text-white focus:outline-none focus:border-gold transition-colors" />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-2">お問い合わせ内容</label>
                            <textarea rows="4" placeholder="ご自由にご記入ください" className="w-full bg-navy-light border border-white/10 rounded p-3 text-white focus:outline-none focus:border-gold transition-colors"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gold text-navy font-bold py-4 rounded hover:bg-gold-hover transition-colors">
                            送信する
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
