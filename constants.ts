
import { Experience, UserProfile } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Howard Hsiao",
  title: "Visual Designer & Frontend Developer",
  bio: [
    "2003.06.24 | Taipei, Taiwan",
    "Beijing Normal-Hong Kong Baptist University",
    "Animation and Interactive Media",
    "Dec 2024 – Jan 2025: Foxconn Interconnect Technology | Assistant Intern",
    "Sep 2023 – Nov 2024: Ele.me (Alibaba Group) | Visual Design Intern & Campus Ambassador"
  ],
  contacts: {
    phone: ["+886 0979027166 | TW", "+86 15811690868 | CN"],
    email: "howardjonashsiao@gmail.com"
  }
};

export const EXPERIENCES: Experience[] = [
  // Professional Experience
  {
    id: 'p1',
    role: 'Intern',
    company: 'FIT (Foxconn Interconnect Technology Limited)',
    period: 'Dec 2024',
    description: 'Assisted in office coordination and promotional material design at Foxconn Interconnect Technology Limited. Gained insight into corporate workflow, communication, and design execution within a large-scale manufacturing environment.',
    type: 'Professional',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/1.png'
  },
  {
    id: 'p2',
    role: 'Campus Ambassador Intern',
    company: 'Ele.me (Alibaba Group)',
    period: 'Sept 2023 – Nov 2024',
    description: 'Represented Ele.me, a leading online food delivery platform under Alibaba Group. Supported marketing campaigns, conducted campus outreach, and gathered user feedback to enhance engagement and brand recognition.',
    type: 'Professional',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/2.png'
  },

  // Competitions & Awards
  {
    id: 'c1',
    role: 'Second Prize',
    company: 'CYRC Cup – National Master’s Vocabulary Competition',
    period: 'Oct 2025',
    description: 'Awarded Second Prize for advanced English proficiency and vocabulary mastery at the national level.',
    type: 'Competition',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/3.png'
  },
  {
    id: 'c2',
    role: 'Second Prize',
    company: 'National University Data Analysis Competition',
    period: 'Nov 2024',
    description: 'Received Second Prize in the 3rd National University Data Analysis Science Competition. Applied analytical thinking and visualization inspired by user-experience research.',
    type: 'Competition',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/4.jpeg'
  },
  {
    id: 'c3',
    role: 'Third Prize',
    company: 'Essay Competition – Ministry of Education (HK, Macao & Taiwan Affairs Office)',
    period: 'Apr 2022',
    description: 'Recognized for outstanding insight and writing in the themed essay contest “Reflecting on a Century of Struggle, Marching Toward National Rejuvenation.”',
    type: 'Competition',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/5.png'
  },
  {
    id: 'c4',
    role: 'Outstanding Volunteer',
    company: '“Tell the Bay Area Story” English Translation Competition',
    period: 'May 2025',
    description: 'Contributed translation and English editing services, supporting cross-regional storytelling and cultural exchange.',
    type: 'Competition',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/6.jpeg'
  },

  // Leadership & Campus Activities
  {
    id: 'l1',
    role: 'Program Representative',
    company: 'AIM Student Council, UIC',
    period: 'Apr 2022 – Jan 2023',
    description: 'Acted as liaison between faculty and students in the Animation and Interactive Media program. Assisted in organizing department activities and representing student concerns in council meetings.',
    type: 'Leadership',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/7.jpeg'
  },
  {
    id: 'l2',
    role: 'Outstanding Volunteer',
    company: 'Youth Entrepreneurship Forum (Jingniu Hui)',
    period: 'Nov 2021',
    description: 'Provided on-site coordination and guest management for the Youth Entrepreneurship Forum in Zhuhai, facilitating communication and event success.',
    type: 'Leadership',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/8.jpeg'
  },

  // Volunteer & Certifications
  {
    id: 'v1',
    role: 'Volunteer',
    company: 'VYA International Volunteer Service, Iceland',
    period: 'Jan 2020',
    description: 'Participated in SEEDS environmental and photography project in Reykjavik, Iceland. Completed 60 hours of volunteer service promoting sustainability and cultural exchange.',
    type: 'Volunteer',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/9.png'
  },
  {
    id: 'v2',
    role: 'Certified Course Lifesaver',
    company: 'Chinese Taipei Water Life Saving Association',
    period: 'Aug 2018',
    description: 'Certified as a Course Lifesaver after professional training under the International Life Saving Federation standards.',
    type: 'Certification',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/10.png'
  },
  {
    id: 'v3',
    role: 'Piano Level 10 Certificate',
    company: 'Chinese Musicians Association',
    period: 'Mar 2017',
    description: 'Achieved Level 10 piano performance, demonstrating long-term dedication, discipline, and appreciation for the arts.',
    type: 'Certification',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/11.png'
  },
  {
    id: 'v4',
    role: 'Overall Band Score: 6.5',
    company: 'IELTS Academic',
    period: 'Sept 2025',
    description: 'Certified English proficiency across all academic modules: Listening, Reading, Writing, and Speaking.',
    type: 'Certification',
    imageUrl: 'https://guard-file-1328304084.cos.ap-beijing.myqcloud.com/file/public/product/homeIndex/12.png'
  }
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experiences', href: '#experience' },
  { name: 'Contact', href: '#contact' },
  { name: 'CV', href: '#cv-section' }
];