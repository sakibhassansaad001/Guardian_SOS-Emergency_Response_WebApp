
export enum AppPages {
  SOS = 'sos',
  CONTACTS = 'contacts',
  RESOURCES = 'resources',
  PROFILE = 'profile',
  SETTINGS = 'settings',
  CRIME_REPORT = 'crime-report',
  BLOOD_CENTERS = 'blood-centers'
}

export interface EmergencyContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  status: 'online' | 'offline';
  imageUrl?: string;
  isOfficial?: boolean;
}

export interface MedicalInfo {
  name: string;
  birthDate: string;
  bloodType: string;
  height: number;
  weight: number;
  isOrganDonor: boolean;
  conditions: string[];
  allergies: {
    name: string;
    reaction: string;
    isCritical: boolean;
  }[];
  medications: {
    name: string;
    dosage: string;
    frequency: string;
  }[];
}
