import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const ContactSection = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useLayoutEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(
            formRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                    invalidateOnRefresh: true,
                },
            }
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                title: 'Validation Error',
                description: 'Please fill in all fields correctly.',
                variant: 'destructive',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast({
                    title: (
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span>Message Sent!</span>
                        </div>
                    ),
                    description: 'Thank you for reaching out. I\'ll get back to you soon!',
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast({
                title: (
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span>Error</span>
                    </div>
                ),
                description: error.message || 'Failed to send message. Please try again later.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div ref={formRef} className="max-w-2xl mx-auto bento-card p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Let's Connect</h2>
                    <p className="text-muted-foreground text-center mb-8">
                        Have a project in mind? I'd love to hear from you.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${errors.name ? 'border-red-500' : 'border-border'
                                        } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${errors.email ? 'border-red-500' : 'border-border'
                                        } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border ${errors.message ? 'border-red-500' : 'border-border'
                                    } focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && (
                                <p className="text-sm text-red-500">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed" style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};