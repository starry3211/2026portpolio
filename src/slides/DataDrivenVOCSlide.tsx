import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Car, ShieldAlert, Check, ArrowRight } from 'lucide-react';

export const DataDrivenVOCSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#F1F5F9',
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
                <div style={{ padding: '32px 40px 24px 40px', borderBottom: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
                        <span style={{ color: '#0F172A', fontWeight: 800 }}>01 운영 효율화 및 데이터 기반 문제 해결</span> | 02 | 03 | 04
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                            래미안 홈닉: <span style={{ color: '#2563EB' }}>국토부 데이터 규칙</span> 기반으로 주차 등록 VOC 구조적 차단
                        </h1>
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B', fontWeight: 500 }}>
                        UI 개선에 그치지 않고, 실패 로그 분석 → 근본 원인 특정 → 시스템 레벨 해결로 휴먼 에러의 틈을 원천 차단
                    </div>
                </div>

                {/* 4 Steps Container */}
                <div style={{ display: 'flex', flex: 1, padding: '32px 40px', gap: '16px', backgroundColor: '#F8FAFC', alignItems: 'stretch' }}>

                    {/* Step 1: PROBLEM */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ flex: 1, backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#EF4444', letterSpacing: '2px', marginBottom: '8px' }}>STEP 1 · PROBLEM</div>
                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>문제 정의</div>
                        </div>
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <div style={{ width: '60px', height: '60px', backgroundColor: '#FEF08A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <AlertTriangle size={32} color="#CA8A04" strokeWidth={2.5} />
                            </div>
                            <div style={{ textAlign: 'center', fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all', marginBottom: '24px' }}>
                                방문 차량 등록 시<br />오입력으로 인한<br />
                                <span style={{ color: '#EF4444', fontWeight: 700 }}>주차 차단기 미인식</span><br />
                                → 입주민 VOC 다수 접수
                            </div>
                            <div style={{ backgroundColor: '#FEE2E2', borderRadius: '8px', padding: '16px', width: '100%', textAlign: 'center' }}>
                                <div style={{ fontSize: '12px', color: '#DC2626', fontWeight: 800, marginBottom: '6px' }}>VOC 유형</div>
                                <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>"등록했는데<br />차단기가 안 열려요"</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD5E1' }}>
                        <ArrowRight size={20} />
                    </div>

                    {/* Step 2: DATA FINDING */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ flex: 1.1, backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#F59E0B', letterSpacing: '2px', marginBottom: '8px' }}>STEP 2 · DATA FINDING</div>
                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>실패 로그 분석</div>
                        </div>
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '24px' }}>
                                <div style={{ width: '6px', height: '6px', backgroundColor: '#F59E0B', borderRadius: '50%', marginTop: '8px' }}></div>
                                <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    실패 로그 패턴 분석 결과, <span style={{ color: '#F59E0B', fontWeight: 700 }}>차단기 미인식의 주요 원인</span>이 번호판 포맷 오입력으로 특정됨
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#FFFBEB', border: '1px solid #FEF3C7', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '12px', color: '#D97706', fontWeight: 800, marginBottom: '12px' }}>불가능한 입력 패턴 예시</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <span style={{ backgroundColor: '#FEE2E2', color: '#DC2626', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>1234가</span>
                                    <span style={{ backgroundColor: '#FEE2E2', color: '#DC2626', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>가나1234</span>
                                    <span style={{ backgroundColor: '#FEE2E2', color: '#DC2626', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>12-가-34</span>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #D1FAE5', borderRadius: '8px', padding: '16px' }}>
                                <div style={{ fontSize: '12px', color: '#059669', fontWeight: 800, marginBottom: '12px' }}>유효한 패턴</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    <span style={{ backgroundColor: '#D1FAE5', color: '#047857', padding: '4px 10px', borderRadius: '4px', fontSize: '14px', fontWeight: 700 }}>12가 3456</span>
                                    <span style={{ backgroundColor: '#D1FAE5', color: '#047857', padding: '4px 10px', borderRadius: '4px', fontSize: '14px', fontWeight: 700 }}>123가 4567</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD5E1' }}>
                        <ArrowRight size={20} />
                    </div>

                    {/* Step 3: THE LOGIC */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} style={{ flex: 1.3, backgroundColor: 'white', border: '3px solid #3B82F6', borderRadius: '12px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)' }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid #EFF6FF' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '1px' }}>STEP 3 · THE LOGIC — MAIN FOCUS</div>
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>국토부 규칙 기반 정규식 적용</div>
                        </div>

                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '20px' }}>
                            <div style={{ alignSelf: 'flex-start', backgroundColor: '#2563EB', color: 'white', fontSize: '11px', fontWeight: 800, padding: '4px 16px', borderRadius: '100px', letterSpacing: '1px' }}>
                                MOLIT Rules · Regex
                            </div>

                            {/* License Plate Graphic */}
                            <div style={{ backgroundColor: '#1A1A1A', borderRadius: '12px', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white' }}>
                                <div>
                                    <div style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '4px', lineHeight: 1.2 }}>123가</div>
                                    <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '4px', lineHeight: 1.2 }}>4567</div>
                                </div>
                                <div style={{ backgroundColor: '#064E3B', border: '1px solid #059669', color: '#34D399', fontSize: '11px', fontWeight: 700, padding: '8px 12px', borderRadius: '8px', textAlign: 'center', lineHeight: 1.4 }}>
                                    국토부<br />차량번호<br />규칙 준수
                                </div>
                            </div>

                            {/* Bullet Points */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#2563EB', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0 }}>1</div>
                                    <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        국토부 차량번호 체계 + 차단기 인식 데이터 기준으로 <span style={{ color: '#2563EB', fontWeight: 700 }}>유효 패턴 정의</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#2563EB', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0 }}>2</div>
                                    <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        정규식으로 <span style={{ color: '#2563EB', fontWeight: 700 }}>유효 패턴만 입력 가능</span> 하도록 프론트 레벨 강제
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                    <div style={{ width: '24px', height: '24px', backgroundColor: '#2563EB', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 800, flexShrink: 0 }}>3</div>
                                    <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        잘못된 입력 시 실시간 인라인 에러 <span style={{ color: '#2563EB', fontWeight: 700 }}>메시지로 즉각 안내</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CBD5E1' }}>
                        <ArrowRight size={20} />
                    </div>

                    {/* Step 4: EDGE CASE */}
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} style={{ flex: 1.1, backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '24px', borderBottom: '1px solid #F1F5F9' }}>
                            <div style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', letterSpacing: '2px', marginBottom: '8px' }}>STEP 4 · EDGE CASE & IMPACT</div>
                            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A' }}>예외 처리 & 결과</div>
                        </div>
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '16px' }}>

                            <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#059669', fontWeight: 800, marginBottom: '6px' }}>
                                    <Car size={16} /> 렌터카·임시번호판
                                </div>
                                <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
                                    국토부 임시번호 패턴 별도 정규식 추가 — 화이트리스트 방식으로 허용 범위 명시적 관리
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#059669', fontWeight: 800, marginBottom: '6px' }}>
                                    <ShieldAlert size={16} /> 외교·특수 차량
                                </div>
                                <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
                                    관리자 수동 등록 예외 경로 유지 — 규칙 강제와 유연성 병행
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#1A1A1A', padding: '20px', borderRadius: '8px', marginTop: 'auto', color: 'white' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#A3E635', fontWeight: 800, marginBottom: '8px' }}>
                                    <Check size={14} strokeWidth={3} /> Impact
                                </div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                    오입력 자체를 <span style={{ color: '#A3E635', fontWeight: 700 }}>시스템이 원천 차단</span> — 휴먼 에러의 구조적 제거로 <span style={{ color: '#A3E635', fontWeight: 700 }}>관리사무소 대응 공수 절감</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#1A1A1A', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ backgroundColor: '#2563EB', color: 'white', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px' }}>
                        PO THINKING
                    </div>
                    <div style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 500 }}>
                        "민원이 많다"는 요청을 로그 분석으로 근본 원인 특정 → UI 패치가 아닌 <span style={{ color: '#A3E635', fontWeight: 800 }}>데이터 규칙 기반 시스템 해결</span>로 접근한 것이 핵심 — 예외 케이스까지 사전 정의해 완결성 확보
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
