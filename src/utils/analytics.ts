import { AnalyticsData, PageView, UserInteraction } from '../types/analytics';

const STORAGE_KEY = 'portfolio_analytics';

export function getAnalyticsData(): AnalyticsData {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { pageViews: [], interactions: [] };
}

export function saveAnalyticsData(data: AnalyticsData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function generateAnalyticsReport(): AnalyticsData {
  const data = getAnalyticsData();
  return {
    pageViews: data.pageViews.sort((a, b) => b.timestamp - a.timestamp),
    interactions: data.interactions.sort((a, b) => b.timestamp - a.timestamp),
  };
}