import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lock, AlertTriangle, Sparkles, CheckCircle2, BarChart3, Users } from 'lucide-react';

export const HypothesisSlide2: React.FC = () => {
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#94A3B8', fontWeight: 600, letterSpacing: '2px', marginBottom: '12px' }}>
                        01 | 02 | <span style={{ color: '#0F172A', fontWeight: 800 }}>03 가설 수립</span> | 04
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', margin: 0, letterSpacing: '-0.5px' }}>
                            유저 페르소나 기반 가설 수립 및 UX 전략
                        </h1>
                        <div style={{ backgroundColor: '#EFF6FF', color: '#2563EB', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Users size={14} /> 인터뷰 n=18 | 관찰 n=6
                        </div>
                    </div>
                    <div style={{ fontSize: '15px', color: '#64748B' }}>
                        타겟 인터뷰·관찰로 Pain point·Needs 도출 → <span style={{ color: '#2563EB', fontWeight: 800, textDecoration: 'underline' }}>검증 가능한 가설(If-Then) 형태</span>로 수립 후 액션 및 성공 지표 연결
                    </div>
                </div>

                {/* Grid Container */}
                <div style={{ display: 'flex', flex: 1, backgroundColor: 'white' }}>

                    {/* Col 1 */}
                    <div style={{ flex: 1, borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #E2E8F0', height: '110px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <ShieldCheck size={24} color="#3B82F6" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>신뢰 중시형</div>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#3B82F6', letterSpacing: '1px' }}>TRUST-SEEKER</div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div style={{ padding: '24px 32px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontSize: '14px', color: '#475569', fontStyle: 'italic', fontWeight: 500, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            " 건강/심리 서비스는 전문적이어야 믿고 쓸 수 있어 "
                        </div>

                        {/* Pain Point */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EF4444', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <AlertTriangle size={14} strokeWidth={2.5} /> PAIN POINT
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                정보 과잉 속 기관·전문가 <span style={{ fontWeight: 800 }}>인지도·신뢰성</span>을 최우선 판단 기준으로 삼음. 검증 없는 앱은 시작조차 거부
                            </div>
                        </div>

                        {/* Hypothesis */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3B82F6', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <Sparkles size={14} strokeWidth={2.5} /> 가설
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                <span style={{ color: '#2563EB', fontWeight: 800 }}>전문가·기관 신뢰 신호를 온보딩에 배치하면</span>, 첫 세션 완료율이 유의미하게 높아질 것이다
                            </div>
                        </div>

                        {/* Action */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <CheckCircle2 size={14} strokeWidth={2.5} /> ACTION
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                대형 보험사 제휴·인증 마크 UI 배치, <span style={{ fontWeight: 800 }}>'전문가 설계 알고리즘'</span> 온보딩 전면 노출
                            </div>
                        </div>

                        {/* Metrics */}
                        <div style={{ padding: '24px 32px', height: '140px', backgroundColor: '#F8FAFC' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366F1', fontSize: '13px', fontWeight: 800, letterSpacing: '0px', marginBottom: '20px' }}>
                                <BarChart3 size={15} strokeWidth={2.5} /> 성공 지표 (기준값 → 목표)
                            </div>
                            <div style={{ display: 'flex', gap: '16px', position: 'relative', paddingLeft: '16px' }}>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: '#6366F1', borderRadius: '4px' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≥60%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>온보딩<br />완료율</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≤2분</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>첫 신뢰 지표<br />노출 시간</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>D7≥40%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>잔존율<br />Retention</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div style={{ flex: 1, borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #E2E8F0', height: '110px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Target size={24} color="#10B981" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>자기관리 실천형</div>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#10B981', letterSpacing: '1px' }}>SELF-MANAGER</div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div style={{ padding: '24px 32px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontSize: '14px', color: '#475569', fontStyle: 'italic', fontWeight: 500, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            " 체계적 가이드나 동기 부여가 없어서 꾸준한 관리에 실패해 "
                        </div>

                        {/* Pain Point */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EF4444', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <AlertTriangle size={14} strokeWidth={2.5} /> PAIN POINT
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                건강 관리 의지는 있으나 <span style={{ fontWeight: 800 }}>뚜렷한 목표·보상 체계 부재</span>로 지속성 이탈 반복. 단순 기록은 동기 유지에 부족
                            </div>
                        </div>

                        {/* Hypothesis */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3B82F6', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <Sparkles size={14} strokeWidth={2.5} /> 가설
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                <span style={{ color: '#2563EB', fontWeight: 800 }}>AI 대화 기반 기억 회상 리워드를 제공하면</span>, 주간 재방문율(WAU)과 평균 세션 길이가 증가할 것이다
                            </div>
                        </div>

                        {/* Action */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <CheckCircle2 size={14} strokeWidth={2.5} /> ACTION
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                특정 기억 회상 과정에 <span style={{ fontWeight: 800 }}>게이미피케이션·시각 피드백</span> 적용, 주간 루틴 알림 + 진행률 대시보드 제공
                            </div>
                        </div>

                        {/* Metrics */}
                        <div style={{ padding: '24px 32px', height: '140px', backgroundColor: '#F8FAFC' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366F1', fontSize: '13px', fontWeight: 800, letterSpacing: '0px', marginBottom: '20px' }}>
                                <BarChart3 size={15} strokeWidth={2.5} /> 성공 지표 (기준값 → 목표)
                            </div>
                            <div style={{ display: 'flex', gap: '16px', position: 'relative', paddingLeft: '16px' }}>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: '#6366F1', borderRadius: '4px' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≥3회</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>주간<br />WAU</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≥8분</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>평균<br />세션 길이</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>D30≥35%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>월간<br />잔존율</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Header */}
                        <div style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #E2E8F0', height: '110px' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Lock size={24} color="#D97706" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>디지털 자립 추구형</div>
                                <div style={{ fontSize: '12px', fontWeight: 800, color: '#D97706', letterSpacing: '1px' }}>PRIVACY-FIRST</div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div style={{ padding: '24px 32px', backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontSize: '14px', color: '#475569', fontStyle: 'italic', fontWeight: 500, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            " 개인정보·보안 문제로 섣불리 쓰기가 걱정돼 "
                        </div>

                        {/* Pain Point */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EF4444', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <AlertTriangle size={14} strokeWidth={2.5} /> PAIN POINT
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                독립적 사용 의지는 높으나 <span style={{ fontWeight: 800 }}>감정·대화 데이터 유출 불안</span>이 앱 진입 자체를 막는 가장 큰 장벽으로 작용
                            </div>
                        </div>

                        {/* Hypothesis */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#3B82F6', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <Sparkles size={14} strokeWidth={2.5} /> 가설
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                <span style={{ color: '#D97706', fontWeight: 800 }}>익명성 정책·데이터 비공유 보장을 첫 화면에 전면 강조하면</span>, 회원가입 전 전환율과 심층 질문 응답률이 높아질 것이다
                            </div>
                        </div>

                        {/* Action */}
                        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E2E8F0', flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981', fontSize: '12px', fontWeight: 800, letterSpacing: '2px', marginBottom: '12px' }}>
                                <CheckCircle2 size={14} strokeWidth={2.5} /> ACTION
                            </div>
                            <div style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                시니어 친화 UI + <span style={{ fontWeight: 800 }}>"가족(자녀)에게도 절대 공유 안 됨"</span> 익명성 정책 온보딩 1단계 배치, 데이터 삭제 셀프 권한 제공
                            </div>
                        </div>

                        {/* Metrics */}
                        <div style={{ padding: '24px 32px', height: '140px', backgroundColor: '#F8FAFC' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6366F1', fontSize: '13px', fontWeight: 800, letterSpacing: '0px', marginBottom: '20px' }}>
                                <BarChart3 size={15} strokeWidth={2.5} /> 성공 지표 (기준값 → 목표)
                            </div>
                            <div style={{ display: 'flex', gap: '16px', position: 'relative', paddingLeft: '16px' }}>
                                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', backgroundColor: '#6366F1', borderRadius: '4px' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≥50%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>가입<br />전환율</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≥70%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>심층 질문<br />응답 완료율</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#E2E8F0', margin: '4px 0' }}></div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
                                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#6366F1' }}>≤5%</div>
                                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, lineHeight: 1.3 }}>개인정보<br />이탈률</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ backgroundColor: '#1E293B', padding: '16px 40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ backgroundColor: '#3B82F6', color: 'white', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, letterSpacing: '1px' }}>
                        NEXT STEP
                    </div>
                    <div style={{ fontSize: '15px', color: '#94A3B8', fontWeight: 500 }}>
                        3개 가설은 <span style={{ color: 'white', fontWeight: 800 }}>상호 배타적 세그먼트가 아님</span> — 동일 사용자가 복수 유형에 해당 가능 → <span style={{ color: '#A3E635', fontWeight: 800 }}>온보딩 설문으로 주요 유형 분류 후 맞춤 UX 분기</span> 적용 예정
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
