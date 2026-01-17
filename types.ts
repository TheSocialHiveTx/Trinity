
export type CaseType = 'Toolbox' | 'Pelican Case' | 'Other';
export type Size = 'Small' | 'Medium' | 'Large';
export type PowerType = 'Battery only' | 'Battery + wall plug' | 'Battery + vehicle 12V';
export type Timeline = 'Standard' | 'Rush';
export type DeliveryMethod = 'Shipping' | 'Pickup';

export interface BuildFormData {
  name: string;
  email: string;
  phone: string;
  caseType: CaseType;
  caseOtherDetails?: string;
  size: Size;
  power: PowerType;
  speakerSetup: string;
  inputs: string[];
  leds: string;
  ledControl: string;
  extras: string[];
  budget: string;
  timeline: Timeline;
  delivery: DeliveryMethod;
  address?: string;
  description: string;
}
