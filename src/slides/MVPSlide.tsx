import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scissors, LineChart, Quote } from 'lucide-react';

export const MVPSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: '80px 100px',
            position: 'relative'
        }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '50px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px' }}>
                    01 | 02 | 03 | 04 | <span style={{ color: 'var(--semantic-text-primary)' }}>05 MVP 모델 설계</span> | 06
                </div>
                <h1 className="text-display" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    한정된 리소스 안에서 Essence만 담은 MVP 범위 설정
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    코어 서비스는 1순위로 지켜내고, 부가 기능은 과감히 생략
                </p>
            </motion.div>

            {/* Content Container - Two Columns */}
            <div style={{ display: 'flex', gap: '40px', flex: 1 }}>

                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    {/* Background & Principle Card */}
                    <div className="card-base" style={{
                        padding: '30px 40px',
                        borderLeft: '8px solid var(--semantic-text-primary)'
                    }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#F1F5F9', color: '#1E293B', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 800, marginBottom: '12px' }}>
                            Background & Principle
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111', marginBottom: '12px' }}>
                            상용화까지 단 3개월, 타협의 원칙
                        </h3>
                        <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, margin: 0, wordBreak: 'keep-all' }}>
                            아무리 일정이 촉박해도 서비스의 존재 이유인 <strong>'임상적 가치(Core)'</strong>는 타협하지 않으며, 타협은 오직 <strong style={{ color: '#64748B' }}>'부가적인 흥미 요소(Fat)'</strong>에서만 진행합니다.
                        </p>
                    </div>

                    {/* MVP Solution Card */}
                    <div className="card-base" style={{
                        padding: '30px 40px',
                        borderLeft: '8px solid var(--success-color)'
                    }}>
                        <div style={{ display: 'inline-block', backgroundColor: '#D1FAE5', color: '#047857', padding: '6px 12px', borderRadius: '4px', fontSize: '14px', fontWeight: 800, marginBottom: '12px' }}>
                            MVP Solution
                        </div>
                        <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#059669', marginBottom: '12px' }}>
                            리소스를 아끼며 목적을 달성한 대안 로직
                        </h3>
                        <p style={{ fontSize: '16px', color: '#555', lineHeight: 1.6, margin: 0, wordBreak: 'keep-all' }}>
                            복잡한 게임 기능 대신, 코어 서비스 완료 시 물방울이 자동 적립되고 식물이 <strong>'자동 성장'</strong>하는 단순화된 보상 로직을 기획해 공수를 혁신적으로 절약했습니다.
                        </p>
                    </div>

                    {/* 검증 가설 Card */}
                    <div className="card-base" style={{
                        padding: '30px 40px',
                        flex: 1
                    }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <LineChart size={24} color="#3B82F6" />
                            검증하고자 한 핵심 가설 지표
                        </h3>
                        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ fontSize: '16px', color: '#444', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                <strong>가설 1 (코어):</strong> AI 챗봇의 포용적 디자인은 시니어의 심리적 장벽을 낮춰 <span style={{ backgroundColor: '#DBEAFE', color: '#1E40AF', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>초기 가입 이탈율</span>을 성공적으로 방어할 것이다.
                            </li>
                            <li style={{ fontSize: '16px', color: '#444', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                <strong>가설 2 (대안):</strong> 단순한 '자동 보상'만으로도 <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>대화 완료율</span> 및 <span style={{ backgroundColor: '#E0F2FE', color: '#0369A1', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>재방문율(Retention)</span>을 유의미하게 상승시킬 수 있다.
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Right Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                    {/* Keep Card */}
                    <div className="card-base" style={{
                        padding: '32px 40px',
                        border: '2px solid var(--semantic-accent)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <ShieldCheck size={26} />
                            </div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#0284C7', marginBottom: '4px' }}>● 끝까지 사수한 핵심 코어 (Keep)</div>
                                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0369A1', margin: 0 }}>AI 챗봇 다봄이 대화 & 두뇌 운동</h3>
                            </div>
                        </div>
                        <div style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                            <strong>결정 이유:</strong> 이 서비스의 본질이자 검증된 '우울감 개선 및 인지 향상'의 핵심 요소이므로, 전체 리소스의 최우선 순위로 배정하여 온전히 구현함.
                        </div>
                    </div>

                    {/* Drop Card */}
                    <div className="card-base" style={{
                        padding: '32px 40px',
                        border: '2px solid var(--destructive-color)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Scissors size={26} />
                            </div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#EF4444', marginBottom: '4px' }}>● 과감히 덜어낸 부가 기능 (Drop)</div>
                                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#B91C1C', margin: 0 }}>복잡한 육성 시뮬레이션 및 커뮤니티</h3>
                            </div>
                        </div>
                        <div style={{ fontSize: '16px', color: '#7F1D1D', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                            <strong>결정 이유:</strong> 3개월이라는 한정된 리소스 내에서 개발 공수가 과도하게 높고, 초기 시니어 유저에게는 학습 허들로 작용할 수 있어 제외함.
                        </div>
                    </div>

                    {/* Quote Box */}
                    <div style={{
                        backgroundColor: '#1E293B',
                        borderRadius: '16px',
                        padding: '36px 40px',
                        marginTop: 'auto',
                        position: 'relative',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Quote size={40} color="rgba(255,255,255,0.1)" style={{ position: 'absolute', top: '20px', left: '20px' }} />
                        <p style={{ fontSize: '20px', color: 'white', lineHeight: 1.7, margin: 0, fontWeight: 500, paddingLeft: '20px', wordBreak: 'keep-all', zIndex: 1 }}>
                            "무엇을 만들까보다 <strong style={{ color: '#FDE047' }}>'무엇을 포기할까'</strong>를 먼저 결정했습니다.<br />
                            서비스의 심장(Core)은 사수하고, 게임 기능(Fat)은 자동 성장 로직으로 대체해 3개월 일정을 완벽히 맞췄습니다."
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
