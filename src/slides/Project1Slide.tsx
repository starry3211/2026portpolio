import React from 'react';
import { motion } from 'framer-motion';

export const Project1Slide: React.FC = () => {
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
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--semantic-text-primary)' }}>Service Planning Overview</span>
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                    AI 시니어 마음건강 서비스 MVP 구축
                    <div className="tag-badge" style={{ marginLeft: '24px', backgroundColor: 'rgba(255, 127, 80, 0.12)', padding: '8px 16px', borderRadius: '100px' }}>
                        <span className="text-label" style={{ color: '#FF7F50' }}>
                            * B2C 출시 이전으로, 상세 화면은 블러 처리하고 언론에 노출된 내용 기준으로 배포합니다
                        </span>
                    </div>
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    마음건강과 인지 능력까지 - 내 인생의 두 번째 성장기를 위한, 나만의 자기돌봄 가이드, 다봄
                </p>
            </motion.div>

            <div style={{ display: 'flex', flex: 1, gap: '60px' }}>
                {/* Left Column - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ flex: 1.2, display: 'flex', flexDirection: 'column', paddingTop: '10px' }}
                >
                    <div className="text-h4" style={{ marginBottom: '6px' }}>
                        <span style={{ fontWeight: 700 }}>Period.</span> 2025. 08~2026. 03
                    </div>
                    <div className="text-h4" style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div><span style={{ fontWeight: 700 }}>Position/Contribution.</span> 기획 PL/100%</div>
                        <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)' }}>* 자서전적 기억 훈련 AI 알고리즘은 고려대학교 설계</div>
                    </div>

                    <div className="kpi-block" style={{ padding: '12px 20px', marginBottom: '32px', display: 'inline-block', alignSelf: 'flex-start' }}>
                        <span className="text-body1"><span style={{ fontWeight: 800 }}>Business Impact.</span> 삼성물산 프리미엄 시니어타운 앱 서비스 마음건강 섹션 탑재 계약 성사</span>
                    </div>

                    <div className="text-body1" style={{ color: 'var(--semantic-text-primary)', wordBreak: 'keep-all', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p style={{ margin: 0 }}>
                            고려대학교 심리학부가 설계한 검증된 자서전적 기억 훈련 AI 로직과<br />
                            표준화된 마음 검진 도구, 인지 훈련 프로세스 기반으로 개발된<br />
                            전문성과 공신력을 갖춘 AI 기반 시니어 멘탈케어 서비스입니다.
                        </p>

                        <p style={{ margin: 0 }}>
                            예방적·일상적 차원에서 시니어의 정신건강을 관리할 수 있도록<br />
                            동기강화와 지속성을 위한 게이미피케이션을 더한 패키지 구성으로 설계하였습니다.
                        </p>

                        <p style={{ margin: 0 }}>
                            B2B 영업 시 제안 자료 작성 및 발표, 질의응답 대응까지 담당했습니다.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column - Images */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: 1, position: 'relative' }}
                >
                    <div className="card-base text-h3" style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '55%',
                        height: '75%',
                        backgroundColor: 'var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--semantic-text-secondary)',
                    }}>
                        서비스 이미지1
                    </div>

                    <div className="card-base text-h3" style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '0',
                        width: '60%',
                        height: '80%',
                        backgroundColor: 'var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--semantic-text-secondary)',
                    }}>
                        서비스 이미지2
                    </div>
                </motion.div>
            </div>

            {/* Bottom Features Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                    marginTop: 'auto',
                    marginBottom: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    zIndex: 10
                }}
            >
                <div className="text-h3" style={{ fontWeight: 800 }}>시니어 마음건강 패키지</div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'stretch' }}>
                    {/* 마음 건강 */}
                    <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--semantic-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                        <div className="text-h4">마음 건강</div>
                        <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
                            <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                                다봄이와<br />기억 찾기
                            </div>
                            <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                                마음 건강<br />검진
                            </div>
                            <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                                마음 컨디션<br />리포트
                            </div>
                        </div>
                    </div>

                    {/* 두뇌 건강 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--semantic-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                        <div className="text-h4">두뇌 건강</div>
                        <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                            두뇌 건강 운동
                        </div>
                    </div>

                    {/* 게이미피케이션 & 리워드 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--semantic-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                        <div className="text-h4">게이미피케이션&리워드</div>
                        <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                            기억의 정원
                        </div>
                    </div>

                    {/* 리마인드 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: 'var(--semantic-bg)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                        <div className="text-h4">리마인드</div>
                        <div className="card-base hover-card text-body1" style={{ flex: 1, padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                            사진첩
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Page Number */}
            <div className="text-h4" style={{ position: 'absolute', bottom: '30px', left: '0', right: '0', textAlign: 'center', color: 'var(--semantic-text-secondary)' }}>
                4
            </div>
        </div>
    );
};
