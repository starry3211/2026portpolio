import React from 'react';
import { motion } from 'framer-motion';
import { Database, Network, Gamepad2, LayoutDashboard } from 'lucide-react';

export const DataDrivenSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            padding: '80px 100px',
            gap: '40px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start'
        }}>
            {/* Centered Header Row */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '40px' }}
            >
                <h1 className="text-display" style={{ marginBottom: '24px' }}>
                    데이터와 규정 기반 문제 해결
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0, wordBreak: 'keep-all' }}>
                    문제를 UI가 아닌 구조에서 해결합니다.<br />
                    <span style={{ color: 'var(--semantic-accent)' }}>데이터와 규정 기반 로직으로 문제 해결과 성장을 견인하는 PO</span>
                </p>
            </motion.div>

            <div style={{ display: 'flex', gap: '80px', flex: 1 }}>
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                    <div className="text-h4" style={{ display: 'flex', flexDirection: 'column', gap: '32px', flex: 1, color: 'var(--semantic-text-secondary)' }}>
                        <p style={{ margin: 0, wordBreak: 'keep-all' }}>
                            기획의 본질은 UI 개선이 아니라,<br />
                            <strong style={{ color: 'var(--semantic-text-primary)' }}>데이터와 규정을 결합해 로직을 통해 해결하는 데</strong> 있다고 생각합니다.
                        </p>
                        <p style={{ margin: 0, wordBreak: 'keep-all' }}>
                            VOC와 운영 리스크를 감성적 대응으로 덮지 않고,<br />
                            <strong style={{ color: 'var(--semantic-text-primary)' }}>데이터 흐름·법적 규정·컴플라이언스를 교차 검증해</strong><br />
                            재발을 방지하고 비즈니스가 성장하는 구조를 먼저 설계합니다.
                        </p>
                        <p style={{ margin: 0, wordBreak: 'keep-all' }}>
                            이러한 접근은 신뢰 매칭 알고리즘 도입,<br />
                            지표 기반 기능 정리 등 비즈니스 성장을 견인하는<br />
                            전략적 의사결정으로 이어졌습니다.
                        </p>
                        <p className="text-h3" style={{ color: 'var(--semantic-text-primary)', margin: 0, wordBreak: 'keep-all', marginTop: 'auto' }}>
                            불확실성을 데이터와 정책으로 치환하고,<br />
                            이를 실행 가능한 로직으로 구현하는 것 —<br />
                            <span style={{ color: 'var(--semantic-accent)' }}>그것이 제가 지향하는 PO의 역할입니다.</span>
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: 2x2 Grid of Cases */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ flex: 1.2, display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '24px', alignSelf: 'center' }}
                >
                    {/* Case 1 */}
                    <div className="card-base hover-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                        <div className="text-body1" style={{ fontWeight: 800, marginBottom: '12px' }}>Case 1. 로직 고도화를 통한 VOC 원천 차단</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', flexShrink: 0 }}>
                                <Database size={18} />
                            </div>
                            <div>
                                <div className="text-h4" style={{ fontWeight: 800 }}>래미안 홈닉</div>
                                <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)' }}>아파트 주거 플랫폼</div>
                            </div>
                        </div>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', margin: 0, wordBreak: 'keep-all' }}>
                            주차 인식 데이터 + 국토부 차량번호 규칙(Rule) 결합. 오입력 문제를 시스템단에서 원천 차단하여 VOC 해결.
                        </p>
                    </div>

                    {/* Case 2 */}
                    <div className="card-base hover-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                        <div className="text-body1" style={{ fontWeight: 800, marginBottom: '12px', lineHeight: 1.4 }}>Case 2. 비즈니스 피벗 대응 및 리스크 관리</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', flexShrink: 0 }}>
                                <Network size={18} />
                            </div>
                            <div>
                                <div className="text-h4" style={{ fontWeight: 800 }}>원더클럽</div>
                                <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)' }}>골프 예약·소셜 플랫폼</div>
                            </div>
                        </div>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', margin: 0, wordBreak: 'keep-all' }}>
                            성별/연령 기반 매칭 알고리즘 설계로 초기 이탈 방지 구조 구축. UGC 운영 정책(신고/차단) 준수로 앱 스토어 심사를 단번에 통과하여 안정적인 서비스 런칭.
                        </p>
                    </div>

                    {/* Case 3 */}
                    <div className="card-base hover-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                        <div className="text-body1" style={{ fontWeight: 800, marginBottom: '12px' }}>Case 3. 프로덕트 최적화 및 유저 활성화</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', flexShrink: 0 }}>
                                <Gamepad2 size={18} />
                            </div>
                            <div>
                                <div className="text-h4" style={{ fontWeight: 800 }}>스트라이크존</div>
                                <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>스크린야구 경기 기록·소셜 플랫폼</div>
                            </div>
                        </div>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', margin: 0, wordBreak: 'keep-all' }}>
                            사용률 저조 메뉴 과감한 삭제(Sunsetting). 오프라인 플레이를 대회 참가로 연결하는 게이미피케이션 도입.
                        </p>
                    </div>

                    {/* Case 4 */}
                    <div className="card-base hover-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
                        <div className="text-body1" style={{ fontWeight: 800, marginBottom: '12px', lineHeight: 1.4 }}>Case 4. 데이터/규칙 기반 기술 문제 해결</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--semantic-accent)', flexShrink: 0 }}>
                                <LayoutDashboard size={18} />
                            </div>
                            <div>
                                <div className="text-h4" style={{ fontWeight: 800 }}>한솔홈데코</div>
                                <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>인테리어 2D 시뮬레이션·샘플북 플랫폼</div>
                            </div>
                        </div>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', margin: 0, wordBreak: 'keep-all' }}>
                            자재 데이터와 도면 간의 매칭 규칙(Rule)을 정의하여 2D 시뮬레이션 선제적 제안. 직접 리서치한 '레이어 교체 로직'을 기반으로 외주 개발사와 협업 및 구현.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
