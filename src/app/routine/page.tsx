import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RoutinePage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] relative selection:bg-black selection:text-white pb-32">
            {/* 1. Header (Brutalist style) */}
            <header className="w-full bg-black text-white p-8 md:p-12 border-b-[6px] border-[#171717]">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1]">
                        행동 패턴:<br />
                        <span className="text-[#D4AF37]">사유와 실천의 루프</span>
                    </h1>
                </div>
            </header>

            {/* 2. Content Area (Filtered Markdown styling) */}
            <section className="px-6 md:px-12 py-16">
                <div className="max-w-3xl mx-auto flex flex-col gap-12">

                    {/* Summary Section (Text extracted from "Summary or Key Trigger" without the title) */}
                    <div className="glass-panel brutal-border p-8 md:p-10 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed tracking-tight text-[#171717]">
                            삶 자체가 하나의 연구 방법이라는 인식.
                        </p>
                        <p className="mt-6 text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-gray-700">
                            무지성 실행과 후행적 체계화가 나의 핵심적 사고-행동 패턴임을 재확인.
                        </p>
                    </div>

                    {/* Main Body Section (Text extracted from "주요 내용 / 본문" without the title) */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 mb-4">
                            핵심 행동 강령
                        </h2>

                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="text-2xl font-black text-[#D4AF37]">—</span>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    나는 실행 → 정리 → 사고화 흐름을 자연스럽게 실천해왔으며, 이는 단순한 계획적 사고와는 다르다.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-2xl font-black text-[#D4AF37]">—</span>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    무지성으로 해보자는 태도는 무계획이 아닌, 즉흥적 실험을 통해 체계화 가능성을 탐색하는 방법이다.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-2xl font-black text-[#D4AF37]">—</span>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    달리기, 루틴, 독서, 일상 모든 것이 결국 사회과학적 실험처럼 반복적이고 구조화된 방식으로 쌓여가며, 삶 그 자체가 사유와 실천의 통합적 과정임을 실감한다.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-2xl font-black text-[#D4AF37]">—</span>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    나의 삶의 방식은 타인을 설득하거나 변화시키려는 목적이 아닌, 정행적 실천을 스스로 유지하며, 그 자체로 주변에 무언의 영향력을 발산하는 방식이다.
                                </p>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-2xl font-black text-[#D4AF37]">—</span>
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    삶 자체가 하나의 연구 방법이라는 자각은 내가 우연히 지금에 이른 것이 아닌, 꾸준한 실천적 사고의 결과임을 의미한다.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Floating Action Button (FAB) -> Back to Home */}
            <Link href="/">
                <button
                    className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex items-center justify-center gap-2 px-6 py-4 bg-black text-white brutal-border shadow-[6px_6px_0px_0px_rgba(212,175,55,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(212,175,55,1)] transition-all font-bold text-lg rounded-none group"
                    aria-label="메인 페이지로 돌아가기"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    <span>사유의 시작점으로</span>
                </button>
            </Link>

        </main>
    );
}
