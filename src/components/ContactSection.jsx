import { Mail } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a Project in Mind ? or wanto collaborate ? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font0semibold mb-6"> 
                        {" "}
                        Contact Information
                    </h3>
                    
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-04">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" /> {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>
                                <a 
                                    href="mailto:naveenpunchihewa9@gmail.com" 
                                    className="text-muted-text-foreground hover:text-primary transition-colors"
                                >
                                    naveenpunchihewa9@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};