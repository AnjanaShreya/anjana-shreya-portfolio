import { useState, FormEvent } from "react";
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { SOCIAL_LINKS } from "../data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setSending(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "gy4lcyn";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback simulation for local UI preview if credentials aren't set yet
    if (!serviceId || serviceId === "YOUR_SERVICE_ID" || !publicKey || publicKey === "YOUR_PUBLIC_KEY") {
      console.warn(
        "EmailJS is not fully configured in your .env file. Running UI UX simulation fallback..."
      );
      setTimeout(() => {
        setSending(false);
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }, 1500);
      return;
    }

    try {
      // Pack template parameters to match your exact EmailJS template variables
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Message transmission failed.");
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setErrorMessage("Could not transmit inquiry. Please email chitturianjana@gmail.com directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-primary-dark pt-16 md:pt-24 pb-8 border-t border-white/5 cursor-default overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Upper Grid Layout: Let's Talk block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct coordinates and info */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            <div className="space-y-3">
              <span className="font-mono text-[10px] text-accent-pink tracking-widest uppercase block">// CONSULTATIONS</span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05]">
                Let's talk <br />
                about your <br />
                project.
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                Have an idea, brief, or active technical requirement? Drop me a message or write directly to my inbox. I usually reply within 24 hours.
              </p>
            </div>

            <div className="flex flex-col space-y-4 pt-4 border-t border-white/5">
              <a
                href="mailto:chitturianjana@gmail.com"
                className="group flex items-center gap-3 hover:text-accent-pink transition-colors font-medium text-sm text-neutral-300"
              >
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-accent-pink/20 group-hover:bg-accent-pink/5 transition-colors">
                  <Mail className="h-4 w-4 text-neutral-500 group-hover:text-accent-pink" />
                </div>
                <span>chitturianjana@gmail.com</span>
              </a>

              <a
                href="tel:+917013612696"
                className="group flex items-center gap-3 hover:text-accent-blue transition-colors font-medium text-sm text-neutral-300"
              >
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-accent-blue/20 group-hover:bg-accent-blue/5 transition-colors">
                  <Phone className="h-4 w-4 text-neutral-500 group-hover:text-accent-blue" />
                </div>
                <span>+91 7013612696</span>
              </a>

              <div className="group flex items-start gap-3 font-medium text-sm text-neutral-300">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 transition-colors shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-neutral-500" />
                </div>
                <p className="font-light text-neutral-400 text-xs leading-relaxed">
                  Hyderabad,<br />Telangana, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Input Form */}
          <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-2xl relative">

            {submitted ? (
              <div className="py-16 flex flex-col justify-center items-center text-center space-y-4 animate-fade-in text-left">
                <div className="h-16 w-16 rounded-full bg-accent-pink/10 flex items-center justify-center border border-accent-pink/30">
                  <CheckCircle2 className="h-8 w-8 text-accent-pink" />
                </div>
                <h3 className="font-display font-medium text-xl text-white">Message Transmitted!</h3>
                <p className="text-neutral-400 text-xs font-light max-w-sm">
                  Thank you for reaching out. I have been notified of your message and will review your technical inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="block font-mono text-[10px] uppercase text-neutral-400">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-email" className="block font-mono text-[10px] uppercase text-neutral-400">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="block font-mono text-[10px] uppercase text-neutral-400">
                    Project Brief / Message
                    <span className="text-neutral-500 lowercase ml-1">(include goals & timeline)</span>
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about what you want to construct..."
                    className="w-full bg-white/[0.02] border border-white/10 rounded-lg p-4 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-accent-pink transition-colors resize-none"
                  />
                </div>
                {errorMessage && (
                  <div className="text-accent-pink font-mono text-[10px] uppercase tracking-wider text-center mt-2 animate-pulse">
                    {errorMessage}
                  </div>
                )}

                <button
                  id="submit-contact"
                  type="submit"
                  disabled={sending}
                  className={`w-full bg-white hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-mono text-xs uppercase tracking-widest font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 focus:outline-none shadow-lg ${sending ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                  {sending ? (
                    <>
                      <span className="animate-spin h-3.5 w-3.5 border-2 border-neutral-500 border-t-white rounded-full shrink-0" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 shrink-0" />
                      <span>Transmit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Lower layout: Dynamic Social platforms row mapping (Screen 12 inspired) */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 hover:text-accent-pink transition-colors"
              >
                // {link.name}
              </a>
            ))}
          </div>

          {/* Scroll to top anchor Button */}
          <button
            id="back-to-top-button"
            onClick={handleBackToTop}
            className="group font-mono text-[9px] uppercase tracking-widest text-neutral-400 hover:text-white flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <div className="h-6 w-6 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp className="h-3 w-3" />
            </div>
          </button>
        </div>

        {/* Mega outline Text watermark branding trademark (Screen 12 inspired) */}
        <div className="mt-16 relative select-none pointer-events-none text-center">
          <span className="font-syne font-black text-[10vw] tracking-widest text-stroke-white select-none pointer-events-none uppercase">
            ANJANA
          </span>
        </div>

        {/* Bottom copyright declaration block */}
        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-neutral-600 gap-3">
          <div>CRAFTED WITH PRECISION • ANJANA SHREYA</div>
          <div>© 2026 ANJANA SHREYA. ALL RIGHTS RESERVED.</div>
        </div>

      </div>
    </section>
  );
}
