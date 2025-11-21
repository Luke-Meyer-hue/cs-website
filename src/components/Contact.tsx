import React, { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbjnqaw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always interested in new opportunities and interesting projects. 
              Let's connect and discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4 text-blue-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-slate-300">lmeyer0215@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4 text-amber-400" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-slate-300">Sioux Falls, SD, USA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <p className="text-slate-300 mb-4">Follow me on social media</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg inline-flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>

                {status === "success" && (
                  <p className="text-green-600 font-medium">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 font-medium">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
