import Spline from '@splinetool/react-spline/next';

export default function HeroSpline() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
            <Spline scene="https://prod.spline.design/bsTY6STzJd8iWg3f/scene.splinecode" />
            {/* 배경을 약간 어둡게 눌러주는 비네팅 효과 (텍스트 가독성 확보) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10" />
        </div>
    );
}
