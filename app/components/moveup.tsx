"use client"
import { FaArrowUp } from 'react-icons/fa';
const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopButton() {
  return (
    <button
    title='move up'
      className="fixed bottom-0 right-0 p-10"
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
