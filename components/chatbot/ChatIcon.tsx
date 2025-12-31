
'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatIconProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatIcon({ onClick, isOpen }: ChatIconProps) {
  return (
    <div className="relative group">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.4)] transition-shadow duration-300 focus:outline-none z-50"
          >
            {/* Pulsing Ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping duration-1000"></span>
            
            <MessageCircle className="w-8 h-8 fill-current" />
            
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}