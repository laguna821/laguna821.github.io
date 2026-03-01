import HeroSpline from "@/components/HeroSpline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-black selection:text-white">
      {/* 1. Hero Section [살기 위한 지식] */}
      <section className="relative w-full h-screen flex border-b-[6px] border-[#171717] bg-black">
        {/* 전체 화면 배경에 3D 씬 배치 */}
        <div className="absolute inset-0 z-0">
          <HeroSpline />
        </div>

        {/* 양분된 레이아웃 구조체 (좌측은 비워두고 3D 감상/우측은 텍스트) */}
        <div className="relative z-20 w-full flex flex-col md:flex-row h-full pointer-events-none">
          {/* 좌측 60%: 빈 공간 (3D 상호작용 영역) */}
          <div className="hidden md:flex flex-col flex-1 h-full items-start justify-end p-12">
            {/* 필요하다면 여기에 작은 워터마크나 스크롤 다운 인디케이터를 넣습니다 */}
          </div>

          {/* 우측: 얇은 글래스 텍스트 패널 (화면의 약 30%만 차지하게 하여 3D 가려짐 방지) */}
          <div className="w-full md:w-[32%] min-w-[320px] max-w-[450px] h-full flex flex-col justify-center px-8 lg:px-12 bg-black/40 backdrop-blur-xl border-l-[1px] border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] pointer-events-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.1] mb-6 text-white drop-shadow-lg">
              기록이 아닌<br />존재를<br />위한 사유
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-bold tracking-tight mb-10 text-gray-300 drop-shadow-md border-l-4 border-[#D4AF37] pl-4">
              DIKM: 융합적 사고,<br />실천적 지식, 점진적 성장
            </p>
            <Link href="/routine">
              <Button size="lg" className="w-[80%] lg:w-auto brutal-border text-base md:text-lg px-6 py-6 rounded-none bg-white text-black hover:bg-gray-200 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] self-start">
                나의 루틴 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Philosophy 1 [X축 / 융합적 사고] */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-white border-b-[6px] border-[#171717]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase whitespace-pre-line leading-[1.1]">
              융합적 사고{"\n"}&lt; X축 &gt;
            </h2>
            <p className="text-lg md:text-2xl font-medium text-gray-800 leading-relaxed brutal-border p-6 bg-[#FAFAFA]">
              파편화된 멀티모달 데이터(D)가 정보(I)와 지식(K)으로 연결됩니다. 경계를 허무는 융합적 기록은 무작위적 감각을 날카로운 무기로 제련합니다.
            </p>
          </div>

          <div className="md:w-1/2 relative min-h-[400px] w-full mt-10 md:mt-0 flex items-center justify-center">
            {/* 글래스모피즘 인터랙티브 노드 컨셉 */}
            <div className="absolute w-32 h-32 bg-black rounded-full mix-blend-multiply blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-10 right-10 w-48 h-48 bg-[#D4AF37] rounded-full mix-blend-multiply blur-2xl opacity-40"></div>

            <div className="glass-panel p-8 w-full max-w-sm z-10 flex flex-col gap-4 transform transition hover:-translate-y-2 hover:rotate-2 duration-300">
              <div className="h-12 bg-black/10 w-3/4 animate-pulse"></div>
              <div className="h-6 bg-black/10 w-full"></div>
              <div className="h-6 bg-black/10 w-5/6"></div>
              <div className="mt-8 flex justify-between items-end border-t border-black/20 pt-4">
                <span className="font-bold text-2xl tracking-tighter">DATA</span>
                <span className="font-black text-4xl">→ KNOWLEDGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Philosophy 2 [Y축 / 실천적 지식] */}
      <section className="py-32 px-6 md:px-12 bg-black text-white border-b-[6px] border-[#171717]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            실천적 지식 [Y축]
          </h2>
          <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-20 font-medium">
            정론(사유)과 정행(실천)은 분리되지 않습니다. DIKM 루프는 삶 속에서 체화되며 뻗어나갑니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["D. Data", "I. Info", "K. Knowledge", "M. Meaning"].map((step, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-[#D4AF37] translate-x-3 translate-y-3 border-2 border-white/20 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <div className="relative h-64 border-[4px] border-white bg-black flex flex-col items-center justify-center p-6 hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{step}</h3>
                  <p className="mt-4 text-gray-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {i === 0 && "멀티모달 감각 수용"}
                    {i === 1 && "맥락의 초기 구조화"}
                    {i === 2 && "자기화된 철학적 통찰"}
                    {i === 3 && "타인과 세상으로의 확장"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy 3 [Z축 / 점진적 성장] */}
      <section className="py-32 px-6 md:px-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 flex flex-col gap-4">
            {/* Stacking animation metaphor */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-16 w-full bg-white brutal-border flex items-center px-6 transition-all hover:pl-10"
                style={{ width: `${60 + item * 10}%`, opacity: 0.5 + item * 0.1 }}
              >
                <span className="font-black text-2xl tracking-tighter">+ 0.1%</span>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              점진적 성장<br />&lt; Z축 &gt;
            </h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed bg-[#171717] text-white p-8 brutal-border shadow-none">
              하루 0.1% 성장이 누적되어 단단한 자아를 매일 구축합니다.
              실패조차 점진적이며, 일관된 루틴과 성찰 루프만이 지속 가능한 구조를 만듭니다.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-24 bg-[#D4AF37] text-black border-t-[6px] border-black text-center flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">
          사유-실천-존재의 루프에<br />참여하시겠습니까?
        </h2>
        <Link href="/manual">
          <Button size="lg" className="brutal-border text-2xl px-12 py-10 rounded-none bg-[#171717] text-white hover:bg-gray-800 transition-all hover:-translate-y-1">
            매뉴얼 전체 읽어보기
          </Button>
        </Link>
      </footer>
    </main>
  );
}
