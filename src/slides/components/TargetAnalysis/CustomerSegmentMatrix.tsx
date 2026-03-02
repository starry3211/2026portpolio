import React from 'react';
import { motion } from 'framer-motion';

export const CustomerSegmentMatrix: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
            <h3 className="text-h2" style={{ color: 'var(--semantic-text-primary)', marginBottom: '32px' }}>고객 세분화 매트릭스</h3>
            <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 0 40px 40px'
            }}>
                {/* Axes */}
                <div style={{ position: 'absolute', top: 0, bottom: '40px', left: '40px', width: '2px', backgroundColor: 'var(--semantic-text-primary)' }} />
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: 0, height: '2px', backgroundColor: 'var(--semantic-text-primary)' }} />
                <div style={{ position: 'absolute', top: '-10px', left: '34px', width: 0, height: 0, borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: '10px solid var(--semantic-text-primary)' }} />
                <div style={{ position: 'absolute', bottom: '36px', right: '-10px', width: 0, height: 0, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: '10px solid var(--semantic-text-primary)' }} />

                <div className="text-body1" style={{ position: 'absolute', left: '-10px', top: '50%', transform: 'translateY(-50%) rotate(-90deg)', color: 'var(--semantic-text-primary)', fontWeight: 600 }}>
                    Physical/Economic Vitality
                </div>
                <div className="text-body1" style={{ position: 'absolute', bottom: '5px', left: '50%', transform: 'translateX(-50%)', color: 'var(--semantic-text-primary)', fontWeight: 600 }}>
                    Consumption/Activity Level
                </div>

                {/* Matrix Grid */}
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', padding: '20px' }}>
                    <div style={{ backgroundColor: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '8px' }}>
                        <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)' }}>Pre-senior</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>(프리 시니어)</div>
                    </div>
                    <div style={{ backgroundColor: 'var(--semantic-accent)', display: 'flex', padding: '24px', flexDirection: 'column', justifyContent: 'center', borderRadius: '8px' }}>
                        <div className="text-h3" style={{ color: 'white', textAlign: 'center', marginBottom: '8px' }}>Active Senior<br />(액티브 시니어)</div>
                        <ul className="text-body1" style={{ color: 'white', paddingLeft: '20px', marginTop: '16px' }}>
                            <li>은퇴 후 탄탄한 경제력</li>
                            <li>신체적 제약 없음</li>
                            <li>자기계발 및 새로운 경험 추구</li>
                        </ul>
                    </div>
                    <div style={{ backgroundColor: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '8px' }}>
                        <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)' }}>Silver</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>(실버)</div>
                    </div>
                    <div style={{ backgroundColor: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', borderRadius: '8px' }}>
                        <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)' }}>Other Senior</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>(아더 시니어)</div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
