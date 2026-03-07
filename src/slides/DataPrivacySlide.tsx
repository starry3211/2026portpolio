import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, ArrowDown, FileText, Lock, Microscope, RefreshCw, Check } from 'lucide-react';

export const DataPrivacySlide: React.FC = () => {
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
                <div style={{ padding: '32px 40px', borderBottom: '1px solid #E2E8F0', paddingBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
                        01 | 02 | 03 | <span style={{ color: '#0F172A', fontWeight: 800 }}>04 데이터/규칙 기반 기술 문제 해결</span> | 05
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
                        <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                            민감정보의 <span style={{ color: '#3B82F6' }}>가명처리 기반 활용</span> — 연구 동의 허들 없이 서비스 개선 데이터를 확보하다
                        </h1>
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B', fontWeight: 500 }}>
                        <span style={{ color: '#0F172A', fontWeight: 800 }}>개인정보 처리방침 설계가 곧 제품 전략</span> — 법적 요건 충족과 가입 전환율을 동시에 잡는 구조 설계
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{ display: 'flex', flex: 1, padding: '32px 40px', gap: '20px', backgroundColor: '#F8FAFC', paddingBottom: '24px' }}>

                    {/* Left Panel (AS-IS) */}
                    <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column' }}>
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ backgroundColor: '#FFF5F5', border: '1px solid #FECACA', borderRadius: '12px', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#DC2626', letterSpacing: '1px' }}>AS-IS · 문제</div>
                                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>연구목적 활용동의 방식의 구조적 한계</div>
                            </div>

                            {/* Flowchart */}
                            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '20px', marginBottom: '24px', position: 'relative' }}>
                                <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700, marginBottom: '12px' }}>기존 가입 플로우</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                                    <div style={{ backgroundColor: 'white', border: '1px solid #CBD5E1', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>회원가입</div>
                                    <div style={{ color: '#CBD5E1' }}><ArrowRight size={14} /></div>
                                    <div style={{ backgroundColor: 'white', border: '1px solid #EF4444', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 800, color: '#EF4444', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 0 0 2px rgba(239,68,68,0.1)' }}>
                                        <AlertTriangle size={14} /> 연구목적<br />활용 동의
                                    </div>
                                    <div style={{ color: '#CBD5E1' }}><ArrowRight size={14} /></div>
                                    <div style={{ backgroundColor: 'white', border: '1px solid #FCA5A5', padding: '8px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#EF4444' }}>거부 시<br />기능 제한?</div>
                                    <div style={{ color: '#CBD5E1' }}><ArrowRight size={14} /></div>
                                    <div style={{ backgroundColor: 'white', border: '1px solid #CBD5E1', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>이탈</div>
                                </div>
                            </div>

                            {/* 4 Error Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
                                <div style={{ backgroundColor: '#FEF2F2', borderLeft: '3px solid #EF4444', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: 800, marginBottom: '6px' }}>심리적 허들</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        <span style={{ fontWeight: 800 }}>"내 대화 내용이 연구에 쓰인다"</span> — 낙인 우려 자극, 시니어 거부감 극대화
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#FEF2F2', borderLeft: '3px solid #EF4444', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: 800, marginBottom: '6px' }}>법적 리스크</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        동의 철회 시 <span style={{ fontWeight: 800 }}>수집 데이터 전량 파기</span> 의무 — 연구 연속성 단절 위험
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#FEF2F2', borderLeft: '3px solid #EF4444', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: 800, marginBottom: '6px' }}>전환율 저해</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        온보딩 중 <span style={{ fontWeight: 800 }}>추가 동의 팝업</span> = 이탈 유발 지점 증가
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#FEF2F2', borderLeft: '3px solid #EF4444', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#EF4444', fontWeight: 800, marginBottom: '6px' }}>데이터 편향</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        동의한 사용자만 수집 → <span style={{ fontWeight: 800 }}>표본 편향</span>으로 연구 신뢰도 하락
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Column (Decision) */}
                    <div style={{ width: '140px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ backgroundColor: '#1C1917', borderRadius: '12px', padding: '24px 16px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid #292524', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
                            <div style={{ fontSize: '11px', color: '#A3E635', fontWeight: 800, letterSpacing: '2px', marginBottom: '16px' }}>DECISION</div>

                            <ArrowDown size={20} color="#A3E635" style={{ marginBottom: '16px' }} />

                            <div style={{ border: '1px solid #4D7C0F', backgroundColor: 'rgba(163,230,53,0.1)', padding: '16px 12px', borderRadius: '8px', textAlign: 'center', width: '100%', marginBottom: '16px' }}>
                                <div style={{ fontSize: '11px', color: '#bef264', fontWeight: 700, marginBottom: '6px' }}>방식 전환</div>
                                <div style={{ fontSize: '14px', color: 'white', fontWeight: 800, lineHeight: 1.4 }}>
                                    개별 동의<br /><span style={{ fontSize: '11px', margin: '4px 0', display: 'block', color: '#A3E635' }}>↓</span>처리방침 내<br />가명처리 명시
                                </div>
                            </div>

                            <ArrowDown size={20} color="#A3E635" style={{ marginBottom: '16px' }} />

                            <div style={{ fontSize: '11px', color: '#A3E635', fontWeight: 800, letterSpacing: '1px', marginTop: 'auto' }}>LEGAL BASIS</div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#2563EB', fontWeight: 800, marginBottom: '8px' }}>
                                <FileText size={14} /> 법적 근거
                            </div>
                            <div style={{ fontSize: '11px', color: '#1E3A8A', fontWeight: 800, lineHeight: 1.5 }}>
                                개인정보보호법 제28조의2 가명정보 처리 특례 —<br />
                                <span style={{ color: '#475569', fontWeight: 500 }}>통계·연구 목적 시 별도 동의 불필요</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Panel (TO-BE) */}
                    <div style={{ flex: 1.3, display: 'flex', flexDirection: 'column' }}>
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} style={{ backgroundColor: 'white', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '1px' }}>TO-BE · 솔루션</div>
                                <div style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A' }}>개인정보처리방침 내 가명처리 조항 설계</div>
                            </div>

                            {/* 4 Icon Steps */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 12px', marginBottom: '32px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22%' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <FileText size={24} color="#3B82F6" />
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '6px' }}>가입 시<br />처리방침 동의</div>
                                    <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>1회 동의로 완결</div>
                                </div>
                                <div style={{ color: '#CBD5E1', marginTop: '16px' }}><ArrowRight size={16} /></div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22%' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#ECFDF5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <Lock size={24} color="#10B981" />
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '6px' }}>민감정보<br />가명처리</div>
                                    <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>대화·검진·인지훈련 결과</div>
                                </div>
                                <div style={{ color: '#CBD5E1', marginTop: '16px' }}><ArrowRight size={16} /></div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22%' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#FEFCE8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <Microscope size={24} color="#EAB308" />
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '6px' }}>연구·서비스<br />개선 활용</div>
                                    <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>재식별 불가<br />상태로만 사용</div>
                                </div>
                                <div style={{ color: '#CBD5E1', marginTop: '16px' }}><ArrowRight size={16} /></div>

                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '22%' }}>
                                    <div style={{ width: '48px', height: '48px', backgroundColor: '#F3E8FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                                        <RefreshCw size={24} color="#A855F7" />
                                    </div>
                                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '6px' }}>알고리즘<br />고도화</div>
                                    <div style={{ fontSize: '11px', color: '#64748B', textAlign: 'center' }}>전체 사용자<br />혜택 환원</div>
                                </div>
                            </div>

                            {/* 4 Solution Cards */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                                <div style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #3B82F6', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '6px' }}>가입 허들 제거</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        온보딩 중 <span style={{ fontWeight: 800 }}>추가 동의 팝업 0건</span> — 시니어 이탈 지점 원천 차단
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #3B82F6', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '6px' }}>표본 편향 해소</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        <span style={{ fontWeight: 800 }}>전체 사용자 데이터</span> 수집 가능 — 연구 신뢰도 확보
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #3B82F6', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '6px' }}>낙인 우려 차단</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        "연구 참여" 프레임 제거 → <span style={{ fontWeight: 800 }}>일반 서비스 이용</span>과 동일한 경험
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#F8FAFC', borderLeft: '3px solid #3B82F6', padding: '16px', borderRadius: '0 8px 8px 0' }}>
                                    <div style={{ fontSize: '12px', color: '#3B82F6', fontWeight: 800, marginBottom: '6px' }}>법적 안정성</div>
                                    <div style={{ fontSize: '13px', color: '#1E293B', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        동의 철회와 무관하게 <span style={{ fontWeight: 800 }}>가명 데이터 적법 보유</span> 가능
                                    </div>
                                </div>
                            </div>

                            {/* Impact Box */}
                            <div style={{ backgroundColor: '#1A1A1A', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#A3E635', fontWeight: 800, flexShrink: 0 }}>
                                    <Check size={14} strokeWidth={3} /> Impact
                                </div>
                                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, wordBreak: 'keep-all' }}>
                                    가입 전환율 제고 + 연구 데이터 연속성 확보 — <span style={{ color: 'white', fontWeight: 800 }}>사용자 경험과 데이터 전략을 동시에 설계</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#1C1917', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px', position: 'relative', zIndex: 10 }}>
                    <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px', flexShrink: 0 }}>
                        PO THINKING
                    </div>
                    <div style={{ fontSize: '14px', color: '#A8A29E', fontWeight: 500 }}>
                        개인정보 처리방침은 <span style={{ color: 'white', fontWeight: 800 }}>법무팀 영역이 아니라 제품 전략의 일부</span> — <span style={{ color: '#A3E635', fontWeight: 800 }}>개인정보보호법 제28조의2를 직접 리서치해 가입 허들과 데이터 활용을 동시에 해결</span>한 의사결정
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
