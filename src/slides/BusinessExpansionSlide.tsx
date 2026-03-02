import React from 'react';
import { motion } from 'framer-motion';

export const BusinessExpansionSlide: React.FC = () => {
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
                style={{ marginBottom: '50px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 | 03 | 04 | 05 | <span style={{ color: 'var(--semantic-text-primary)' }}>06 비즈니스 확장</span>
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px' }}>
                    삼성물산 프리미엄 시니어타운 B2B 계약 체결
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    MVP를 통해 B2B 계약 체결의 성과 창출
                </p>
            </motion.div>

            {/* Content Container - Staircase Cards */}
            <div style={{ display: 'flex', flex: 1, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>

                {/* Staircase Background Line */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)',
                    zIndex: 0
                }} />

                <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: 1, width: '100%', justifyContent: 'space-between', padding: '0 40px' }}>

                    {/* Card 1 */}
                    <motion.div
                        className="card-base"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            padding: '40px',
                            width: '420px',
                            height: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignSelf: 'flex-start',
                            marginTop: '-100px'
                        }}
                    >
                        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111', marginBottom: '30px' }}>
                            The Deal
                        </h2>
                        <p style={{ fontSize: '22px', color: '#111', lineHeight: 1.5, margin: 0, fontWeight: 600, wordBreak: 'keep-all' }}>
                            프리미엄 시니어 타운,<br />
                            '노블카운티' 앱 내 다봄 솔루션 탑재
                        </p>
                    </motion.div>

                    {/* Line Connecting Card 1 to Card 2 */}
                    <div style={{
                        position: 'absolute',
                        left: '420px',
                        top: '12%',
                        width: '30px', /* exact gap width */
                        height: '2px',
                        backgroundColor: '#CBD5E1', /* slightly darker visible line */
                        zIndex: 0
                    }} />

                    {/* Card 2 */}
                    <motion.div
                        className="card-base"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            padding: '40px',
                            width: '420px',
                            height: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111', marginBottom: '30px' }}>
                            The Fit
                        </h2>
                        <div style={{ fontSize: '22px', color: '#111', lineHeight: 1.5, margin: 0, fontWeight: 600, wordBreak: 'keep-all' }}>
                            확실한 UX 강점과<br />
                            시니어 타겟 적합성<br />
                            <span style={{ fontSize: '20px', color: '#666', fontWeight: 500, marginTop: '8px', display: 'block' }}>(Product-Market Fit)</span>
                        </div>
                    </motion.div>

                    {/* Line Connecting Card 2 to Card 3 */}
                    <div style={{
                        position: 'absolute',
                        left: '870px', /* 420 + 30 + 420 */
                        top: '88%',
                        width: '30px', /* gap width */
                        height: '2px',
                        backgroundColor: '#CBD5E1',
                        zIndex: 0
                    }} />

                    {/* Card 3 */}
                    <motion.div
                        className="card-base"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{
                            padding: '40px',
                            width: '420px',
                            height: '280px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignSelf: 'flex-end',
                            marginBottom: '-100px',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111', marginBottom: '30px' }}>
                            Business Impact
                        </h2>
                        <p style={{ fontSize: '22px', color: '#111', lineHeight: 1.5, margin: 0, fontWeight: 700, wordBreak: 'keep-all' }}>
                            최소한의 개발 리소스로<br />
                            <span style={{ color: '#0369A1' }}>3,500만 원 규모의 계약 성과 창출</span>
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
