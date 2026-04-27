/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone, 
  BarChart3, 
  Users,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? "bg-neutral-950/80 backdrop-blur-xl py-3 border-neutral-800" : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NovaFlow</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#features" className="hover:text-blue-400 transition-colors">Funcionalidades</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Preços</a>
            <a href="#testimonials" className="hover:text-blue-400 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-all active:scale-95 shadow-lg shadow-blue-900/20">
              Começar agora
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-neutral-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-neutral-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              <a href="#features" onClick={() => setIsMenuOpen(false)}>Funcionalidades</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Preços</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
              <button className="bg-blue-600 text-white py-4 rounded-xl">Começar agora</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/40 text-blue-400 rounded-full text-xs font-bold tracking-wider uppercase mb-8 border border-blue-800/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Nova Versão 2.0 Disponível
          </motion.div>
          
          <motion.h1 
            {...fadeIn}
            className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500"
          >
            Transforme dados em <br className="hidden md:block" />
            <span className="text-blue-500">resultados reais</span>
          </motion.h1>
          
          <motion.p 
            {...fadeIn}
            className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-12"
          >
            A plataforma completa para escalar sua operação digital com inteligência artificial, 
            automação de ponta e dashboards em tempo real.
          </motion.p>
          
          <motion.div 
            {...fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-blue-900/20 group">
              Começar Teste Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold border border-neutral-800 hover:bg-neutral-900 transition-colors">
              Ver Demonstração
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-20 relative px-4"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/50 p-2 shadow-2xl">
              <img 
                src="/banner.png" 
                alt="banner.png"
                className="rounded-2xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-neutral-500 uppercase tracking-widest mb-8">
            Empresas que confiam na NovaFlow
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale invert">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="Client 1" className="h-6 md:h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Client 2" className="h-6 md:h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Client 3" className="h-6 md:h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="Client 4" className="h-6 md:h-8" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" alt="Client 5" className="h-6 md:h-8" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Tudo o que você precisa para <span className="text-blue-500">dominar seu mercado</span>.
            </h2>
            <p className="text-neutral-400 text-lg">
              Desenvolvemos as ferramentas mais poderosas para que você foque no que realmente importa: vender mais.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Zap className="w-10 h-10 text-blue-400" />, 
                title: "Alta Performance", 
                desc: "Servidores otimizados para garantir latência zero em todas as suas operações críticas."
              },
              { 
                icon: <Shield className="w-10 h-10 text-blue-400" />, 
                title: "Segurança Bancária", 
                desc: "Criptografia de ponta a ponta e auditorias constantes para proteger seus dados e clientes."
              },
              { 
                icon: <BarChart3 className="w-10 h-10 text-blue-400" />, 
                title: "Analytics Avançado", 
                desc: "Dashboards inteligentes que mostram exatamente de onde vem cada centavo do seu lucro."
              },
              { 
                icon: <Globe className="w-10 h-10 text-blue-400" />, 
                title: "Escala Global", 
                desc: "Pronto para atender milhões de requisições simultâneas sem perder a estabilidade."
              },
              { 
                icon: <Smartphone className="w-10 h-10 text-blue-400" />, 
                title: "Mobile First", 
                desc: "Gerencie toda a sua operação diretamente do seu celular com nosso app nativo."
              },
              { 
                icon: <Users className="w-10 h-10 text-blue-400" />, 
                title: "Gestão de Leads", 
                desc: "Sistema automático de qualificação de leads com inteligência artificial para vendas."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 rounded-3xl border border-neutral-900 bg-neutral-900/30 hover:border-blue-500/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-neutral-800/50 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Planos para todos os <span className="text-blue-500">tamanhos</span></h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Comece agora e escala conforma sua demanda aumenta. Sem contratos abusivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "97",
                desc: "Para quem está começando.",
                features: ["Até 10k leads/mês", "Dashboard Básico", "Suporte 24h", "API Limitada"],
                popular: false
              },
              {
                name: "Pro",
                price: "197",
                desc: "O plano mais escolhido.",
                features: ["Leads Ilimitados", "Inteligência Artificial", "Suporte Prioritário", "Webhooks & API", "Time ilimitado"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "497",
                desc: "Configurações sob medida.",
                features: ["Infra dedicada", "Gerente de conta", "Onboarding completo", "SLAs garantidos", "Customizações"],
                popular: false
              }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`relative p-10 rounded-[32px] border ${
                  plan.popular ? "border-blue-500 bg-blue-500/5" : "border-neutral-800 bg-neutral-900/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Mais popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-neutral-500 text-sm mb-6">{plan.desc}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-neutral-400 font-medium">R$</span>
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-neutral-500 text-sm">/mês</span>
                  </div>
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-neutral-400 text-sm">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 ${
                  plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-900/20" : "bg-neutral-800 hover:bg-neutral-700 text-white"
                }`}>
                  Fez a escolha certa
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 tracking-tight text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Como funciona o período de teste?", a: "Você tem 14 dias para explorar todas as funcionalidades sem compromisso." },
              { q: "Posso cancelar a qualquer momento?", a: "Sim! Não temos multa rescisória nem contratos de fidelidade." },
              { q: "A NovaFlow integra com meu CRM?", a: "Temos integrações nativas com RD Station, HubSpot, Salesforce e muitos outros via Zapier." },
              { q: "Qual o nível de segurança dos meus dados?", a: "Seguimos rigorosamente a LGPD e utilizamos infraestrutura AWS com redundância global." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="border border-neutral-900 bg-neutral-900/50 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-800/50 transition-colors"
                >
                  <span className="font-bold">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === i ? "rotate-180 text-blue-500" : "text-neutral-500"}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-6 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800/50">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[48px] bg-blue-600 p-12 md:p-24 overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 -z-10" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" />
            
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
              Pronto para decolar <br />sua operação?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Junte-se a mais de 10.000 empreendedores que já automatizaram seus lucros com a NovaFlow.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-95">
              Começar Agora
            </button>
            <p className="mt-8 text-blue-200 text-sm font-medium">
              Não requer cartão de crédito • Setup em 2 minutos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-8 h-8 text-blue-500 fill-blue-500" />
                <span className="text-2xl font-bold tracking-tight">NovaFlow</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Líder global em automação inteligente para negócios digitais. Baseada em São Francisco e São Paulo.
              </p>
            </div>
            {[
              { t: "Produto", l: ["Funcionalidades", "Automação", "Integrações", "Preços"] },
              { t: "Suporte", l: ["Documentação", "Ajuda", "Comunidade", "Status"] },
              { t: "Legal", l: ["Privacidade", "Termos", "Segurança", "Cookies"] }
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-6">{col.t}</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  {col.l.map((link, j) => (
                    <li key={j}><a href="#" className="hover:text-blue-500 transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-neutral-900 gap-8">
            <p className="text-neutral-500 text-sm">
              © 2024 NovaFlow Technologies Inc. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-neutral-500 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
