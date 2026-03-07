import React from 'react';
import { motion } from 'framer-motion';

export const BusinessExpansionSlide2: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#F8FAFC',
            padding: '40px',
            fontFamily: 'Pretendard, sans-serif'
        }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    border: '1px solid #E2E8F0',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
            >
                {/* Top header area */}
                <div style={{ padding: '32px 40px', borderBottom: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '16px' }}>
                        01 | 02 | 03 | 04 | 05 | <span style={{ color: '#0F172A', fontWeight: 800 }}>06 비즈니스 확장</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                            삼성물산 프리미엄 시니어타운 <span style={{ color: '#2563EB' }}>B2B 계약 체결</span> — MVP가 만들어낸 성과
                        </h1>
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B', fontWeight: 500 }}>
                        <span style={{ color: '#0F172A', fontWeight: 800 }}>MVP의 무엇이 계약으로 이어졌는가</span> — 인과 논리를 중심으로 정리
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{ display: 'flex', flex: 1, backgroundColor: '#F8FAFC' }}>

                    {/* Left Timeline Section */}
                    <div style={{ flex: 1.4, padding: '40px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '2px', marginBottom: '32px' }}>
                            WHY THIS DEAL HAPPENED — 계약 성사 인과 흐름
                        </div>

                        <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '24px' }}>
                            {/* Vertical Line */}
                            <div style={{ position: 'absolute', left: '-1px', top: '16px', bottom: '40px', width: '2px', backgroundColor: '#E2E8F0', zIndex: 0 }}></div>

                            {/* Step 1 */}
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '24px' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#EFF6FF', borderRadius: '50%', border: '4px solid #F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', fontSize: '16px', fontWeight: 800, position: 'absolute', left: '-48px', top: '-8px' }}>
                                    1
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '1px' }}>MVP PROOF</div>
                                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>임상 신뢰 + 시니어 맞춤 UX, 실제로 작동하는 제품을 먼저 만들었다</div>
                                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, marginBottom: '12px' }}>
                                        "될 것 같다"는 기획이 아닌, <span style={{ fontWeight: 800, color: '#0F172A' }}>고려대 연구팀 협업·실제 동작하는 AI 챗봇</span>으로 프리미엄 시니어 시장에 적합한 제품임을 데모로 증명 가능했음
                                    </div>
                                    <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #E2E8F0', backgroundColor: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B82F6' }}></div>
                                        작동하는 MVP → 클라이언트 데모 진행
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '24px' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#FFF7ED', borderRadius: '50%', border: '4px solid #F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EA580C', fontSize: '16px', fontWeight: 800, position: 'absolute', left: '-48px', top: '-8px' }}>
                                    2
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#EA580C', letterSpacing: '1px' }}>PRODUCT-MARKET FIT 신호</div>
                                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>클라이언트가 먼저 "UX 강점과 시니어 타겟 적합성"을 언급했다</div>
                                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, marginBottom: '12px' }}>
                                        우리가 주장한 게 아니라 <span style={{ fontWeight: 800, color: '#0F172A' }}>클라이언트 피드백에서 PMF 신호가 먼저 나왔음</span> — 액티브 시니어의 '안전·자립' 니즈와 제품 방향이 일치한다는 평가
                                    </div>
                                    <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #E2E8F0', backgroundColor: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EA580C' }}></div>
                                        클라이언트 피드백 → PMF 시그널 확인
                                    </div>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '24px' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#ECFDF5', borderRadius: '50%', border: '4px solid #F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', fontSize: '16px', fontWeight: 800, position: 'absolute', left: '-48px', top: '-8px' }}>
                                    3
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', letterSpacing: '1px' }}>DEAL TRIGGER</div>
                                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>프리미엄 입주민 대상 차별화 서비스 니즈 — 공급이 없던 시장에 먼저 들어갔다</div>
                                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, marginBottom: '12px' }}>
                                        삼성물산 입장에서 <span style={{ fontWeight: 800, color: '#0F172A' }}>경쟁 시니어타운과의 차별화 수단</span>이 필요했고, 검증된 멘탈케어 앱은 입주 서비스 번들로 즉시 활용 가능한 솔루션이었음
                                    </div>
                                    <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #E2E8F0', backgroundColor: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                                        '노블카운티' 앱 내 다봄 솔루션 탑재 계약
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Impact Section */}
                    <div style={{ flex: 1, backgroundColor: '#1A1A1A', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#A3E635', letterSpacing: '2px', marginBottom: '8px' }}>
                            BUSINESS IMPACT
                        </div>

                        {/* Deal Box */}
                        <div style={{ backgroundColor: '#262626', border: '1px solid #333', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 700, letterSpacing: '1px' }}>THE DEAL</div>
                            <div style={{ fontSize: '24px', fontWeight: 800, color: 'white', lineHeight: 1.3 }}>
                                삼성물산<br /><span style={{ color: '#60A5FA' }}>프리미엄 시니어타운</span>
                            </div>
                            <div style={{ fontSize: '13px', color: '#9CA3AF', marginTop: '12px', lineHeight: 1.5 }}>
                                '노블카운티' 앱 내 다봄 솔루션 탑재 —<br />B2B 첫 계약 성사
                            </div>
                        </div>

                        {/* Metrics Row */}
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <div style={{ flex: 1, backgroundColor: '#262626', border: '1px solid #333', borderTop: '3px solid #84CC16', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, letterSpacing: '1px' }}>CONTRACT VALUE</div>
                                <div style={{ fontSize: '24px', fontWeight: 800, color: '#A3E635' }}>
                                    3,500<span style={{ fontSize: '16px' }}>만원</span>
                                </div>
                                <div style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.4 }}>
                                    최소 리소스(3개월·3인)<br />대비 첫 매출 확보
                                </div>
                            </div>

                            <div style={{ flex: 1, backgroundColor: '#262626', border: '1px solid #333', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 700, letterSpacing: '1px' }}>DEAL TYPE</div>
                                <div style={{ fontSize: '24px', fontWeight: 800, color: '#9CA3AF' }}>
                                    B2B
                                </div>
                                <div style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.4 }}>
                                    MVP → 실제 계약으로<br />이어진 PMF 검증
                                </div>
                            </div>
                        </div>

                        {/* Key Insight Box */}
                        <div style={{ backgroundColor: '#1E293B', borderLeft: '3px solid #3B82F6', borderRadius: '0 12px 12px 0', padding: '24px', marginTop: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#60A5FA', fontWeight: 800, marginBottom: '12px' }}>
                                📌 계약이 말해주는 것
                            </div>
                            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                MVP 단계의 제품이 <span style={{ fontWeight: 800, color: 'white' }}>프리미엄 B2B 계약</span>을 만들어낸 것은 타겟·메시지·UX가 시장 니즈와 정렬됐다는 <span style={{ fontWeight: 800, color: 'white' }}>가장 강력한 PMF 신호</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#262626', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ backgroundColor: '#A3E635', color: '#1A1A1A', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px' }}>
                        KEY LEARNING
                    </div>
                    <div style={{ fontSize: '14px', color: '#9CA3AF', fontWeight: 500 }}>
                        계약은 영업의 결과가 아니라 <span style={{ color: 'white', fontWeight: 800 }}>"맞는 타겟에 맞는 제품을 먼저 만든 것"</span>의 결과 — <span style={{ color: '#A3E635', fontWeight: 800 }}>클라이언트가 먼저 PMF를 언급했다는 것</span>이 이를 방증
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
