import { Type } from "@google/genai";

export interface Principle {
  id: number;
  title: string;
  description: string;
}

export interface Objective {
  id: number;
  text: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Donor {
  id: string;
  name: string;
  bloodGroup: string;
  location: string;
  lastDonation: string;
  phone: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  bags: number;
  date: string;
  hospital: string;
  phone: string;
}
