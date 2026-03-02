import React from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Zap, ArrowRight, Check, Activity } from 'lucide-react';

export const WorkflowImprovementSlide: React.FC = () => {
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
                style={{ marginBottom: '40px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-primary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 | 02 기획 업무 AX 워크플로우 개선 | 03
                </div>
                <h1 className="text-display" style={{ marginBottom: '20px' }}>
                    기획자의 일하는 방식을 AI로 재정의
                </h1>
                <p className="text-h2" style={{ color: 'var(--semantic-text-primary)', margin: 0 }}>
                    에이전시 업무의 비효율, AI로 돌파구를 찾다
                </p>
            </motion.div>

            {/* Content Body */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '40px'
                }}
            >
                {/* Top Pipeline Diagram */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px'
                }}>
                    {/* Input */}
                    <div style={{
                        flex: 1,
                        border: '2px dashed var(--border-light)',
                        backgroundColor: 'var(--semantic-surface)',
                        borderRadius: '16px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '8px'
                    }}>
                        <Hourglass color="var(--semantic-text-secondary)" size={24} />
                        <div className="text-h4" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)' }}>Input</div>
                        <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)', fontWeight: 600 }}>짧은 제안 일정 + 방대한 수동 업무<br />(기획 리소스 낭비)</div>
                    </div>

                    <ArrowRight color="var(--semantic-text-secondary)" size={24} />

                    {/* AI Catalyst */}
                    <div style={{
                        flex: 0.8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px'
                    }}>
                        <div className="text-body1" style={{
                            backgroundColor: 'var(--semantic-text-primary)',
                            color: 'white',
                            padding: '8px 24px',
                            borderRadius: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 800,
                            whiteSpace: 'nowrap'
                        }}>
                            <Activity size={18} /> AI Catalyst
                        </div>
                        <div className="text-label" style={{ fontWeight: 700, color: 'var(--semantic-text-secondary)', textAlign: 'center' }}>
                            NotebookLM, Claude Code,<br />Gemini 등 전면 도입
                        </div>
                    </div>

                    <ArrowRight color="var(--semantic-text-secondary)" size={24} />

                    {/* Output */}
                    <div style={{
                        flex: 1.2,
                        border: '2px dashed var(--border-light)',
                        backgroundColor: 'var(--semantic-surface)',
                        borderRadius: '16px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: '8px',
                    }}>
                        <Zap color="var(--semantic-text-secondary)" size={24} />
                        <div className="text-h4" style={{ fontWeight: 800, color: 'var(--semantic-text-primary)' }}>Output</div>
                        <div className="text-body2" style={{ color: 'var(--semantic-text-secondary)', fontWeight: 700 }}>기획/데이터 산출물 자동 생성 &<br />마크다운 UI 즉시 렌더링 (효율 극대화)</div>
                    </div>
                </div>

                {/* Bottom Comparison Table */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Table Header */}
                    <div className="text-body2" style={{
                        display: 'flex',
                        backgroundColor: 'var(--semantic-text-primary)',
                        color: 'white',
                        padding: '16px 24px',
                        borderRadius: '12px 12px 0 0',
                        fontWeight: 700
                    }}>
                        <div style={{ flex: 1 }}>실무 Task</div>
                        <div style={{ flex: 1.5, color: 'var(--semantic-text-secondary)' }}>AS-IS (Traditional)</div>
                        <div style={{ flex: 2 }}>TO-BE (AI-Driven)</div>
                        <div style={{ flex: 0.8, textAlign: 'right' }}>활용 AI Tool</div>
                    </div>

                    {/* Table Rows */}
                    {[
                        { task: '리서치 및 제안서', asis: '수동 캡처 및 장표 디자인', tobe: '레퍼런스 비교, 개선안 도출, 목차 자동화', tool: 'NotebookLM', toolColor: '#3B82F6', toolBg: '#EFF6FF' },
                        { task: '화면 설계', asis: 'Figma 컴포넌트 수동 작도', tobe: '마크다운 텍스트 기반 UI 즉시 렌더링', tool: 'v0 / Bolt', toolColor: '#EF4444', toolBg: '#FEF2F2' },
                        { task: 'QA / TC', asis: '디스크립션 보며 수동 작성', tobe: '기획서 기반 TC 자동 생성', tool: 'Gemini', toolColor: '#2563EB', toolBg: '#DBEAFE' },
                        { task: 'UX Writing', asis: '시간 부족으로 디테일 포기', tobe: '고품질 개인화 마이크로카피 적용', tool: 'Claude', toolColor: '#8B5CF6', toolBg: '#F3E8FF' },
                        { task: '데이터 분석/리포트', asis: '수동 데이터 추출 및 문서화', tobe: '.md 지침서 기반 분석 및 리포트 자동화', tool: 'Claude Code', toolColor: '#C026D3', toolBg: '#FDF4FF' }
                    ].map((row, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '16px 24px',
                            borderBottom: index === 4 ? 'none' : '1px solid var(--border-light)',
                            backgroundColor: index % 2 === 0 ? 'var(--semantic-surface)' : 'var(--semantic-bg)'
                        }}>
                            <div className="text-body2" style={{ flex: 1, fontWeight: 800, color: 'var(--semantic-text-primary)' }}>{row.task}</div>

                            <div style={{ flex: 1.5, display: 'flex', alignItems: 'center' }}>
                                <span className="text-body2" style={{ color: 'var(--semantic-text-secondary)', textDecoration: 'line-through' }}>{row.asis}</span>
                                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)', marginLeft: '12px' }}></div>
                            </div>

                            <div style={{ flex: 2, display: 'flex', alignItems: 'center', paddingLeft: '24px' }}>
                                <Check color="var(--primary-color)" size={16} style={{ marginRight: '8px' }} />
                                <span className="text-body2" style={{ fontWeight: 700, color: 'var(--semantic-text-primary)' }}>{row.tobe}</span>
                            </div>

                            <div style={{ flex: 0.8, display: 'flex', justifyContent: 'flex-end' }}>
                                <span style={{
                                    backgroundColor: row.toolBg,
                                    color: row.toolColor,
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    fontSize: '13px',
                                    fontWeight: 800,
                                    border: `1px solid ${row.toolBg}` // Or slightly darker border if needed
                                }}>
                                    {row.tool}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </div>
    );
};
