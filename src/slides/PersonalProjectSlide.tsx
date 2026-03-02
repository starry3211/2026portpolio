import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, FileCode2, Palette, Code, ChevronRight, Rocket, Target } from 'lucide-react';

export const PersonalProjectSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: '80px 100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '50px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-primary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 | 03 계속되는 실험, 개인 프로젝트 '카페인 오프'
                </div>
                <h1 className="text-display" style={{ marginBottom: '20px' }}>
                    Product Maker를 향한 AI 워크플로우 실험
                </h1>
                <p className="text-h2" style={{ color: 'var(--semantic-text-primary)', margin: 0 }}>
                    브랜딩부터 기획, 디자인, 코딩까지 AI 워크플로우 적용
                </p>
            </motion.div>

            {/* Content Body: Left Details & Right Image Placeholders */}
            <div style={{ display: 'flex', gap: '60px', flex: 1, alignItems: 'center' }}>

                {/* Left: Workflow & Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1.2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px'
                    }}
                >
                    {/* Top: 4-Step Workflow Card */}
                    <div className="card-base" style={{
                        padding: '40px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {/* Step 1 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--semantic-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-primary)', border: '2px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <Leaf size={32} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)', marginBottom: '4px' }}>STEP 01</div>
                                <div className="text-body2" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)' }}>AI Branding</div>
                            </div>
                        </div>

                        <ChevronRight color="var(--border-light)" size={32} strokeWidth={2} />

                        {/* Step 2 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--semantic-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-primary)', border: '2px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <FileCode2 size={32} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)', marginBottom: '4px' }}>STEP 02</div>
                                <div className="text-body2" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)' }}>Markdown Planning</div>
                            </div>
                        </div>

                        <ChevronRight color="var(--border-light)" size={32} strokeWidth={2} />

                        {/* Step 3 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--semantic-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-primary)', border: '2px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <Palette size={32} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)', marginBottom: '4px' }}>STEP 03</div>
                                <div className="text-body2" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)' }}>Vibe Design</div>
                            </div>
                        </div>

                        <ChevronRight color="var(--border-light)" size={32} strokeWidth={2} />

                        {/* Step 4 */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--semantic-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-primary)', border: '2px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                                <Code size={32} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)', marginBottom: '4px' }}>STEP 04</div>
                                <div className="text-body2" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)' }}>Vibe Coding</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        {/* Status Card */}
                        <div className="card-base" style={{
                            flex: 1,
                            padding: '32px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span className="tag-badge" style={{ backgroundColor: 'var(--success-color)', color: 'white', padding: '4px 10px', borderRadius: '100px', fontWeight: 800 }}>Status</span>
                                <h3 className="text-h4" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Rocket size={18} fill="var(--warning-color)" color="var(--warning-color)" /> 프로젝트 현황
                                </h3>
                            </div>
                            <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, margin: 0, wordBreak: 'keep-all' }}>
                                확립된 최적의 AI 기획 워크플로우를 바탕으로, 웰니스 프로덕트 '카페인 오프'의 <strong style={{ color: 'var(--semantic-text-primary)' }}>프론트엔드 인터랙티브 프로토타입</strong> 구현을 완료했습니다. 무거운 산출물 없이 효율적인 단방향 플로우를 실증한 사례입니다.
                            </p>
                        </div>

                        {/* Strategy Card */}
                        <div className="card-base" style={{
                            flex: 1.4,
                            padding: '32px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span className="tag-badge" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4px 10px', borderRadius: '100px', fontWeight: 800 }}>Strategy</span>
                                <h3 className="text-h4" style={{ fontWeight: 900, color: 'var(--semantic-text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Target size={18} color="var(--semantic-text-secondary)" /> 실행 전략 (AI Prompting-Driven)
                                </h3>
                            </div>
                            <ul className="text-body2" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <div style={{ color: 'var(--primary-color)', marginTop: '6px', fontSize: '6px' }}>●</div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                        <strong style={{ color: 'var(--semantic-text-primary)' }}>기획 및 브랜딩:</strong> 프롬프팅을 통해 브랜딩과 디자인 컨셉을 도출하고, 전통적인 화면설계서 없이 <strong style={{ color: 'var(--semantic-text-primary)' }}>마크다운(Markdown)</strong> 형태로 핵심 기획만 문서화.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <div style={{ color: 'var(--primary-color)', marginTop: '6px', fontSize: '6px' }}>●</div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                        <strong style={{ color: 'var(--semantic-text-primary)' }}>디자인 및 코딩:</strong> <strong style={{ color: 'var(--semantic-text-primary)' }}>바이브 디자인(Vibe Design)</strong>과 <strong style={{ color: 'var(--semantic-text-primary)' }}>바이브 코딩(Vibe Coding)</strong> 기법을 적극 활용하여 빠르고 린(Lean)하게 프론트엔드 작동 화면 구축.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Overlapping Image Placeholders */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 0.8,
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    {/* Back Placeholder */}
                    <div className="text-body2" style={{
                        position: 'absolute',
                        right: '0',
                        top: '10%',
                        width: '70%',
                        height: '60%',
                        backgroundColor: 'var(--border-light)', // Gray
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--semantic-text-secondary)',
                        fontWeight: 700,
                        transform: 'rotate(4deg)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        프로덕트 이미지
                    </div>

                    {/* Front Placeholder */}
                    <div className="text-body1" style={{
                        position: 'absolute',
                        left: '0',
                        bottom: '10%',
                        width: '75%',
                        height: '65%',
                        backgroundColor: 'var(--semantic-bg)', // Lighter Gray
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--semantic-text-primary)',
                        fontWeight: 800,
                        transform: 'rotate(-2deg)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255,255,255,0.4)'
                    }}>
                        프로덕트 이미지
                    </div>

                    {/* CTA Link */}
                    <div className="text-body2" style={{
                        position: 'absolute',
                        bottom: '-10px',
                        right: '25%',
                        fontWeight: 800,
                        color: 'var(--semantic-text-secondary)',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        cursor: 'pointer'
                    }}>
                        카페인 오프 체험하기
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
