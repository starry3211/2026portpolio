import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Lightbulb } from 'lucide-react';

export const TitleSlide: React.FC = () => {
    return (
        <div className="presentation-container">
            <div className="slide-canvas" style={{
                justifyContent: 'center',
                padding: '120px 100px',
                position: 'relative'
            }}>
                {/* Background Wireframe Decor Placeholder */}
                <div style={{
                    position: 'absolute',
                    top: '15%',
                    right: '15%',
                    width: '600px',
                    height: '70%',
                    opacity: 0.1,
                    pointerEvents: 'none',
                    zIndex: 0
                }}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <rect x="10" y="10" width="80" height="40" fill="none" stroke="var(--semantic-text-primary)" strokeWidth="0.5" />
                        <line x1="10" y1="20" x2="90" y2="20" stroke="var(--semantic-text-primary)" strokeWidth="0.5" />
                        <rect x="20" y="60" width="20" height="20" fill="none" stroke="var(--semantic-text-primary)" strokeWidth="0.5" />
                        <rect x="50" y="60" width="30" height="30" fill="none" stroke="var(--semantic-text-primary)" strokeWidth="0.5" />
                        <path d="M 40 70 L 50 75 L 40 80 Z" fill="var(--semantic-text-primary)" opacity="0.5" />
                    </svg>
                </div>

                {/* Profile image placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        right: '80px',
                        bottom: 0,
                        width: '600px',
                        height: '85%',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        zIndex: 2
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        border: '1px solid var(--border-light)',
                        borderBottom: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--semantic-text-secondary)'
                    }}>
                        인물 사진 영역 (Profile Image)
                    </div>
                </motion.div>

                <div style={{ zIndex: 3, maxWidth: '1100px', width: '100%', display: 'flex', flexDirection: 'column', gap: '100px', flex: 1, justifyContent: 'center', margin: '0 0' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-h2" style={{ marginBottom: '16px' }}>
                            제품의 본질을 정의하고, 실행으로 증명하는
                        </h2>
                        <h1 className="text-display" style={{ marginBottom: '24px' }}>
                            Product Owner 황다혜입니다.
                        </h1>
                        <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)' }}>
                            MVP 전략 수립부터 데이터 기반 개선까지 — AI는 실행의 가속 장치로
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 10, maxWidth: '1000px' }}
                    >
                        {/* Card 1 */}
                        <div className="card-base hover-card" style={{
                            flex: 1,
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px'
                        }}>
                            <div className="kpi-block" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="text-h3">AI Senior Healthcare</h3>
                            <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                AI 대화로 사용자의 우울감 완화를 돕는 서비스 기획 경험
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="card-base hover-card" style={{
                            flex: 1,
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px'
                        }}>
                            <div className="kpi-block" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6', color: '#4B5563' }}>
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-h3">Business Impact</h3>
                            <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                자체 프로덕트 B2B(삼성물산) 탑재 계약 성사
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="card-base hover-card" style={{
                            flex: 1,
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            gap: '20px'
                        }}>
                            <div className="kpi-block" style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F3F4F6', color: '#4B5563' }}>
                                <Code size={32} />
                            </div>
                            <h3 className="text-h3">AI-Native PO</h3>
                            <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                기획-디자인-개발의 경계를 허무는 Vibe Coding<br />
                                사내 AX(AI eXperience) 도입 주도 및 AX Leader 발탁
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
