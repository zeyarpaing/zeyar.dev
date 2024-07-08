import React from 'react';

export type NavItem = {
  name: string;
  url: string;
  beta?: boolean;
};

export type ContactInfo = {
  link: string;
  icon: string;
  name: string;
};

export type Project = {
  name: string;
  logo: string;
  type: string;
  slug: string;
  color: string;
  media?: string;
  liveUrl: string;
  description: string;
};

export type Experience = {
  year?: number;
  current?: boolean;
  companyName: string;
  description: string;
  position: string;
  websiteLink: string;
  joined?: Date;
};

export type Technology = {
  icon: string;
  name: string;
  specialized: boolean;
  color: string;
};

export type Education = {
  name: string;
  description: string;
};

export type Certifications = {
  name: string;
  link: string;
};

export type Voluntary = {
  place: string;
  description: string;
  position: string;
};

export type blurBoxProps = {
  size: {
    width: string;
    height: string;
  };
  color: string;
  position: {
    x: number;
    y: number;
  };
  range?: number;
};

export type ButtonType = {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  status?: 'idle' | 'loading' | 'ok' | 'err' | string;
  onClick?: any;
  disabled?: boolean;
  className?: string;
};
