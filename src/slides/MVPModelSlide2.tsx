import React from 'react';
import { motion } from 'framer-motion';
import { Check, Triangle, ArrowRight } from 'lucide-react';

export const MVPModelSlide2: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#EAECEF',
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
                <div style={{ padding: '32px 40px', borderBottom: '1px solid #E2E8F0', paddingBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
                            01 | 02 | 03 | 04 | <span style={{ color: '#0F172A', fontWeight: 800 }}>05 MVP 모델 설계</span> | 06
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
                            <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                                한정된 리소스 안에서 Essence만 담은 MVP 범위 설정
                            </h1>
                        </div>
                        <div style={{ fontSize: '15px', color: '#64748B', fontWeight: 500 }}>
                            <span style={{ color: '#0F172A', fontWeight: 800 }}>Keep / Drop / Defer</span> 3단 프레임으로 의사결정 — 코어는 사수하고, 부가 기능은 과감히 생략 또는 v2로 이관
                        </div>
                    </div>
                    {/* Badge */}
                    <div style={{ backgroundColor: '#EFF6FF', color: '#3B82F6', border: '1px solid #BFDBFE', borderRadius: '100px', padding: '8px 20px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px' }}>
                        개발 기간 3개월 · 3인 팀
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{ display: 'flex', flex: 1, backgroundColor: '#F8FAFC' }}>

                    {/* Left Sidebar (Dark) */}
                    <div style={{ width: '280px', backgroundColor: '#1A1A1A', padding: '40px 32px', display: 'flex', flexDirection: 'column', color: 'white' }}>
                        <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 800, letterSpacing: '2px', marginBottom: '16px' }}>BACKGROUND & PRINCIPLE</div>
                        <div style={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.4, marginBottom: '32px' }}>
                            타협의 원칙 —<br />
                            <span style={{ color: '#A3E635' }}>Core는 사수,</span><br />
                            나머지는 협상
                        </div>

                        <div style={{ fontSize: '13px', color: '#D1D5DB', lineHeight: 1.6, wordBreak: 'keep-all', marginBottom: '24px' }}>
                            일정이 촉박해도 서비스의 존재 이유인 <span style={{ fontWeight: 800, color: 'white' }}>'임상 가치'</span>는 타협 불가.
                        </div>
                        <div style={{ fontSize: '13px', color: '#D1D5DB', lineHeight: 1.6, wordBreak: 'keep-all', marginBottom: '48px' }}>
                            타협은 오직 <span style={{ fontWeight: 800, color: 'white' }}>'부가 흥미 요소'</span>에서만 — Drop은 영구 삭제가 아닌 근거 있는 보류.
                        </div>

                        {/* MVP Schedule Box */}
                        <div style={{ backgroundColor: '#262626', borderRadius: '12px', padding: '20px', border: '1px solid #333' }}>
                            <div style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 800, letterSpacing: '1px', marginBottom: '16px' }}>MVP 일정</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3B82F6' }}></div>
                                    <div style={{ fontSize: '13px', color: 'white' }}><span style={{ fontWeight: 800 }}>M1</span> — 코어 AI챗봇 + 온보딩</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#A3E635' }}></div>
                                    <div style={{ fontSize: '13px', color: 'white' }}><span style={{ fontWeight: 800 }}>M2</span> — 두뇌운동 + 기본 보상</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EAB308' }}></div>
                                    <div style={{ fontSize: '13px', color: 'white' }}><span style={{ fontWeight: 800 }}>M3</span> — 가설 검증 + 베타 출시</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content Panels */}
                    <div style={{ flex: 1, padding: '32px', display: 'flex', gap: '16px' }}>

                        {/* 1. KEEP */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Header */}
                            <div style={{ backgroundColor: '#ECFDF5', borderRadius: '12px', padding: '16px 20px', border: '1px solid #D1FAE5' }}>
                                <div style={{ fontSize: '11px', color: '#059669', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>KEEP · 핵심 코어</div>
                                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981' }}></div>
                                    AI 챗봇 대화 & 두뇌 운동
                                </div>
                            </div>

                            {/* Content Box */}
                            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.4 }}>
                                    포용적 챗봇 디자인<br />+ 자서전적 기억 훈련
                                </div>
                                <div style={{ fontSize: '12px', color: '#10B981', fontWeight: 800, marginBottom: '8px' }}>결정 근거</div>
                                <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    임상 파일럿에서 <span style={{ fontWeight: 800, color: '#0F172A' }}>우울 척도 21%↓</span> 검증된 핵심 가치. 이것 없이는 서비스 존재 이유 소멸 — 전체 공수의 <span style={{ fontWeight: 800, color: '#0F172A' }}>60% 배정</span>
                                </div>
                            </div>

                            {/* Metric Box */}
                            <div style={{ backgroundColor: '#F0FDF4', borderRadius: '12px', padding: '16px 20px', border: '1px solid #BBF7D0', borderTop: '3px solid #22C55E' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#16A34A', fontWeight: 800, marginBottom: '12px' }}>
                                    <Check size={12} strokeWidth={3} /> 검증 지표 (목표)
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#16A34A' }}>≤15%</div>
                                        <div style={{ fontSize: '11px', color: '#16A34A', opacity: 0.8 }}>온보딩<br />이탈률</div>
                                    </div>
                                    <div style={{ width: '1px', backgroundColor: '#BBF7D0' }}></div>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#16A34A' }}>≥70%</div>
                                        <div style={{ fontSize: '11px', color: '#16A34A', opacity: 0.8 }}>대화<br />완료율</div>
                                    </div>
                                    <div style={{ width: '1px', backgroundColor: '#BBF7D0' }}></div>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#16A34A' }}>D7≥45%</div>
                                        <div style={{ fontSize: '11px', color: '#16A34A', opacity: 0.8 }}>잔존율</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. SIMPLIFY */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Header */}
                            <div style={{ backgroundColor: '#FFF7ED', borderRadius: '12px', padding: '16px 20px', border: '1px solid #FFEDD5' }}>
                                <div style={{ fontSize: '11px', color: '#C2410C', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>SIMPLIFY · 단순화 적용</div>
                                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F97316' }}></div>
                                    육성 시뮬레이션 경량화
                                </div>
                            </div>

                            {/* Content Box */}
                            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.4 }}>
                                    복잡한 멀티 육성 → <span style={{ color: '#EA580C' }}>씨앗→꽃 단일 성장</span>으로 대체
                                </div>
                                <div style={{ fontSize: '12px', color: '#EA580C', fontWeight: 800, marginBottom: '8px' }}>단순화 근거</div>
                                <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    멀티 캐릭터 육성은 공수 <span style={{ fontWeight: 800, color: '#0F172A' }}>전체의 ~35%</span> 소요 + 시니어 학습 허들 리스크. 핵심 보상 심리(성취+기대)는 유지하되 <span style={{ fontWeight: 800, color: '#0F172A' }}>씨앗 6단계 자동 성장</span>으로 구현 공수 절감
                                </div>
                            </div>

                            {/* Metric Box */}
                            <div style={{ backgroundColor: '#FFF7ED', borderRadius: '12px', padding: '16px 20px', border: '1px solid #FFEDD5', borderTop: '3px solid #F97316' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#EA580C', fontWeight: 800, marginBottom: '12px' }}>
                                    <Triangle size={12} strokeWidth={3} /> 단순화 효과
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#EA580C' }}>35%→8%</div>
                                        <div style={{ fontSize: '11px', color: '#EA580C', opacity: 0.8 }}>개발 공수<br />절감</div>
                                    </div>
                                    <div style={{ width: '1px', backgroundColor: '#FFEDD5' }}></div>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#EA580C' }}>1-Tap</div>
                                        <div style={{ fontSize: '11px', color: '#EA580C', opacity: 0.8 }}>학습 허들<br />최소화</div>
                                    </div>
                                    <div style={{ width: '1px', backgroundColor: '#FFEDD5' }}></div>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#EA580C' }}>유지</div>
                                        <div style={{ fontSize: '11px', color: '#EA580C', opacity: 0.8 }}>보상 심리<br />구조 보존</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. DEFER */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {/* Header */}
                            <div style={{ backgroundColor: '#EFF6FF', borderRadius: '12px', padding: '16px 20px', border: '1px solid #DBEAFE' }}>
                                <div style={{ fontSize: '11px', color: '#2563EB', fontWeight: 800, letterSpacing: '1px', marginBottom: '4px' }}>DEFER · V2 이관</div>
                                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3B82F6' }}></div>
                                    소셜 공유 & 고급 리포트
                                </div>
                            </div>

                            {/* Content Box */}
                            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.4 }}>
                                    감정 리포트 공유<br />+ 가족 연동 뷰
                                </div>
                                <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '8px' }}>이관 근거</div>
                                <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    니즈는 인터뷰에서 확인됐으나 <span style={{ fontWeight: 800, color: '#0F172A' }}>프라이버시 정책 설계</span> 선행 필요. MVP에서 사용 패턴 데이터 확보 후 <span style={{ fontWeight: 800, color: '#0F172A' }}>v2에서 개인화</span> 적용 예정
                                </div>
                            </div>

                            {/* Metric Box */}
                            <div style={{ backgroundColor: '#EFF6FF', borderRadius: '12px', padding: '16px 20px', border: '1px solid #DBEAFE', borderTop: '3px solid #3B82F6' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#2563EB', fontWeight: 800, marginBottom: '12px' }}>
                                    <ArrowRight size={12} strokeWidth={3} /> V2 진입 조건
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#2563EB' }}>D30≥30%</div>
                                        <div style={{ fontSize: '11px', color: '#2563EB', opacity: 0.8 }}>잔존율<br />달성 시</div>
                                    </div>
                                    <div style={{ width: '1px', backgroundColor: '#DBEAFE' }}></div>
                                    <div>
                                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#2563EB' }}>n≥500</div>
                                        <div style={{ fontSize: '11px', color: '#2563EB', opacity: 0.8 }}>충분한<br />사용 데이터</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#1C1917', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 10 }}>
                    <div style={{ backgroundColor: '#A3E635', color: '#1A1A1A', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px', flexShrink: 0 }}>
                        DECISION LOGIC
                    </div>
                    <div style={{ fontSize: '14px', color: '#D4D4D8', fontWeight: 500 }}>
                        Drop은 영구 삭제가 아닌 <span style={{ color: 'white', fontWeight: 800 }}>근거 있는 보류</span> — Defer 조건(D30 잔존율 ≥30%, n≥500)을 사전 정의해 <span style={{ color: '#A3E635', fontWeight: 800 }}>감(感)이 아닌 데이터로 v2 범위를 결정</span>하는 구조를 설계했습니다
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
