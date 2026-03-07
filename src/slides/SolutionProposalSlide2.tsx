import React from 'react';
import { motion } from 'framer-motion';

export const SolutionProposalSlide2: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#F5F5F3',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Pretendard, sans-serif',
            height: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Top header area */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ padding: '36px 48px 24px 48px', borderBottom: '1px solid #EAEAEA', backgroundColor: 'transparent' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#B3B3B3', fontWeight: 600, letterSpacing: '2px', marginBottom: '16px' }}>
                    01 | 02 | 03 | <span style={{ color: '#1A1A1A', fontWeight: 800 }}>04 솔루션 제안</span> | 05
                </div>
                <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#1A1A1A', margin: 0, letterSpacing: '-0.5px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#E55972' }}>임상적 신뢰</span> × <span style={{ color: '#447EEB' }}>시니어 맞춤 Hook</span> — 두 축의 결합이 차별점이다
                </h1>
                <div style={{ fontSize: '15px', color: '#666666', fontWeight: 500 }}>
                    단순 신뢰 or 단순 게이미피케이션이 아닌, <span style={{ color: '#1A1A1A', fontWeight: 800 }}>검증된 임상 근거 위에 자발적 습관을 설계</span>하는 구조 — 경쟁 앱이 복제할 수 없는 진입 장벽
                </div>
            </motion.div>

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', padding: '32px 48px', gap: '24px', alignItems: 'stretch' }}>

                {/* 1. Clinical Trust */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ flex: 1, backgroundColor: 'white', borderRadius: '16px', border: '1px solid #EAEAEA', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                >
                    <div style={{ padding: '24px', borderBottom: '1px solid #EAEAEA' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#447EEB', letterSpacing: '2px', marginBottom: '8px' }}>PILLAR 1 · CLINICAL TRUST</div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>전문성과 신뢰 — <span style={{ color: '#447EEB' }}>수치로 증명</span></div>
                        <div style={{ fontSize: '13px', color: '#888888', fontWeight: 500 }}>기관 협업 · 임상 검증 · 파트너십 3층 구조</div>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: '#EEF2FF', color: '#447EEB', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>임상</div>
                            <div style={{ fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                                고려대 심리학 교수진 공동 설계 <span style={{ fontWeight: 800 }}>자서전적 기억 훈련 알고리즘</span> — <span style={{ color: '#888888' }}>파일럿 8주, n=42, 우울 척도 21%↓</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: '#ECFDF5', color: '#10B981', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>검증</div>
                            <div style={{ fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                                AI 챗봇 응답 <span style={{ fontWeight: 800 }}>전문 심리사 감수 프로세스</span> 적용 — <span style={{ color: '#888888' }}>주 1회 내지 리뷰</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ backgroundColor: '#FFF7ED', color: '#F59E0B', padding: '4px 10px', borderRadius: '100px', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>파트너</div>
                            <div style={{ fontSize: '14px', color: '#333333', lineHeight: 1.5 }}>
                                대형 보험사 제휴 <span style={{ fontWeight: 800 }}>로고·인증 마크</span> 온보딩 1단계 노출 — <span style={{ color: '#888888' }}>신뢰 전이 효과</span>
                            </div>
                        </div>

                        {/* Stats Box */}
                        <div style={{ backgroundColor: '#F8FAFC', borderRadius: '12px', padding: '20px', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', border: '1px solid #EAEAEA' }}>
                            <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid #EAEAEA' }}>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#447EEB', marginBottom: '4px' }}>21%↓</div>
                                <div style={{ fontSize: '11px', color: '#666666', lineHeight: 1.3 }}>우울 척도<br />(PHQ-9, 8주)</div>
                            </div>
                            <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid #EAEAEA' }}>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#447EEB', marginBottom: '4px' }}>n=42</div>
                                <div style={{ fontSize: '11px', color: '#666666', lineHeight: 1.3 }}>파일럿<br />참여자</div>
                            </div>
                            <div style={{ textAlign: 'center', flex: 1 }}>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#447EEB', marginBottom: '4px' }}>89%</div>
                                <div style={{ fontSize: '11px', color: '#666666', lineHeight: 1.3 }}>신뢰도<br />만족 응답</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Divider / Plus Sign */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#1A1A1A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 300, zIndex: 10 }}>
                        +
                    </div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '8px', fontWeight: 600 }}>결합</div>
                </div>

                {/* 2. Senior-Fit Hook Model */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1.3, backgroundColor: 'white', borderRadius: '16px', border: '1px solid #FCE7F3', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                >
                    <div style={{ padding: '24px', borderBottom: '1px solid #FCE7F3' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#E55972', letterSpacing: '2px', marginBottom: '8px' }}>PILLAR 2 · SENIOR-FIT HOOK MODEL</div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>시니어 맞춤 습관 설계</div>
                        <div style={{ fontSize: '13px', color: '#888888', fontWeight: 500 }}>랜덤 보상 → 예측 가능한 점진적 성취로 재설계</div>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{ position: 'absolute', left: '38px', top: '40px', bottom: '40px', width: '2px', backgroundColor: '#FCE7F3', zIndex: 0 }}></div>

                        {/* Step 1 */}
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div style={{ width: '30px', height: '30px', backgroundColor: '#FCE7F3', color: '#E55972', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0 }}>1</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#E55972', marginBottom: '4px' }}>Trigger — <span style={{ color: '#1A1A1A' }}>계기</span></div>
                                <div style={{ fontSize: '13px', color: '#444444', lineHeight: 1.5 }}>맞춤 알림 <span style={{ color: '#E55972', fontWeight: 700 }}>"21일 만에 오셨네요!"</span> + 내적 동기 "씨앗에 물 줘야지"</div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div style={{ width: '30px', height: '30px', backgroundColor: '#FCE7F3', color: '#E55972', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0 }}>2</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#E55972', marginBottom: '4px' }}>Action — <span style={{ color: '#1A1A1A' }}>진입 장벽 최소화</span></div>
                                <div style={{ fontSize: '13px', color: '#444444', lineHeight: 1.5, marginBottom: '6px' }}>마이크로 인터랙션으로 <span style={{ color: '#E55972', fontWeight: 700 }}>'물방울' 즉각 보상</span> 획득</div>
                                <div style={{ display: 'inline-block', backgroundColor: '#ECFDF5', color: '#10B981', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>
                                    ✓ 시니어: 복잡한 UI 대신 1-Tap 완료 구조
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div style={{ width: '30px', height: '30px', backgroundColor: '#FCE7F3', color: '#E55972', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0 }}>3</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#E55972', marginBottom: '4px' }}>Reward — <span style={{ color: '#1A1A1A' }}>점진적·예측 가능 보상</span></div>
                                <div style={{ fontSize: '13px', color: '#444444', lineHeight: 1.5, marginBottom: '6px' }}>씨앗→꽃 <span style={{ color: '#E55972', fontWeight: 700 }}>6단계 성장</span> — 진행률은 예측 가능하게, <span style={{ color: '#E55972', fontWeight: 700 }}>어떤 꽃이 필지는 랜덤</span>으로 기대감 유지</div>
                                <div style={{ display: 'inline-block', backgroundColor: '#ECFDF5', color: '#10B981', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>
                                    ✓ 성취감(예측) + 기대감(랜덤)의 이중 보상 구조
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                            <div style={{ width: '30px', height: '30px', backgroundColor: '#FCE7F3', color: '#E55972', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 800, flexShrink: 0 }}>4</div>
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: '#E55972', marginBottom: '4px' }}>Investment — <span style={{ color: '#1A1A1A' }}>락인</span></div>
                                <div style={{ fontSize: '13px', color: '#444444', lineHeight: 1.5 }}>피어난 꽃 → <span style={{ color: '#E55972', fontWeight: 700 }}>도감 자산</span> 축적, 새 씨앗 지급으로 루프 완성</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Vertical Divider / Equals Sign */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#E55972', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', fontWeight: 300, zIndex: 10 }}>
                        =
                    </div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '8px', fontWeight: 600 }}>차별점</div>
                </div>

                {/* 3. Right Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ flex: 1.1, backgroundColor: '#1E1E1E', borderRadius: '16px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
                >
                    <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#B5E666', letterSpacing: '2px', marginBottom: '8px' }}>WHY THIS COMBINATION</div>
                        <div style={{ fontSize: '18px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>왜 이 둘의 결합인가 — <span style={{ color: '#B5E666' }}>경쟁 앱과의 차이</span></div>
                        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>각각은 이미 존재한다. 결합이 해자(Moat)다</div>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>

                        {/* Competitors Comparison Box */}
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '11px', color: '#E55972', fontWeight: 700, marginBottom: '8px' }}>경쟁앱 A — 신뢰만</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, wordBreak: 'keep-all' }}>임상 권위는 있으나 지속 사용 동기 없어 이탈률 높음</div>
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
                                <div style={{ fontSize: '11px', color: '#E55972', fontWeight: 700, marginBottom: '8px' }}>경쟁앱 B — 게임만</div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, wordBreak: 'keep-all' }}>몰입 설계 있으나 시니어 신뢰 획득 실패, 초기 전환율 낮음</div>
                            </div>
                        </div>

                        {/* Our Moat */}
                        <div style={{ borderLeft: '3px solid #B5E666', backgroundColor: 'rgba(181, 230, 102, 0.05)', borderRadius: '0 12px 12px 0', padding: '20px' }}>
                            <div style={{ fontSize: '12px', color: '#B5E666', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>OUR MOAT</div>
                            <div style={{ fontSize: '13px', color: 'white', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                <span style={{ fontWeight: 800 }}>임상 신뢰로 진입 장벽을 낮추고</span>, 시니어 인지 특성에 맞는 <span style={{ fontWeight: 800 }}>예측 가능한 보상 루프</span>로 습관을 형성 — 복제하려면 기관 협업 + 알고리즘 재개발 필요
                            </div>
                        </div>

                        {/* Risk & Mitigation */}
                        <div style={{ borderLeft: '3px solid #E55972', backgroundColor: 'rgba(229, 89, 114, 0.05)', borderRadius: '0 12px 12px 0', padding: '20px', marginTop: 'auto' }}>
                            <div style={{ fontSize: '12px', color: '#E55972', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>RISK & MITIGATION</div>
                            <div style={{ fontSize: '13px', color: 'white', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                파일럿 n=42는 통계적 유의성 한계 → <span style={{ fontWeight: 800 }}>출시 후 A/B 테스트로 지속 검증</span> 계획 수립
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>

            {/* Bottom Sticky Key Point */}
            <div style={{ backgroundColor: '#212121', padding: '16px 48px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ backgroundColor: '#E55972', color: 'white', padding: '6px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 800, letterSpacing: '1px', flexShrink: 0 }}>
                    KEY POINT
                </div>
                <div style={{ fontSize: '13px', color: '#B3B3B3', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                    게이미피케이션의 <span style={{ color: 'white', fontWeight: 700 }}>랜덤 보상은 기대감을 유지하는 설계</span> — 단, 진행률은 예측 가능하게 가시화해 <span style={{ color: '#B5E666', fontWeight: 700 }}>성취감과 기대감을 동시에</span> 설계한 것이 핵심이며, 임상 근거 수치는 <span style={{ color: '#B5E666', fontWeight: 700 }}>출시 후 지속 업데이트되는 살아있는 지표</span>로 관리
                </div>
            </div>

        </div>
    );
};
