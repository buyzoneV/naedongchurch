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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '대전내동교회 초청장',
          text: '새로운 생명으로의 초대 - 대전내동교회 집회에 여러분을 초대합니다.',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다.');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

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
                  초대
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
                title: "🌿 거듭나야 합니다",
                content: "하나님 나라는 한 번 태어난 육신의 생명만으로는 결코 들어갈 수 없는 나라입니다. 오직 물과 성령으로 거듭난 사람만이 그 나라를 보고 누릴 수 있습니다."
              },
              {
                icon: <Gift className="text-[#87af4b]" size={24} />,
                title: "🌿 거듭남은 선물입니다",
                content: "거듭남은 우리의 노력이나 수고로 얻어지는 결과가 아닙니다. 우리가 이 땅에 태어날 때 스스로 노력하지 않았던 것처럼, 거듭남 또한 하나님의 전적인 은혜로 이루어집니다. 마치 씨앗이 땅에 심겨 생명이 탄생하듯, 하나님의 말씀이 우리 마음에 심겨 성령의 역사로 새로운 생명이 시작되는 것입니다."
              },
              {
                icon: <Mail className="text-[#87af4b]" size={24} />,
                title: "🌿 당신을 초대합니다",
                content: "저희는 물과 성령으로 거듭나는 이 놀라운 진리를 몸소 경험한 증인들입니다. 이번 집회는 여러분의 인생에서 가장 소중한 전환점이 될 것입니다. 마음의 문을 열고 들려오는 말씀에 귀를 기울여 보십시오. 당신도 거듭날 수 있습니다."
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
                <span className="text-[#87af4b] text-[10px] font-bold tracking-[0.3em] uppercase">집회 상세 정보</span>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <Calendar className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">날짜</p>
                    <p className="text-lg font-bold">2026년 3월 27일(금) ~ 29일(주일)</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">시간</p>
                    <p className="text-sm">금·토 저녁 8시</p>
                    <p className="text-sm">주일 오전 11시 40분</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <User className="text-[#87af4b] shrink-0" size={20} />
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">강사</p>
                    <p className="text-base font-bold">김종만 형제님</p>
                    <p className="text-xs text-slate-400 mt-1">남원서문교회 은퇴장로, 전 전주대학교 교수</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-[#87af4b] shrink-0" size={20} />
                  <div className="flex-1">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">장소</p>
                    <p className="text-base font-bold">대전 내동 교회 예배실</p>
                    <p className="text-xs text-slate-400 mt-1">대전광역시 서구 동서대로 1079번길 19 (내동)</p>
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
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">문의</p>
                    <p className="text-base font-bold">010-6635-5593 (이현웅)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Regular Meetings Section */}
          <motion.section 
            id="meetings"
            variants={itemVariants} 
            className="px-6 py-12 bg-slate-50 rounded-3xl mx-4 space-y-8"
          >
            <div className="flex items-center gap-3">
              <Info className="text-[#87af4b]" size={24} />
              <h4 className="text-xl font-bold text-slate-900">집회안내</h4>
            </div>
            
            <div className="grid gap-4">
              {[
                { name: "주일예배", time: "주일 10:30" },
                { name: "주일설교", time: "주일 11:30" },
                { name: "주일학교, 학생회", time: "주일 09:00" },
                { name: "청년회", time: "주일 14:00" },
                { name: "수요집회", time: "수요일 19:40" },
                { name: "기도집회", time: "금요일 20:00" },
                { name: "자매회", time: "화요일 10:30" }
              ].map((meeting, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <span className="font-bold text-slate-700">{meeting.name}</span>
                  <span className="text-sm text-[#87af4b] font-semibold">{meeting.time}</span>
                </div>
              ))}
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
          <NavItem icon={<Home size={20} />} label="홈" active onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <NavItem icon={<Info size={20} />} label="집회안내" onClick={() => document.getElementById('meetings')?.scrollIntoView({ behavior: 'smooth' })} />
          <NavItem icon={<MessageSquare size={20} />} label="문의" href="tel:01066355593" />
          <NavItem icon={<Share2 size={20} />} label="공유" onClick={handleShare} />
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

function NavItem({ icon, label, active = false, href, onClick }: { icon: ReactNode, label: string, active?: boolean, href?: string, onClick?: () => void }) {
  const className = `flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#87af4b]' : 'text-slate-400 hover:text-[#87af4b]'}`;
  
  if (href) {
    return (
      <a href={href} className={className}>
        {icon}
        <span className="text-[10px] font-bold tracking-tighter">{label}</span>
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {icon}
      <span className="text-[10px] font-bold tracking-tighter">{label}</span>
    </button>
  );
}
