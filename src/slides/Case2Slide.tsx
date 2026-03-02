import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Users, ShieldCheck, TrendingUp } from 'lucide-react';

export const Case2Slide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            padding: '80px 100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '30px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | <span style={{ color: 'var(--semantic-text-primary)' }}>02 비즈니스 피벗 대응 및 리스크 관리</span> | 03 | 04
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px' }}>
                    원더클럽: 비즈니스 Pivot을 위한 안정적 런칭 전략
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-primary)', margin: 0 }}>
                    매칭 알고리즘 설계 및 앱 스토어 UGC 심사 정책 준수를 통한 성공적인 비즈니스 피벗
                </p>
            </motion.div>

            {/* Pivot Overview Card */}
            <motion.div
                className="card-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    padding: '24px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '40px',
                    marginBottom: '30px'
                }}
            >
                <div style={{ textAlign: 'center', flex: 1 }}>
                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '8px' }}>AS-IS (Before)</div>
                    <div className="text-h3" style={{ marginBottom: '4px' }}>단순 골프장 부킹 유틸리티</div>
                    <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)' }}>목적 달성 후 즉각 이탈 발생 (초기 이탈률 높음)</div>
                </div>

                <div style={{ color: 'var(--semantic-accent)' }}><ArrowRightLeft size={40} /></div>

                <div style={{ textAlign: 'center', flex: 1, backgroundColor: 'rgba(37,99,235,0.05)', padding: '20px', borderRadius: '4px' }}>
                    <div className="text-label" style={{ color: 'var(--semantic-accent)', marginBottom: '8px' }}>TO-BE (After)</div>
                    <div className="text-h3" style={{ color: 'var(--primary-color)', marginBottom: '4px' }}>조인(Join) 소셜 네트워크 플랫폼</div>
                    <div className="text-body1" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>커뮤니티 형성을 통한 지속적인 앱 체류 (리텐션 강화)</div>
                </div>
            </motion.div>

            {/* Two Track Details */}
            <div style={{ display: 'flex', gap: '30px', flex: 1 }}>
                {/* Track 1 */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1,
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="tag-badge" style={{ backgroundColor: 'var(--semantic-text-primary)', color: 'white', padding: '4px 12px' }}>Track 1</div>
                        <h3 className="text-h3">신뢰 지수 기반 매칭 알고리즘 설계</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Diagram for Track 1 */}
                        <div style={{
                            backgroundColor: 'var(--semantic-bg)',
                            borderRadius: '8px',
                            padding: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-light)',
                            marginBottom: '8px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', backgroundColor: 'var(--semantic-surface)', padding: '4px 12px', borderRadius: '100px', border: '1px solid var(--border-light)' }}>연령/성별</div>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', backgroundColor: 'var(--semantic-surface)', padding: '4px 12px', borderRadius: '100px', border: '1px solid var(--border-light)' }}>관심사/실력</div>
                                </div>
                                <div style={{ color: 'var(--border-light)' }}>--&gt;</div>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(37,99,235,0.1)', border: '2px solid var(--semantic-accent)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', fontWeight: 700, fontSize: '14px', textAlign: 'center'
                                }}>신뢰 지수</div>
                                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--semantic-accent)' }}></div>
                                <div className="text-body2" style={{ backgroundColor: 'var(--semantic-text-primary)', color: 'white', padding: '8px 16px', borderRadius: '4px', fontWeight: 700 }}>최적의 동반자</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--semantic-accent)', marginTop: '4px' }}><Users size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                낯선 사람과의 라운딩에 대한 <strong style={{ color: 'var(--semantic-text-primary)' }}>Stranger Danger(심리적 부담감)</strong> 이슈 도출 및 정의
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--semantic-accent)', marginTop: '4px' }}><TrendingUp size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                관심사, 실력, 성별 데이터를 가중치로 환산하여 추천 로직 고도화
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '20px', borderLeft: '4px solid var(--success-color)' }}>
                        <div className="text-body1" style={{ fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>Result (리텐션 방어)</div>
                        <div className="text-h4" style={{ color: 'var(--success-color)', fontWeight: 600 }}>
                            맞춤형 알고리즘 설계로 소셜 기능 도입 초기 이탈 방지 구조 구축 완료
                        </div>
                    </div>
                </motion.div>

                {/* Track 2 */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1,
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="tag-badge" style={{ backgroundColor: 'var(--destructive-color)', color: 'white', padding: '4px 12px' }}>Track 2</div>
                        <h3 className="text-h3">선제적 컴플라이언스 및 UGC 정책 방어</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Equation for Track 2 */}
                        <div style={{
                            backgroundColor: 'var(--semantic-bg)',
                            borderRadius: '8px',
                            padding: '28px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-light)',
                            marginBottom: '8px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div className="text-body2" style={{ backgroundColor: 'var(--semantic-surface)', padding: '10px 20px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 600 }}>게시물 신고/차단</div>
                                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', fontWeight: 300 }}>+</div>
                                <div className="text-body2" style={{ backgroundColor: 'var(--semantic-surface)', padding: '10px 20px', borderRadius: '4px', border: '1px solid var(--border-light)', fontWeight: 600 }}>UGC 운영 가이드</div>
                                <div style={{ color: 'var(--semantic-accent)', fontWeight: 700, margin: '0 8px' }}>➔</div>
                                <div className="text-body2" style={{ backgroundColor: 'var(--semantic-surface)', padding: '10px 20px', borderRadius: '4px', border: '1px solid var(--semantic-accent)', color: 'var(--semantic-accent)', fontWeight: 700 }}>앱 심사 Pass</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--destructive-color)', marginTop: '4px' }}><ShieldCheck size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                소셜 앱 전환 시 직면하는 <strong style={{ color: 'var(--semantic-text-primary)' }}>앱 스토어 심사 리스크(UGC 가이드라인 위반)</strong> 선제적 파악
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--destructive-color)', marginTop: '4px' }}><ShieldCheck size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                사용자 신고 기능, 게시글 차단 기능 등 필수 UGC 운영 정책 및 기능 즉각 기획 반영
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', padding: '20px', borderLeft: '4px solid var(--success-color)' }}>
                        <div className="text-body1" style={{ fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>Result (리스크 관리)</div>
                        <div className="text-h4" style={{ color: 'var(--success-color)', fontWeight: 600 }}>
                            까다로운 스토어 심사를 단번에 통과하여 일정 지연 없이 안정적인 런칭 성공
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
