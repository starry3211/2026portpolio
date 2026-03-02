import React from 'react';
import { motion } from 'framer-motion';
import { Layers, AlertTriangle, AlertCircle, Trophy, ArrowRight, Image as ImageIcon } from 'lucide-react';

export const Case4Slide: React.FC = () => {
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
                style={{ marginBottom: '30px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 | 03 | <span style={{ color: 'var(--semantic-text-primary)' }}>04 데이터/규칙 기반 기술 문제 해결</span>
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px' }}>
                    한솔홈데코 라솔라: 데이터/규칙 기반 주도적 문제 해결 및 프로덕트 구축 (0 to 1)
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    직접 리서치한 기술 로직으로 2D 시뮬레이션을 선제적으로 제안하여 외주 개발사 협업 및 구현
                </p>
            </motion.div>

            {/* Content Body */}
            <div style={{ display: 'flex', gap: '30px', flex: 1 }}>

                {/* Left Column: Background & Visuals */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1,
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div className="tag-badge" style={{ backgroundColor: 'var(--semantic-text-secondary)', color: 'white', padding: '6px 16px', borderRadius: '100px' }}>Background</div>
                        <h3 className="text-h3" style={{ fontWeight: 800 }}>인테리어 커머스의 한계 돌파</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--destructive-color)', marginTop: '4px' }}><AlertTriangle size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                <strong style={{ color: 'var(--semantic-text-primary)' }}>문제 정의 (Pain Point):</strong> 고객은 구매 전, 내 집에 적용된 모습을 직관적으로 확인하고 싶어 하는 강력한 니즈 존재.
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ color: 'var(--semantic-text-secondary)', marginTop: '4px' }}><AlertCircle size={20} /></div>
                            <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                <strong style={{ color: 'var(--semantic-text-primary)' }}>기존 한계:</strong> 이를 시각화할 수 있는 시스템이 부재하여 정적인 샘플북에 전적으로 의존해야 했음.
                            </div>
                        </div>
                    </div>

                    {/* Image Transition Placeholder */}
                    <div style={{
                        marginTop: 'auto',
                        backgroundColor: 'var(--semantic-bg)',
                        borderRadius: '16px',
                        padding: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--border-light)',
                        gap: '20px'
                    }}>
                        {/* AS-IS */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div className="text-body2" style={{ fontWeight: 700, color: 'var(--semantic-text-secondary)' }}>AS-IS: 정적 샘플북 의존</div>
                            <div style={{ width: '100%', height: '160px', backgroundColor: 'var(--border-light)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ImageIcon size={40} color="var(--semantic-text-secondary)" />
                            </div>
                        </div>

                        <ArrowRight color="var(--border-light)" size={32} />

                        {/* TO-BE */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                            <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-accent)' }}>TO-BE: 2D 시뮬레이션 구현</div>
                            <div style={{ width: '100%', height: '160px', backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(37,99,235,0.2)' }}>
                                <ImageIcon size={40} color="var(--semantic-accent)" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Action & Impact */}
                <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '30px' }}>

                    {/* Action Card */}
                    <motion.div
                        className="card-base"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            flex: 1,
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                            <div className="tag-badge" style={{ backgroundColor: 'var(--semantic-accent)', color: 'white', padding: '6px 16px', borderRadius: '100px' }}>Action</div>
                            <h3 className="text-h3" style={{ fontWeight: 800 }}>Tech & Logic 중심의 주도적 기획</h3>
                        </div>

                        <ul className="text-body1" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: 'var(--semantic-accent)', marginTop: '4px' }}>✓</div>
                                <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    <strong style={{ color: 'var(--semantic-text-primary)' }}>2D 시뮬레이션 선제 제안:</strong> 수많은 자재 데이터(마루, 벽지)와 공간 도면 간의 정합성을 맞추는 매칭 규칙(Rule) 직접 정의.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: 'var(--semantic-accent)', marginTop: '4px' }}>✓</div>
                                <div style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    <strong style={{ color: 'var(--semantic-text-primary)' }}>기술 리딩 및 협업:</strong> 기획 단계에서 '레이어 교체 로직'을 리서치 및 구조화하여, 외주 개발사와의 커뮤니케이션 리딩.
                                </div>
                            </li>
                        </ul>

                        {/* Layer Logic Diagram */}
                        <div style={{
                            marginTop: '20px',
                            backgroundColor: 'var(--semantic-bg)',
                            borderRadius: '16px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-light)',
                            position: 'relative',
                            gap: '12px'
                        }}>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'var(--semantic-text-secondary)' }}><Layers size={24} /></div>

                            {/* Top Layer (Furniture) */}
                            <div className="text-body1" style={{
                                backgroundColor: '#FEF2F2', border: '2px solid #FCA5A5', color: '#DC2626',
                                padding: '12px 40px', borderRadius: '8px', fontWeight: 800,
                                width: '260px', textAlign: 'center', boxShadow: '0 8px 16px rgba(220, 38, 38, 0.15)',
                                zIndex: 3, transform: 'translateY(10px)'
                            }}>
                                3. 가구 레이어 (최상단 적용)
                            </div>

                            {/* Middle Layer (Wallpaper) */}
                            <div className="text-body1" style={{
                                backgroundColor: '#FEFCE8', border: '2px solid #FDE047', color: '#CA8A04',
                                padding: '12px 40px', borderRadius: '8px', fontWeight: 800,
                                width: '280px', textAlign: 'center', boxShadow: '0 8px 16px rgba(202, 138, 4, 0.15)',
                                zIndex: 2, transform: 'translateY(5px)'
                            }}>
                                2. 벽지 레이어 (마스킹 적용)
                            </div>

                            {/* Bottom Layer (Floor) */}
                            <div className="text-body1" style={{
                                backgroundColor: '#EFF6FF', border: '2px solid #93C5FD', color: '#2563EB',
                                padding: '12px 40px', borderRadius: '8px', fontWeight: 800,
                                width: '300px', textAlign: 'center', boxShadow: '0 8px 16px rgba(37, 99, 235, 0.15)',
                                zIndex: 1
                            }}>
                                1. 마루 레이어 (베이스 도면)
                            </div>
                        </div>
                    </motion.div>

                    {/* Impact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        style={{
                            backgroundColor: 'rgba(34, 197, 94, 0.05)',
                            borderRadius: '24px',
                            padding: '30px 40px',
                            border: '1px solid var(--success-color)',
                            boxShadow: '0 10px 30px rgba(34, 197, 94, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Trophy color="var(--success-color)" size={24} />
                            <h3 className="text-h4" style={{ fontWeight: 800, color: 'var(--success-color)' }}>비즈니스 성과로 증명된 기획력 (Impact)</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <div>
                                <div className="text-body1" style={{ fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>1. 고객사 실적 개선 견인:</div>
                                <div className="text-body1" style={{ color: 'var(--success-color)', fontWeight: 500 }}>하이브리드 앱 성공 런칭으로 고객사 담당자 대표이사 상장 수여 기여.</div>
                            </div>
                            <div>
                                <div className="text-body1" style={{ fontWeight: 800, color: 'var(--success-color)', marginBottom: '4px' }}>2. 디자인 어워드 수상:</div>
                                <div className="text-body1" style={{ color: 'var(--success-color)', fontWeight: 500 }}>사용자 친화적인 UX/UI를 인정받아 'GDWEB 디자인 어워드' 달성.</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
