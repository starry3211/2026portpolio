import React from 'react';
import { motion } from 'framer-motion';
import { Network, Settings, Rocket } from 'lucide-react';

export const AXSeminarSlide: React.FC = () => {
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
                style={{ marginBottom: '80px' }}
            >
                <h1 className="text-display" style={{ margin: 0 }}>
                    AX 세미나 진행 및 AI 기반 워크플로우 정의
                </h1>
            </motion.div>

            {/* Content Body */}
            <div style={{ display: 'flex', gap: '80px', flex: 1 }}>

                {/* Left Column: Storytelling */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                        paddingRight: '20px'
                    }}
                >
                    <div>
                        <h2 className="text-h2" style={{ marginBottom: '16px', lineHeight: 1.4 }}>
                            에이전시의 고질적인 비효율, AI로 돌파구를 찾다.<br />
                            조롱과 냉소를 설득과 혁신으로 바꾼 체인지 메이커
                        </h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.7, margin: 0, wordBreak: 'keep-all' }}>
                            에이전시 환경은 항상 짧은 제안 일정과 방대한 수동 작업이라는 비효율과 싸워야 했습니다. 저는 이러한 기획 리소스 낭비를 극복하기 위해 실무에 AI 툴을 도입하는 돌파구를 계획했습니다.
                        </p>
                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.7, margin: 0, wordBreak: 'keep-all' }}>
                            초기에는 기존 방식을 고수하는 실무진의 반대와 AI에 대한 조직의 냉소가 존재했습니다. 하지만 아무리 훌륭한 기술이라도 <strong style={{ color: 'var(--semantic-text-primary)' }}>'조직의 수용성(문화)'</strong>이 없으면 작동하지 않는다는 것을 깨달았습니다.
                        </p>
                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.7, margin: 0, wordBreak: 'keep-all' }}>
                            이에 사내 세미나를 주최하여 <strong style={{ color: 'var(--semantic-text-primary)' }}>'기획자의 AI 활용성'</strong>을 직접 시연하며 구성원들을 설득하기 위해 노력했습니다. 이는 단순한 툴 도입을 넘어 기획자의 일하는 방식 자체를 재정의하는 계기가 되었고, 결과적으로 40명 규모 기획 조직도가 AX향으로 변경되는 변화를 이끌어냈습니다.
                        </p>
                    </div>

                    <div style={{ marginTop: 'auto', padding: '30px', backgroundColor: 'var(--semantic-bg)', borderRadius: '16px', borderLeft: '6px solid var(--semantic-text-primary)' }}>
                        <p className="text-h4" style={{ color: 'var(--semantic-text-primary)', lineHeight: 1.6, margin: 0, wordBreak: 'keep-all' }}>
                            "진정한 변화 관리는 훌륭한 기술 이전에,<br />
                            결국 <span style={{ color: 'var(--primary-color)' }}>'사람의 마음'</span>을 얻는 것에서 시작됨을 배운 값진 경험이었습니다."
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: Key Achievements Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1.2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    {/* Card 1 */}
                    <div className="card-base" style={{
                        padding: '32px',
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', color: 'var(--semantic-text-primary)', flexShrink: 0 }}>
                            <Network size={32} strokeWidth={1.5} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            <h3 className="text-h3" style={{ margin: 0 }}>1. AX 세미나 주최 및 리더십 확보</h3>
                            <ul className="text-body2" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        AI에 대한 조직의 저항을 해소하기 위해 <strong style={{ color: 'var(--semantic-text-primary)' }}>사내 세미나 주최 및 실무 시연 진행</strong>.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        사내 AI 도입 리더십을 공식적으로 인정받아 <strong style={{ color: 'var(--semantic-text-primary)' }}>AX 리더로 발탁</strong>.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card-base" style={{
                        padding: '32px',
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', color: 'var(--semantic-text-primary)', flexShrink: 0 }}>
                            <Settings size={32} strokeWidth={1.5} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            <h3 className="text-h3" style={{ margin: 0 }}>2. 기획 업무 AX 워크플로우 개선</h3>
                            <ul className="text-body2" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        NotebookLM, Gemini 등을 활용해 <strong style={{ color: 'var(--semantic-text-primary)' }}>제안서 목차 구성 및 레퍼런스 분석 자동화</strong>.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        와이어프레임 피그마 수동 작도를 마크다운 UI 렌더링으로 대체 및 <strong style={{ color: 'var(--semantic-text-primary)' }}>기획서 기반 QA/TC 자동 생성 프로세스 구축</strong>.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card-base" style={{
                        padding: '32px',
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'flex-start'
                    }}>
                        <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', color: 'var(--semantic-text-primary)', flexShrink: 0 }}>
                            <Rocket size={32} strokeWidth={1.5} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            <h3 className="text-h3" style={{ margin: 0 }}>3. 개인 프로덕트 '카페인 오프' 전개</h3>
                            <ul className="text-body2" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        확립된 최적의 AI 기획 워크플로우를 바탕으로 현재 <strong style={{ color: 'var(--semantic-text-primary)' }}>웰니스 프로덕트 '카페인 오프' 구축 진행 중</strong>.
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--semantic-text-secondary)', marginTop: '8px', flexShrink: 0 }}></div>
                                    <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        기획부터 개발에 이르는 전 과정을 AI로 주도하며 <strong style={{ color: 'var(--semantic-text-primary)' }}>빠르고 린한 워크 플로우</strong> 검증.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};
