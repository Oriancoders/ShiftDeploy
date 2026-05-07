'use client';
import React, { memo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import { CHAT_MESSAGES } from './constants';
import useRafTicker from './useRafTicker';

const ChatMessages = memo(function ChatMessages({ chatStep }) {
  return (
    <>
      <AnimatePresence>
        {CHAT_MESSAGES.map((msg, index) =>
          index <= chatStep ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`max-w-[88%] p-4 rounded-2xl text-[14px] leading-relaxed shadow-lg ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-br from-[#2b3a55] to-[#1e293b] text-white rounded-br-sm self-end border border-white/5'
                  : 'bg-gradient-to-br from-[#F76707] to-[#D83A21] text-white rounded-bl-sm self-start shadow-[0_10px_30px_rgba(247,103,7,0.3)]'
              }`}
            >
              {msg.text}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {chatStep < CHAT_MESSAGES.length - 1 ? (
        <div className="self-start mt-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex space-x-1.5 py-3.5 px-5 bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm w-16 justify-center shadow-inner"
          >
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        </div>
      ) : null}
    </>
  );
});

const ChatInterface = memo(function ChatInterface({ reduceMotion, animateEnabled }) {
  const chatStep = useRafTicker(CHAT_MESSAGES.length, 3000, animateEnabled);
  const messagesBodyRef = useRef(null);

  useEffect(() => {
    const el = messagesBodyRef.current;
    if (!el) return;

    const frame = requestAnimationFrame(() => {
      const target = Math.max(0, el.scrollHeight - el.clientHeight - 8);
      el.scrollTop = target;
    });

    return () => cancelAnimationFrame(frame);
  }, [chatStep]);

  return (
    <motion.div
      animate={
        reduceMotion || !animateEnabled
          ? { opacity: 1 }
          : {
              rotateX: [10, 15, 10],
              rotateY: [-15, -10, -15],
              y: [-10, 10, -10],
            }
      }
      transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="bg-white/5 backdrop-blur-xl md:backdrop-blur-2xl border border-white/20 rounded-[28px] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-10 w-full relative preserve-3d transform-gpu [will-change:transform]"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[26px] pointer-events-none z-20" />

      <div className="bg-toBlue rounded-[24px] overflow-hidden flex flex-col h-[480px] shadow-inner relative z-10">
        <div className="px-5 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex space-x-1.5 border-r border-white/10 pr-3 mr-1">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-secondaryBlue to-toSecBlue rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                <Bot className="w-5 h-5 text-white transform -rotate-3" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-[15px]">Shift Receptionist</h3>
              <p className="text-green-400/80 text-[11px] font-medium tracking-wide flex items-center">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Live & Active
              </p>
            </div>
          </div>
          <div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/70 border border-white/5">v2.0 Beta</div>
        </div>

        <div ref={messagesBodyRef} className="flex-1 p-6 overflow-y-auto flex flex-col gap-5 scrollbar-hide">
          <ChatMessages chatStep={chatStep} />
        </div>

        <div className="p-4 border-t border-white/10 bg-[#0B1D30]">
          <div className="bg-white/5 border border-white/10 rounded-full py-3 px-5 flex items-center justify-between">
            <span className="text-gray-500 text-sm">Automating your growth...</span>
            <div className="w-6 h-6 rounded-full bg-secondaryBlue flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default ChatInterface;
