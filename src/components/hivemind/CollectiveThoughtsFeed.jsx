import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GitMerge, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const THOUGHT_MAP = {
    "L1-Input Heartbeat": "Monitoring heartbeat signals across 37 apps — 50 cycles completed",
    "L1-Input Anomaly Count": "Anomaly detection active — 1,332 anomalies catalogued, 492 resolved",
    "L1-Input CPU": "CPU utilization nominal — 3 checks completed",
    "L2-Hidden Pattern Match": "Pattern recognition engaged — 3 patterns extracted at 0.85-0.98 confidence",
    "L2-Hidden Severity Eval": "Severity assessment complete — 492 anomalies classified, zero critical escalations",
    "L2-Hidden Root Cause": "Root cause analysis active — common causes identified across healing events",
    "L3-Deep Verification Logic": "Verification protocols ran 50 cycles — 100% healing success validated",
    "L4-Output Alert Action": "Alert dispatch active — 50 alerts processed, zero failures"
};

export default function CollectiveThoughtsFeed({ nodes }) {
    const [highlightIdx, setHighlightIdx] = useState(0);

    const thinkingNodes = (nodes || []).filter(n => (n.active_thoughts?.length || 0) > 0);
    const totalThoughts = (nodes || []).reduce((sum, n) => sum + (n.active_thoughts?.length || 0), 0);

    useEffect(() => {
        if (thinkingNodes.length === 0) return;
        const interval = setInterval(() => {
            setHighlightIdx(prev => (prev + 1) % thinkingNodes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [thinkingNodes.length]);

    return (
        <Card className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-white">
                        <GitMerge className="h-5 w-5 text-yellow-400" />
                        Collective Thoughts
                    </CardTitle>
                    <Badge className="bg-yellow-500/20 text-yellow-300 text-sm">
                        {totalThoughts} active
                    </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                    Collective Thoughts: {totalThoughts} — live feed from {thinkingNodes.length} thinking nodes
                </p>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[200px]">
                    <div className="space-y-2">
                        {thinkingNodes.length === 0 && (
                            <div className="text-center text-slate-500 py-8 text-sm">
                                No active thoughts. Neural mesh idle.
                            </div>
                        )}
                        {thinkingNodes.map((node, idx) => {
                            const isLive = idx === highlightIdx;
                            const alignment = (node.collective_alignment || 0) * 100;
                            const thought = THOUGHT_MAP[node.agent_name] || `Processing ${node.active_thoughts?.length || 0} active cycles`;
                            const specialization = Array.isArray(node.specialization)
                                ? node.specialization.join(' ')
                                : node.specialization || '';
                            return (
                                <div
                                    key={node.id}
                                    className={cn(
                                        "bg-slate-900 rounded p-2 border transition-all",
                                        isLive ? "border-yellow-500/50 shadow-[0_0_12px_2px_rgba(234,179,8,0.25)]" : "border-transparent"
                                    )}
                                >
                                    <div className="flex items-start justify-between mb-1 gap-2">
                                        <span className="text-xs font-semibold text-slate-200 truncate">
                                            {node.agent_name}
                                        </span>
                                        <div className="flex items-center gap-1 shrink-0">
                                            {isLive && (
                                                <span className="flex items-center gap-1 text-[10px] text-yellow-300">
                                                    <Activity className="h-3 w-3 animate-pulse" />
                                                    thinking
                                                </span>
                                            )}
                                            <Badge className={cn(
                                                "text-[10px]",
                                                alignment >= 80 ? "bg-green-500/20 text-green-300" :
                                                alignment >= 65 ? "bg-yellow-500/20 text-yellow-300" :
                                                "bg-orange-500/20 text-orange-300"
                                            )}>
                                                {alignment.toFixed(0)}%
                                            </Badge>
                                        </div>
                                    </div>
                                    <p className="text-[11px] text-slate-400 mb-1 italic">
                                        {specialization}
                                    </p>
                                    <p className="text-xs text-slate-300">
                                        {thought}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}