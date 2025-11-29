export const Footer = () => {
    return (
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
            <div className="container">
                <div className="flex flex-col items-center gap-4 mb-4">
                    <a href="/" aria-label="Home" className="inline-block">
                        {/* Dark theme logo (white on dark background) */}
                        <img
                            src="/branding/logo.png"
                            alt="Hoomans logo"
                            title="Hoomans logo"
                            loading="lazy"
                            decoding="async"
                            className="h-12 dark:block hidden mx-auto mix-blend-normal"
                            style={{ mixBlendMode: 'normal', filter: 'none' }}
                        />

                        {/* Light theme logo (black on light background) */}
                        <img
                            src="/branding/Logo-black.png"
                            alt="Hoomans logo"
                            title="Hoomans logo"
                            loading="lazy"
                            decoding="async"
                            className="h-12 dark:hidden block mx-auto mix-blend-normal"
                            style={{ mixBlendMode: 'normal', filter: 'none' }}
                        />
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Naveen Deemantha. All rights reserved.</p>
            </div>
        </footer>
    );
};