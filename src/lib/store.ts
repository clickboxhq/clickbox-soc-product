import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  alerts as seedAlerts,
  incidents as seedIncidents,
  identities as seedIdentities,
  endpoints as seedEndpoints,
  scenarios as seedScenarios,
} from "./soc-data";

export type Severity = "critical" | "high" | "medium" | "low";
export type AlertStatus = "new" | "open" | "in-progress" | "escalated" | "resolved" | "closed";

export type Alert = Omit<(typeof seedAlerts)[number], "status"> & { status: AlertStatus; notes?: Note[] };
export type Incident = Omit<(typeof seedIncidents)[number], "status"> & { status: AlertStatus; notes?: Note[] };
export type Identity = (typeof seedIdentities)[number];
export type Endpoint = (typeof seedEndpoints)[number];
export type Scenario = (typeof seedScenarios)[number];

export type Note = {
  id: string;
  author: string;
  ts: string;
  body: string;
};

export type EmailVerdict = "phishing" | "benign" | "suspicious";

export type EmailCaseState = {
  verdict?: EmailVerdict;
  notes: Note[];
  submittedAt?: string;
  score?: number;
};

type SocState = {
  alerts: Alert[];
  incidents: Incident[];
  identities: Identity[];
  endpoints: Endpoint[];
  scenarios: Scenario[];
  emailCases: Record<string, EmailCaseState>;
  scenarioProgress: Record<string, number>;

  // actions
  setAlertStatus: (id: string, status: AlertStatus) => void;
  assignAlert: (id: string, analyst: string) => void;
  resolveAlert: (id: string) => void;
  escalateAlert: (id: string) => void;
  addAlertNote: (id: string, note: Omit<Note, "id" | "ts">) => void;

  setIncidentStatus: (id: string, status: string) => void;
  addIncidentNote: (id: string, note: Omit<Note, "id" | "ts">) => void;

  submitEmailVerdict: (caseId: string, verdict: EmailVerdict, score: number) => void;
  addEmailNote: (caseId: string, note: Omit<Note, "id" | "ts">) => void;

  setScenarioProgress: (id: string, pct: number) => void;

  reset: () => void;
};

const seed = (): Pick<SocState, "alerts" | "incidents" | "identities" | "endpoints" | "scenarios" | "emailCases" | "scenarioProgress"> => ({
  alerts: seedAlerts.map((a) => ({ ...a, notes: [] as Note[] })) as Alert[],
  incidents: seedIncidents.map((i) => ({ ...i, notes: [] as Note[] })) as Incident[],
  identities: [...seedIdentities],
  endpoints: [...seedEndpoints],
  scenarios: [...seedScenarios],
  emailCases: {} as Record<string, EmailCaseState>,
  scenarioProgress: Object.fromEntries(seedScenarios.map((s) => [s.id, s.completion])),
});

const nowStr = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const rid = () => Math.random().toString(36).slice(2, 10);

export const useSoc = create<SocState>()(
  persist(
    (set) => ({
      ...seed(),

      setAlertStatus: (id, status) =>
        set((s) => ({ alerts: s.alerts.map((a) => (a.id === id ? { ...a, status } : a)) })),
      assignAlert: (id, analyst) =>
        set((s) => ({ alerts: s.alerts.map((a) => (a.id === id ? { ...a, analyst } : a)) })),
      resolveAlert: (id) =>
        set((s) => ({ alerts: s.alerts.map((a) => (a.id === id ? { ...a, status: "resolved" } : a)) })),
      escalateAlert: (id) =>
        set((s) => ({ alerts: s.alerts.map((a) => (a.id === id ? { ...a, status: "escalated" } : a)) })),
      addAlertNote: (id, note) =>
        set((s) => ({
          alerts: s.alerts.map((a) =>
            a.id === id ? { ...a, notes: [...(a.notes ?? []), { ...note, id: rid(), ts: nowStr() }] } : a,
          ),
        })),

      setIncidentStatus: (id, status) =>
        set((s) => ({ incidents: s.incidents.map((i) => (i.id === id ? { ...i, status: status as Incident["status"] } : i)) })),
      addIncidentNote: (id, note) =>
        set((s) => ({
          incidents: s.incidents.map((i) =>
            i.id === id ? { ...i, notes: [...(i.notes ?? []), { ...note, id: rid(), ts: nowStr() }] } : i,
          ),
        })),

      submitEmailVerdict: (caseId, verdict, score) =>
        set((s) => ({
          emailCases: {
            ...s.emailCases,
            [caseId]: {
              ...(s.emailCases[caseId] ?? { notes: [] }),
              verdict,
              score,
              submittedAt: nowStr(),
            },
          },
        })),
      addEmailNote: (caseId, note) =>
        set((s) => ({
          emailCases: {
            ...s.emailCases,
            [caseId]: {
              ...(s.emailCases[caseId] ?? { notes: [] }),
              notes: [...(s.emailCases[caseId]?.notes ?? []), { ...note, id: rid(), ts: nowStr() }],
            },
          },
        })),

      setScenarioProgress: (id, pct) =>
        set((s) => ({ scenarioProgress: { ...s.scenarioProgress, [id]: pct } })),

      reset: () => set(seed()),
    }),
    { name: "clickbox:v1", version: 1 },
  ),
);

// Derived selectors
export const selectOpenAlerts = (s: SocState) =>
  s.alerts.filter((a) => a.status !== "resolved" && a.status !== "closed");
export const selectCriticalOpen = (s: SocState) =>
  s.alerts.filter((a) => a.severity === "critical" && a.status !== "resolved" && a.status !== "closed");
export const selectOpenIncidents = (s: SocState) =>
  s.incidents.filter((i) => i.status !== "resolved" && i.status !== "closed");
