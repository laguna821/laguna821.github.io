import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default async function ManualPage() {
    // Read the markdown file from the public directory
    const filePath = path.join(process.cwd(), 'public', 'dikm-manual.md');
    const markdownContent = fs.readFileSync(filePath, 'utf8');

    return (
        <main className="min-h-screen bg-[#FAFAFA] relative selection:bg-black selection:text-white pb-32">
            {/* 1. Header (Brutalist style) */}
            <header className="w-full bg-black text-white p-8 md:p-12 md:py-20 border-b-[6px] border-[#171717]">
                <div className="max-w-4xl mx-auto">
                    <p className="text-[#D4AF37] font-bold text-xl tracking-tighter mb-4">Version 1.3 (6-11-2025)</p>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1]">
                        DIKM Obsidian<br />지식관리 매뉴얼
                    </h1>
                    <p className="mt-6 text-2xl font-medium text-gray-400">by 안창현</p>
                </div>
            </header>

            {/* 2. Content Area (Markdown Parser with Brutalist custom styles) */}
            <section className="px-6 md:px-12 py-16">
                <div className="max-w-4xl mx-auto glass-panel brutal-border p-8 md:p-16 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-[#171717]">
                    <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b-4 prose-h2:border-black prose-h2:pb-2 prose-h2:mt-16 prose-h3:text-2xl prose-h3:mt-12 prose-p:leading-relaxed prose-p:font-medium prose-a:text-blue-600 prose-a:font-bold hover:prose-a:underline prose-strong:font-black prose-strong:bg-[#D4AF37]/20 prose-strong:px-1 prose-blockquote:border-l-[6px] prose-blockquote:border-[#D4AF37] prose-blockquote:bg-gray-50 prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:font-bold prose-blockquote:text-gray-800 prose-ul:font-medium prose-li:marker:text-black">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                code({ node, inline, className, children, ...props }: any) {
                                    return (
                                        <code
                                            className={`${className} bg-gray-100 brutal-border px-2 py-1 text-sm font-bold text-black shadow-none before:content-[''] after:content-['']`}
                                            {...props}
                                        >
                                            {children}
                                        </code>
                                    )
                                },
                                hr({ node, ...props }: any) {
                                    return <hr className="my-16 border-t-[4px] border-black border-dashed" {...props} />
                                }
                            }}
                        >
                            {markdownContent}
                        </ReactMarkdown>
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
