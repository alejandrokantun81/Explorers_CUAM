export interface Tutorial {
  id: string;
  title: string;
  tool: string;
  category: string;
  description: string;
  youtubeId: string;
  googleDocsUrl: string;
  keyCommands: string[];
  steps: string[];
  badge: string;
}

export interface ActivityChallenge {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  deliverable: string;
  toolSet: string[];
  description: string;
  instructions: string[];
  templatePrompt: string;
  rubric: {
    criteria: string;
    weight: string;
    description: string;
  }[];
}

export interface StudentSubmission {
  activityId: number;
  activityTitle: string;
  studentName: string;
  institution: string;
  content: string;
  timestamp: string;
  evaluationScore?: number;
  feedback?: string;
}
