import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Wine, Brain } from 'lucide-react';
import { sendChatMessage, cleanMarkdownFormatting } from '../services/aiService';

export default function AIChatbot({ isOpen, onClose, initialQuery, onOpenReserve }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Bonsoir! I am Étoile Master Sommelier & Concierge. How may I curate your culinary journey today?",
      reasoning: null
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentReasoning, setCurrentReasoning] = useState('');
  const [currentStreamContent, setCurrentStreamContent] = useState('');
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "🍷 Recommend wine for Wagyu A5",
    "🥂 Plan a romantic 3-course dinner",
    "🌿 Any gluten-free & vegan options?",
    "📅 How do I reserve a private cellar?"
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
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000,
      width: 'calc(100vw - 48px)',
      maxWidth: '440px',
      height: '620px',
      maxHeight: 'calc(100vh - 100px)',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--gold-primary)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        background: 'linear-gradient(135deg, rgba(139, 21, 56, 0.4), rgba(11, 13, 16, 0.95))',
        borderBottom: '1px solid var(--border-gold)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.2)',
            border: '1px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Sparkles size={18} color="var(--gold-primary)" />
          </div>
          <div>
            <h4 className="font-serif text-gold-gradient" style={{ fontSize: '1.05rem', fontWeight: '700', margin: 0 }}>
              Étoile Sommelier & Concierge
            </h4>
            <span style={{ fontSize: '0.68rem', color: 'var(--text-gold)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Wine size={10} /> Michelin Gastronomy Concierge
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages List */}
      <div style={{
        flex: '1',
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        background: 'rgba(11, 13, 16, 0.6)'
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            {/* Reasoning block */}
            {msg.reasoning && (
              <details style={{
                marginBottom: '6px',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px dashed var(--border-gold)',
                borderRadius: '8px',
                padding: '6px 10px',
                maxWidth: '90%'
              }}>
                <summary style={{ cursor: 'pointer', color: 'var(--gold-light)', fontWeight: '600' }}>
                  🧠 Sommelier Analysis
                </summary>
                <div style={{ marginTop: '4px', fontStyle: 'italic' }}>{msg.reasoning}</div>
              </details>
            )}

            <div style={{
              maxWidth: '85%',
              padding: '12px 16px',
              borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
              background: msg.role === 'user' ? 'linear-gradient(135deg, #d4af37, #aa8624)' : 'rgba(22, 27, 38, 0.9)',
              color: msg.role === 'user' ? '#000' : '#fff',
              fontWeight: msg.role === 'user' ? '600' : '400',
              border: msg.role === 'assistant' ? '1px solid var(--border-subtle)' : 'none',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              whiteSpace: 'pre-line'
            }}>
              {cleanMarkdownFormatting(msg.content)}
            </div>
          </div>
        ))}

        {/* Live Streaming Response Indicator */}
        {isGenerating && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {currentReasoning && (
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid var(--border-gold)',
                padding: '6px 10px',
                borderRadius: '8px',
                marginBottom: '6px',
                maxWidth: '90%',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Brain size={12} />
                <span>Analyzing cellar pairings...</span>
              </div>
            )}

            {currentStreamContent ? (
              <div style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: '18px 18px 18px 2px',
                background: 'rgba(22, 27, 38, 0.9)',
                color: '#fff',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-line'
              }}>
                {currentStreamContent}
              </div>
            ) : (
              <div style={{
                padding: '8px 14px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Sparkles size={14} color="var(--gold-primary)" />
                <span>Consulting Sommelier archives...</span>
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts Carousel */}
      <div style={{
        padding: '8px 12px',
        background: 'rgba(11, 13, 16, 0.95)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(prompt)}
            style={{
              whiteSpace: 'nowrap',
              background: 'rgba(212, 175, 55, 0.08)',
              border: '1px solid var(--border-gold)',
              color: 'var(--text-gold)',
              fontSize: '0.73rem',
              padding: '4px 10px',
              borderRadius: '14px',
              cursor: 'pointer'
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Row */}
      <div style={{
        padding: '12px 16px',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        gap: '10px'
      }}>
        <input
          type="text"
          placeholder="Ask about wine, dishes, or table bookings..."
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{
            flex: '1',
            background: 'rgba(11, 13, 16, 0.8)',
            border: '1px solid var(--border-gold)',
            borderRadius: '24px',
            padding: '10px 16px',
            color: '#fff',
            fontSize: '0.88rem',
            outline: 'none'
          }}
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={isGenerating || !inputQuery.trim()}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f5d77f, #d4af37)',
            border: 'none',
            color: '#000',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: !inputQuery.trim() ? 0.6 : 1
          }}
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
