'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PerspectiveSwitcher, type Perspective } from '@/components/PerspectiveSwitcher';
import { GlassSystemStage } from '@/components/GlassSystemStage';
import { PathVisualization } from '@/components/PathVisualization';
import { InsightCard } from '@/components/InsightCard';
import { BackgroundFlow } from '@/components/BackgroundFlow';
import { FileText, Play, Plus, Calendar, Mail, Flag, CheckCircle2, Star, Award, Check, AlertCircle, AlertTriangle, Users, TrendingDown, Lightbulb, BookOpen, MessageSquare, Target } from 'lucide-react';

export function PerspectivesSection() {
  const [perspective, setPerspective] = useState<Perspective>('Teacher');
  const router = useRouter();

  const getPerspectiveRoute = (perspective: Perspective): string => {
    switch (perspective) {
      case 'Teacher':
        return '/teachers';
      case 'Student':
        return '/students';
      case 'Parent':
        return '/parents';
      default:
        return '/';
    }
  };

  const handleCardClick = () => {
    router.push(getPerspectiveRoute(perspective));
  };

  return (
    <section id="perspectives" className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background-main)' }}>
      <BackgroundFlow variant="section" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2
              className="text-[36px] sm:text-[44px] md:text-[52px] font-semibold leading-tight"
              style={{
                fontFamily: 'var(--font-comfortaa)',
                color: 'var(--color-text-primary)',
              }}
            >
              One System, Three Perspectives.
            </h2>
            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-secondary)',
              }}
            >
              Elara synchronizes the journey for everyone involved.
            </p>
          </div>

          {/* Perspective Switcher */}
          <div className="flex flex-col justify-center">
            <PerspectiveSwitcher
              value={perspective}
              onChange={setPerspective}
              size="lg"
            />
          </div>

          {/* Main Content - Compressed View */}
          <div className="relative">
            <div
              className="cursor-pointer transition-all hover:shadow-xl"
              onClick={handleCardClick}
            >
              <GlassSystemStage
                size="lg"
                perspective={perspective}
              >
                {perspective === 'Teacher' && <TeacherCompressedView />}
                {perspective === 'Student' && <StudentCompressedView />}
                {perspective === 'Parent' && <ParentCompressedView />}
              </GlassSystemStage>
            </div>

            {/* Hint text */}
            <p
              className="text-center mt-4 text-sm"
              style={{
                fontFamily: 'var(--font-nunito)',
                color: 'var(--color-text-muted)',
              }}
            >
              Click the card to explore this perspective in detail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeacherCompressedView() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-lg md:text-xl font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Teacher Clarity Portal
          </h3>
          <p
            className="text-xs md:text-sm mt-0.5"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
          >
            Grade 8 – Mathematics
          </p>
        </div>
        <span
          className="rounded-full border px-3 py-1.5 text-[11px] font-medium bg-white/50"
          style={{ borderColor: '#E2E8F0', fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
        >
          Grade 8 – Mathematics
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6">
        {/* Left: Class Pulse Section */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-white/80 border border-slate-100 px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <p
                className="text-sm md:text-base font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                Class Pulse
              </p>
              <span
                className="text-[11px] md:text-xs px-2 py-1 rounded-md bg-slate-50"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-muted)' }}
              >
                This week
              </span>
            </div>
            
            {/* Wave Visualization */}
            <div className="relative h-32 md:h-36 -mx-1 rounded-xl overflow-hidden">
              <PathVisualization variant="class-pulse-wave" className="h-full w-full" />
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <p
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ fontFamily: 'var(--font-comfortaa)', color: '#0F172A' }}
                >
                  86%
                </p>
                <p
                  className="text-[11px] md:text-xs"
                  style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
                >
                  Avg Engagement
                </p>
              </div>
              <div className="space-y-1.5 text-right">
                <p
                  className="text-base md:text-lg font-semibold"
                  style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
                >
                  3
                </p>
                <p
                  className="text-[11px] md:text-xs"
                  style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
                >
                  At-Risk Students
                </p>
                <div className="mt-1.5 h-2 w-28 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actionable Insights */}
        <div className="space-y-4">
          <p
            className="text-sm md:text-base font-semibold"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
          >
            Actionable Insights
          </p>

          <div className="space-y-3">
            <InsightCard
              type="alert"
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-white font-bold text-base">5</span>
                </div>
              }
              title="Grade Alerts"
              body="5 Students Below C"
              actionIcon={<span className="text-slate-400 text-lg">⋯</span>}
            />
            <InsightCard
              type="signal"
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <AlertTriangle size={18} className="text-white" fill="white" strokeWidth={2} />
                </div>
              }
              title="Missing Assignments"
              body="1 Incomplete Tasks"
              actionIcon={<span className="text-slate-400 text-lg">?</span>}
            />
            <InsightCard
              type="support"
              icon={
                <div className="flex items-center justify-center w-full h-full">
                  <Users size={18} className="text-white" strokeWidth={2} />
                </div>
              }
              title="Low Participation"
              body="4 Disengaged Students"
              actionIcon={<span className="text-slate-400 text-lg">8</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentPathNetwork() {
  // Network graph nodes with positions - matching the design layout
  const nodes = [
    { id: '1', x: 12, y: 28, Icon: FileText, type: 'default', size: 3.5 },
    { id: '2', x: 28, y: 42, Icon: Play, type: 'default', size: 3.5 },
    { id: '3', x: 48, y: 24, Icon: Plus, type: 'default', size: 3.5 },
    { id: '4', x: 68, y: 38, Icon: Calendar, type: 'default', size: 3.5 },
    { id: '5', x: 88, y: 20, Icon: Mail, type: 'default', size: 3.5 },
    { id: '6', x: 58, y: 62, Icon: null, type: 'current', size: 5, label: '6', flag: true },
    { id: '7', x: 38, y: 68, Icon: null, type: 'highlight', size: 4.5, label: '★' },
  ];

  const connections = [
    { from: '1', to: '2' },
    { from: '2', to: '3' },
    { from: '3', to: '4' },
    { from: '4', to: '5' },
    { from: '2', to: '6' },
    { from: '6', to: '7' },
    { from: '3', to: '6' },
  ];

  return (
    <div 
      className="relative w-full h-72 md:h-96 bg-gradient-to-b from-sky-50/30 via-white to-white rounded-2xl border overflow-hidden"
      style={{ borderColor: 'rgba(241, 245, 249, 0.9)' }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="nodeShadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.15"/>
          </filter>
        </defs>
        
        {/* Connections with curved paths - all dashed and uncolored */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;
          
          // Create curved path with natural curve
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2 + 3;
          
          return (
            <path
              key={idx}
              d={`M ${fromNode.x} ${fromNode.y} Q ${midX} ${midY} ${toNode.x} ${toNode.y}`}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              opacity="0.5"
            />
          );
        })}

        {/* Node circles - only first two are colored */}
        {nodes.map((node, index) => {
          const isCurrent = node.type === 'current';
          const isHighlight = node.type === 'highlight';
          const isFirstTwo = index < 2; // Only first two nodes (FileText and Play) are colored
          
          return (
            <circle
              key={`circle-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill={isCurrent ? "#3B82F6" : isHighlight ? "#E86B42" : isFirstTwo ? "#BFDBFE" : "#E2E8F0"}
              stroke={isCurrent ? "#2563EB" : isHighlight ? "#C65636" : isFirstTwo ? "white" : "#CBD5E1"}
              strokeWidth={isCurrent ? "1.2" : "1"}
              opacity={isCurrent ? "1" : isFirstTwo ? "0.9" : "0.7"}
              filter={isCurrent ? "url(#glow)" : "url(#nodeShadow)"}
            />
          );
        })}

        {/* Text labels for nodes without icons */}
        {nodes.filter(n => !n.Icon).map((node) => {
          const isCurrent = node.type === 'current';
          return (
            <text
              key={`text-${node.id}`}
              x={node.x}
              y={node.y + 1.2}
              textAnchor="middle"
              fontSize={isCurrent ? "4.5" : "4"}
              fill="white"
              fontWeight="700"
              style={{ fontFamily: 'var(--font-nunito)' }}
            >
              {node.label}
            </text>
          );
        })}
      </svg>

      {/* React components for icons positioned absolutely */}
      {nodes.filter(n => n.Icon).map((node) => {
        const IconComponent = node.Icon!;
        const iconSize = node.size * 1.8; // Convert SVG units to pixel-like size
        const isFirstTwo = node.id === '1' || node.id === '2'; // Only first two nodes have dark icons
        
        return (
          <div
            key={`icon-${node.id}`}
            className="absolute flex items-center justify-center pointer-events-none"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
              width: `${iconSize * 0.8}px`,
              height: `${iconSize * 0.8}px`,
            }}
          >
            <IconComponent 
              size={iconSize}
              color={isFirstTwo ? "#475569" : "#CBD5E1"}
              strokeWidth={2}
              fill="none"
            />
          </div>
        );
      })}

      {/* Flag icon for current node */}
      {nodes.filter(n => n.flag).map((node) => (
        <div
          key={`flag-${node.id}`}
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: `${node.x}%`,
            top: `${node.y - node.size - 1.5}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Flag size={12} fill="#2563EB" color="#2563EB" strokeWidth={2} />
        </div>
      ))}
    </div>
  );
}

function StudentCompressedView() {
  return (
    <div className="space-y-6 p-2">
      {/* My Path Title */}
      <div className="text-center">
        <h3
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
        >
          My Path
        </h3>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Current Focus Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <p
              className="text-xs font-semibold uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-muted)' }}
            >
              Current Focus
            </p>
            <p
              className="text-base md:text-lg font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
            >
              Algebra Essentials
            </p>
          </div>
          
          <button
            className="w-full rounded-xl bg-gradient-to-b from-[#3B82F6] to-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,0.45)] transition-all hover:shadow-[0_12px_24px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
            style={{ fontFamily: 'var(--font-nunito)' }}
          >
            Continue
          </button>

          <div className="flex items-center gap-2 text-sm pt-1">
            <CheckCircle2 size={16} className="text-green-600" />
            <span
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
            >
              2 of 5 Modules Completed
            </span>
          </div>
        </div>

        {/* Learning Path Visualization */}
        <div className="relative">
          <StudentPathNetwork />
        </div>
      </div>

      {/* Signals Section */}
      <div 
        className="space-y-3 pt-4 border-t"
        style={{ borderTopColor: '#E2E8F0' }}
      >
        <p
          className="text-sm font-semibold"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
        >
          Signals
        </p>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5 text-sm">
            <CheckCircle2 size={16} className="text-green-600 shrink-0" />
            <span style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}>
              Great progress! Keep it up!
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-sm">
            <Mail size={16} className="text-orange-500 shrink-0" />
            <span style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}>
              New lesson recommended
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentCompressedView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h3
          className="text-xl md:text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
        >
          Parent Trust Report
        </h3>
        <p
          className="text-sm md:text-base"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
        >
          Aiden&apos;s Progress Overview
        </p>
      </div>

      {/* Detailed Insights Section */}
      <div className="rounded-2xl bg-white/80 border border-slate-100 px-6 py-6 space-y-4">
        <p
          className="text-sm md:text-base font-semibold"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
        >
          Learning Insights
        </p>
        <div className="space-y-3">
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
          >
            Aiden shows strong engagement in science, particularly when exploring hands-on experiments. His recent project demonstrated clear understanding of scientific concepts and the ability to communicate findings effectively.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
          >
            In mathematics, he&apos;s developing confidence with problem-solving strategies. While he sometimes needs support understanding word problems, his computational skills are solid and improving.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
          >
            Language arts reveals a creative writer who enjoys storytelling. Reading comprehension shows growth when discussing texts together, suggesting that conversation helps deepen understanding.
          </p>
        </div>
      </div>

      {/* Insight Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-sm md:text-base font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Strengths
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="strength"
              icon={<Star size={18} className="text-white" fill="white" />}
              title="Science Fair Success"
              body="Aiden presented his project with confidence and clarity."
              className="h-full"
            />
            <InsightCard
              type="strength"
              icon={<Award size={18} className="text-white" fill="white" />}
              title="Creative Writing"
              body="Recognized for imaginative storytelling and strong narrative structure."
              className="h-full"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-sm md:text-base font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Areas for Growth
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="support"
              icon={<Lightbulb size={18} className="text-white" fill="white" />}
              title="Encourage science experiments at home"
              body="Building on his natural curiosity and interest."
              className="h-full"
            />
            <InsightCard
              type="support"
              icon={<BookOpen size={18} className="text-white" fill="white" />}
              title="Practice reading comprehension"
              body="Focus on understanding context and main ideas."
              className="h-full"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-sm md:text-base font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Recommendations
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="action"
              icon={<MessageSquare size={18} className="text-white" fill="white" />}
              title="Discuss daily learning"
              body="Ask about what he learned today and what questions came up."
              className="h-full"
            />
            <InsightCard
              type="action"
              icon={<Target size={18} className="text-white" fill="white" />}
              title="Create a reading routine"
              body="Set aside time for shared reading and discussion to strengthen comprehension."
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ExpandedView removed - navigation to pages instead

function TeacherExpandedView() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3
              className="text-2xl font-semibold"
              style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
            >
              Teacher Clarity Portal
            </h3>
            <p
              className="text-sm mt-1"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
            >
              Grade 8 – Mathematics
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/80 border border-slate-100 px-6 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <p
              className="font-semibold text-lg"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
            >
              Class Pulse
            </p>
            <span
              className="text-sm"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-muted)' }}
            >
              This week
            </span>
          </div>
          <PathVisualization variant="class-pulse-wave" />
          <div className="flex items-center justify-between pt-4">
            <div className="space-y-1">
              <p
                className="text-4xl font-semibold"
                style={{ fontFamily: 'var(--font-comfortaa)', color: '#0F172A' }}
              >
                86%
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                Avg Engagement
              </p>
            </div>
            <div className="space-y-1 text-right">
              <p
                className="text-xl font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                3
              </p>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                At-Risk Students
              </p>
              <div className="mt-2 h-2 w-32 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
          >
            Actionable Insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InsightCard
              type="alert"
              icon={<span className="text-orange-600 font-bold text-xl">5</span>}
              title="Grade Alerts"
              body="5 Students Below C"
              actionIcon={<span className="text-slate-400">⋯</span>}
            />
            <InsightCard
              type="signal"
              icon={<span className="text-yellow-600 font-bold text-xl">!</span>}
              title="Missing Assignments"
              body="1 Incomplete Tasks"
              actionIcon={<span className="text-slate-400">?</span>}
            />
            <InsightCard
              type="support"
              icon={<span className="text-sky-600 font-bold text-xl">◎</span>}
              title="Low Participation"
              body="4 Disengaged Students"
              actionIcon={<span className="text-slate-400">8</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentExpandedView() {
  return (
    <div className="space-y-8">
      <div>
        <h3
          className="text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
        >
          Student Dashboard
        </h3>
        <p
          className="text-sm mt-1"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
        >
          2 of 5 Modules Completed
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <p
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            My Path
          </p>
          <PathVisualization variant="student-path" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-6">
          <div className="rounded-2xl bg-white/90 border border-slate-100 p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <p
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-muted)' }}
              >
                Current Focus
              </p>
              <p
                className="text-xl font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                The Geometry of Nature
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div className="h-24 w-32 rounded-2xl bg-gradient-to-br from-sky-100 via-indigo-100 to-rose-100 shadow-inner" />
              <button
                className="rounded-xl bg-gradient-to-b from-[#3B82F6] to-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,0.45)]"
                style={{ fontFamily: 'var(--font-nunito)' }}
              >
                Start Learning
              </button>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-4">
            <div className="rounded-2xl bg-white/90 border border-slate-100 px-5 py-4">
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                Signals
              </p>
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                Your Rhythm
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 border border-slate-100 px-5 py-4">
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                Strengths
              </p>
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                Geometry · Trigonometry
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 border border-slate-100 px-5 py-4">
              <p
                className="text-sm font-semibold"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
              >
                Growth
              </p>
              <p
                className="mt-2 text-sm"
                style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
              >
                Patterns and Structures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ParentExpandedView() {
  return (
    <div className="space-y-8">
      <div>
        <h3
          className="text-2xl font-semibold"
          style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
        >
          Parent Trust Report
        </h3>
        <p
          className="text-sm mt-1"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
        >
          Aiden&apos;s Progress Overview
        </p>
      </div>

      {/* Detailed Insights Section */}
      <div className="rounded-2xl bg-white/80 border border-slate-100 px-8 py-6 space-y-5">
        <p
          className="text-lg font-semibold"
          style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
        >
          Learning Insights
        </p>
        <div className="space-y-4">
          <div>
            <p
              className="text-base font-semibold mb-2"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
            >
              Science
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
            >
              Aiden shows strong engagement in science, particularly when exploring hands-on experiments. His recent project demonstrated clear understanding of scientific concepts and the ability to communicate findings effectively. He asks thoughtful questions and shows genuine curiosity about how things work.
            </p>
          </div>
          <div>
            <p
              className="text-base font-semibold mb-2"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
            >
              Mathematics
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
            >
              In mathematics, he&apos;s developing confidence with problem-solving strategies. While he sometimes needs support understanding word problems, his computational skills are solid and improving. He benefits from breaking problems into smaller steps and discussing his thinking process.
            </p>
          </div>
          <div>
            <p
              className="text-base font-semibold mb-2"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-primary)' }}
            >
              Language Arts
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-nunito)', color: 'var(--color-text-secondary)' }}
            >
              Language arts reveals a creative writer who enjoys storytelling. Reading comprehension shows growth when discussing texts together, suggesting that conversation helps deepen understanding. His writing shows imagination and he&apos;s learning to structure narratives more effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Strengths
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="strength"
              icon={<Star size={18} className="text-white" fill="white" />}
              title="Science Fair Success"
              body="Aiden presented his project with confidence and clarity. His understanding of scientific concepts is strong."
              className="h-full"
            />
            <InsightCard
              type="strength"
              icon={<Award size={18} className="text-white" fill="white" />}
              title="Creative Writing"
              body="Recognized for imaginative storytelling and strong narrative structure. Shows natural talent for expression."
              className="h-full"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Areas for Growth
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="support"
              icon={<Lightbulb size={18} className="text-white" fill="white" />}
              title="Encourage science experiments at home"
              body="Building on his natural curiosity and interest will strengthen his understanding."
              className="h-full"
            />
            <InsightCard
              type="support"
              icon={<BookOpen size={18} className="text-white" fill="white" />}
              title="Practice reading comprehension"
              body="Focus on understanding context and main ideas through discussion and reflection."
              className="h-full"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 h-full">
          <p
            className="text-lg font-semibold"
            style={{ fontFamily: 'var(--font-comfortaa)', color: 'var(--color-text-primary)' }}
          >
            Recommendations
          </p>
          <div className="flex flex-col gap-4 flex-1">
            <InsightCard
              type="action"
              icon={<MessageSquare size={18} className="text-white" fill="white" />}
              title="Discuss daily learning"
              body="Ask about what he learned today and what questions came up. This helps reinforce understanding and shows interest in his education."
              className="h-full"
            />
            <InsightCard
              type="action"
              icon={<Target size={18} className="text-white" fill="white" />}
              title="Create a reading routine"
              body="Set aside time for shared reading and discussion to strengthen comprehension skills and build vocabulary."
              className="h-full"
            />
            <InsightCard
              type="action"
              icon={<CheckCircle2 size={18} className="text-white" fill="white" />}
              title="Support math problem-solving"
              body="When he encounters word problems, help him identify key information and break the problem into steps rather than solving it for him."
              className="h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
