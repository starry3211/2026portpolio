import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Play } from 'lucide-react';

// Reusable Blurred Overlay Component
const BlurredPromptOverlay: React.FC<{ top?: string }> = ({ top = '50%' }) => (
    <div style={{
        position: 'absolute',
        top: top,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '24px 48px',
        borderRadius: '100px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap'
    }}>
        <span className="text-h3" style={{ color: 'var(--semantic-text-primary)', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>
            프롬프트 블러 처리
        </span>
    </div>
);

export const AIUseCaseSlide: React.FC = () => {
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
                <div className="text-h3" style={{ color: 'var(--semantic-text-primary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 기획 업무 AX 워크플로우 개선 | 03
                </div>
                <h1 className="text-display" style={{ margin: 0 }}>
                    기획 업무 AI 활용 사례
                </h1>
            </motion.div>

            {/* Content Body: 3 Columns Container */}
            <div style={{ display: 'flex', gap: '32px', flex: 1 }}>

                {/* Column 1: Research & Proposal */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1,
                        padding: 0,
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Fake Text */}
                        <div style={{ opacity: 0.4, marginBottom: '32px' }}>
                            <div style={{ height: '8px', width: '40%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '4px' }} />
                            <div style={{ height: '8px', width: '85%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '4px' }} />
                            <div style={{ height: '8px', width: '60%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '4px' }} />
                            <div style={{ height: '8px', width: '75%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '4px' }} />
                        </div>

                        {/* Table Header */}
                        <div style={{ borderBottom: '2px solid var(--semantic-text-primary)', paddingBottom: '16px', marginBottom: '20px' }}>
                            <h3 className="text-h4" style={{ margin: 0, color: 'var(--semantic-text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                📊 1. 3사 회원가입·로그인 UX 비교 분석
                            </h3>
                        </div>

                        {/* Mock Table */}
                        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr', gap: '12px', flex: 1 }}>
                            {/* Header Row */}
                            <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>비고 항목</div>
                            <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px', textAlign: 'center' }}>모니모 (Monimo)</div>
                            <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px', textAlign: 'center' }}>MG새마을금고</div>
                            <div className="text-label" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px', textAlign: 'center' }}>NH농협손해보험</div>

                            {/* Row 1 */}
                            <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', paddingTop: '8px' }}>진입 장벽<br />(Friction)</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '8px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[매우 낮음]</strong> 브랜드 로고와 '시작하기' 버튼 하나로 부담 제거</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '8px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[보통]</strong> 간편비밀번호 등 다양한 옵션을 직관적인 아이콘으로 제시</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '8px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[높음]</strong> 진입 시작부터 경고 문구 노출</div>

                            <div style={{ gridColumn: '1 / -1', height: '1px', background: 'var(--semantic-bg)' }} />

                            {/* Row 2 */}
                            <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', paddingTop: '4px' }}>입력 방식<br />(Input)</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '4px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[Progressive]</strong> 한 화면에 하나씩 끊어 입력 유도</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '4px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[Grouped]</strong> 단계별로 명확히 구분하여 제공</div>
                            <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', paddingTop: '4px', lineHeight: 1.5, wordBreak: 'keep-all' }}><strong style={{ color: 'var(--semantic-text-primary)' }}>[Traditional]</strong> 한 화면에 모두 입력하는 클래식한 서식</div>
                        </div>
                    </div>

                    <BlurredPromptOverlay top="25%" />
                </motion.div>

                {/* Column 2: UI Design Generation */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        flex: 1,
                        padding: 0,
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Top Bar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid var(--border-light)', backgroundColor: 'var(--semantic-surface)' }}>
                        <div className="text-body2" style={{ fontWeight: 800, color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Sparkles size={16} /> Code Assistant
                        </div>
                        <div className="text-body2" style={{ display: 'flex', gap: '20px', fontWeight: 700 }}>
                            <span style={{ color: 'var(--semantic-text-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}><Play size={12} fill="var(--semantic-text-primary)" /> Preview</span>
                            <span style={{ color: 'var(--semantic-text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}><Code2 size={12} /> Code</span>
                        </div>
                    </div>

                    {/* Split Pane */}
                    <div style={{ display: 'flex', flex: 1 }}>
                        {/* Left Sidebar (Code/Prompt area) */}
                        <div style={{ width: '35%', borderRight: '1px solid var(--border-light)', padding: '24px', backgroundColor: 'var(--semantic-surface)' }}>
                            <div style={{ height: '6px', width: '90%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                            <div style={{ height: '6px', width: '70%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                            <div style={{ height: '6px', width: '85%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                            <div style={{ height: '6px', width: '50%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                            <div style={{ height: '6px', width: '80%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                            <div style={{ height: '6px', width: '60%', background: 'var(--border-light)', marginBottom: '12px', borderRadius: '3px' }} />
                        </div>

                        {/* Right Preview Area */}
                        <div style={{ flex: 1, backgroundColor: 'var(--semantic-bg)', padding: '32px 24px', display: 'flex', justifyContent: 'center' }}>
                            {/* Mobile Phone Mockup */}
                            <div style={{ width: '100%', maxWidth: '280px', backgroundColor: 'var(--semantic-surface)', borderRadius: '24px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', padding: '24px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column' }}>
                                <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ color: 'var(--semantic-text-secondary)' }}>&lt;</span> 보험금 청구
                                </div>
                                <h4 className="text-h4" style={{ fontWeight: 900, marginBottom: '8px', lineHeight: 1.3 }}>
                                    청구하실 계약을<br />선택해주세요
                                </h4>
                                <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '24px' }}>최근 3년 내 사고만 조회됩니다.</div>

                                {/* Items */}
                                <div style={{ padding: '16px', border: '1px solid var(--border-light)', borderRadius: '12px', marginBottom: '12px', backgroundColor: 'var(--semantic-bg)' }}>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '6px', fontWeight: 600 }}>정상</div>
                                    <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)' }}>NH 일손조은보험</div>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginTop: '6px' }}>2025-12345678 | 김농협</div>
                                </div>

                                <div style={{ padding: '16px', border: '1px solid var(--border-light)', borderRadius: '12px', marginBottom: '12px' }}>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '6px', fontWeight: 600 }}>정상</div>
                                    <div className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)' }}>NH 헤아림 운전자보험</div>
                                    <div className="text-label" style={{ color: 'var(--semantic-text-secondary)', marginTop: '6px' }}>2024-87654321 | 김농협</div>
                                </div>

                                <div className="text-body2" style={{ marginTop: 'auto', backgroundColor: 'var(--semantic-bg)', borderRadius: '12px', padding: '16px', textAlign: 'center', fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>
                                    다음
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlurredPromptOverlay top="60%" />
                </motion.div>

                {/* Column 3: QA/TC Generation */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1,
                        padding: '32px',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* Assistant Message */}
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                            <Sparkles size={16} />
                        </div>
                        <div className="text-body2" style={{ flex: 1, lineHeight: 1.6, color: 'var(--semantic-text-secondary)', fontWeight: 500, wordBreak: 'keep-all' }}>
                            네, 알겠습니다. 전달해주신 메인 화면 설계 디스크립션을 기반으로 <strong style={{ color: 'var(--semantic-text-primary)', fontWeight: 800 }}>테스트 시나리오(TC)</strong>를 작성해 드립니다.
                        </div>
                    </div>

                    <h4 className="text-body2" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', marginBottom: '16px' }}>개인화 메시지 영역 TC 목록</h4>

                    {/* Tabe Mockup */}
                    <div style={{ border: '1px solid var(--border-light)', borderRadius: '12px', overflow: 'hidden', flex: 1 }}>
                        {/* Header */}
                        <div className="text-label" style={{ display: 'flex', backgroundColor: 'var(--semantic-bg)', padding: '12px 16px', borderBottom: '1px solid var(--border-light)', fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>
                            <div style={{ flex: 1.2 }}>분류 (대/소)</div>
                            <div style={{ flex: 1.2 }}>사전조건</div>
                            <div style={{ flex: 2 }}>기대결과</div>
                        </div>

                        {/* Row 1 */}
                        <div className="text-body2" style={{ display: 'flex', padding: '16px', borderBottom: '1px solid var(--border-light)', color: 'var(--semantic-text-secondary)', alignItems: 'flex-start', gap: '8px' }}>
                            <div style={{ flex: 1.2 }}>
                                <div style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', marginBottom: '4px' }}>메인 화면</div>
                                <div className="text-label" style={{ color: 'var(--semantic-text-secondary)' }}>로그인 정상 노출</div>
                            </div>
                            <div style={{ flex: 1.2, lineHeight: 1.4 }}>특정 사용자로 로그인된 상태에서 진입</div>
                            <div style={{ flex: 2, lineHeight: 1.4 }}><span style={{ backgroundColor: 'rgba(37,99,235,0.1)', color: 'var(--primary-color)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>"고객님, [개인화 메시지]"</span> 형태의 텍스트 정상 표출</div>
                        </div>

                        {/* Row 2 */}
                        <div className="text-body2" style={{ display: 'flex', padding: '16px', borderBottom: '1px solid var(--border-light)', color: 'var(--semantic-text-secondary)', alignItems: 'flex-start', gap: '8px' }}>
                            <div style={{ flex: 1.2 }}>
                                <div style={{ fontWeight: 800, color: 'var(--semantic-text-primary)', marginBottom: '4px' }}>메인 화면</div>
                                <div className="text-label" style={{ color: 'var(--semantic-text-secondary)' }}>비로그인 비노출</div>
                            </div>
                            <div style={{ flex: 1.2, lineHeight: 1.4 }}>비로그인 상태에서 화면 진입</div>
                            <div style={{ flex: 2, lineHeight: 1.4 }}><span style={{ backgroundColor: 'var(--border-light)', color: 'var(--semantic-text-primary)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>"환영합니다."</span> 고정 텍스트가 정상 표출</div>
                        </div>

                        {/* Row 3 (Faded) */}
                        <div className="text-body2" style={{ display: 'flex', padding: '16px', color: 'var(--semantic-text-secondary)', alignItems: 'flex-start', gap: '8px', opacity: 0.6 }}>
                            <div style={{ flex: 1.2 }}>
                                <div style={{ fontWeight: 800, marginBottom: '4px' }}>확인 버튼</div>
                                <div className="text-label">바로가기 전환</div>
                            </div>
                            <div style={{ flex: 1.2, lineHeight: 1.4 }}>셀프 예약 버튼 선택 시</div>
                            <div style={{ flex: 2, lineHeight: 1.4 }}>해당 예약 TAB 화면으로 정상 이동</div>
                        </div>
                    </div>

                    <BlurredPromptOverlay top="45%" />
                </motion.div>

            </div>
        </div>
    );
};
