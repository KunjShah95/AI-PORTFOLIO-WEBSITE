export interface PageView {
  path: string;
  timestamp: number;
}

export interface UserInteraction {
  type: 'click' | 'scroll' | 'chat' | 'filter' | 'resume';
  target: string;
  timestamp: number;
}

export interface AnalyticsData {
  pageViews: PageView[];
  interactions: UserInteraction[];
}