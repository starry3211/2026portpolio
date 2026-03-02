import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileSearch, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const Case1Slide: React.FC = () => {
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
                    <span style={{ color: 'var(--semantic-text-primary)' }}>01 운영 효율화 및 데이터 기반 문제 해결</span> | 02 | 03 | 04
                </div>
                <h1 className="text-display" style={{ marginBottom: '20px' }}>
                    래미안 홈닉: UI 국토부 데이터 규칙 기반으로<br />주차 등록 VOC 해결
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    UI 개선에 그치지 않고, 데이터를 활용해 발생 가능한 오류의 틈을 시스템으로 차단
                </p>
            </motion.div>

            {/* Diagram Area */}
            <div className="card-base" style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'radial-gradient(var(--border-light) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'space-between' }}>

                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        <div className="text-h3" style={{ fontWeight: 800, marginBottom: '4px' }}>Step 1: Problem</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '30px' }}>(문제 정의)</div>

                        <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--semantic-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', position: 'relative' }}>
                            <AlertCircle size={48} color="var(--destructive-color)" />
                            <div style={{ position: 'absolute', bottom: -10, right: -10, backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '8px', borderRadius: '50%', color: 'var(--destructive-color)' }}>
                                <AlertCircle size={24} />
                            </div>
                        </div>

                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all', margin: 0 }}>
                            방문 차량 등록 시<br />오입력으로 인한<br />주차 차단기 미인식<br />
                            <strong style={{ color: 'var(--destructive-color)' }}>→ 입주민 민원(VOC) 폭증</strong>
                        </p>
                    </motion.div>

                    <ArrowRight size={32} color="#CBD5E1" strokeWidth={2} style={{ flexShrink: 0 }} />

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        <div className="text-h3" style={{ fontWeight: 800, marginBottom: '4px' }}>Step 2: Data Finding</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '30px' }}>(데이터 분석)</div>

                        <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--semantic-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                            <FileSearch size={48} color="var(--semantic-accent)" />
                        </div>

                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all', margin: 0 }}>
                            실패 로그 분석 결과,<br />
                            <strong style={{ color: 'var(--semantic-text-primary)' }}>'1234가'와 같은 불가능한</strong><br />
                            차량 번호 포맷 입력 패턴 발견.
                        </p>
                    </motion.div>

                    <ArrowRight size={32} color="#CBD5E1" strokeWidth={2} style={{ flexShrink: 0 }} />

                    {/* Step 3 - Main Focus */}
                    <motion.div
                        className="card-base"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            flex: 1.5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '40px 30px',
                            position: 'relative',
                            zIndex: 10
                        }}
                    >
                        <div className="text-h2" style={{ fontWeight: 800, marginBottom: '4px' }}>Step 3: The Logic (규칙 적용)</div>
                        <div className="text-body1" style={{ color: 'var(--primary-color)', fontWeight: 700, marginBottom: '40px' }}>- Main Focus</div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                            {/* License Plate Graphic */}
                            <div style={{
                                padding: '16px 24px',
                                backgroundColor: 'var(--semantic-surface)',
                                borderRadius: '12px',
                                border: '3px solid var(--border-light)',
                                boxShadow: '0 0 0 4px rgba(37,99,235,0.2), 0 10px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                position: 'relative',
                                whiteSpace: 'nowrap'
                            }}>
                                <span className="text-h1" style={{ fontWeight: 800, letterSpacing: '1px', fontSize: '32px' }}>123가 4567</span>
                                <CheckCircle2 size={32} color="var(--success-color)" />
                            </div>

                            {/* Curly Brace / Regex indicator */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '40px', color: 'var(--primary-color)', fontWeight: 300, lineHeight: 1 }}>&#125;</div>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div className="text-h3" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>MOLIT</div>
                                <div className="text-h3" style={{ fontWeight: 800, color: 'var(--semantic-text-secondary)' }}>Rules</div>
                                <div className="text-body1" style={{ fontWeight: 700, color: 'var(--destructive-color)' }}>(Regex)</div>
                            </div>
                        </div>

                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all', margin: 0, marginBottom: '16px', fontWeight: 600 }}>
                            국토교통부 차량번호 규칙과<br />
                            차단기 인식 데이터 분석 결과 기준으로<br />로직 필터 적용
                        </p>
                        <p className="text-body1" style={{ color: 'var(--primary-color)', wordBreak: 'keep-all', margin: 0, fontWeight: 700 }}>
                            정규식으로 유효한 패턴만 입력되도록 강제
                        </p>
                    </motion.div>

                    <ArrowRight size={32} color="#CBD5E1" strokeWidth={2} style={{ flexShrink: 0 }} />

                    {/* Step 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        <div className="text-h3" style={{ fontWeight: 800, marginBottom: '4px' }}>Step 4: Impact</div>
                        <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '30px' }}>(결과 및 효과)</div>

                        <div style={{ width: '120px', height: '120px', backgroundColor: 'rgba(37,99,235,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)' }}>
                            <ShieldCheck size={56} color="var(--semantic-accent)" />
                        </div>

                        <p className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all', margin: 0 }}>
                            휴먼 에러(Human Error)의 구조적 방지 및<br />
                            <strong style={{ color: 'var(--semantic-accent)' }}>관리사무소 방문 차량 등록 민원 제로화</strong>
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
