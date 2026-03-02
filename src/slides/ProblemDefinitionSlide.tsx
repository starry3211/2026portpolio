import React from 'react';
import { motion } from 'framer-motion';

export const ProblemDefinitionSlide: React.FC = () => {
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
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px' }}>
                    01 | <span style={{ color: 'var(--semantic-text-primary)' }}>02 문제 정의</span> | 03 | 04
                </div>
                <h1 className="text-display" style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    시니어 멘탈 케어의 실제 장벽은 사회적 낙인과 두려움
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    비즈니스 성장의 1순위 과제는 기능 개발이 아닌, <span style={{ color: 'var(--semantic-text-primary)', borderBottom: '2px solid var(--semantic-accent)' }}>사용자의 '심리적 거부감'을 해소하는 것</span>
                </p>
            </motion.div>

            {/* Content Container */}
            <div style={{ display: 'flex', gap: '60px', flex: 1, alignItems: 'center' }}>

                {/* Left Side: Chart UI Mockup */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1,
                        padding: '40px',
                    }}
                >
                    <h3 className="text-h3" style={{ marginBottom: '8px' }}>
                        60대 정신건강 치료 시 가장 우려되는 점
                    </h3>
                    <p className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '30px' }}>
                        단위: % (1+2순위 기준 복수응답) | 출처: 2024년 국민 정신건강 지식 및 태도 조사
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {/* Chart Row 1 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 700, color: '#FF0055' }}>
                                주변의 부정적인 시선
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '49.4%', backgroundColor: '#FF0055', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 700 }}>
                                    49.4
                                </div>
                            </div>
                        </div>

                        {/* Chart Row 2 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 600, color: 'var(--semantic-text-secondary)' }}>
                                상담(치료) 효과 의구심
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '33.2%', backgroundColor: '#8B9BB4', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                    33.2
                                </div>
                            </div>
                        </div>

                        {/* Chart Row 3 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 600, color: 'var(--semantic-text-secondary)' }}>
                                약물 치료 부작용 우려
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '31.6%', backgroundColor: '#8B9BB4', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                    31.6
                                </div>
                            </div>
                        </div>

                        {/* Chart Row 4 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 600, color: 'var(--semantic-text-secondary)' }}>
                                치료 비용에 대한 부담감
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '29.9%', backgroundColor: '#8B9BB4', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                    29.9
                                </div>
                            </div>
                        </div>

                        {/* Chart Row 5 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 600, color: 'var(--semantic-text-secondary)', lineHeight: 1.2 }}>
                                치료 기록으로 인한<br />불이익
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '28.7%', backgroundColor: '#8B9BB4', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                    28.7
                                </div>
                            </div>
                        </div>

                        {/* Chart Row 6 */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div className="text-body2" style={{ width: '160px', textAlign: 'right', fontWeight: 600, color: 'var(--semantic-text-secondary)', lineHeight: 1.2 }}>
                                치료 방법에 대한 정보<br />부족
                            </div>
                            <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', height: '28px', borderRadius: '4px', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '26.3%', backgroundColor: '#8B9BB4', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', color: 'white', fontSize: '14px', fontWeight: 600 }}>
                                    26.3
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Text Points */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '40px' }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-primary)' }}></div>
                            <h3 className="text-h3" style={{ margin: 0 }}>
                                "노인 전용"의 투박한 실버 디자인 지양
                            </h3>
                        </div>
                        <p className="text-h4" style={{ color: 'var(--semantic-text-secondary)', marginLeft: '18px', margin: 0, wordBreak: 'keep-all' }}>
                            - 사용자를 '도움이 필요한 약자'로 규정짓는<br />
                            &nbsp;&nbsp;전형적인 실버 UI가 아닌 인클루시브 디자인 적용
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-primary)' }}></div>
                            <h3 className="text-h3" style={{ margin: 0 }}>
                                시혜적 태도 대신 '주도적 돌봄' 환경 제공
                            </h3>
                        </div>
                        <p className="text-h4" style={{ color: 'var(--semantic-text-secondary)', marginLeft: '18px', margin: 0, wordBreak: 'keep-all' }}>
                            - 환자 취급을 받거나 일방적인 지시를 받는 느낌이 아닌 스스로<br />
                            &nbsp;&nbsp;삶과 감정을 통제하고 관리할 수 있도록 주도권을 부여하고<br />
                            &nbsp;&nbsp;자존감을 보호하는 설계
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-primary)' }}></div>
                            <h3 className="text-h3" style={{ margin: 0 }}>
                                평가 없는 공감과 격려의 페르소나
                            </h3>
                        </div>
                        <p className="text-h4" style={{ color: 'var(--semantic-text-secondary)', marginLeft: '18px', margin: 0, wordBreak: 'keep-all' }}>
                            - 전문가의 권위적인 태도보다는,<br />
                            &nbsp;&nbsp;'따뜻하고 든든한 동반자'로서의 AI 커뮤니케이션 톤앤매너 제공
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
