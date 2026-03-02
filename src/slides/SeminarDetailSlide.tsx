import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Mic, Trophy, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const SeminarDetailSlide: React.FC = () => {
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
                <div className="text-h3" style={{ color: 'var(--semantic-text-primary)', marginBottom: '16px', letterSpacing: '2px', display: 'flex', gap: '10px' }}>
                    01 AX 세미나 주최 및 리더십 확보 | 02 | 03
                </div>
                <h1 className="text-display" style={{ marginBottom: '20px' }}>
                    AI 시대, 기획자의 역할 변화와 AI 활용의 중요성을 주제로 AX 세미나 주최
                </h1>
                <p className="text-h2" style={{ color: 'var(--semantic-text-primary)', margin: 0 }}>
                    직접 외부 AX 전문가를 초청 및 행사 물품 대여 업체 선정까지 주도적으로 세미나 계획 및 진행
                </p>
            </motion.div>

            {/* Content Body: Left Cards & Right Image Placeholder */}
            <div style={{ display: 'flex', gap: '40px', flex: 1, alignItems: 'center' }}>

                {/* Left: 3 Step Cards Container */}
                <motion.div
                    className="card-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        flex: 1.5,
                        padding: '40px 30px',
                        display: 'flex',
                        alignItems: 'stretch',
                        gap: '20px'
                    }}
                >
                    {/* Step 1: Challenge */}
                    <div className="card-base" style={{
                        flex: 1,
                        padding: '24px',
                        borderTop: '6px solid var(--destructive-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--destructive-color)', marginBottom: '20px' }}>
                            <AlertTriangle size={24} />
                        </div>
                        <div className="text-body2" style={{ fontWeight: 800, color: 'var(--destructive-color)', marginBottom: '8px' }}>Step 1. Challenge</div>
                        <h3 className="text-h4" style={{ fontWeight: 800, marginBottom: '16px', wordBreak: 'keep-all' }}>도전 과제 및 저항</h3>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all', margin: 0 }}>
                            기존 방식 고수 및 실무진의 반대 등 새로운 기술(AI)에 대한 조직의 <strong style={{ color: 'var(--semantic-text-primary)' }}>강한 심리적 저항과 냉소</strong>.
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--border-light)' }}>
                        <ChevronRight size={32} strokeWidth={2} />
                    </div>

                    {/* Step 2: Action */}
                    <div className="card-base" style={{
                        flex: 1,
                        padding: '24px',
                        borderTop: '6px solid var(--primary-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', marginBottom: '20px' }}>
                            <Mic size={24} />
                        </div>
                        <div className="text-body2" style={{ fontWeight: 800, color: 'var(--primary-color)', marginBottom: '8px' }}>Step 2. Action</div>
                        <h3 className="text-h4" style={{ fontWeight: 800, marginBottom: '16px', wordBreak: 'keep-all' }}>설득과 실무 시연</h3>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all', margin: 0 }}>
                            사내 세미나를 직접 주최하여 <strong style={{ color: 'var(--semantic-text-primary)' }}>'기획자의 AI 활용성'</strong>에 대한 실무 시연 및 끈질긴 설득 커뮤니케이션 진행.
                        </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--border-light)' }}>
                        <ChevronRight size={32} strokeWidth={2} />
                    </div>

                    {/* Step 3: Result */}
                    <div className="card-base" style={{
                        flex: 1,
                        padding: '24px',
                        borderTop: '6px solid var(--warning-color)',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(234, 179, 8, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--warning-color)', marginBottom: '20px' }}>
                            <Trophy size={24} />
                        </div>
                        <div className="text-body2" style={{ fontWeight: 800, color: 'var(--warning-color)', marginBottom: '8px' }}>Step 3. Result</div>
                        <h3 className="text-h4" style={{ fontWeight: 800, marginBottom: '16px', wordBreak: 'keep-all' }}>경영진 인정 및 리더 발탁</h3>
                        <p className="text-body2" style={{ color: 'var(--semantic-text-secondary)', lineHeight: 1.6, wordBreak: 'keep-all', margin: 0 }}>
                            조직 혁신 노력과 방향성을 <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--success-color)', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>사업부와 대표이사에게 공식 인정</span> 받고, 사내 AI 도입 총괄 <span style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--success-color)', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>AX 리더로 발탁</span>.
                        </p>
                    </div>

                </motion.div>

                {/* Right: Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        flex: 1,
                        height: '100%',
                        backgroundColor: 'var(--border-light)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '12px',
                        color: 'var(--semantic-text-secondary)'
                    }}
                >
                    <ImageIcon size={48} strokeWidth={1.5} />
                    <span className="text-h4" style={{ fontWeight: 600 }}>세미나 진행 이미지</span>
                </motion.div>
            </div>

            {/* Bottom Quote */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ textAlign: 'center', marginTop: '60px' }}
            >
                <p className="text-h2" style={{ color: 'var(--semantic-text-primary)', fontWeight: 800, lineHeight: 1.5, margin: 0, wordBreak: 'keep-all' }}>
                    "아무리 좋은 기술도 조직의 수용성(문화)이 없으면 작동하지 않습니다.<br />
                    변화 관리는 결국 '사람의 마음'을 얻는 것에서 시작됨을 배웠습니다."
                </p>
            </motion.div>

        </div>
    );
};
