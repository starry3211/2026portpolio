import React from 'react';
import { motion } from 'framer-motion';

export const ActiveSeniorFeatures: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
            <h3 className="text-h2" style={{ color: 'var(--semantic-text-primary)', marginBottom: '32px' }}>액티브 시니어 특징</h3>
            <div style={{ flex: 1, position: 'relative' }}>

                {/* Circle 1 */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', width: '220px', height: '220px', borderRadius: '50%', backgroundColor: '#F0F5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="text-h3" style={{ color: 'var(--semantic-text-primary)' }}>새로운<br />문화/트렌드 적응</div>
                    <div className="text-display" style={{ color: '#7B9342', marginTop: '8px', fontSize: '40px' }}>78.1%</div>
                </div>

                {/* Circle 2 */}
                <div style={{ position: 'absolute', top: '120px', right: '40px', width: '180px', height: '180px', borderRadius: '50%', backgroundColor: '#F0F5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="text-h4" style={{ color: 'var(--semantic-text-primary)', fontWeight: 600 }}>나를 위한<br />소비</div>
                    <div className="text-h2" style={{ color: '#7B9342', marginTop: '8px' }}>53.1%</div>
                </div>

                {/* Circle 3 */}
                <div style={{ position: 'absolute', bottom: '80px', left: '60px', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#F0F5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="text-h4" style={{ color: 'var(--semantic-text-primary)', fontWeight: 600 }}>다양한 브랜드<br />경험 가치 추구</div>
                    <div className="text-h1" style={{ color: '#7B9342', marginTop: '8px', fontSize: '36px' }}>81.3%</div>
                </div>

                {/* Circle 4 */}
                <div style={{ position: 'absolute', bottom: '40px', right: '20px', width: '160px', height: '160px', borderRadius: '50%', backgroundColor: '#F0F5E1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <div className="text-h4" style={{ color: 'var(--semantic-text-primary)', fontWeight: 600 }}>건강을 위한<br />규칙적 운동</div>
                    <div className="text-h2" style={{ color: '#7B9342', marginTop: '8px', fontSize: '28px' }}>65.6%</div>
                </div>

                {/* Minor Circles */}
                <div className="text-label" style={{ position: 'absolute', top: '10px', right: '80px', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>가족</div>
                <div className="text-label" style={{ position: 'absolute', bottom: '150px', left: '-20px', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>제품의<br />용량</div>
                <div className="text-label" style={{ position: 'absolute', bottom: '0px', left: '160px', width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'var(--semantic-text-secondary)', opacity: 0.7 }}>제품의<br />가격</div>

            </div>
        </motion.div>
    );
};
