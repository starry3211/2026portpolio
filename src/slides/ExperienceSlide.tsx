import React from 'react';
import { motion } from 'framer-motion';

export const ExperienceSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            padding: '120px 100px',
            position: 'relative'
        }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '80px', textAlign: 'center' }}
            >
                <h1 className="text-display" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', justifyContent: 'center' }}>
                    Key Job Experience<span style={{ color: 'var(--semantic-accent)', fontSize: '64px', lineHeight: 1 }}>.</span>
                </h1>
            </motion.div>

            {/* Content Container */}
            <div style={{ display: 'flex', flex: 1, gap: '60px', marginTop: '40px', justifyContent: 'center' }}>

                {/* Experience 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="text-h3" style={{ marginBottom: '60px', textAlign: 'center', height: '60px' }}>
                        AI 시니어 마음건강 서비스 MVP 구축
                    </div>

                    <div style={{ position: 'relative', width: '280px', height: '280px', marginBottom: '60px' }}>
                        <div style={{ width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'var(--border-light)' }}></div>
                        <div className="text-display" style={{ position: 'absolute', top: '-10px', left: '10px', fontWeight: 400 }}>1</div>
                    </div>

                    <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '30px' }}>
                        #Healthcare #Product #Business
                    </div>

                    {/* Business Impact Badge */}
                    <div style={{ backgroundColor: 'var(--semantic-bg)', borderRadius: '40px', padding: '24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--semantic-accent)' }}></div>
                            <span className="text-h4" style={{ fontWeight: 800 }}>Business Impact</span>
                        </div>
                        <div className="text-body1" style={{ textAlign: 'center', wordBreak: 'keep-all' }}>
                            삼성물산 프리미엄 시니어타운 앱 서비스<br />
                            마음건강 섹션 탑재 계약 성사
                        </div>
                    </div>
                </motion.div>

                {/* Experience 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="text-h3" style={{ marginBottom: '60px', textAlign: 'center', height: '60px' }}>
                        데이터와 규정 기반 문제 해결
                    </div>

                    <div style={{ position: 'relative', width: '280px', height: '280px', marginBottom: '60px' }}>
                        <div style={{ width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'var(--border-light)' }}></div>
                        <div className="text-display" style={{ position: 'absolute', top: '-10px', left: '10px', fontWeight: 400 }}>2</div>
                    </div>

                    <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)' }}>
                        #Data #Logic #Rule
                    </div>
                </motion.div>

                {/* Experience 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <div className="text-h3" style={{ marginBottom: '60px', textAlign: 'center', height: '60px' }}>
                        AX 세미나 진행 및<br />AI 기반 워크플로우 정의
                    </div>

                    <div style={{ position: 'relative', width: '280px', height: '280px', marginBottom: '60px' }}>
                        <div style={{ width: '280px', height: '280px', borderRadius: '50%', backgroundColor: 'var(--border-light)' }}></div>
                        <div className="text-display" style={{ position: 'absolute', top: '-10px', left: '10px', fontWeight: 400 }}>3</div>
                    </div>

                    <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)' }}>
                        #AI #Prompt #Workflow
                    </div>
                </motion.div>

            </div>

        </div>
    );
};
