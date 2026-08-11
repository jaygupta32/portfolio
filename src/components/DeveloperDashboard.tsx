import React, { useState, useEffect } from 'react';
import {
  Activity,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
  Terminal as TerminalIcon,
  Clock,
  GitBranch,
  ShieldAlert,
  HardDrive,
  RefreshCw,
  Globe
} from 'lucide-react';

export const DeveloperDashboard: React.FC = () => {
  // Live simulated system telemetry
  const [latency, setLatency] = useState(24);
  const [memory, setMemory] = useState(142);
  const [activeThreads, setActiveThreads] = useState(18);
  const [logs, setLogs] = useState<string[]>([
    '[15:42:01] [INFO] API Gateway v2.4 initialized on port 3000',
    '[15:42:03] [SUCCESS] Database connection established (Pool: 10 connections)',
    '[15:42:05] [TEST] Executing TrustPay24 Intent Automation (142 tests passing)',
    '[15:42:09] [BOT] Windows Automation Engine: Syncing script repository...',
    '[15:42:12] [DEPL] Vercel Build Pipeline complete -> 200 OK'
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate stats slightly
      setLatency(Math.floor(20 + Math.random() * 9));
      setMemory(Math.floor(138 + Math.random() * 12));
      setActiveThreads(Math.floor(16 + Math.random() * 6));

      // Append new event log periodically
      const newEvents = [
        `[${new Date().toLocaleTimeString()}] [API] GET /api/v1/healthcheck 200 OK (${Math.floor(15 + Math.random() * 15)}ms)`,
        `[${new Date().toLocaleTimeString()}] [BOT] Executing background script #802 (Status: PASS)`,
        `[${new Date().toLocaleTimeString()}] [QA] TrustPay24 API assertion response verified`,
        `[${new Date().toLocaleTimeString()}] [SOCKET] Real-time telemetry event emitted`
      ];
      const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
      setLogs(prev => [randomEvent, ...prev.slice(0, 5)]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // GitHub 52-week activity bars mock data
  const weeklyActivity = [
    45, 62, 88, 70, 95, 110, 85, 90, 120, 105, 130, 95,
    80, 115, 140, 125, 90, 100, 135, 150, 110, 120, 145, 160
  ];

  return (
    <section id="dashboard" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>LIVE TELEMETRY & MONITORING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Command Center
          </h2>
          <p className="text-slate-400 font-mono text-xs max-w-xl mx-auto">
            Real-time status indicators across automation engines, API health, system resource allocation, and GitHub activity logs.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* GitHub Activity & Commit Stats (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-cyan-500/30 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    GitHub Activity & Commit Velocity
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">124+ Commits pushed in 2026</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYNCED
              </span>
            </div>

            {/* Commit Frequency Bar Chart */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>Weekly Commit Frequency (2026)</span>
                <span className="text-cyan-400 font-bold">Avg 12 commits / month</span>
              </div>
              <div className="h-32 flex items-end justify-between gap-1.5 pt-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {weeklyActivity.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group relative">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 via-cyan-500 to-purple-500 rounded-t transition-all group-hover:brightness-125 group-hover:shadow-[0_0_10px_#06B6D4]"
                      style={{ height: `${(val / 160) * 100}%` }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-slate-900 text-cyan-300 font-mono text-[9px] px-2 py-0.5 rounded border border-cyan-500/40 transition-opacity pointer-events-none whitespace-nowrap z-20">
                      W{idx + 1}: {val} commits
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Quick Indicators */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block uppercase text-[10px]">Active Repos</span>
                <span className="text-base font-extrabold text-cyan-400">28 Public</span>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block uppercase text-[10px]">CI/CD Pipelines</span>
                <span className="text-base font-extrabold text-purple-400">100% Pass</span>
              </div>
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block uppercase text-[10px]">Automation Tests</span>
                <span className="text-base font-extrabold text-emerald-400">142 Suite</span>
              </div>
            </div>
          </div>

          {/* System Telemetry & Live Logs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* System Health Grid */}
            <div className="glass-panel rounded-2xl p-5 border border-purple-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase tracking-wider">
                  <Server className="w-4 h-4 text-purple-400" />
                  <span>System Telemetry & Health</span>
                </div>
                <RefreshCw className="w-3.5 h-3.5 text-slate-400 animate-spin" />
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase block">API Health</span>
                  <div className="flex items-center gap-1.5 text-sm font-extrabold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>99.9% Operational</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase block">Automation Engine</span>
                  <div className="flex items-center gap-1.5 text-sm font-extrabold text-cyan-400">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>ACTIVE</span>
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase block">API Latency</span>
                  <div className="text-sm font-extrabold text-blue-400">
                    {latency} ms
                  </div>
                </div>

                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase block">Memory Heap</span>
                  <div className="text-sm font-extrabold text-purple-400">
                    {memory} MB / 512 MB
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Terminal Event Stream */}
            <div className="glass-panel rounded-2xl p-4 border border-blue-500/30 font-mono text-[11px] space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  <span>Real-Time Event Stream</span>
                </div>
                <span className="text-[9px] text-slate-500">Auto-scrolling</span>
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 space-y-1.5 text-slate-300 max-h-36 overflow-hidden">
                {logs.map((log, idx) => (
                  <div key={idx} className="truncate text-[10px] text-cyan-300/90 hover:text-white transition-colors">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
