import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Hand, Gift, Sprout } from 'lucide-react';

export const SolutionProposalSlide: React.FC = () => {
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
                    01 | 02 | 03 | <span style={{ color: 'var(--semantic-text-primary)' }}>04 솔루션 제안</span> | 05
                </div>
                <h1 className="text-display" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    임상적 신뢰와 게이미피케이션의 결합
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    믿을 수 있는 기관이 설계한 든든한 울타리 속에서 즐기는 자기관리 솔루션을 제공합니다
                </p>
            </motion.div>

            {/* Content Container - Two Pillars Without Outer Cards */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', flex: 1 }}>

                {/* Left Pillar: Clinical Trust */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
                >
                    <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#111', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        Clinical Trust <span style={{ fontSize: '22px', color: '#444', fontWeight: 600 }}>전문성과 신뢰</span>
                    </h2>
                    <p style={{ fontSize: '24px', color: '#333', lineHeight: 1.5, marginBottom: '60px', fontWeight: 500 }}>
                        고려대 심리학 교수진 협업<br />
                        임상결과로 검증된 자서전 기억 훈련 알고리즘 AI 챗봇
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: 'auto', marginBottom: '60px' }}>
                        <div style={{
                            backgroundColor: '#1E293B',
                            color: 'white',
                            padding: '24px 36px',
                            borderRadius: '100px',
                            fontSize: '22px',
                            fontWeight: 700,
                            alignSelf: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            고려대학교 연구팀이 설계한 검진이니 안심하세요
                        </div>
                        <div style={{
                            backgroundColor: '#334155',
                            color: 'white',
                            padding: '20px 48px',
                            borderRadius: '100px',
                            fontSize: '22px',
                            fontWeight: 700,
                            alignSelf: 'center',
                            marginLeft: '40px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            임상결과 효과가 입증되었어요
                        </div>
                        <div style={{
                            backgroundColor: '#0F172A',
                            color: 'white',
                            padding: '22px 36px',
                            borderRadius: '100px',
                            fontSize: '22px',
                            fontWeight: 700,
                            alignSelf: 'flex-start',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                        }}>
                            이미 공신력 있는 기관도 함께하고 있어요
                        </div>
                    </div>
                </motion.div>

                {/* Plus Icon Divider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ fontSize: '50px', color: '#111', fontWeight: 800, marginTop: '-60px' }}
                >
                    +
                </motion.div>

                {/* Right Pillar: Gamification (Hook Model) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ flex: 1.2, height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#111', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        Gamification <span style={{ fontSize: '22px', color: '#444', fontWeight: 600 }}>몰입과 지속성</span>
                    </h2>
                    <p style={{ fontSize: '24px', color: '#333', lineHeight: 1.5, marginBottom: '30px', fontWeight: 500 }}>
                        단순한 보상이 아닌 '자발적 습관'을 설계<br />
                        Hook Model 기반 리텐션 강화 전략
                    </p>

                    <div className="card-base" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '30px 40px' }}>

                        {/* 1. Trigger */}
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF0F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF0055', flexShrink: 0 }}>
                                <Bell size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: '12px' }}>1. Trigger (계기)</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ backgroundColor: '#E0E7FF', color: '#3730A3', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700 }}>External</span>
                                        <span style={{ fontSize: '16px', color: '#555' }}>"21일 만에 오셨네요!" 맞춤형 알림</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ backgroundColor: '#E0F2FE', color: '#0284C7', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700 }}>Internal</span>
                                        <span style={{ fontSize: '16px', color: '#FF0055', fontWeight: 600 }}>"씨앗에 물 줘야지"</span>
                                        <span style={{ fontSize: '16px', color: '#555' }}>유저의 자발적 동기</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Action */}
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF0F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF0055', flexShrink: 0 }}>
                                <Hand size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>2. Action (진입 장벽 낮추기)</h3>
                                <div style={{ display: 'inline-block', backgroundColor: '#FFF0F2', color: '#FF0055', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                                    마이크로 인터랙션
                                </div>
                                <p style={{ fontSize: '16px', color: '#555', margin: 0, lineHeight: 1.5 }}>
                                    일상 대화나 두뇌 운동만으로 <span style={{ color: '#FF0055', fontWeight: 700 }}>'물방울' 즉각 획득</span> <span style={{ color: '#888', fontSize: '14px' }}>(핵심 행동 허들 대폭 하향)</span>
                                </p>
                            </div>
                        </div>

                        {/* 3. Variable Reward */}
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', paddingBottom: '20px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF0F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF0055', flexShrink: 0 }}>
                                <Gift size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>3. Variable Reward (가변적 보상)</h3>
                                <div style={{ display: 'inline-block', backgroundColor: '#FFF0F2', color: '#FF0055', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                                    점진적 진행 효과
                                </div>
                                <p style={{ fontSize: '16px', color: '#555', margin: 0, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    식물이 6단계(씨앗→꽃)로 성장하며 성취감 제공. 어떤 꽃이 필지 모르는 <span style={{ color: '#FF0055', fontWeight: 700 }}>'랜덤성'</span>으로 도파민 자극
                                </p>
                            </div>
                        </div>

                        {/* 4. Investment */}
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF0F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF0055', flexShrink: 0 }}>
                                <Sprout size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111', marginBottom: '8px' }}>4. Investment (투자 - 락인)</h3>
                                <div style={{ display: 'inline-block', backgroundColor: '#FFF0F2', color: '#EC4899', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 700, marginBottom: '8px' }}>
                                    자산 축적 & 루프 완성
                                </div>
                                <p style={{ fontSize: '16px', color: '#555', margin: 0, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    피어난 꽃은 <span style={{ color: '#FF0055', fontWeight: 700 }}>'도감'</span>에 축적되며, <span style={{ color: '#FF0055', fontWeight: 700 }}>'새로운 씨앗'</span>이 지급되어 다음 사이클의 강력한 트리거(1번)로 연결
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </div>
    );
};
