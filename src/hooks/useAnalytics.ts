import { useEffect } from 'react';
import { PageView, UserInteraction } from '../types/analytics';

const STORAGE_KEY = 'portfolio_analytics';

export function useAnalytics() {
  const trackPageView = (path: string) => {
    const pageView: PageView = {
      path,
      timestamp: Date.now(),
    };
    
    const analytics = getAnalyticsData();
    analytics.pageViews.push(pageView);
    saveAnalyticsData(analytics);
  };

  const trackInteraction = (type: UserInteraction['type'], target: string) => {
    const interaction: UserInteraction = {
      type,
      target,
      timestamp: Date.now(),
    };

    const analytics = getAnalyticsData();
    analytics.interactions.push(interaction);
    saveAnalyticsData(analytics);
  };

  const getAnalyticsData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { pageViews: [], interactions: [] };
  };

  const saveAnalyticsData = (data: any) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return { trackInteraction };
}