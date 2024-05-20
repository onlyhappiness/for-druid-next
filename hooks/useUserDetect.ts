"use client";

// 사용자의 os
const useUserOSDetect = () => {
  const userAgent = navigator.userAgent;

  return userAgent;
};

const useMobileDetect = () => {
  const userAgent = navigator.userAgent;

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return true;
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return true;
  }

  // Other mobile devices
  if (/Mobi/i.test(userAgent)) {
    return true;
  }

  return false;
};

export { useMobileDetect, useUserOSDetect };
