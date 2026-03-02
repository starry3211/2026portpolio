import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Store, Ticket, Trophy } from 'lucide-react';

export const Case3Slide: React.FC = () => {
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
                style={{ marginBottom: '60px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 | <span style={{ color: 'var(--semantic-text-primary)' }}>03 프로덕트 최적화 및 유저 활성화</span> | 04
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px' }}>
                    스트라이크존: 과감한 기능 삭제와 게이미피케이션을 통한 활성화 전략
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    트래픽 저조한 레거시 메뉴와 불필요한 요소를 제거하고 O2O 시너지 프로세스 적용
                </p>
            </motion.div>

            {/* Two Strategy Details */}
            <div style={{ display: 'flex', gap: '30px', flex: 1 }}>
                {/* Strategy 1: Sunsetting */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1,
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                        <div className="tag-badge" style={{ backgroundColor: 'var(--semantic-text-primary)', color: 'white', padding: '6px 16px', borderRadius: '100px', whiteSpace: 'nowrap' }}>Strategy 1</div>
                        <h3 className="text-h2" style={{ fontWeight: 800 }}>Sunsetting (선택과 집중)</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Diagram Container */}
                        <div style={{
                            backgroundColor: 'var(--semantic-bg)',
                            borderRadius: '16px',
                            padding: '40px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-light)',
                            gap: '30px',
                            position: 'relative'
                        }}>
                            {/* Legacy Menus being crossed out */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ position: 'relative' }}>
                                    <div className="text-body2" style={{ backgroundColor: 'var(--border-light)', color: 'var(--semantic-text-secondary)', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'line-through' }}>단순 자유 게시판</div>
                                    <X color="var(--destructive-color)" size={24} style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: 'var(--semantic-surface)', borderRadius: '50%' }} />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <div className="text-body2" style={{ backgroundColor: 'var(--border-light)', color: 'var(--semantic-text-secondary)', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'line-through' }}>복잡한 구단 관리</div>
                                    <X color="var(--destructive-color)" size={24} style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: 'var(--semantic-surface)', borderRadius: '50%' }} />
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <div className="text-body2" style={{ backgroundColor: 'var(--border-light)', color: 'var(--semantic-text-secondary)', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'line-through' }}>게임형 이벤트</div>
                                    <X color="var(--destructive-color)" size={24} style={{ position: 'absolute', top: '-10px', right: '-10px', backgroundColor: 'var(--semantic-surface)', borderRadius: '50%' }} />
                                </div>
                            </div>

                            {/* Down Arrow Indicator */}
                            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--border-light)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <div style={{ width: '0', height: '0', borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid var(--border-light)', marginBottom: '-6px' }}></div>
                            </div>

                            {/* Replaced by Online Event */}
                            <div className="text-h4" style={{ backgroundColor: 'var(--semantic-text-primary)', color: 'white', padding: '16px 32px', borderRadius: '12px', fontWeight: 800, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                온라인 대회 참가권 (O2O Event)
                            </div>
                        </div>

                        {/* Bullet Points */}
                        <ul className="text-body1" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--semantic-text-secondary)' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: 'var(--semantic-text-secondary)', marginTop: '4px' }}>✓</div>
                                <div style={{ lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    트래픽이 저조하고 유지보수 비용이 높은 <strong style={{ color: 'var(--semantic-text-primary)' }}>레거시 메뉴를 과감히 삭제</strong>.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: 'var(--semantic-text-secondary)', marginTop: '4px' }}>✓</div>
                                <div style={{ lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    불필요한 요소를 제거하여 앱 구조를 경량화하고 <strong style={{ color: 'var(--semantic-text-primary)' }}>UX 복잡도를 대폭 감소</strong>.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: 'rgba(37,99,235,0.1)', padding: '24px', borderRadius: '12px' }}>
                        <div className="text-body1" style={{ fontWeight: 800, color: 'var(--semantic-accent)', marginBottom: '8px' }}>Result (효율화)</div>
                        <div className="text-h4" style={{ color: 'var(--primary-color)', fontWeight: 600, wordBreak: 'keep-all' }}>
                            개발 리소스 절감 및 핵심 서비스로의 유저 동선 집중
                        </div>
                    </div>
                </motion.div>

                {/* Strategy 2: Gamification */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1,
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                        <div className="tag-badge" style={{ backgroundColor: 'var(--semantic-text-primary)', color: 'white', padding: '6px 16px', borderRadius: '100px', whiteSpace: 'nowrap' }}>Strategy 2</div>
                        <h3 className="text-h2" style={{ fontWeight: 800 }}>Gamification (오프라인 경험의 온라인화)</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {/* Diagram Container */}
                        <div style={{
                            backgroundColor: 'var(--semantic-bg)',
                            borderRadius: '16px',
                            padding: '30px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '1px solid var(--border-light)',
                        }}>
                            {/* Step 1: Offline */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-text-secondary)' }}>
                                    <Store size={32} />
                                </div>
                                <div className="text-body2" style={{ fontWeight: 700, textAlign: 'center' }}>오프라인 플레이</div>
                            </div>

                            <ArrowRight color="var(--border-light)" size={20} />

                            {/* Step 2: Online Ticket */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', border: '2px solid rgba(37,99,235,0.2)' }}>
                                    <Ticket size={32} />
                                </div>
                                <div className="text-body2" style={{ fontWeight: 700, color: 'var(--primary-color)', textAlign: 'center' }}>온라인 대회 참가권</div>
                            </div>

                            <ArrowRight color="var(--border-light)" size={20} />

                            {/* Step 3: Event */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flex: 1 }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#FEF08A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CA8A04' }}>
                                    <Trophy size={32} />
                                </div>
                                <div className="text-body2" style={{ fontWeight: 700, color: '#854D0E', textAlign: 'center' }}>이벤트 참여</div>
                            </div>

                            <div style={{ margin: '0 8px', color: '#8B5CF6' }}>
                                <ArrowRight size={32} strokeWidth={3} />
                            </div>

                            {/* Result: O2O Synergy */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1.2, backgroundColor: '#F3E8FF', padding: '16px', borderRadius: '12px', border: '1px solid #E9D5FF' }}>
                                <div className="text-body2" style={{ fontWeight: 800, color: '#6D28D9' }}>O2O 시너지</div>
                                <div style={{ fontSize: '15px', fontWeight: 800, color: '#4C1D95', textAlign: 'center' }}>이벤트 참여율 상승</div>
                            </div>

                        </div>

                        {/* Bullet Points */}
                        <ul className="text-body1" style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--semantic-text-secondary)' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: '#8B5CF6', marginTop: '4px' }}>✓</div>
                                <div style={{ lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    유저의 오프라인 게임 기록을 <strong style={{ color: 'var(--semantic-text-primary)' }}>온라인 대회 참가권(Event Ticket)</strong>으로 연결.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <div style={{ color: '#8B5CF6', marginTop: '4px' }}>✓</div>
                                <div style={{ lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    오프라인 플레이가 자연스럽게 온라인 이벤트 참여로 이어지는 <strong style={{ color: 'var(--semantic-text-primary)' }}>O2O 선순환 설계</strong>.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div style={{ backgroundColor: '#F5F3FF', padding: '24px', borderRadius: '12px' }}>
                        <div className="text-body1" style={{ fontWeight: 800, color: '#5B21B6', marginBottom: '8px' }}>Result (유저 활성화)</div>
                        <div className="text-h4" style={{ color: '#4C1D95', fontWeight: 600, wordBreak: 'keep-all' }}>
                            UX 개선과 게임화 요소 결합으로 온-오프라인 연계 이벤트 참여율 대폭 상승
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
