
import React, { useState, useRef, useEffect } from 'react';
import { AssistantMessage } from '../types';
import { getAssistantResponse } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<AssistantMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: AssistantMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getAssistantResponse(currentInput);
      const assistantMsg: AssistantMessage = { role: 'assistant', content: responseText };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Erro no assistente:", error);
      const errorMsg: AssistantMessage = { 
        role: 'assistant', 
        content: "Desculpe, tive um pequeno problema técnico. O workshop Além do Tratamento é o lugar ideal para tirar essas dúvidas. Que tal garantir sua vaga para conversarmos melhor lá?" 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#F3ECE9]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E8DAD6] overflow-hidden">
          <div className="bg-[#C46A7A] p-6 text-white">
            <h3 className="text-xl font-bold serif">Fale com nossa Assistente Educacional</h3>
            <p className="text-sm opacity-90">Dúvidas sobre o workshop ou seus sintomas recorrentes?</p>
          </div>
          
          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-6 space-y-4 bg-gray-50/50"
          >
            <p className="text-[#6B6B6B] text-center italic mt-4 mb-6">
              Olá! Como posso te ajudar a entender melhor se este encontro é para você?
            </p>
            
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-4 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-[#C46A7A] text-white rounded-tr-none' 
                      : 'bg-white text-[#2B2B2B] border border-[#E8DAD6] rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8DAD6] p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#C46A7A] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#C46A7A] rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-[#C46A7A] rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#E8DAD6] bg-white flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escreva sua dúvida aqui..."
              className="flex-1 px-4 py-2 border border-[#E8DAD6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C46A7A]"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#C46A7A] text-white px-6 py-2 rounded-lg hover:bg-[#A85765] transition-colors font-semibold"
            >
              {isLoading ? '...' : 'Enviar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;