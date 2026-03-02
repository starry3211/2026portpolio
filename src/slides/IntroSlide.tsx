import React from 'react';
import { motion } from 'framer-motion';


export const IntroSlide: React.FC = () => {
    return (
        <div className="presentation-container" style={{
            backgroundColor: 'var(--semantic-surface)',
            color: 'var(--semantic-text-primary)',
            display: 'flex',
            flexDirection: 'column',
            padding: '80px 100px 40px',
            position: 'relative'
        }}>
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '40px' }}
            >
                <h1 className="text-display" style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', justifyContent: 'flex-start' }}>
                    Intro<span style={{ color: 'var(--semantic-accent)', fontSize: '64px', lineHeight: 1 }}>.</span>
                </h1>
            </motion.div>

            <div style={{ display: 'flex', flex: 1, gap: '100px' }}>
                {/* Left Column - Profile Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: 1.5, display: 'flex', flexDirection: 'column' }}
                >
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                            {/* Name */}
                            <tr style={{ borderBottom: '1px solid transparent' }}>
                                <td className="text-h3" style={{ padding: '24px 0', width: '220px', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Name</td>
                                <td className="text-h2" style={{ padding: '24px 0', verticalAlign: 'top' }}>황다혜</td>
                            </tr>

                            {/* Strong */}
                            <tr style={{ borderBottom: `1px solid var(--border-light)` }}>
                                <td className="text-h3" style={{ padding: '24px 0', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Strong</td>
                                <td className="text-h3" style={{ padding: '24px 0', color: 'var(--semantic-text-primary)', verticalAlign: 'top' }}>#통찰력 #실행력 #AI 활용 #열정 #소통</td>
                            </tr>

                            {/* Position */}
                            <tr style={{ borderBottom: '1px solid transparent' }}>
                                <td className="text-h3" style={{ padding: '32px 0 16px', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Position</td>
                                <td className="text-h3" style={{ padding: '32px 0 16px', color: 'var(--semantic-text-primary)', verticalAlign: 'top' }}>Product Owner (PO) / 서비스 기획</td>
                            </tr>

                            {/* Division */}
                            <tr style={{ borderBottom: '1px solid transparent' }}>
                                <td className="text-h3" style={{ padding: '16px 0', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Division</td>
                                <td className="text-h3" style={{ padding: '16px 0', color: 'var(--semantic-text-primary)', verticalAlign: 'top' }}>Service Insight Team/Pro(과장)</td>
                            </tr>

                            {/* Total Experience */}
                            <tr style={{ borderBottom: `1px solid var(--border-light)` }}>
                                <td className="text-h3" style={{ padding: '16px 0 32px', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Total Experience</td>
                                <td style={{ padding: '16px 0 32px', verticalAlign: 'top' }}>
                                    <div className="text-h3" style={{ marginBottom: '8px' }}>9년</div>
                                    <div className="text-h4" style={{ color: 'var(--semantic-text-secondary)' }}>(PO/서비스기획 5년 4개월 + 남양유업 카테고리 부매니저 3년 8개월)</div>
                                </td>
                            </tr>

                            {/* Job Description */}
                            <tr style={{ borderBottom: '1px solid transparent' }}>
                                <td className="text-h3" style={{ padding: '32px 0', color: 'var(--semantic-text-secondary)', verticalAlign: 'top' }}>Job Discription</td>
                                <td style={{ padding: '32px 0', verticalAlign: 'top' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                        <li className="text-h3">
                                            1) 프로젝트 관리 <span className="text-h4" style={{ color: 'var(--semantic-text-secondary)', marginLeft: '8px' }}>(커뮤니케이션 및 일정 관리)</span>
                                        </li>
                                        <li className="text-h3">2) AI 시니어 헬스케어 서비스 기획</li>
                                        <li className="text-h3">3) 데이터 기반 서비스 고도화</li>
                                        <li className="text-h3">4) 제안서 작성 및 발표</li>
                                        <li className="text-h3">5) AX 워크플로우 재정의</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>

                {/* Right Column - Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                    <h2 className="text-h2" style={{ color: 'var(--semantic-text-secondary)', marginBottom: '40px' }}>Skills</h2>

                    {/* Vibe Design/Coding */}
                    <div style={{ marginBottom: '50px' }}>
                        <h3 className="text-h3" style={{ marginBottom: '24px' }}>Vibe Design/Coding</h3>
                        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                <div className="card-base" style={{ width: '80px', height: '80px', borderRadius: '50%', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="/images/logos/antigravity.png" alt="Google Antigravity" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                                </div>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--semantic-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', position: 'absolute', top: '-5px', left: '-5px', zIndex: 1 }}>AI</div>
                            </div>
                            <div style={{ paddingTop: '8px' }}>
                                <div className="text-h4" style={{ marginBottom: '12px' }}>Google Antigravity</div>
                                <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                    자연어 지시로 디자인부터 코딩까지 수행하여<br />
                                    빠르게 인터랙티브 프로토타입을 구현할 수 있습니다
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Analysis */}
                    <div style={{ marginBottom: '60px' }}>
                        <h3 className="text-h3" style={{ marginBottom: '24px' }}>Data Analysis</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {/* Corab */}
                            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                    <div className="card-base" style={{ width: '80px', height: '80px', borderRadius: '50%', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/corab.png" alt="Google Corab" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--semantic-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', position: 'absolute', top: '-5px', left: '-5px', zIndex: 1 }}>AI</div>
                                </div>
                                <div style={{ paddingTop: '8px' }}>
                                    <div className="text-h4" style={{ marginBottom: '12px' }}>Google Corab</div>
                                    <div className="text-body1" style={{ color: 'var(--semantic-text-secondary)', wordBreak: 'keep-all' }}>
                                        자연어 지시로 Python을 사용하여<br />
                                        데이터 분석 및 시각화를 할 수 있습니다
                                    </div>
                                </div>
                            </div>

                            {/* Claude Code */}
                            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                                    <div className="card-base" style={{ width: '80px', height: '80px', borderRadius: '50%', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/claud_code.png" alt="Claude Code" style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--semantic-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', position: 'absolute', top: '-5px', left: '-5px', zIndex: 1 }}>AI</div>
                                </div>
                                <div style={{ paddingTop: '8px' }}>
                                    <div style={{ fontSize: '22px', fontWeight: 500, color: '#333', marginBottom: '12px' }}>Claude Code</div>
                                    <div style={{ fontSize: '18px', color: '#555', lineHeight: 1.5, wordBreak: 'keep-all' }}>
                                        자연어 지시로 데이터 분석 지침서 md 파일을 통해<br />
                                        데이터 분석 및 리포트 작성을 자동화할 수 있습니다
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Issue Tracking & Communication */}
                    <div style={{ display: 'flex', gap: '60px' }}>
                        <div style={{ flex: 1 }}>
                            <h3 className="text-h3" style={{ marginBottom: '24px' }}>Issue Tracking/Documentation</h3>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-base" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/figma.png" alt="Figma" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                                    </div>
                                    <span className="text-h4">Figma</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-base" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/notion.png" alt="Notion" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                                    </div>
                                    <span className="text-h4">Notion</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-base" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/jira.png" alt="Jira" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                                    </div>
                                    <span className="text-h4">Jira</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                    <div className="card-base" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="/images/logos/confluence.png" alt="Confluence" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                                    </div>
                                    <span className="text-h4">Confluence</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-h3" style={{ marginBottom: '24px' }}>Communication</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                <div className="card-base" style={{ width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src="/images/logos/slack.png" alt="Slack" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
                                </div>
                                <span className="text-h4">Slack</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

        </div>
    );
};
