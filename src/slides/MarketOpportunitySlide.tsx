import React from 'react';
import { motion } from 'framer-motion';

export const MarketOpportunitySlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: '#EAECEF',
            display: 'flex',
            padding: '50px 60px',
            position: 'relative',
            gap: '30px',
            fontFamily: 'Pretendard, sans-serif'
        }}>
            {/* Left Sidebar */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '320px',
                    backgroundColor: '#17395C',
                    borderRadius: '24px 0 0 24px',
                    padding: '60px 40px',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#88A4C3', marginBottom: '32px' }}>
                    MARKET OPPORTUNITY
                </div>

                <h1 style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.3, marginBottom: '24px' }}>
                    왜 지금,<br />
                    <span style={{ color: '#4DB6AC' }}>시니어</span><br />
                    <span style={{ color: '#4DB6AC' }}>마음건강</span>인가?
                </h1>

                <p style={{ fontSize: '15px', color: '#A0B2C6', lineHeight: 1.6, marginBottom: 'auto', fontWeight: 400 }}>
                    변화는 먼 미래가 아니다.<br />
                    이미 시작된 지금의 이야기
                </p>

                <div style={{
                    position: 'relative',
                    marginTop: '80px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '36px 24px 24px',
                    border: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '20px',
                        backgroundColor: '#4DB6AC',
                        color: 'white',
                        padding: '6px 18px',
                        borderRadius: '100px',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '1px'
                    }}>
                        NOW
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '16px', fontWeight: 500, color: '#D2E0F2', margin: '14px 0 32px' }}>
                        <div>급증하는 시니어 인구</div>
                        <div>폭발하는 소비력</div>
                        <div>OECD 최하위 인프라</div>
                        <div>높은 자기관리 의지</div>
                    </div>

                    <div style={{ fontSize: '14px', color: 'white', fontWeight: 500, opacity: 0.9 }}>
                        → 지금이 최적의 진입 시점
                    </div>
                </div>
            </motion.div>

            {/* Right Content Area */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    flex: 1,
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                    gap: '20px',
                    padding: '10px 0'
                }}
            >
                {/* Chart 1: POPULATION */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#4DB6AC', letterSpacing: '2px', marginBottom: '8px' }}>POPULATION</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '6px' }}>50대 이상 인구, 이미 절반에 근접</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', marginBottom: '24px' }}>
                        2030년 <span style={{ color: '#F84F4F', fontWeight: 700 }}>50%+</span> 돌파 — <span style={{ color: '#4DB6AC', fontWeight: 700 }}>5년 안에 벌어질 일</span>
                    </div>

                    <div style={{ flex: 1, position: 'relative', marginTop: '10px' }}>
                        <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                            {/* Area fill */}
                            <path d="M 50 180 L 50 141 L 100 130 L 150 119 L 200 107 L 250 96 L 300 85 L 350 74 L 400 65 L 450 54 L 450 180 Z" fill="#E6F7F8" />

                            {/* Grid lines */}
                            {[40, 42, 44, 46, 48, 50, 53].map((val) => (
                                <g key={val}>
                                    <text x="0" y={180 - ((val - 40) * 12.3)} fontSize="12" fill="#A0AAB5" dominantBaseline="middle">{val}%</text>
                                    <line x1="40" y1={180 - ((val - 40) * 12.3)} x2="500" y2={180 - ((val - 40) * 12.3)} stroke="#F1F5F9" strokeWidth="1" />
                                </g>
                            ))}
                            {/* Line path */}
                            <path d="M 50 141 L 100 130 L 150 119 L 200 107 L 250 96 L 300 85 L 350 74 L 400 65 L 450 54" fill="none" stroke="#4DB6AC" strokeWidth="3" />
                            {/* Points */}
                            <circle cx="50" cy="141" r="5" fill="#4DB6AC" />
                            <circle cx="100" cy="130" r="5" fill="#4DB6AC" />
                            <circle cx="150" cy="119" r="5" fill="#4DB6AC" />
                            <circle cx="200" cy="107" r="5" fill="#4DB6AC" />
                            <circle cx="250" cy="96" r="5" fill="#4DB6AC" />
                            <circle cx="300" cy="85" r="5" fill="#4DB6AC" />
                            <circle cx="350" cy="74" r="5" fill="#4DB6AC" />
                            <circle cx="400" cy="65" r="5" fill="#4DB6AC" />
                            <circle cx="450" cy="54" r="8" fill="#4DB6AC" stroke="#F84F4F" strokeWidth="3" />

                            <text x="445" y="38" fontSize="14" fontWeight="bold" fill="#F84F4F" textAnchor="end">50% 돌파!</text>
                        </svg>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '45px', marginRight: '35px', marginTop: '12px', fontSize: '13px', color: '#A0AAB5' }}>
                            <span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span><span>2027</span><span>2028</span><span>2029</span><span>2030</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#A0AAB5', textAlign: 'right', marginTop: '16px' }}>출처: 통계청 장래인구추계</div>
                </div>

                {/* Chart 2: CONSUMPTION */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#4DB6AC', letterSpacing: '2px', marginBottom: '8px' }}>CONSUMPTION</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '6px' }}>시니어 소비력, 지금 이미 청년을 추월 중</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', marginBottom: '24px' }}>
                        55~69세 소비 / 25~39세 대비 — <span style={{ color: '#4DB6AC', fontWeight: 700 }}>지금도 상승 중</span>
                    </div>

                    <div style={{ flex: 1, position: 'relative', marginTop: '10px' }}>
                        <svg width="100%" height="100%" viewBox="0 0 500 200" preserveAspectRatio="none">
                            {/* Area fill */}
                            <path d="M 50 153 L 100 141 L 150 131 L 200 119 L 250 107 L 300 96 L 350 84 L 400 71 L 450 57 L 450 180 L 50 180 Z" fill="#E6F7F8" />

                            {/* Grid lines */}
                            {[0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5].map((val) => (
                                <g key={val}>
                                    <text x="0" y={180 - ((val - 0.9) * 266.6)} fontSize="12" fill="#A0AAB5" dominantBaseline="middle">{val.toFixed(1)}배</text>
                                    <line x1="40" y1={180 - ((val - 0.9) * 266.6)} x2="500" y2={180 - ((val - 0.9) * 266.6)} stroke={val === 1.0 ? "#CBD5E1" : "#F1F5F9"} strokeWidth={val === 1.0 ? "2" : "1"} strokeDasharray={val === 1.0 ? "4 4" : "0"} />
                                </g>
                            ))}
                            {/* Line path */}
                            <path d="M 50 153 L 100 141 L 150 131 L 200 119 L 250 107 L 300 96 L 350 84 L 400 71 L 450 57" fill="none" stroke="#4DB6AC" strokeWidth="3" />
                            {/* Points */}
                            <circle cx="50" cy="153" r="5" fill="#4DB6AC" />
                            <circle cx="100" cy="141" r="5" fill="#4DB6AC" />
                            <circle cx="150" cy="131" r="5" fill="#4DB6AC" />
                            <circle cx="200" cy="119" r="5" fill="#4DB6AC" />
                            <circle cx="250" cy="107" r="5" fill="#4DB6AC" />
                            <circle cx="300" cy="96" r="5" fill="#4DB6AC" />
                            <circle cx="350" cy="84" r="5" fill="#4DB6AC" />
                            <circle cx="400" cy="71" r="5" fill="#4DB6AC" />
                            <circle cx="450" cy="57" r="5" fill="#4DB6AC" />

                            <text x="135" y="115" fontSize="13" fontWeight="bold" fill="#4DB6AC">청년 소비 이미 초과 →</text>
                        </svg>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '45px', marginRight: '35px', marginTop: '12px', fontSize: '13px', color: '#A0AAB5' }}>
                            <span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span><span>2027</span><span>2028</span><span>2029</span><span>2030</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#A0AAB5', textAlign: 'right', marginTop: '16px' }}>출처: 통계청 기계동향조사, LG경영연구원</div>
                </div>

                {/* Chart 3: SUPPLY GAP */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#4DB6AC', letterSpacing: '2px', marginBottom: '8px' }}>SUPPLY GAP</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '6px' }}>정신건강 인프라, OECD 최하위</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', marginBottom: '24px' }}>
                        인구 1,000명당 정신과 의사 수 — 한국 <span style={{ color: '#F84F4F', fontWeight: 700 }}>0.08명</span>, 평균의 절반 이하
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div style={{ display: 'flex', flex: 1, borderBottom: '1px solid #E2E8F0', paddingBottom: '0px', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', marginTop: '20px' }}>
                            {/* Grid Lines */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                {[0.35, 0.30, 0.25, 0.20, 0.15, 0.10, 0.05].map(val => (
                                    <div key={val} style={{ borderBottom: '1px solid #F1F5F9', flex: 1, display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
                                        <span style={{ fontSize: '12px', color: '#A0AAB5', position: 'absolute', left: '0px', bottom: '-8px' }}>{val.toFixed(2)}</span>
                                    </div>
                                ))}
                                <span style={{ fontSize: '12px', color: '#A0AAB5', position: 'absolute', left: '0px', bottom: '-8px' }}>0.00</span>
                            </div>

                            {/* OECD Average Line */}
                            <div style={{ position: 'absolute', left: 30, right: 0, bottom: `${(0.18 / 0.35) * 100}%`, borderTop: '2px dashed #F59E0B', zIndex: 5 }}>
                                <span style={{ position: 'absolute', top: '-10px', left: 0, fontSize: '12px', fontWeight: 700, color: '#F59E0B', backgroundColor: 'white', padding: '0 4px' }}>OECD 평균 0.18</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingLeft: '40px', paddingRight: '10px', width: '100%', height: '100%', zIndex: 10 }}>
                                {/* Bars */}
                                {[
                                    { name: '독일', val: 0.27, color: '#A5F3FC' },
                                    { name: '프랑스', val: 0.23, color: '#A5F3FC' },
                                    { name: '영국', val: 0.19, color: '#A5F3FC' },
                                    { name: '미국', val: 0.14, color: '#A5F3FC' },
                                    { name: '일본', val: 0.13, color: '#A5F3FC' },
                                    { name: '한국', val: 0.08, color: '#F87171' }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '12%' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '8px', color: item.name === '한국' ? '#F84F4F' : '#1E293B' }}>{item.val}</div>
                                        <div style={{
                                            height: `${(item.val / 0.35) * 160}px`,
                                            width: '100%',
                                            backgroundColor: item.color,
                                            border: item.name === '한국' ? '2px solid #EF4444' : '2px solid #22D3EE',
                                            borderBottom: 'none',
                                            borderRadius: '4px 4px 0 0'
                                        }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '18px', marginTop: '12px', fontSize: '13px', color: '#64748B', fontWeight: 500 }}>
                            <span>독일</span><span>프랑스</span><span>영국</span><span>미국</span><span>일본</span><span>한국</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#A0AAB5', textAlign: 'right', marginTop: '16px' }}>출처: OECD Mental Health Systems (2021)</div>
                </div>

                {/* Chart 4: SELF-CARE WILLINGNESS */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '36px', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#4DB6AC', letterSpacing: '2px', marginBottom: '8px' }}>SELF-CARE WILLINGNESS</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1E293B', marginBottom: '6px' }}>의지는 충분하다 — 솔루션이 없을 뿐</div>
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#64748B', marginBottom: '24px' }}>
                        60대 <span style={{ color: '#F84F4F', fontWeight: 700 }}>86.3%</span>가 정신건강 자기관리 노력 중
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', fontSize: '13px', color: '#64748B', marginBottom: '16px', fontWeight: 600 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '14px', height: '14px', backgroundColor: '#4DB6AC' }}></div>노력함</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '14px', height: '14px', backgroundColor: '#E2E8F0' }}></div>노력 안 함</div>
                        </div>

                        <div style={{ display: 'flex', flex: 1, borderBottom: '1px solid #E2E8F0', paddingBottom: '0', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative' }}>
                            {/* Grid Lines */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                {[100, 80, 60, 40, 20].map(val => (
                                    <div key={val} style={{ borderBottom: '1px solid #F1F5F9', flex: 1, display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
                                        <span style={{ fontSize: '12px', color: '#A0AAB5', position: 'absolute', left: '0px', bottom: '-8px' }}>{val}%</span>
                                    </div>
                                ))}
                                <span style={{ fontSize: '12px', color: '#A0AAB5', position: 'absolute', left: '0px', bottom: '-8px' }}>0%</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '40px', width: '100%', height: '100%', zIndex: 10 }}>
                                {/* Bars */}
                                {[
                                    { name: '50대', val: 75.8 },
                                    { name: '60대', val: 86.3 }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35%', height: '100%' }}>
                                        {/* Top part (not trying) */}
                                        <div style={{
                                            height: `${100 - item.val}%`,
                                            width: '100%',
                                            backgroundColor: '#E2E8F0'
                                        }}></div>
                                        {/* Bottom part (trying) */}
                                        <div style={{
                                            height: `${item.val}%`,
                                            width: '100%',
                                            backgroundColor: '#4DB6AC',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '22px',
                                            fontWeight: 700
                                        }}>{item.val}%</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', paddingLeft: '40px', marginTop: '12px', fontSize: '14px', color: '#475569', fontWeight: 600 }}>
                            <span>50대</span><span>60대</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '11px', color: '#A0AAB5', textAlign: 'right', marginTop: '16px' }}>출처: 2024 국민 정신건강 지식 및 태도 조사 (보건복지부)</div>
                </div>

            </motion.div>
        </div>
    );
};
