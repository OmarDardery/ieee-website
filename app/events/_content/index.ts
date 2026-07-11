// Registry of all events. To add a new event:
//   1. Copy an existing file in this folder (e.g. solve-the-17-hackathon.tsx)
//      to <your-event-slug>.tsx and edit it. The `content` field is plain JSX —
//      each event can have completely custom sections and styling.
//   2. Import it below and add it to `allEvents`.
// The event page appears automatically at /events/<id>.

import { unitCodeToName } from "../../societies-data";
import type { EventDefinition } from "./types";

import { event as threeMinTalkCompetition } from "./3-min-talk-competition";
import { event as aiCommitteeFoundationsSession1 } from "./ai-committee-foundations-session-1";
import { event as careerKickstart } from "./career-kickstart-find-yourself-before-finding-a-job";
import { event as cyberquest20 } from "./cyberquest-2-0";
import { event as dataScienceBootcampWrapUp } from "./data-science-online-bootcamp-wrap-up";
import { event as egyptianSpaceAgencyTrip } from "./egyptian-space-agency-trip";
import { event as euiTopAchieversAwards } from "./eui-top-achievers-awards";
import { event as failSafeSystemsTalk } from "./fail-safe-systems-talk";
import { event as cybersecurityCommitteeKickoff } from "./ieee-eui-computer-society-cybersecurity-committee-kickoff-session";
import { event as sweCommitteeKickoff } from "./ieee-eui-computer-society-software-engineering-committee-kickoff-session";
import { event as nilesatHeadquarterTrip } from "./ieee-eui-comsoc-sbc-nilesat-headquarter-trip";
import { event as quantumComputingWorkshop2025 } from "./ieee-eui-sb-at-the-quantum-computing-workshop-2025";
import { event as spc2023 } from "./ieee-eui-sb-spc-2023";
import { event as computationalPhysicsWorkshop } from "./ieee-eui-sb-x-wedev-computational-physics-workshop";
import { event as pesDayElectrodrive } from "./ieee-pes-day-electrodrive-pioneering-the-future-of-electric-mobility";
import { event as nasyp2023 } from "./ieee-r8-north-africa-congress-2023";
import { event as r8SacChairTalk } from "./ieee-r8-sac-chair-talk-eui";
import { event as reverseEngineeringSession } from "./introduction-to-reverse-engineering-session";
import { event as kottamiaObservatoryTrip } from "./kottamia-astronomical-observatory-trip";
import { event as sheInspiresWie } from "./she-inspires-ieee-wie-eui-sbag";
import { event as sightHospital57357Tour } from "./sight-technical-tour-hospital-57357-humanitarian-tech";
import { event as solveThe17Hackathon } from "./solve-the-17-hackathon";
import { event as futureOfInnovationTalk } from "./the-future-of-innovation-talk";
import { event as futureOfMechatronicsTalk } from "./the-future-of-mechatronics-talk";
import { event as tripToValeo } from "./trip-to-valeo-by-ieee-eui-sb";
import { event as userCentricDesignTalk } from "./user-centric-design-talk-dr-amr-al-awamry";

const allEvents: EventDefinition[] = [
  threeMinTalkCompetition,
  aiCommitteeFoundationsSession1,
  careerKickstart,
  cyberquest20,
  dataScienceBootcampWrapUp,
  egyptianSpaceAgencyTrip,
  euiTopAchieversAwards,
  failSafeSystemsTalk,
  cybersecurityCommitteeKickoff,
  sweCommitteeKickoff,
  nilesatHeadquarterTrip,
  quantumComputingWorkshop2025,
  spc2023,
  computationalPhysicsWorkshop,
  pesDayElectrodrive,
  nasyp2023,
  r8SacChairTalk,
  reverseEngineeringSession,
  kottamiaObservatoryTrip,
  sheInspiresWie,
  sightHospital57357Tour,
  solveThe17Hackathon,
  futureOfInnovationTalk,
  futureOfMechatronicsTalk,
  tripToValeo,
  userCentricDesignTalk,
];

// Newest announcement first
export const events: EventDefinition[] = [...allEvents].sort(
  (a, b) => b.postedDate.getTime() - a.postedDate.getTime(),
);

const eventsById = new Map(events.map((event) => [event.id, event]));

export function getEventById(id: string): EventDefinition | undefined {
  return eventsById.get(id);
}

export function isEventEnded(event: EventDefinition): boolean {
  return event.endDate.getTime() < Date.now();
}

export function getEventSocietyLabel(event: EventDefinition): string {
  if (event.societyCodes.length === 0) return "Global event";
  return event.societyCodes.map(unitCodeToName).join(" · ");
}

export type { EventDefinition } from "./types";
