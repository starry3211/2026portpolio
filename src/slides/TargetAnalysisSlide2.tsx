import React from 'react';
import { motion } from 'framer-motion';

export const TargetAnalysisSlide2: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#1E1E1E',
            display: 'flex',
            padding: '40px',
            position: 'relative',
            fontFamily: 'Pretendard, sans-serif'
        }}>
            {/* Header / Top Bar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    position: 'absolute',
                    top: '50px',
                    left: '50px',
                    right: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 10
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div style={{
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '6px 16px',
                        borderRadius: '100px',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.7)',
                        letterSpacing: '2px',
                        fontWeight: 600
                    }}>
                        TARGET ANALYSIS
                    </div>
                    <h1 style={{ color: 'white', fontSize: '28px', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>
                        우리의 타겟은 <span style={{ color: '#B5E666' }}>액티브 시니어</span>다
                    </h1>
                </div>

                <div style={{ textAlign: 'right', color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.5, fontWeight: 400 }}>
                    은퇴 후에도 활발하게 소비하고 자기계발을 추구하는<br />
                    새로운 시니어 세대
                </div>
            </motion.div>

            {/* Left Column (Customer Segment Matrix) */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    width: '280px',
                    marginTop: '100px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <h3 style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontWeight: 600, letterSpacing: '1px' }}>
                    고객 세분화 매트릭스
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '8px', flex: 1, maxHeight: '420px' }}>
                    {/* Pre-senior */}
                    <div style={{ backgroundColor: '#2A2A2A', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <div style={{ color: 'white', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Pre-senior</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>프리 시니어</div>
                    </div>

                    {/* Active Senior (Highlighted) */}
                    <div style={{ backgroundColor: '#B5E666', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', color: '#1A1A1A' }}>
                        <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '4px', textAlign: 'center' }}>Active<br />Senior ✓</div>
                        <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: '13px', fontWeight: 600 }}>액티브 시니어</div>
                    </div>

                    {/* Silver */}
                    <div style={{ backgroundColor: '#2A2A2A', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <div style={{ color: 'white', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Silver</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>실버</div>
                    </div>

                    {/* Other Senior */}
                    <div style={{ backgroundColor: '#2A2A2A', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <div style={{ color: 'white', fontWeight: 700, fontSize: '15px', marginBottom: '4px', textAlign: 'center' }}>Other<br />Senior</div>
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>아더 시니어</div>
                    </div>
                </div>

                {/* Arrow Hint */}
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '16px', marginBottom: '24px', letterSpacing: '0.5px' }}>
                    ← Consumption / Activity Level →
                </div>

                {/* Features List */}
                <div style={{ backgroundColor: '#B5E666', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '8px', color: '#1A1A1A', fontSize: '14px', fontWeight: 700 }}>
                        <span>·</span>
                        <span>은퇴 후 탄탄한 경제력 보유</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', color: '#1A1A1A', fontSize: '14px', fontWeight: 500 }}>
                        <span>·</span>
                        <span>신체적 제약 없음</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', color: '#1A1A1A', fontSize: '14px', fontWeight: 500 }}>
                        <span>·</span>
                        <span>자기계발 및 새로운 경험 추구</span>
                    </div>
                </div>

            </motion.div>

            {/* Right Column (Main Content Area) */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                    flex: 1,
                    backgroundColor: '#F5F5F3',
                    borderRadius: '24px 0 0 24px',
                    marginLeft: '40px',
                    marginTop: '-40px',
                    marginBottom: '-40px',
                    marginRight: '-40px',
                    padding: '130px 50px 50px 50px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* 4 Cards Row */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    {/* Card 1 */}
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '32px' }}>🛡️</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A1A1A' }}>안전과 안심</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#신뢰</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#전문기관</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#소셜프루프</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '32px' }}>😊</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A1A1A' }}>긍정과 행복</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#밝은생활</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#생기</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '32px' }}>🏃</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A1A1A' }}>적극적인 이미지</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#주도적</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#자기관리</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#세대어울림</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', border: '1px solid #EAEAEA', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                        <div style={{ fontSize: '32px' }}>🧭</div>
                        <div style={{ fontSize: '16px', fontWeight: 800, color: '#1A1A1A' }}>편리함과 독립</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#나혼자가능</span>
                            <span style={{ backgroundColor: '#F0F7E6', color: '#6A8A3C', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>#디지털친화</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Two Sections */}
                <div style={{ display: 'flex', gap: '24px', flex: 1 }}>

                    {/* Active Senior Features */}
                    <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', border: '1px solid #EAEAEA', padding: '30px', display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ fontSize: '14px', color: '#888', marginBottom: '24px', fontWeight: 700, letterSpacing: '1px' }}>
                            액티브 시니어 특징
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', flex: 1 }}>
                            <div style={{ backgroundColor: '#F6F9F0', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '14px', color: '#444', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>새로운 문화·<br />트렌드 적응</div>
                                <div style={{ fontSize: '28px', color: '#8BC34A', fontWeight: 800 }}>78.1%</div>
                            </div>

                            <div style={{ backgroundColor: '#F6F9F0', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '14px', color: '#444', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>나를 위한<br />소비</div>
                                <div style={{ fontSize: '28px', color: '#8BC34A', fontWeight: 800 }}>53.1%</div>
                            </div>

                            <div style={{ backgroundColor: '#F6F9F0', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '14px', color: '#444', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>브랜드 경험<br />가치 추구</div>
                                <div style={{ fontSize: '28px', color: '#8BC34A', fontWeight: 800 }}>81.3%</div>
                            </div>

                            <div style={{ backgroundColor: '#F6F9F0', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <div style={{ fontSize: '14px', color: '#444', fontWeight: 600, marginBottom: '8px', textAlign: 'center' }}>건강 위한<br />규칙적 운동</div>
                                <div style={{ fontSize: '28px', color: '#8BC34A', fontWeight: 800 }}>65.6%</div>
                            </div>
                        </div>
                    </div>

                    {/* Why This Target */}
                    <div style={{ flex: 1, backgroundColor: '#222222', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                        <h3 style={{ fontSize: '13px', color: '#B5E666', marginBottom: '40px', fontWeight: 700, letterSpacing: '2px' }}>
                            WHY THIS TARGET
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ color: '#B5E666', fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>01</div>
                                <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    <span style={{ color: '#B5E666', fontWeight: 700 }}>경제력 + 의지</span> 모두 갖춘 유일한 세대 — 결제 전환율이 높다
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ color: '#B5E666', fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>02</div>
                                <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    81%+가 새 경험·브랜드에 열려 있어 앱 수용 장벽이 낮다
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                <div style={{ color: '#B5E666', fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>03</div>
                                <div style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    노화 불안·정서적 고립을 <span style={{ color: '#B5E666', fontWeight: 700 }}>스스로 해결</span>하려는 동기가 명확하다
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px', marginTop: 'auto' }}>
                            <div style={{ fontSize: '14px', color: 'white', fontWeight: 600, marginBottom: '8px' }}>
                                → 시니어가 귀 기울이는 메시지: <span style={{ color: '#B5E666' }}>안심 · 긍정 · 자립</span>
                            </div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>
                                믿을 수 있는 공간에서 스스로를 돌보고, 활기차게 살아가는 것
                            </div>
                        </div>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};
