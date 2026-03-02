import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Lock, MessageSquareQuote, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';

export const HypothesisSlide: React.FC = () => {
    const columns = [
        {
            icon: <ShieldCheck size={36} color="#3B82F6" />,
            title: "신뢰 중시형",
            color: "#EFF6FF",
            accentColor: "#3B82F6",
            quote: "건강/심리 서비스는 전문적이어야 믿고 쓸 수 있어.",
            painPoint: "정보 과잉 속에서 기관/전문가의 인지도와 '신뢰성'을 가장 중시함.",
            action: "'전문가가 설계한 자서전적 기억 훈련 알고리즘'임을 전면에 내세우고, 대형 보험사 등의 제휴/인증 마크를 UI에 배치.",
            actionTag: "전문성 부각",
            impact: "서비스에 대한 심리적 장벽 완화 ➡️ 초기 우울감 식별을 위한 온보딩 전환율 및 기록 참여율 대폭 상승."
        },
        {
            icon: <Target size={36} color="#10B981" />,
            title: "자기관리 실천형",
            color: "#ECFDF5",
            accentColor: "#10B981",
            quote: "체계적인 가이드나 동기 부여가 없어서 꾸준한 관리에 실패해.",
            painPoint: "신체/정신 건강 관리 의지는 있으나, 뚜렷한 목표나 보상이 없어 지속성이 떨어짐.",
            action: "단순한 감정 기록을 넘어, AI 대화를 통해 특정 기억을 회상하는 과정에 리워드, 게이미피케이션, 시각적 피드백 제공.",
            actionTag: "회상 유도 및 보상",
            impact: "뚜렷한 동기 부여 확립 ➡️ 주간 재방문율(WAU) 및 서비스 지속 사용 기간의 유의미한 증가."
        },
        {
            icon: <Lock size={36} color="#8B5CF6" />,
            title: "디지털 자립 추구형",
            color: "#F5F3FF",
            accentColor: "#8B5CF6",
            quote: "개인정보나 보안 문제로 섣불리 쓰기가 걱정돼.",
            painPoint: "독립적인 사용을 원하지만, 민감한 감정/대화 데이터 유출에 대한 극심한 불안감 존재.",
            action: "시니어 친화적 UI 제공 및 \"대화/감정 데이터는 가족(자녀)에게도 절대 공유되지 않는다\"는 익명성 정책 전면 강조.",
            actionTag: "완벽한 프라이버시",
            impact: "정보 노출에 대한 불안감 원천 해소 ➡️ 개인화된 심층 질문에 대한 답변 완료율 및 고품질 데이터 확보."
        }
    ];

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
                style={{ marginBottom: '50px' }}
            >
                <div className="text-h3" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '16px', letterSpacing: '2px' }}>
                    01 | 02 | <span style={{ color: 'var(--semantic-text-primary)' }}>03 가설 수립</span> | 04
                </div>
                <h1 className="text-display" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                    유저 페르소나 기반 가설 수립 및 UX 전략
                </h1>
                <p className="text-h3" style={{ color: 'var(--semantic-text-secondary)', margin: 0 }}>
                    타겟 관찰 및 인터뷰를 통해 Pain point 및 Needs 분석 후 핵심 가설을 수립했습니다
                </p>
            </motion.div>

            {/* Content Container - 3 Columns */}
            <div style={{ display: 'flex', gap: '30px', flex: 1 }}>
                {columns.map((col, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                        style={{
                            flex: 1,
                            borderTop: `6px solid ${col.accentColor}`
                        }}
                    >
                        {/* Title & Icon */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: col.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {col.icon}
                            </div>
                            <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#111', margin: 0 }}>
                                {col.title}
                            </h2>
                        </div>

                        {/* VOC Quote */}
                        <div style={{
                            backgroundColor: '#F8FAFC',
                            padding: '20px',
                            borderRadius: '16px',
                            position: 'relative',
                            marginTop: '10px'
                        }}>
                            <MessageSquareQuote size={20} color="#94A3B8" style={{ position: 'absolute', top: '16px', left: '16px' }} />
                            <p style={{ fontSize: '16px', color: '#334155', fontWeight: 700, lineHeight: 1.6, margin: 0, paddingLeft: '32px', wordBreak: 'keep-all' }}>
                                "{col.quote}"
                            </p>
                        </div>

                        {/* Content Blocks */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                            {/* Pain Point */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#EF4444', fontWeight: 800, fontSize: '15px' }}>
                                    <AlertCircle size={18} /> Pain Point
                                </div>
                                <div style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    {col.painPoint}
                                </div>
                            </div>

                            {/* Action */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: col.accentColor, fontWeight: 800, fontSize: '15px' }}>
                                    <Sparkles size={18} /> Action: {col.actionTag}
                                </div>
                                <div style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    {col.action}
                                </div>
                            </div>

                            {/* Impact */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', backgroundColor: 'var(--semantic-bg)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--semantic-text-primary)', fontWeight: 800, fontSize: '15px' }}>
                                    <TrendingUp size={18} /> Expected Impact
                                </div>
                                <div style={{ fontSize: '14px', color: 'var(--semantic-text-primary)', fontWeight: 700, lineHeight: 1.6, wordBreak: 'keep-all' }}>
                                    {col.impact}
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
