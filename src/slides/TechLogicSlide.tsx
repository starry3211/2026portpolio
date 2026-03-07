import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Link as LinkIcon, Trophy, TrendingUp } from 'lucide-react';

export const TechLogicSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#EEF2F6',
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
                <div style={{ padding: '32px 40px', borderBottom: '1px solid #E2E8F0', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
                        01 | 02 | 03 | <span style={{ color: '#0F172A', fontWeight: 800 }}>04 데이터/규칙 기반 기술 문제 해결</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
                        <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                            한솔홈데코 라솔라: <span style={{ color: '#3B82F6' }}>레이어 매칭 규칙을 직접 정의해 2D 시뮬레이션을 0에서 1로 구축</span>
                        </h1>
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B', fontWeight: 500 }}>
                        <span style={{ color: '#0F172A', fontWeight: 800 }}>고객 니즈 → 기술 리서치 → 규칙 설계 → 외주 협업</span> — PO가 기술 로직의 주도권을 가져간 프로젝트
                    </div>
                </div>

                {/* Main Content Grid */}
                <div style={{ display: 'flex', flex: 1, padding: '32px 40px', gap: '20px', backgroundColor: '#F8FAFC', paddingBottom: '24px' }}>

                    {/* Left Column (Problem & Basis) */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* PROBLEM */}
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #FCA5A5', padding: '24px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '1px', marginBottom: '8px' }}>PROBLEM</div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>인테리어 커머스의 구조적 한계</div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <AlertTriangle size={18} color="#EAB308" style={{ marginTop: '2px' }} />
                                    <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        <span style={{ fontWeight: 800 }}>구매 전 시각화 불가</span> — 고객은 내 공간에 적용된 모습을 직관적으로 확인하고 싶어함
                                    </div>
                                </div>
                                <div style={{ height: '1px', backgroundColor: '#F1F5F9' }}></div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <LinkIcon size={18} color="#94A3B8" style={{ marginTop: '2px' }} />
                                    <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        <span style={{ fontWeight: 800 }}>정적 샘플북 의존</span> — 자재 조합 경우의 수를 실시간으로 보여줄 시스템 전무
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* WHY WE PROPOSED THIS */}
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #93C5FD', padding: '24px', flex: 1 }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '1px', marginBottom: '8px' }}>WHY WE PROPOSED THIS</div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '20px' }}>선제 제안의 근거</div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3B82F6', borderRadius: '50%', marginTop: '8px' }}></div>
                                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        경쟁 인테리어 커머스(오늘의집 등) <span style={{ color: '#2563EB', fontWeight: 800 }}>AR/시뮬레이션 기능 도입 트렌드</span> 확인
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '6px', height: '6px', backgroundColor: '#3B82F6', borderRadius: '50%', marginTop: '8px' }}></div>
                                    <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        클라이언트 CS 데이터에서 <span style={{ color: '#2563EB', fontWeight: 800 }}>"실제 적용 모습 확인 불가"</span> 반복 패턴 포착
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Column (Tech Logic & Flow) */}
                    <div style={{ flex: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* TECH LOGIC Box */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                                <div>
                                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#8B5CF6', letterSpacing: '1px', marginBottom: '4px' }}>TECH LOGIC — PO가 직접 정의한 레이어 매칭 규칙</div>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>자재 데이터 간 정합성 규칙 설계</div>
                                </div>
                            </div>

                            {/* Layer Diagram */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', position: 'relative', width: '90%', margin: '0 auto 32px auto' }}>
                                {/* Layer 3 */}
                                <div style={{ backgroundColor: '#FDF2F8', border: '1px solid #FBCFE8', borderRadius: '100px', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#BE185D' }}>3. 가구 레이어 (최상단)</div>
                                    <div style={{ backgroundColor: '#FBCFE8', color: '#9D174D', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700 }}>마루 색상 기준 필터</div>
                                </div>
                                {/* Layer 2 */}
                                <div style={{ backgroundColor: '#FEFCE8', border: '1px solid #FEF08A', borderRadius: '100px', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 4%' }}>
                                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#A16207' }}>2. 벽지 레이어 (마스킹)</div>
                                    <div style={{ backgroundColor: '#FEF08A', color: '#854D0E', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700 }}>패턴 충돌 규칙 적용</div>
                                </div>
                                {/* Layer 1 */}
                                <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '100px', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 8%' }}>
                                    <div style={{ fontSize: '15px', fontWeight: 800, color: '#1D4ED8' }}>1. 마루 레이어 (베이스 도면)</div>
                                    <div style={{ backgroundColor: '#BFDBFE', color: '#1E3A8A', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 700 }}>SKU 기준값</div>
                                </div>
                            </div>

                            {/* 4 Rules Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: 'auto' }}>
                                <div style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '12px' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '4px' }}>Rule 1 · 색상 정합</div>
                                    <div style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>마루 컬러톤 기준 <span style={{ fontWeight: 800 }}>벽지·가구 추천 범위</span> 정규식 정의</div>
                                </div>
                                <div style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '12px' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '4px' }}>Rule 2 · 패턴 충돌</div>
                                    <div style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>강한 패턴 마루 ↔ <span style={{ fontWeight: 800 }}>무지/톤다운 벽지</span> 강제 매칭</div>
                                </div>
                                <div style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '12px' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '4px' }}>Rule 3 · 공간 비율</div>
                                    <div style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>도면 면적 대비 <span style={{ fontWeight: 800 }}>가구 배치 가능 SKU</span> 범위 제한</div>
                                </div>
                                <div style={{ borderLeft: '3px solid #3B82F6', paddingLeft: '12px' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '4px' }}>Rule 4 · 예외 처리</div>
                                    <div style={{ fontSize: '13px', color: '#334155', fontWeight: 500 }}>신규 SKU 추가 시 <span style={{ fontWeight: 800 }}>관리자 규칙 직접 등록</span> 경로 확보</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* AS-IS -> TO-BE */}
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ backgroundColor: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0', padding: '16px 24px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#16A34A', letterSpacing: '1px', marginBottom: '16px' }}>AS-IS → TO-BE</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ flex: 1, backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #FECACA' }}>
                                    <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: 800, marginBottom: '4px' }}>AS-IS</div>
                                    <div style={{ fontSize: '15px', color: '#334155', fontWeight: 700 }}>정적 샘플북<br />오프라인 확인</div>
                                </div>
                                <div style={{ color: '#9CA3AF' }}>→</div>
                                <div style={{ flex: 1, backgroundColor: '#D1FAE5', padding: '20px', borderRadius: '8px', textAlign: 'center', border: '1px solid #34D399' }}>
                                    <div style={{ fontSize: '12px', color: '#059669', fontWeight: 800, marginBottom: '4px' }}>TO-BE</div>
                                    <div style={{ fontSize: '15px', color: '#064E3B', fontWeight: 800 }}>실시간 2D<br />레이어 시뮬레이션</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Log & Impact) */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {/* PO DECISION LOG */}
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #FED7AA', padding: '24px', flex: 1 }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#EA580C', letterSpacing: '1px', marginBottom: '8px' }}>PO DECISION LOG</div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '24px' }}>내가 결정한 것들</div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#F97316', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 }}>1</div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>3D 대신 2D 채택</div>
                                        <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>렌더링 성능·개발 공수 트레이드오프, 모바일 UX 우선 <span style={{ color: '#94A3B8' }}>(3D는 v2 Defer)</span></div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#F97316', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 }}>2</div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>규칙 직접 정의</div>
                                        <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>외주사에 위임 시 도메인 로직 누락 리스크, PO가 직접 레이어 매칭 규칙 문서화</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#F97316', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0 }}>3</div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>SKU 확장성 설계</div>
                                        <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>신규 자재 추가 시 규칙 재개발 없이 관리자 등록으로 해결되도록 구조 선정의</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* BUSINESS IMPACT */}
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#A3E635', letterSpacing: '1px', marginBottom: '8px' }}>BUSINESS IMPACT</div>
                            <div style={{ fontSize: '18px', fontWeight: 800, color: 'white', marginBottom: '20px' }}>성과</div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ backgroundColor: '#262626', border: '1px solid #333', borderLeft: '3px solid #EAB308', borderRadius: '8px', padding: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'white', fontWeight: 700, marginBottom: '6px' }}>
                                        <Trophy size={16} color="#EAB308" /> GDWEB 디자인 어워드 수상
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5 }}>
                                        시뮬레이션 UX의 사용자 친화성 외부 검증 <span style={{ color: '#6B7280' }}>(객관적 품질 지표)</span>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: '#262626', border: '1px solid #333', borderLeft: '3px solid #10B981', borderRadius: '8px', padding: '16px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'white', fontWeight: 700, marginBottom: '6px' }}>
                                        <TrendingUp size={16} color="#10B981" /> 앱 활용 영업 실적 개선
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.5 }}>
                                        <span style={{ color: '#A3E635', fontWeight: 700 }}>고객사 담당자 대표이사 표창</span> — PO 제안이 비즈니스 성과로 연결된 근거
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#1A1A1A', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 10 }}>
                    <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px', flexShrink: 0 }}>
                        PO THINKING
                    </div>
                    <div style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 500 }}>
                        기술 로직을 외주사에 위임하지 않고 <span style={{ color: 'white', fontWeight: 800 }}>PO가 직접 레이어 매칭 규칙을 정의한 것</span>이 핵심 — <span style={{ color: '#A3E635', fontWeight: 800 }}>도메인 지식 + 기술 이해가 있어야 가능한 의사결정</span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
