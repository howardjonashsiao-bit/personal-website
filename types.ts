
export interface Project {
  id: string;
  title: string;
  category: string;
  image?: string;
  gridArea: string; // CSS class for grid positioning
  styleType: 'circle' | 'pill' | 'rect';
  color?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Professional' | 'Competition' | 'Leadership' | 'Volunteer' | 'Certification';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface UserProfile {
  name: string;
  title: string;
  bio: string[];
  contacts: {
    phone: string[];
    email: string;
  };
}
