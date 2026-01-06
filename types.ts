
export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum WorkshopModality {
  ONLINE = 'Online via Zoom',
}

export interface PainPoint {
  text: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}
