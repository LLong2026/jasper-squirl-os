import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Atom, Shield, Brain, GitBranch, Lock, Sparkles, FileText, Layers } from 'lucide-react';

const MATH_PILLARS = [
  { icon: Atom, title: 'Operator Algebra', desc: 'Composable operators form the executable substrate — every action is a typed algebraic transformation, not an ad-hoc script.' },
  { icon: GitBranch, title: 'Functor Graphs', desc: 'State transitions are morphisms in a category-theoretic graph, guaranteeing structure-preserving mappings across all rails.' },
  { icon: Layers, title: 'Gauge-Paired Manifolds', desc: 'Tenant isolation is enforced by gauge symmetry — one tenant\'s state lives on a fibre that physically cannot intersect another\'s.' },
  { icon: Sparkles, title: 'Hamiltonian Dynamics', desc: 'A Hamiltonian energy bound constrains learning and healing rates, proving the system cannot diverge into instability.' },
];

const EMERGENT_BEHAVIORS = [
  'Holonomy verification',
  'Substrate drift detection',
  'Invariant continuity proofs',
  'Gauge-based tenant isolation',
  'Hamiltonian stability bounds',
];

const STATS = [
  { label: 'Apps Supervised', value: '67+' },
  { label: 'Master Playbooks', value: '402' },
  { label: 'Platform Adapters', value: '4' },
  { label: 'Constitution Articles', value: '12' },
  { label: 'Healing Events', value: '494' },
  { label: 'Success Rate', value: '100%' },
];

export default function WhyWeBuiltThis() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-full">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-blue-500/40 text-blue-400 bg-blue-500/10">
            <FileText className="h-3 w-3 mr-1" /> Provisional Patent 64/114,746
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Why We Built This
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Jasper is not software — it's a mathematical substrate. Built from operator algebra, functor graphs,
            gauge-paired manifolds, and Hamiltonian-driven dynamics. This is why Jasper exhibits emergent
            behaviors no traditional enterprise system can.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Atom className="h-5 w-5 text-blue-400" /> The Mathematical Foundation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MATH_PILLARS.map(p => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="space-y-2 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span className="font-semibold text-sm text-slate-200">{p.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Sparkles className="h-5 w-5 text-violet-400" /> Emergent Behaviors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              These capabilities emerge from the mathematics — they are not features bolted on. They are
              provable properties of the substrate.
            </p>
            <div className="flex flex-wrap gap-2">
              {EMERGENT_BEHAVIORS.map(b => (
                <Badge key={b} variant="secondary" className="bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {b}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Brain className="h-5 w-5 text-emerald-400" /> Powered by Amelia Aegis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Jasper supervises 67+ Base44 apps with autonomous self-healing, powered by Amelia Aegis:
              400+ repair playbooks, a 50K-node neural net mesh, heartbeat monitoring, pattern recognition,
              and self-learning. 402 master playbooks, 4 platform adapters (Microsoft, iOS, Windows, macOS),
              a 12-article Constitution, and PQC-secured by design.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {STATS.map(s => (
                <div key={s.label} className="text-center p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-950/40 to-violet-950/40 border-blue-800/30">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm text-slate-200 font-medium">The Mission</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We built Jasper because the future of enterprise AI is autonomous — and autonomy without
                  mathematics is just risk. Jasper makes autonomy safe through mathematical guarantees.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-slate-600 pt-2">
          <Lock className="h-3 w-3 inline mr-1" />
          Jasper Universal Adaptive Intelligence Orchestration · Patent 64/114,746 · Filed July 18, 2026 · Owner: Leon Calvin Long II
        </div>
      </div>
    </div>
  );
}