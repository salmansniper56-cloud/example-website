import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Flame, Brain } from 'lucide-react';
import { sendChatMessage, cleanMarkdownFormatting } from '../services/aiService';

export default function AIChatbot({ isOpen, onClose, initialQuery, onOpenReserve }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Welcome to CRAVE & CO.! I am your AI Crave Assistant. Ask me about custom Smash Burger combos, spicy Nashville chicken crunch levels, family pizza deals, or 19-minute express delivery!",
      reasoning: null
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentReasoning, setCurrentReasoning] = useState('');
  const [currentStreamContent, setCurrentStreamContent] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "🔥 What is your best Smash Burger?",
    "🌶️ Recommend a Spicy Chicken combo",
    "🍕 Which Pizza has stuffed cheese crust?",
    "📦 What deals are in the Ultimate Crave Box?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentStreamContent, currentReasoning]);

  useEffect(() => {
    if (initialQuery && isOpen) {
      handleSendMessage(initialQuery);
    }
  }, [initialQuery, isOpen]);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim() || isGenerating) return;

    const newMessages = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    if (!textToSend) setInputQuery('');
    setIsGenerating(true);
    setCurrentReasoning('');
    setCurrentStreamContent('');

    try {
      const response = await sendChatMessage(
        newMessages,
        (chunk) => setCurrentStreamContent(cleanMarkdownFormatting(chunk)),
        (reasoning) => setCurrentReasoning(cleanMarkdownFormatting(reasoning))
      );

      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: cleanMarkdownFormatting(response.content || currentStreamContent),
          reasoning: cleanMarkdownFormatting(response.reasoning || currentReasoning)
        }
      ]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsGenerating(false);
      setCurrentReasoning('');
      setCurrentStreamContent('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-ai-chat" style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
      width: 'calc(100vw - 32px)',
      maxWidth: '440px',
      height: '620px',
      maxHeight: 'calc(100vh - 80px)',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-gold)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.95)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '14px 18px',
        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(17, 20, 29, 0.95))',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000'
          }}>
            <Flame size={18} />
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#fff', margin: 0 }}>
              AI Crave Assistant
            </h3>
            <span style={{ fontSize: '0.68rem', color: 'var(--gold-light)', display: 'block' }}>
              CRAVE & CO. Smart Concierge
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Assistant"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Scroll Body */}
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: 'rgba(9, 10, 15, 0.6)'
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            {/* Thinking / Reasoning Box if assistant message */}
            {msg.role === 'assistant' && msg.reasoning && (
              <div style={{
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                fontSize: '0.75rem',
                color: 'var(--gold-light)',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px'
              }}>
                <Brain size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Crave Analysis:
                  </strong>
                  {msg.reasoning}
                </div>
              </div>
            )}

            {/* Main Message Bubble */}
            <div style={{
              background: msg.role === 'user' ? 'linear-gradient(135deg, #f3e5ab, #d4af37)' : 'rgba(21, 25, 36, 0.95)',
              color: msg.role === 'user' ? '#000' : '#ffffff',
              fontWeight: msg.role === 'user' ? '700' : '400',
              padding: '12px 16px',
              borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
              border: msg.role === 'assistant' ? '1px solid var(--border-subtle)' : 'none',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              whiteSpace: 'pre-line'
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {/* Live Streaming Content */}
        {isGenerating && (
          <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
            {currentReasoning && (
              <div style={{
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                fontSize: '0.75rem',
                color: 'var(--gold-light)',
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px'
              }}>
                <Brain size={14} className="animate-spin" style={{ flexShrink: 0 }} />
                <span>{currentReasoning}</span>
              </div>
            )}

            {currentStreamContent && (
              <div style={{
                background: 'rgba(21, 25, 36, 0.95)',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '18px 18px 18px 2px',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}>
                {currentStreamContent}
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompt Pills */}
      <div style={{
        padding: '8px 12px',
        background: 'rgba(17, 20, 29, 0.95)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none'
      }}>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            disabled={isGenerating}
            style={{
              whiteSpace: 'nowrap',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '0.74rem',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
        style={{
          padding: '12px',
          background: 'rgba(17, 20, 29, 0.98)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          gap: '8px'
        }}
      >
        <input
          type="text"
          placeholder="Ask AI about Smash Burgers, Combos, or Pizzas..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          disabled={isGenerating}
          style={{
            flex: 1,
            background: 'rgba(9, 10, 15, 0.8)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: '10px 16px',
            color: '#fff',
            fontSize: '0.85rem',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || isGenerating}
          style={{
            background: 'linear-gradient(135deg, #f3e5ab, #d4af37)',
            color: '#000',
            border: 'none',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: (!inputQuery.trim() || isGenerating) ? 0.5 : 1
          }}
        >
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
