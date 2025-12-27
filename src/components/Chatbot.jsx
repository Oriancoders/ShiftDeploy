import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export const Chatbot = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://shiftdeployn8n.work.gd/webhook/4b810dee-64b4-4cc3-8fc9-cf40f92f1b69/chat', // Replace this!
      mode: 'window', // 'window' starts closed, 'fullscreen' takes whole screen
      target: '#n8n-chat',
      showWelcomeScreen: true, 
      initialMessages: [
        'Hi there! 👋',
        'How can I help you today?'
      ],
      i18n: {
        en: {
          title: 'My Assistant',
          subtitle: 'Ask me anything',
        },
      },
    });
  }, []);

  return <div id="n8n-chat"></div>;
};