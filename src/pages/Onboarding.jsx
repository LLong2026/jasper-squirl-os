import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Activity, Brain, Bell, Plug, Server, CheckCircle2, Zap, ShieldCheck, User } from 'lucide-react';

const CAPABILITIES = [
  { icon: Activity, title: 'Autonomous Monitoring', desc: 'Heartbeat pulses scan the entire fleet on a fixed cadence, checking every agent, node, and integration.' },
  { icon: ShieldCheck, title: 'Self-Healing', desc: 'When an anomaly is detected, the matched playbook executes automatically — detect, isolate, heal, verify.' },
  { icon: Brain, title: 'Pattern Learning', desc: 'Every healing event feeds the neural mesh. The system recognizes recurring issues and improves response over time.' },
  { icon: Bell, title: 'Predictive Alerting', desc: 'PredictiveAlerts flag emerging issues before they become incidents, giving you time to act proactively.' },
];

const STEPS = [
  { icon: Plug, title: 'Connect via Squirrel OS Hub', desc: 'Register your deployment through the Squirrel OS Hub platform.' },
  { icon: Server, title: 'Choose Your Tier', desc: 'Select the monitoring tier that matches your infrastructure scale and compliance needs.' },
  { icon: Rocket, title: 'Deploy the Template', desc: 'Deploy the Squirrel OS template — entities, workflows, and playbooks install automatically.' },
  { icon: Activity, title: 'Activate Heartbeat', desc: 'Enable the heartbeat monitor. Your system goes live immediately.' },
];

const POST_DEPLOY = [
  'Heartbeat monitoring starts immediately',
  'Anomaly detection goes live',
  'Healing playbooks activate',
  'Neural mesh begins learning',
];

export default function Onboarding() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-full">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-8 space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-400 bg-emerald-500/10">
            <Rocket className="h-3 w-3 mr-1" /> Getting Started
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Onboarding
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            What Jasper means for your infrastructure and how to get started in four steps.
          </p>
        </div>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Zap className="h-5 w-5 text-blue-400" /> What Jasper Means for Your Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CAPABILITIES.map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="space-y-2 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-blue-400" />
                      <span className="font-semibold text-sm text-slate-200">{c.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 text-slate-100">
              <Rocket className="h-5 w-5 text-violet-400" /> How to Get Started
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex items-start gap-4 p-4 rounded-lg bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-violet-500/20 border border-violet-500/30 shrink-0">
                      <span className="text-sm font-bold text-violet-300">{i + 1}</span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-violet-400" />
                        <span className="font-semibold text-sm text-slate-200">{step.title}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-slate-900/80 border-slate-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-slate-100">
                <Plug className="h-4 w-4 text-emerald-400" /> What You Need
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-emerald-400">For Base44 apps:</span> Nothing. Squirrel OS
                  is embedded — it ships with the app. No extra credentials or infrastructure required.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-amber-400">For external platforms:</span> Azure, Apple,
                  or Jamf credentials, depending on which platforms you want Squirrel OS to monitor and heal.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/80 border-slate-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-slate-100">
                <Activity className="h-4 w-4 text-blue-400" /> After Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {POST_DEPLOY.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-slate-900/80 to-blue-950/30 border-slate-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500/20 border border-blue-500/30">
                <User className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-200 font-medium">Owner: Leon Calvin Long II</p>
                <p className="text-xs text-slate-500">Squirrel OS Technologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}