import React from 'react';
import { motion } from 'framer-motion';

export const AgeSpendingChart: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
            <div style={{
                flex: 1,
                backgroundColor: '#F4F2E6',
                padding: '40px 50px 40px 40px',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                color: '#111'
            }}>
                {/* User Requested Title */}
                <div style={{ color: '#111', fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>
                    [연령 별 소비 지출 규모]
                </div>

                {/* Image Main Title */}
                <div style={{ marginBottom: '40px', lineHeight: 1.4, fontSize: '24px', letterSpacing: '-0.5px' }}>
                    25~39세 대비<br />
                    55~69세 전체의 소비지출 규모
                </div>

                {/* Main Line Chart Area */}
                <div style={{ flex: 1, position: 'relative', borderLeft: '1px solid #A0A0A0', borderBottom: '1px solid #A0A0A0', marginTop: '40px', marginBottom: '70px', marginLeft: '30px', marginRight: '30px' }}>

                    {/* Y-axis labels */}
                    <div style={{ position: 'absolute', top: '-40px', left: '-20px', color: '#111', fontSize: '20px', transform: 'translateX(-50%)', letterSpacing: '-0.5px' }}>(배)</div>
                    <div style={{ position: 'absolute', top: '0', left: '-20px', color: '#111', fontSize: '22px', transform: 'translateX(-100%)' }}>2</div>
                    <div style={{ position: 'absolute', top: '50%', left: '-20px', color: '#111', fontSize: '22px', transform: 'translate(-100%, -50%)' }}>1</div>
                    <div style={{ position: 'absolute', bottom: '-12px', left: '-20px', color: '#111', fontSize: '22px', transform: 'translateX(-100%)' }}>0</div>

                    {/* SVG Line */}
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
                        <path
                            d="M 0 55 C 15 50, 25 45, 37 38 C 50 35, 60 20, 73 15 C 85 10, 92 40, 100 42"
                            fill="none"
                            stroke="#2962A9"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                        />

                        {/* Vertical dotted line at 2057 */}
                        <line x1="73" y1="15" x2="73" y2="100" stroke="#A0A0A0" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* Dot at 2057 */}
                        <circle cx="73" cy="15" r="3.5" fill="#2962A9" stroke="#F4F2E6" strokeWidth="1" />
                    </svg>

                    {/* Peak value label */}
                    <div style={{ position: 'absolute', top: '2%', left: '73%', transform: 'translate(-50%, -100%)', whiteSpace: 'nowrap', zIndex: 10, fontSize: '24px', color: '#111', letterSpacing: '-0.5px' }}>
                        (2057년, 1.7배)
                    </div>

                    {/* X-axis labels */}
                    <div style={{ position: 'absolute', bottom: '-40px', width: '100%', color: '#111', fontSize: '22px', letterSpacing: '-0.5px' }}>
                        <span style={{ position: 'absolute', left: '0', transform: 'translateX(-50%)' }}>2022</span>
                        <span style={{ position: 'absolute', left: '37%', transform: 'translateX(-50%)' }}>2040</span>
                        <span style={{ position: 'absolute', left: '73%', transform: 'translateX(-50%)' }}>2057</span>
                        <span style={{ position: 'absolute', right: '0', transform: 'translateX(20%)' }}>2070 (연도)</span>
                    </div>
                </div>

                <div style={{ color: '#111', paddingLeft: '30px', lineHeight: 1.5, fontSize: '18px', letterSpacing: '-0.5px' }}>
                    <span style={{ display: 'inline-block', verticalAlign: 'top' }}>출처:&nbsp;</span>
                    <span style={{ display: 'inline-block' }}>
                        통계청 가계동향조사와 장래인구추계 결과를<br />
                        LG경영연구원이 분석
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
