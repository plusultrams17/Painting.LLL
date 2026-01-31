import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '技術', href: '#quality' },
        { name: '信頼', href: '#trust' },
        { name: '採用', href: '#recruit' },
        { name: 'お問い合わせ', href: '#contact', isButton: true },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 py-4 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-5 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wider">
                    <a href="#">匠・高級塗装店</a>
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors ${item.isButton ? 'border border-gold px-5 py-2 text-gold hover:bg-gold hover:text-navy' : 'text-white hover:text-gold'}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy/95 border-t border-white/10 p-5 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-base font-medium py-2 text-center ${item.isButton ? 'bg-gold text-navy' : 'text-white border-b border-white/10'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
