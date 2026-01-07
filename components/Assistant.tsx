
import React, { useState, useRef, useEffect } from 'react';
import { AssistantMessage } from '../types';

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

  const getSimulatedResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();

    // INTENÇÃO: DATA + HORÁRIO (PERGUNTA COMPLETA)
    if (['data e horário', 'quando e que horas'].some(k => text.includes(k))) {
      return `O workshop acontece no dia 09 de janeiro, às 20h00, em formato online e ao vivo.

É um encontro fechado, educativo e sigiloso, pensado para quem quer entender melhor o que está acontecendo com o próprio corpo.

Para participar, basta garantir a vaga.`;
    }

    // INTENÇÃO: DATA DO EVENTO
    if (['data', 'quando é', 'que dia', 'dia do workshop'].some(k => text.includes(k))) {
      return `O workshop acontece no dia 09 de janeiro, em um encontro online e ao vivo.

É uma oportunidade pontual para entender os sintomas íntimos recorrentes com mais clareza e organização.

Para garantir o acesso e não ficar de fora, é importante reservar a vaga.`;
    }

    // INTENÇÃO: HORÁRIO DO EVENTO
    if (['horário', 'que horas', 'começa quando', 'horas'].some(k => text.includes(k))) {
      return `O workshop começa às 20h00, em formato online e ao vivo.

O acesso é enviado após a confirmação da inscrição, de forma simples e sigilosa.

Reservar a vaga garante que você receba todas as informações corretamente.`;
    }

    // INTENÇÃO: CORRIMENTO
    if (['corrimento', 'secreção', 'escorre', 'frequente'].some(k => text.includes(k))) {
      return `Quando o corrimento aparece de forma recorrente, geralmente existe algo que não foi bem explicado ou tratado na origem.

No workshop, você vai entender por que isso acontece, por que soluções comuns falham e qual é o caminho correto para interromper esse ciclo.

O encontro é online, sigiloso e feito exatamente para quem vive isso.`;
    }

    // INTENÇÃO: COCEIRA
    if (['coceira', 'coça', 'ardência', 'incômodo'].some(k => text.includes(k))) {
      return `Coceiras íntimas recorrentes costumam estar ligadas a desequilíbrios que nem sempre são bem explicados no dia a dia.

No workshop, explicamos o que pode estar por trás disso e como lidar de forma mais correta, sem repetir tentativas frustradas.

Tudo acontece em ambiente seguro e discreto.`;
    }

    // INTENÇÃO: MAU CHEIRO
    if (['mau cheiro', 'odor', 'cheiro forte'].some(k => text.includes(k))) {
      return `O mau cheiro íntimo geralmente está associado a alterações que não se resolvem apenas com soluções temporárias.

No workshop, você vai entender por que isso acontece e o que precisa ser ajustado para sair desse ciclo.

É um encontro educativo, respeitoso e sigiloso.`;
    }

    // INTENÇÃO: RECORRÊNCIA / FRUSTRAÇÃO
    if (['volta', 'sempre', 'nada resolve', 'já tentei tudo'].some(k => text.includes(k))) {
      return `Quando o problema sempre volta, normalmente a causa real não foi identificada corretamente.

O workshop foi criado para organizar esse entendimento e evitar que você continue repetindo erros.

Participar pode trazer a clareza que ainda faltou.`;
    }

    // INTENÇÃO: SOBRE O WORKSHOP
    if (['workshop', 'encontro', 'aula', 'funciona', 'o que é'].some(k => text.includes(k))) {
      return `É um workshop online e educativo, feito para explicar de forma simples o que está por trás dos sintomas íntimos recorrentes.

O objetivo é trazer clareza, segurança e ajudar você a entender o melhor caminho a seguir.

Tudo acontece em ambiente fechado e sigiloso.`;
    }

    // INTENÇÃO: É PARA MIM?
    if (['é pra mim', 'vale a pena', 'indicado'].some(k => text.includes(k))) {
      return `Esse encontro é indicado para mulheres que convivem com sintomas íntimos recorrentes e querem entender por que isso continua acontecendo.

Se você busca clareza e não quer continuar no escuro, o workshop foi pensado para isso.`;
    }

    // INTENÇÃO: VERGONHA / MEDO
    if (['vergonha', 'medo', 'constrangedor'].some(k => text.includes(k))) {
      return `É totalmente compreensível se sentir assim.

Por isso o workshop é online, anônimo e sigiloso, permitindo que você aprenda com tranquilidade, sem exposição.

Muitas participantes estão na mesma situação.`;
    }

    // FALLBACK
    return `Esse tipo de dúvida é exatamente o que o workshop se propõe a esclarecer.

O encontro foi criado para organizar informações e ajudar você a entender melhor o que está acontecendo com seu corpo.

Participar pode evitar que você continue com incertezas.`;
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;

    const userMsg: AssistantMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    // Simula atraso da "IA"
    setTimeout(() => {
      const responseText = getSimulatedResponse(currentInput);
      const assistantMsg: AssistantMessage = { role: 'assistant', content: responseText };
      setMessages(prev => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 1500);
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
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
