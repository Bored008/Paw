declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.ico';

declare module 'figma:asset/*' {
  const content: string;
  export default content;
}
