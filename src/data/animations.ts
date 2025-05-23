export const animations = [
  {
    name: 'fade-in',
    class: 'fade-in',
    keyframe: `@keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }`,
  },
  {
    name: 'fade-out',
    class: 'fade-out',
    keyframe: `@keyframes fade-out {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }`,
  },
  {
    name: 'slide-in-top',
    class: 'slide-in-top',
    keyframe: `@keyframes slide-in-top {
    0% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }`,
  },
  {
    name: 'slide-in-bottom',
    class: 'slide-in-bottom',
    keyframe: `@keyframes slide-in-bottom {
    0% { transform: translateY(20px); }
    100% { transform: translateY(0); }
  }`,
  },
  {
    name: 'zoom-in',
    class: 'zoom-in',
    keyframe: `@keyframes zoom-in {
    0% { opacity: 0; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
  }`,
  },
  {
    name: 'zoom-out',
    class: 'zoom-out',
    keyframe: `@keyframes zoom-out {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.5); }
  }`,
  },
];
