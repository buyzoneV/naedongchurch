import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Leaf, 
  Gift, 
  Mail, 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  Home, 
  Info, 
  MessageSquare, 
  Share2,
  Quote
} from 'lucide-react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-slate-900 font-sans selection:bg-[#87af4b]/30">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-x-hidden flex flex-col">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#87af4b]/10 p-4 flex items-center justify-between">
          <button className="p-2 hover:bg-[#87af4b]/10 rounded-full transition-colors text-[#87af4b]">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-lg font-bold tracking-tight font-serif">초청장</h2>
          <div className="w-10"></div>
        </header>

        <motion.main 
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="flex-1 pb-24"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="p-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ 
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop")`,
                } as any}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/90 text-[#87af4b] px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase w-fit mb-4"
                >
                  Invitation
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-white text-4xl font-bold leading-tight font-serif mb-3"
                >
                  새로운 생명<br />으로의 초대
                </motion.h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="h-1 bg-[#87af4b] rounded-full"
                />
              </div>
            </div>
          </motion.section>

          {/* Bible Verse */}
          <motion.section variants={itemVariants} className="px-8 py-12 text-center space-y-6">
            <Quote className="mx-auto text-[#87af4b] opacity-30" size={40} />
            <h3 className="text-xl font-medium leading-relaxed font-serif italic text-slate-800">
              "예수께서 대답하여 이르시되 진실로 진실로 네게 이르노니 사람이 거듭나지 아니하면 하나님의 나라를 볼 수 없느니라"
            </h3>
            <p className="text-[#87af4b] text-sm font-semibold tracking-widest">
              (요한복음 3:3)
            </p>
          </motion.section>

          {/* Content Blocks */}
          <section className="px-6 space-y-12">
            {[
              {
                icon: <Leaf className="text-[#87af4b]" size={24} />,
                title: "거듭나야 합니다",
                content: "우리의 삶은 육신의 태어남으로 시작되지만, 하나님의 나라를 경험하기 위해서는 영적인 다시 태어남, 즉 '거듭남'이 필요합니다. 이것은 종교적 행위가 아닌 생명의 변화입니다."
              },
              {
                icon: <Gift className="text-[#87af4b]" size={24} />,
                title: "거듭남은 선물입니다",
                content: "하나님은 우리를 사랑하셔서 독생자 예수 그리스도를 보내주셨습니다. 그분을 믿고 받아들일 때, 우리는 죄에서 벗어나 새로운 생명을 선물로 받게 됩니다."
              },
              {
                icon: <Mail className="text-[#87af4b]" size={24} />,
                title: "당신을 초대합니다",
                content: "진정한 평안과 소망을 찾는 모든 분들을 이 귀한 자리에 초대합니다. 따뜻한 교제와 생명의 말씀이 준비되어 있습니다. 부담 없이 오셔서 함께 기쁨을 나누시길 바랍니다."
              }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="space-y-4">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                </div>
                <div className="p-6 bg-[#87af4b]/5 rounded-2xl border-l-4 border-[#87af4b] shadow-sm">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </section>

          {/* Event Details Card */}
          <motion.section variants={itemVariants} className="px-4 mt-16">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#87af4b]/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-[#87af4b]" />
                <span className="text-[#87af4b] text-[10px] font-bold tracking-[0.3em] uppercase">Event Details</span>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Calendar className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Date</p>
                    <p className="text-lg font-bold">2026년 3월 27일(금) ~ 29일(주일)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Time</p>
                    <p className="text-sm">금·토 저녁 8시</p>
                    <p className="text-sm">주일 오전 11시 40분</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <User className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Speaker</p>
                    <p className="text-base font-bold">김종만 형제님</p>
                    <p className="text-xs text-slate-400 mt-1">남원서문교회 은퇴장로, 전 전주대학교 교수</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#87af4b] shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Location</p>
                    <p className="text-base font-bold">대전 내동 교회 예배실</p>
                    <p className="text-xs text-slate-400 mt-1">대전광역시 서구 동서대로 1025번길 35 (내동)</p>
                    <a 
                      href="https://maps.app.goo.gl/UgjSXrXUkyn98DAU9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 bg-[#87af4b] text-slate-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-[#87af4b]/90 transition-all active:scale-95"
                    >
                      <MapPin size={14} />
                      지도 보기
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Contact</p>
                    <p className="text-base font-bold">010-6635-5593 (이현웅)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="mt-20 px-6 py-12 text-center bg-[#87af4b]/5 border-t border-[#87af4b]/10">
            <p className="text-slate-400 text-xs italic mb-2">거듭난 자들의 모임</p>
            <p className="text-lg font-bold font-serif text-slate-800">대전내동교회 성도 드림</p>
          </motion.footer>
        </motion.main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 pb-8 pt-3 flex justify-around items-center z-50">
          <NavItem icon={<Home size={20} />} label="홈" active />
          <NavItem icon={<Info size={20} />} label="집회안내" />
          <NavItem icon={<MessageSquare size={20} />} label="문의" />
          <NavItem icon={<Share2 size={20} />} label="공유" />
        </nav>

        {/* Background Decoration */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
          <Leaf className="absolute top-20 -left-10 w-48 h-48 rotate-45" />
          <Leaf className="absolute bottom-40 -right-20 w-64 h-64 -rotate-12" />
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#87af4b]' : 'text-slate-400 hover:text-[#87af4b]'}`}>
      {icon}
      <span className="text-[10px] font-bold tracking-tighter">{label}</span>
    </button>
  );
}
