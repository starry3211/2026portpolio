import React from 'react';
import { motion } from 'framer-motion';

export const OutroSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)', // Clean white background for minimal outro
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 100px',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
        }}>
            {/* Main Headline */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ marginBottom: '60px' }}
            >
                <h1 className="text-display" style={{
                    fontSize: '64px',
                    lineHeight: 1.3,
                    margin: 0
                }}>
                    문제를 집요하게 파고들고,<br />
                    기꺼이 실행하여 증명하겠습니다.
                </h1>
            </motion.div>

            {/* Sub-message */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                style={{ marginBottom: '100px', maxWidth: '1000px' }}
            >
                <p className="text-h2" style={{
                    color: 'var(--semantic-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    wordBreak: 'keep-all'
                }}>
                    주어진 환경의 한계를 핑계 삼지 않고,<br />
                    데이터로 논리를 세우고 AI로 실행의 속도를 높여왔습니다.<br />
                    이제는 완결성 있는 프로덕트 사이클 안에서 비즈니스의 진짜 성장을 이끄는<br />
                    <strong style={{ color: 'var(--semantic-text-primary)' }}>프로덕트 오너(PO)</strong>로 도약하고자 합니다.
                </p>
            </motion.div>

            {/* Contact & CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px'
                }}
            >
                <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6 }}>
                    시간 내어 포트폴리오를 검토해 주셔서 감사합니다.<br />
                    더 깊은 문제 해결의 과정은 면접 자리에서 나누고 싶습니다.
                </div>

                {/* Contact Info Box */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                    padding: '24px 48px',
                    backgroundColor: 'var(--semantic-bg)',
                    borderRadius: '16px',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>NAME</span>
                        <span className="text-h4" style={{ margin: 0, fontWeight: 800, color: 'var(--semantic-text-primary)' }}>황다혜</span>
                    </div>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--border-light)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>EMAIL</span>
                        <span className="text-h4" style={{ margin: 0, fontWeight: 800, color: 'var(--semantic-text-primary)' }}>sense3211@gmail.com</span>
                    </div>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--border-light)' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>PHONE</span>
                        <span className="text-h4" style={{ margin: 0, fontWeight: 800, color: 'var(--semantic-text-primary)' }}>010-5065-6504</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
