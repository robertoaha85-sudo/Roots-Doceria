import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Star, Check, X, Heart, ShoppingBag } from 'lucide-react';

// --- Constants ---
const WHATSAPP_NUMBER = "5535997457078";
const WHATSAPP_MESSAGE = "Olá, vim pelo site e gostaria de fazer um pedido.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const IMAGES = {
  hero: "https://i.imgur.com/b72yQEZ.png",
  profile: "https://i.imgur.com/srEa2kl.jpeg",
  special: [
    "https://i.imgur.com/tY6VzhG.png",
    "https://i.imgur.com/SGV5nxC.png",
    "https://i.imgur.com/rTxWjoA.png",
    "https://i.imgur.com/J8S2Lqp.png",
    "https://i.imgur.com/fVJz3iu.png",
    "https://i.imgur.com/yxQqX0a.png",
  ],
  gourmet: [
    "https://i.imgur.com/z2egluH.png",
    "https://i.imgur.com/BErk9r9.png",
    "https://i.imgur.com/VPJXLM4.png",
    "https://i.imgur.com/vy8PEx2.png",
    "https://i.imgur.com/UjC5ZlM.png",
    "https://i.imgur.com/H0Td2Du.png",
  ],
  social: [
    "https://i.imgur.com/baRwERP.png",
    "https://i.imgur.com/aJdAINS.png",
    "https://i.imgur.com/fC1x7ak.png",
    "https://i.imgur.com/SEWb3Kc.png",
    "https://i.imgur.com/JbdXz5H.png",
  ]
};

// --- Components ---

const Button = ({ children, className = "", variant = "primary" }: { children: React.ReactNode, className?: string, variant?: "primary" | "secondary" }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-transform active:scale-95 shadow-lg hover:shadow-xl text-lg";
  const variants = {
    primary: "bg-chocolate text-cream hover:bg-[#4a2e24]",
    secondary: "bg-pink text-chocolate hover:bg-[#f0b0c8]",
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={24} />
      {children}
    </a>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Lightbox = ({ src, onClose }: { src: string | null, onClose: () => void }) => (
  <AnimatePresence>
    {src && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
      >
        <button className="absolute top-4 right-4 text-white p-2">
          <X size={32} />
        </button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          src={src}
          alt="Zoom"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden selection:bg-pink selection:text-chocolate">
      <Lightbox src={lightboxImg} onClose={() => setLightboxImg(null)} />

      {/* 1. HERO */}
      <div className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative order-1 md:order-2">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream md:bg-gradient-to-l z-10"></div>
           <img 
            src={IMAGES.hero} 
            alt="Doce artesanal delicioso" 
            className="w-full h-full object-cover object-center"
           />
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 relative z-20 flex flex-col justify-center items-start text-left order-2 md:order-1 -mt-20 md:mt-0">
          <FadeIn>
            <span className="inline-block px-4 py-1 mb-4 text-sm font-bold tracking-widest uppercase bg-pink/50 text-chocolate rounded-full">
              Roots Doceria
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-chocolate drop-shadow-sm">
              Eu crio doces artesanais que <span className="italic text-pink-600">impressionam</span> no sabor e encantam em cada detalhe.
            </h1>
            <p className="text-lg md:text-xl text-chocolate/80 mb-8 max-w-md leading-relaxed">
              Cada encomenda é feita com carinho, ingredientes selecionados e acabamento impecável.
            </p>
            <div className="flex flex-col items-start gap-3">
              <Button>Quero fazer meu pedido</Button>
              <span className="text-sm text-chocolate/60 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Atendimento rápido pelo WhatsApp
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* 2. DESEJO VISUAL IMEDIATO */}
      <Section className="bg-white rounded-t-[3rem] -mt-10 relative z-30 shadow-xl">
        <div className="text-center mb-12">
          <FadeIn>
            <Heart className="w-8 h-8 text-pink mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-chocolate mb-4">Doces para pessoas especiais</h2>
            <p className="text-chocolate/70">Clique nas fotos para ver os detalhes</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-16">
          {IMAGES.special.map((img, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Doce especial ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-chocolate mb-4">Doces Gourmets deliciosos</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {IMAGES.gourmet.map((img, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Doce gourmet ${i+1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 3. CONEXÃO EMOCIONAL (AUTORIDADE) */}
      <Section className="bg-chocolate text-cream rounded-[3rem] my-8 mx-4 md:mx-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="relative">
                <div className="absolute inset-0 bg-pink rounded-full blur-3xl opacity-20 transform translate-x-4 translate-y-4"></div>
                <img 
                  src={IMAGES.profile} 
                  alt="Doceira Roots" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-cream/20 relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Paixão em cada detalhe</h2>
              <p className="text-lg md:text-xl text-cream/90 mb-8 leading-relaxed font-light">
                "Sou apaixonado por criar doces que tornam momentos ainda mais especiais. Cada detalhe é pensado com carinho, desde a escolha dos ingredientes até o acabamento final."
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Produção 100% artesanal",
                  "Ingredientes de alta qualidade",
                  "Capricho em cada detalhe",
                  "Atendimento direto comigo"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg">
                    <div className="bg-pink p-1 rounded-full text-chocolate">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="secondary">Falar comigo no WhatsApp</Button>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 4. PROVA SOCIAL VISUAL */}
      <Section>
        <div className="text-center mb-12">
          <FadeIn>
            <Star className="w-8 h-8 text-chocolate mx-auto mb-4" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-chocolate mb-4">Pedidos que encantam</h2>
            <p className="text-chocolate/70">Todos os doces são produzidos artesanalmente sob encomenda.</p>
          </FadeIn>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-5 md:overflow-visible">
          {IMAGES.social.map((img, i) => (
            <div key={i} className="snap-center shrink-0 w-[80vw] md:w-auto first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
              <FadeIn delay={i * 0.1}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <img src={img} alt={`Cliente feliz ${i+1}`} className="w-full h-full object-cover" />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. DIFERENCIAIS */}
      <Section className="bg-white/50">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: ShoppingBag, text: "Feito sob encomenda" },
            { icon: Heart, text: "Produção artesanal" },
            { icon: Star, text: "Ingredientes selecionados" },
            { icon: Check, text: "Acabamento profissional" },
            { icon: MessageCircle, text: "Atendimento personalizado" },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-chocolate">
                  <item.icon size={24} />
                </div>
                <span className="font-medium text-chocolate">{item.text}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 6. CTA INTERMEDIÁRIO */}
      <Section className="text-center py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-chocolate mb-8 max-w-2xl mx-auto">
            Seu doce perfeito está a uma mensagem de distância.
          </h2>
          <div className="flex flex-col items-center gap-3">
            <Button className="scale-110">Falar comigo no WhatsApp</Button>
            <span className="text-sm text-chocolate/60">Resposta rápida</span>
          </div>
        </FadeIn>
      </Section>

      {/* 7. COMO FUNCIONA */}
      <Section className="bg-chocolate text-cream rounded-[3rem] mx-4 md:mx-8 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como fazer seu pedido</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-pink/30 -z-0"></div>

          {[
            { step: "1", title: "Chame no WhatsApp", desc: "Clique no botão e inicie a conversa." },
            { step: "2", title: "Conte seu desejo", desc: "Escolha sabores e detalhes da encomenda." },
            { step: "3", title: "Preparo com carinho", desc: "Eu produzo tudo fresquinho para você." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-pink text-chocolate text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-chocolate">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-cream/80">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 9. CTA FINAL */}
      <div className="py-24 px-4 text-center bg-gradient-to-b from-cream to-pink/20">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-chocolate mb-6">
            Agora é sua vez
          </h2>
          <p className="text-xl text-chocolate/80 mb-10 max-w-xl mx-auto">
            Tenha doces incríveis feitos especialmente para você. Clique abaixo e faça seu pedido.
          </p>
          <Button className="text-xl px-10 py-5 shadow-2xl shadow-pink/50">
            Fazer pedido agora
          </Button>
        </FadeIn>
      </div>

      {/* 10. RODAPÉ */}
      <footer className="bg-chocolate text-cream py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold mb-2">Roots Doceria</h3>
          <p className="text-cream/60 mb-6">Doces Artesanais • Pouso Alegre - MG</p>
          
          <a 
            href="https://www.instagram.com/rootsdoceria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-pink hover:text-white transition-colors mb-8"
          >
            @rootsdoceria
          </a>

          <div className="border-t border-cream/10 pt-8 text-sm text-cream/40">
            <p>&copy; {new Date().getFullYear()} Roots Doceria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
