import React from 'react';
import { motion } from 'framer-motion';
import { AgeSpendingChart } from './components/TargetAnalysis/AgeSpendingChart';
import { CustomerSegmentMatrix } from './components/TargetAnalysis/CustomerSegmentMatrix';
import { ActiveSeniorFeatures } from './components/TargetAnalysis/ActiveSeniorFeatures';

export const TargetAnalysisSlide: React.FC = () => {
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
                style={{ marginBottom: '60px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px' }}>
                    <span style={{ color: 'var(--semantic-text-primary)' }}>01 타겟 분석</span> | 02 | 03 | 04
                </div>
                <h1 className="text-display" style={{ display: 'flex', alignItems: 'center' }}>
                    나를 위한 소비를 아끼지 않는 '<span style={{ color: 'var(--semantic-accent)' }}>액티브 시니어</span>'
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginTop: '20px' }}>
                    전체 시니어층을 아우르면서도, 탄탄한 경제력을 가지고 있는 <span style={{ color: 'var(--semantic-text-primary)', borderBottom: '2px solid var(--semantic-accent)' }}>액티브 시니어</span>를 메인 타겟으로 설정
                </p>
            </motion.div>

            {/* Content Container */}
            <div style={{ display: 'flex', gap: '40px', flex: 1 }}>
                <AgeSpendingChart />
                <CustomerSegmentMatrix />
                <ActiveSeniorFeatures />
            </div>
        </div>
    );
};
