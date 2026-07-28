import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Activity, Brain, Shield, Lock, Workflow, ArrowRight, Network, Zap, Gauge } from 'lucide-react';

const HEALING_LOOP = [
  { icon: Activity, title: 'Detect', desc: 'Scan heartbeats, compare metrics against baselines, flag deviations across all entities and integrations.', color: 'text-blue-400' },
  { icon: Shield, title: 'Isolate', desc: 'Determine blast radius, contain the anomaly to prevent cascading failure across the mesh.', color: 'text-amber-400' },
  { icon: Zap, title: 'Heal', desc: 'Execute the matched playbook, verify the fix took hold, and log every step as an AegisHealingEvent.', color: 'text-emerald-400' },
  { icon: Brain, title: 'Learn', desc: 'Update patterns, learning metrics, and neural mesh weights — the system gets smarter from every event.', color: 'text-violet-400' },
];

const URIB_STAGES = ['Canonical', 'Semantic', 'ThreadZero', 'Stack', 'Taproot', 'Rails', 'Settlement'];

const STATS = [
  { label: 'Healing Events', value: '494', icon: Activity },
  { label: 'Success Rate', value: '100%', icon: Shield },
  { label: 'Health Score', value: '99.0', icon: Gauge },
  { label: 'Neural Nodes', value: '310', icon: Network },
];

const PQC_ALGOS = [
  { name: 'Kyber-1024', type: 'KEM', desc: 'Key encapsulation for secure key exchange' },
  { name: 'Dilithium3', type: 'Signature', desc: 'Post-quantum digital signatures (CRYSTALS)' },
  { name: 'SPHINCS+-256f', type: 'Signature', desc: 'Hash-based stateless signatures' },
];

export default function HowItWorks() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-full">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-violet-500/40 text-violet-400 bg-violet-500/10">
            <Cpu className="h-3 w-3 mr-1" /> Architecture Overview
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Jasper Hypervisor sits at the top of the orchestration stack, supervising all agents, nodes, and tasks.
            Amelia Aegis runs the self-healing loop beneath it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                <Icon className="h-4 w-4 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{s.value}</div>
                <div className="text-xs text-slate-500 mt-1">{s.label}</div>
              </div>
            );
          })}
        </div>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Shield className="h-5 w-5 text-emerald-400" /> The Self-Healing Loop
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {HEALING_LOOP.map((step, i) => {
                const Icon = step.icon;
                return (
                  <React.Fragment key={step.title}>
                    <div className="space-y-2 p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                      <Icon className={`h-6 w-6 mx-auto ${step.color}`} />
                      <div className="font-semibold text-sm text-slate-200">{step.title}</div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                    {i < HEALING_LOOP.length - 1 && (
                      <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-slate-600" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Network className="h-5 w-5 text-violet-400" /> Neural Mesh
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              5 layers, 31 nodes (310 total neural nodes in the live system). The mesh learns from every healing
              event, bounded by Hamiltonian stability guarantees that mathematically prevent divergence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-lg font-bold text-violet-400">0.01</div>
                <div className="text-xs text-slate-500">Max Learning Rate</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-lg font-bold text-violet-400">15%</div>
                <div className="text-xs text-slate-500">Max Weight Change</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-lg font-bold text-violet-400">100</div>
                <div className="text-xs text-slate-500">Max Cycles/Day</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                <div className="text-lg font-bold text-violet-400">5</div>
                <div className="text-xs text-slate-500">Mesh Layers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Lock className="h-5 w-5 text-blue-400" /> Constitution Enforcement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              12 articles, 15 policies. The kill switch ("SQUIRREL OS STOP") halts all autonomous actions
              immediately and cannot be disabled by the system. Safe mode restricts to read-only monitoring.
              Human-in-the-loop is required for all critical operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 border border-blue-500/20">12 Articles</Badge>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-300 border border-blue-500/20">15 Policies</Badge>
              <Badge variant="secondary" className="bg-rose-500/10 text-rose-300 border border-rose-500/20">Kill Switch</Badge>
              <Badge variant="secondary" className="bg-amber-500/10 text-amber-300 border border-amber-500/20">Safe Mode</Badge>
              <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Human-in-the-Loop</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Lock className="h-5 w-5 text-emerald-400" /> Post-Quantum Cryptography
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Quantum-safe by design, not by retrofit. All critical surfaces use NIST-standardized PQC algorithms.
            </p>
            <div className="space-y-2">
              {PQC_ALGOS.map(a => (
                <div key={a.name} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-slate-200">{a.name}</span>
                    <span className="text-xs text-slate-500 ml-2">{a.desc}</span>
                  </div>
                  <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 text-xs">{a.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Workflow className="h-5 w-5 text-amber-400" /> 7-Stage URIB Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              The Universal Rail Integration Bridge maps any financial instruction across all rails with
              cryptographic proofing at every stage.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {URIB_STAGES.map((stage, i) => (
                <React.Fragment key={stage}>
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-3 py-1">
                    {i + 1}. {stage}
                  </Badge>
                  {i < URIB_STAGES.length - 1 && <ArrowRight className="h-3 w-3 text-slate-600" />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-slate-600 pt-2">
          Jasper Hypervisor · Squirrel OS v1.1 · Owner: Leon Calvin Long II
        </div>
      </div>
    </div>
  );
}