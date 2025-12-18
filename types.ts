
// Import React to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface AIPlatform {
  name: string;
  provider: string;
  description: string;
  icon: string;
}

export enum Complexity {
  SIMPLE = 'Simple',
  MODERATE = 'Moderate',
  COMPLEX = 'Complex',
  VERY_COMPLEX = 'Very Complex'
}
