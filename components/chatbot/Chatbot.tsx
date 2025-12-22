// // // // 'use client';

// // // // import { useState, useEffect, useRef, FormEvent } from 'react';
// // // // import { v4 as uuidv4 } from 'uuid';
// // // // import { motion } from 'framer-motion';
// // // // import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
// // // // import { Button } from '@/components/ui/button';
// // // // import { Input } from '@/components/ui/input';
// // // // import { Separator } from '@/components/ui/separator';
// // // // import { Send, Bot, User, X, RotateCw } from 'lucide-react';
// // // // import ChatIcon from './ChatIcon';
// // // // import LanguageSelection from './LanguageSelection';
// // // // import { Message, Language } from '@/types/chatbot';
// // // // import { sendMessage } from '@/actions/chatActions';

// // // // export default function Chatbot() {
// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [messages, setMessages] = useState<Message[]>([]);
// // // //   const [input, setInput] = useState('');
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [language, setLanguage] = useState<Language | null>(null);
// // // //   const [isLanguageSelected, setIsLanguageSelected] = useState(false);
// // // //   const scrollAreaRef = useRef<HTMLDivElement>(null);

// // // //   useEffect(() => {
// // // //     if (scrollAreaRef.current) {
// // // //       scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
// // // //     }
// // // //   }, [messages, isLoading]);

// // // //   const handleLanguageSelect = (lang: Language) => {
// // // //     setLanguage(lang);
// // // //     setIsLanguageSelected(true);
// // // //     let welcomeText = '';
// // // //     if (lang === 'marathi') {
// // // //       welcomeText = "नमस्कार! मी अॅग्री मित्र. मी तुमची कशी मदत करू शकते?";
// // // //     } else if (lang === 'hindi') {
// // // //       welcomeText = "नमस्ते! मैं एग्री मित्रा हूँ। मैं आपकी कैसे मदद कर सकती हूँ?";
// // // //     } else {
// // // //       welcomeText = "Hello! I'm Agri Mitra. How can I assist you today?";
// // // //     }
// // // //     setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
// // // //   };

// // // //   const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
// // // //     e.preventDefault();
// // // //     if (!input.trim() || isLoading || !language) return;

// // // //     const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
// // // //     const newMessages = [...messages, userMessage];
// // // //     setMessages(newMessages);
// // // //     const currentInput = input;
// // // //     setInput('');
// // // //     setIsLoading(true);

// // // //     const response = await sendMessage(newMessages, currentInput, language);
    
// // // //     if (response.success && response.aiMessage) {
// // // //       setMessages(current => [...current, response.aiMessage!]);
// // // //     } else {
// // // //       const errorMessage: Message = { id: uuidv4(), role: 'model', content: response.error!, createdAt: new Date() };
// // // //       setMessages(current => [...current, errorMessage]);
// // // //     }
// // // //     setIsLoading(false);
// // // //   };

// // // //   const handleNewChat = () => {
// // // //     setIsLoading(false);
// // // //     setMessages([]);
// // // //     setIsLanguageSelected(false);
// // // //     setLanguage(null);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <div className="fixed bottom-5 right-5 z-50">
// // // //         <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
// // // //       </div>
// // // //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// // // //         <DialogContent className="sm:max-w-md flex flex-col h-[700px] max-h-[90vh] p-0 overflow-hidden">
// // // //           <DialogHeader className="p-4 border-b">
// // // //             <div className="flex items-center justify-between">
// // // //               <div className="flex items-center gap-3">
// // // //                 <div className="p-2 bg-green-100 rounded-full"><Bot className="h-6 w-6 text-green-700" /></div>
// // // //                 <div><DialogTitle className="text-lg font-bold text-gray-900">Agri Mitra 🌱</DialogTitle></div>
// // // //               </div>
// // // //               <div className="flex items-center">
// // // //                 <Button variant="ghost" size="icon" onClick={handleNewChat} disabled={isLoading} aria-label="New Chat">
// // // //                     <RotateCw className="h-5 w-5 text-gray-500 hover:text-gray-800" />
// // // //                 </Button>
// // // //                 <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
// // // //                     <X className="h-5 w-5 text-gray-500 hover:text-gray-800" />
// // // //                 </Button>
// // // //               </div>
// // // //             </div>
// // // //           </DialogHeader>

// // // //           <div ref={scrollAreaRef} className="flex-1 p-4 overflow-y-auto bg-gray-50/50">
// // // //             <div className="flex flex-col gap-6">
// // // //               {isLanguageSelected ? (
// // // //                 messages.map((msg) => (
// // // //                   <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
// // // //                     {msg.role === 'model' && <Bot className="h-6 w-6 text-green-600 flex-shrink-0 mt-2" />}
// // // //                     <div className={`flex flex-col max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
// // // //                       <motion.div
// // // //                         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
// // // //                         className={`p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
// // // //                           msg.role === 'user'
// // // //                             ? 'bg-blue-600 text-white rounded-br-none'
// // // //                             : 'bg-green-50 text-gray-800 rounded-bl-none border border-green-100'
// // // //                         }`}
// // // //                       >
// // // //                         {msg.content}
// // // //                       </motion.div>
// // // //                       <p className="text-xs text-gray-400 mt-1.5 px-1">{new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
// // // //                     </div>
// // // //                     {msg.role === 'user' && <User className="h-6 w-6 text-gray-500 flex-shrink-0 mt-2" />}
// // // //                   </div>
// // // //                 ))
// // // //               ) : ( <LanguageSelection onSelect={handleLanguageSelect} /> )}
// // // //               {isLoading && (
// // // //                    <div className="flex justify-start gap-3 items-center">
// // // //                      <Bot className="h-6 w-6 text-green-600 flex-shrink-0" />
// // // //                      <div className="p-3 rounded-lg bg-gray-100 border">
// // // //                        <div className="flex items-center justify-center gap-1.5">
// // // //                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
// // // //                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
// // // //                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
// // // //                        </div>
// // // //                      </div>
// // // //                    </div>
// // // //               )}
// // // //             </div>
// // // //           </div>
          
// // // //           {isLanguageSelected && (
// // // //             <>
// // // //               <Separator />
// // // //               <DialogFooter className="p-3 bg-white">
// // // //                 <form onSubmit={handleSendMessage} className="flex w-full gap-2">
// // // //                   <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about seeds, fertilizers..." disabled={isLoading}/>
// // // //                   <Button type="submit" size="icon" disabled={isLoading || !input.trim()}><Send className="h-5 w-5" /></Button>
// // // //                 </form>
// // // //               </DialogFooter>
// // // //             </>
// // // //           )}
// // // //         </DialogContent>
// // // //       </Dialog>
// // // //     </>
// // // //   );
// // // // }


// // // 'use client';

// // // import { useState, useEffect, useRef, FormEvent } from 'react';
// // // import { v4 as uuidv4 } from 'uuid';
// // // import { AnimatePresence, motion } from 'framer-motion';
// // // import { Dialog, DialogContent } from '@/components/ui/dialog';
// // // import { Button } from '@/components/ui/button';
// // // import { Input } from '@/components/ui/input';
// // // import { Send, Bot, User, X, RotateCw, Sparkles, Loader2 } from 'lucide-react';
// // // import ChatIcon from './ChatIcon';
// // // import LanguageSelection from './LanguageSelection';
// // // import { Message, Language } from '@/types/chatbot';
// // // import { sendMessage } from '@/actions/chatActions';

// // // export default function Chatbot() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [messages, setMessages] = useState<Message[]>([]);
// // //   const [input, setInput] = useState('');
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [language, setLanguage] = useState<Language | null>(null);
// // //   const scrollAreaRef = useRef<HTMLDivElement>(null);

// // //   // Auto-scroll to bottom
// // //   useEffect(() => {
// // //     if (scrollAreaRef.current) {
// // //       scrollAreaRef.current.scrollTo({
// // //         top: scrollAreaRef.current.scrollHeight,
// // //         behavior: 'smooth'
// // //       });
// // //     }
// // //   }, [messages, isLoading, language]);

// // //   const handleLanguageSelect = (lang: Language) => {
// // //     setLanguage(lang);
// // //     let welcomeText = '';
// // //     if (lang === 'marathi') welcomeText = "नमस्कार शेतकरी मित्र! मी अॅग्री मित्र आहे. मी तुम्हाला पिके, खते किंवा हवामानाबद्दल कशी मदत करू शकतो?";
// // //     else if (lang === 'hindi') welcomeText = "नमस्ते किसान भाई! मैं एग्री मित्रा हूँ। मैं फसल, उर्वरक या मौसम के बारे में आपकी कैसे मदद कर सकता हूँ?";
// // //     else welcomeText = "Hello! I'm Agri Mitra. I can help you with crops, fertilizers, or farming advice. How can I assist you today?";
    
// // //     setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
// // //   };

// // //   const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     if (!input.trim() || isLoading || !language) return;

// // //     const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
// // //     const newHistory = [...messages, userMessage];
    
// // //     setMessages(newHistory);
// // //     const currentInput = input;
// // //     setInput('');
// // //     setIsLoading(true);

// // //     // Pass the NEW history including the user message
// // //     const response = await sendMessage(newHistory, currentInput, language);
    
// // //     if (response.success && response.aiMessage) {
// // //       setMessages(prev => [...prev, response.aiMessage!]);
// // //     } else {
// // //       const errorMsg: Message = { id: uuidv4(), role: 'model', content: response.error || "Error occurred.", createdAt: new Date() };
// // //       setMessages(prev => [...prev, errorMsg]);
// // //     }
// // //     setIsLoading(false);
// // //   };

// // //   const handleReset = () => {
// // //     setMessages([]);
// // //     setLanguage(null);
// // //     setIsLoading(false);
// // //   };

// // //   return (
// // //     <>
// // //       <div className="fixed bottom-6 right-6 z-50">
// // //         <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
// // //       </div>

// // //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// // //         <DialogContent className="sm:max-w-[400px] p-0 gap-0 overflow-hidden rounded-2xl border-none shadow-2xl h-[600px] flex flex-col bg-gray-50">
          
// // //           {/* --- HEADER --- */}
// // //           <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-4 flex items-center justify-between shadow-md z-10">
// // //             <div className="flex items-center gap-3">
// // //               <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
// // //                 <Bot className="h-6 w-6 text-white" />
// // //               </div>
// // //               <div>
// // //                 <h2 className="font-bold text-white text-lg flex items-center gap-2">
// // //                   Agri Mitra <Sparkles className="w-3 h-3 text-yellow-300" />
// // //                 </h2>
// // //                 <div className="flex items-center gap-1.5">
// // //                   <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
// // //                   <span className="text-xs text-green-100 font-medium">Online Assistant</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="flex gap-1">
// // //               <Button variant="ghost" size="icon" onClick={handleReset} className="text-green-100 hover:text-white hover:bg-white/20">
// // //                 <RotateCw className="h-5 w-5" />
// // //               </Button>
// // //               <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-green-100 hover:text-white hover:bg-white/20">
// // //                 <X className="h-5 w-5" />
// // //               </Button>
// // //             </div>
// // //           </div>

// // //           {/* --- CHAT AREA --- */}
// // //           <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f0f4f1]">
// // //             {!language ? (
// // //               <LanguageSelection onSelect={handleLanguageSelect} />
// // //             ) : (
// // //               <>
// // //                 <AnimatePresence initial={false}>
// // //                   {messages.map((msg) => (
// // //                     <motion.div
// // //                       key={msg.id}
// // //                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
// // //                       animate={{ opacity: 1, y: 0, scale: 1 }}
// // //                       className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
// // //                     >
// // //                       <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
// // //                         {/* Avatar */}
// // //                         <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
// // //                           msg.role === 'user' ? 'bg-indigo-100' : 'bg-green-100'
// // //                         }`}>
// // //                           {msg.role === 'user' ? (
// // //                             <User className="w-5 h-5 text-indigo-600" />
// // //                           ) : (
// // //                             <Bot className="w-5 h-5 text-green-600" />
// // //                           )}
// // //                         </div>

// // //                         {/* Bubble */}
// // //                         <div className={`p-3 rounded-2xl shadow-sm text-sm leading-relaxed whitespace-pre-wrap ${
// // //                           msg.role === 'user' 
// // //                             ? 'bg-gradient-to-br from-green-600 to-green-700 text-white rounded-tr-none' 
// // //                             : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
// // //                         }`}>
// // //                           {msg.content}
// // //                           <div className={`text-[10px] mt-1 opacity-70 ${msg.role === 'user' ? 'text-green-100' : 'text-gray-400'}`}>
// // //                             {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </motion.div>
// // //                   ))}
// // //                 </AnimatePresence>

// // //                 {isLoading && (
// // //                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
// // //                      <div className="flex items-end gap-2">
// // //                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
// // //                          <Bot className="w-5 h-5 text-green-600" />
// // //                        </div>
// // //                        <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
// // //                          <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
// // //                          <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
// // //                          <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
// // //                        </div>
// // //                      </div>
// // //                   </motion.div>
// // //                 )}
// // //               </>
// // //             )}
// // //           </div>

// // //           {/* --- INPUT AREA --- */}
// // //           {language && (
// // //             <div className="p-4 bg-white border-t border-gray-100">
// // //               <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
// // //                 <Input 
// // //                   value={input} 
// // //                   onChange={(e) => setInput(e.target.value)} 
// // //                   placeholder={language === 'english' ? "Type your message..." : "येथे टाइप करा..."}
// // //                   className="pr-12 py-6 rounded-full border-gray-200 focus-visible:ring-green-500 bg-gray-50"
// // //                   disabled={isLoading}
// // //                 />
// // //                 <Button 
// // //                   type="submit" 
// // //                   size="icon" 
// // //                   disabled={isLoading || !input.trim()} 
// // //                   className="absolute right-1 top-1 h-10 w-10 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-sm transition-all hover:scale-105"
// // //                 >
// // //                   {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 ml-0.5" />}
// // //                 </Button>
// // //               </form>
// // //             </div>
// // //           )}

// // //         </DialogContent>
// // //       </Dialog>
// // //     </>
// // //   );
// // // }


// // 'use client';

// // import { useState, useEffect, useRef, FormEvent } from 'react';
// // import { v4 as uuidv4 } from 'uuid';
// // import { AnimatePresence, motion } from 'framer-motion';
// // import { Dialog, DialogContent } from '@/components/ui/dialog';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Send, Bot, User, X, RefreshCcw, Sparkles, Loader2, ChevronDown } from 'lucide-react';
// // import ChatIcon from './ChatIcon';
// // import LanguageSelection from './LanguageSelection';
// // import { Message, Language } from '@/types/chatbot';
// // import { sendMessage } from '@/actions/chatActions';

// // export default function Chatbot() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([]);
// //   const [input, setInput] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [language, setLanguage] = useState<Language | null>(null);
  
// //   // Refs for scrolling and focus management
// //   const scrollAreaRef = useRef<HTMLDivElement>(null);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   // Auto-scroll to bottom
// //   useEffect(() => {
// //     if (scrollAreaRef.current) {
// //       scrollAreaRef.current.scrollTo({
// //         top: scrollAreaRef.current.scrollHeight,
// //         behavior: 'smooth'
// //       });
// //     }
// //   }, [messages, isLoading, language]);

// //   // Focus input when dialog opens or language is selected
// //   useEffect(() => {
// //     if (isOpen && language && !isLoading) {
// //       setTimeout(() => inputRef.current?.focus(), 100);
// //     }
// //   }, [isOpen, language, isLoading]);

// //   const handleLanguageSelect = (lang: Language) => {
// //     setLanguage(lang);
// //     let welcomeText = '';
// //     if (lang === 'marathi') welcomeText = "नमस्कार! मी 'अॅग्री मित्र' आहे. आज मी तुमची कशी मदत करू शकतो?";
// //     else if (lang === 'hindi') welcomeText = "नमस्ते! मैं 'एग्री मित्रा' हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?";
// //     else welcomeText = "Hello! I'm 'Agri Mitra'. How can I help you with your farming needs today?";
    
// //     setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
// //   };

// //   const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     if (!input.trim() || isLoading || !language) return;

// //     const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
// //     const newHistory = [...messages, userMessage];
    
// //     setMessages(newHistory);
// //     const currentInput = input;
// //     setInput(''); // Clear input
// //     setIsLoading(true);

// //     // ✅ FORCE FOCUS BACK TO INPUT
// //     setTimeout(() => {
// //       inputRef.current?.focus();
// //     }, 10);

// //     const response = await sendMessage(newHistory, currentInput, language);
    
// //     if (response.success && response.aiMessage) {
// //       setMessages(prev => [...prev, response.aiMessage!]);
// //     } else {
// //       const errorMsg: Message = { id: uuidv4(), role: 'model', content: response.error || "Sorry, something went wrong.", createdAt: new Date() };
// //       setMessages(prev => [...prev, errorMsg]);
// //     }
// //     setIsLoading(false);
    
// //     // ✅ FORCE FOCUS AGAIN AFTER RESPONSE (Optional, but good UX)
// //     setTimeout(() => {
// //       inputRef.current?.focus();
// //     }, 100);
// //   };

// //   const handleReset = () => {
// //     setMessages([]);
// //     setLanguage(null);
// //     setIsLoading(false);
// //   };

// //   return (
// //     <>
// //       <div className="fixed bottom-6 right-6 z-50">
// //         <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
// //       </div>

// //       <Dialog open={isOpen} onOpenChange={setIsOpen}>
// //         <DialogContent className="sm:max-w-[380px] p-0 gap-0 overflow-hidden rounded-3xl border border-gray-100 shadow-2xl h-[600px] flex flex-col bg-white font-sans">
          
// //           {/* --- CLEAN HEADER --- */}
// //           <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between shadow-sm shrink-0">
// //             <div className="flex items-center gap-3">
// //               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
// //                 <Bot className="h-6 w-6 text-white" />
// //               </div>
// //               <div>
// //                 <h2 className="font-bold text-white text-lg leading-tight tracking-wide">
// //                   Agri Mitra
// //                 </h2>
// //                 <div className="flex items-center gap-1.5">
// //                   <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
// //                   <span className="text-[11px] text-emerald-100 font-medium uppercase tracking-wider">AI Assistant</span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="flex gap-1">
// //               <button onClick={handleReset} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Reset Chat">
// //                 <RefreshCcw className="h-5 w-5" />
// //               </button>
// //               <button onClick={() => setIsOpen(false)} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
// //                 <ChevronDown className="h-6 w-6" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* --- CHAT AREA --- */}
// //           <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
// //             {!language ? (
// //               <LanguageSelection onSelect={handleLanguageSelect} />
// //             ) : (
// //               <>
// //                 <div className="flex justify-center">
// //                     <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
// //                         Today
// //                     </span>
// //                 </div>

// //                 <AnimatePresence initial={false}>
// //                   {messages.map((msg) => (
// //                     <motion.div
// //                       key={msg.id}
// //                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
// //                       animate={{ opacity: 1, y: 0, scale: 1 }}
// //                       className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
// //                     >
// //                       <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        
// //                         {/* Avatar */}
// //                         {msg.role === 'model' && (
// //                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
// //                                 <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
// //                             </div>
// //                         )}

// //                         {/* Bubble */}
// //                         <div className={`px-4 py-2.5 shadow-sm text-[14px] leading-relaxed ${
// //                           msg.role === 'user' 
// //                             ? 'bg-emerald-600 text-white rounded-2xl rounded-tr-sm' 
// //                             : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm'
// //                         }`}>
// //                           <span className="whitespace-pre-wrap">{msg.content}</span>
// //                           <div className={`text-[9px] mt-1 text-right ${msg.role === 'user' ? 'text-emerald-200' : 'text-gray-400'}`}>
// //                             {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </AnimatePresence>

// //                 {isLoading && (
// //                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start pl-8">
// //                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm flex gap-1.5 items-center">
// //                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
// //                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
// //                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
// //                      </div>
// //                   </motion.div>
// //                 )}
// //               </>
// //             )}
// //           </div>

// //           {/* --- FLOATING INPUT AREA --- */}
// //           {language && (
// //             <div className="p-4 bg-slate-50">
// //               <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
// //                 <div className="relative flex-1">
// //                     <Input 
// //                     ref={inputRef} // ✅ THE FIX: Attached ref here
// //                     value={input} 
// //                     onChange={(e) => setInput(e.target.value)} 
// //                     placeholder={language === 'english' ? "Ask anything..." : "काहीही विचारा..."}
// //                     className="w-full pl-5 pr-12 py-6 rounded-full border-gray-200 shadow-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 bg-white text-base"
// //                     disabled={isLoading}
// //                     autoComplete="off"
// //                     />
// //                     <div className="absolute right-2 top-1.5">
// //                         <Button 
// //                         type="submit" 
// //                         size="icon" 
// //                         disabled={isLoading || !input.trim()} 
// //                         className={`h-9 w-9 rounded-full transition-all duration-200 ${
// //                             input.trim() 
// //                             ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md' 
// //                             : 'bg-gray-200 text-gray-400'
// //                         }`}
// //                         >
// //                         {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 ml-0.5" />}
// //                         </Button>
// //                     </div>
// //                 </div>
// //               </form>
// //             </div>
// //           )}

// //         </DialogContent>
// //       </Dialog>
// //     </>
// //   );
// // }

// 'use client';

// import { useState, useEffect, useRef, FormEvent } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Dialog, DialogContent } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Send, Bot, RefreshCcw, Sparkles, Loader2, ChevronDown } from 'lucide-react';
// import ChatIcon from './ChatIcon';
// import LanguageSelection from './LanguageSelection';
// import { Message, Language } from '@/types/chatbot';
// import { sendMessage } from '@/actions/chatActions';

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [language, setLanguage] = useState<Language | null>(null);
  
//   // Refs for auto-scroll and focus
//   const scrollAreaRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Auto-scroll effect
//   useEffect(() => {
//     if (scrollAreaRef.current) {
//       scrollAreaRef.current.scrollTo({
//         top: scrollAreaRef.current.scrollHeight,
//         behavior: 'smooth'
//       });
//     }
//   }, [messages, isLoading, language]);

//   // Focus input on open/language select
//   useEffect(() => {
//     if (isOpen && language && !isLoading) {
//       setTimeout(() => inputRef.current?.focus(), 100);
//     }
//   }, [isOpen, language, isLoading]);

//   const handleLanguageSelect = (lang: Language) => {
//     setLanguage(lang);
//     let welcomeText = '';
//     if (lang === 'marathi') welcomeText = "नमस्कार! मी 'अॅग्री मित्र' आहे. आज मी तुमची कशी मदत करू शकतो?";
//     else if (lang === 'hindi') welcomeText = "नमस्ते! मैं 'एग्री मित्रा' हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?";
//     else welcomeText = "Hello! I'm 'Agri Mitra'. How can I help you with your farming needs today?";
    
//     setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
//   };

//   const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading || !language) return;

//     // 1. Optimistic Update (Show user message immediately)
//     const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
//     const currentHistory = [...messages, userMessage]; 
//     setMessages(currentHistory);
    
//     const currentInput = input;
//     setInput(''); // Clear input
//     setIsLoading(true);

//     // 2. Keep focus on input
//     setTimeout(() => inputRef.current?.focus(), 10);

//     // 3. Call Server Action (Using your logic)
//     // We pass 'messages' (current history EXCLUDING the new user message) to the backend?
//     // Actually, your backend logic cleans the history. Let's pass the history BEFORE the new message
//     // so the backend can construct it properly using 'cleanHistory'.
//     const response = await sendMessage(messages, currentInput, language);
    
//     if (response.success && response.aiMessage) {
//       setMessages(prev => [...prev, response.aiMessage!]);
//     } else {
//       const errorMsg: Message = { id: uuidv4(), role: 'model', content: response.error || "Sorry, error connecting.", createdAt: new Date() };
//       setMessages(prev => [...prev, errorMsg]);
//     }
//     setIsLoading(false);
    
//     // 4. Refocus input after response
//     setTimeout(() => inputRef.current?.focus(), 100);
//   };

//   const handleReset = () => {
//     setMessages([]);
//     setLanguage(null);
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <div className="fixed bottom-6 right-6 z-50">
//         <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
//       </div>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="sm:max-w-[380px] p-0 gap-0 overflow-hidden rounded-3xl border border-gray-100 shadow-2xl h-[600px] flex flex-col bg-white font-sans">
          
//           {/* --- HEADER --- */}
//           <div className="bg-emerald-600 px-6 py-4 flex items-center justify-between shadow-sm shrink-0">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
//                 <Bot className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="font-bold text-white text-lg leading-tight tracking-wide">
//                   Agri Mitra
//                 </h2>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" />
//                   <span className="text-[11px] text-emerald-100 font-medium uppercase tracking-wider">AI Assistant</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex gap-1">
//               <button onClick={handleReset} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors" title="Reset Chat">
//                 <RefreshCcw className="h-5 w-5" />
//               </button>
//               <button onClick={() => setIsOpen(false)} className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors">
//                 <ChevronDown className="h-6 w-6" />
//               </button>
//             </div>
//           </div>

//           {/* --- CHAT AREA --- */}
//           <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
//             {!language ? (
//               <LanguageSelection onSelect={handleLanguageSelect} />
//             ) : (
//               <>
//                 <div className="flex justify-center">
//                     <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
//                         Today
//                     </span>
//                 </div>

//                 <AnimatePresence initial={false}>
//                   {messages.map((msg) => (
//                     <motion.div
//                       key={msg.id}
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                     >
//                       <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        
//                         {/* Avatar */}
//                         {msg.role === 'model' && (
//                             <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
//                                 <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
//                             </div>
//                         )}

//                         {/* Bubble */}
//                         <div className={`px-4 py-2.5 shadow-sm text-[14px] leading-relaxed ${
//                           msg.role === 'user' 
//                             ? 'bg-emerald-600 text-white rounded-2xl rounded-tr-sm' 
//                             : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm'
//                         }`}>
//                           <span className="whitespace-pre-wrap">{msg.content}</span>
//                           <div className={`text-[9px] mt-1 text-right ${msg.role === 'user' ? 'text-emerald-200' : 'text-gray-400'}`}>
//                             {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>

//                 {isLoading && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start pl-8">
//                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm flex gap-1.5 items-center">
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
//                      </div>
//                   </motion.div>
//                 )}
//               </>
//             )}
//           </div>

//           {/* --- INPUT AREA --- */}
//           {language && (
//             <div className="p-4 bg-slate-50">
//               <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
//                 <div className="relative flex-1">
//                     <Input 
//                     ref={inputRef} 
//                     value={input} 
//                     onChange={(e) => setInput(e.target.value)} 
//                     placeholder={language === 'english' ? "Ask anything..." : "काहीही विचारा..."}
//                     className="w-full pl-5 pr-12 py-6 rounded-full border-gray-200 shadow-sm focus-visible:ring-emerald-500 focus-visible:border-emerald-500 bg-white text-base"
//                     disabled={isLoading}
//                     autoComplete="off"
//                     />
//                     <div className="absolute right-2 top-1.5">
//                         <Button 
//                         type="submit" 
//                         size="icon" 
//                         disabled={isLoading || !input.trim()} 
//                         className={`h-9 w-9 rounded-full transition-all duration-200 ${
//                             input.trim() 
//                             ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md' 
//                             : 'bg-gray-200 text-gray-400'
//                         }`}
//                         >
//                         {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 ml-0.5" />}
//                         </Button>
//                     </div>
//                 </div>
//               </form>
//             </div>
//           )}

//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

























// 'use client';

// import { useState, useEffect, useRef, FormEvent } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Dialog, DialogContent } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Send, Bot, RefreshCcw, Sparkles, Loader2, ChevronDown } from 'lucide-react';
// import ChatIcon from './ChatIcon';
// import LanguageSelection from './LanguageSelection';
// import { Message, Language } from '@/types/chatbot';
// import { sendMessage } from '@/actions/chatActions';

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [language, setLanguage] = useState<Language | null>(null);
  
//   const scrollAreaRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   // Auto-scroll logic
//   useEffect(() => {
//     if (scrollAreaRef.current) {
//       scrollAreaRef.current.scrollTo({
//         top: scrollAreaRef.current.scrollHeight,
//         behavior: 'smooth'
//       });
//     }
//   }, [messages, isLoading, language]);

//   // Auto-focus logic
//   useEffect(() => {
//     if (isOpen && language && !isLoading) {
//       setTimeout(() => inputRef.current?.focus(), 100);
//     }
//   }, [isOpen, language, isLoading]);

//   const handleLanguageSelect = (lang: Language) => {
//     setLanguage(lang);
//     let welcomeText = '';
//     if (lang === 'marathi') welcomeText = "नमस्कार! मी 'अॅग्री मित्र' आहे. आज मी तुमची कशी मदत करू शकतो?";
//     else if (lang === 'hindi') welcomeText = "नमस्ते! मैं 'एग्री मित्रा' हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?";
//     else welcomeText = "Hello! I'm 'Agri Mitra'. How can I help you with your farming needs today?";
    
//     setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
//   };

//   const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading || !language) return;

//     // Optimistic Update
//     const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
//     const newHistory = [...messages, userMessage];
    
//     setMessages(newHistory);
//     const currentInput = input;
//     setInput('');
//     setIsLoading(true);

//     // Keep focus
//     setTimeout(() => inputRef.current?.focus(), 10);

//     const response = await sendMessage(newHistory, currentInput, language);
    
//     if (response.success && response.aiMessage) {
//       setMessages(prev => [...prev, response.aiMessage!]);
//     } else {
//       const errorMsg: Message = { id: uuidv4(), role: 'model', content: response.error || "Connection error.", createdAt: new Date() };
//       setMessages(prev => [...prev, errorMsg]);
//     }
//     setIsLoading(false);
    
//     // Refocus after response
//     setTimeout(() => inputRef.current?.focus(), 100);
//   };

//   const handleReset = () => {
//     setMessages([]);
//     setLanguage(null);
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <div className="fixed bottom-6 right-6 z-50">
//         <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
//       </div>

//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="sm:max-w-[380px] p-0 gap-0 overflow-hidden rounded-[24px] border-0 shadow-2xl h-[650px] max-h-[85vh] flex flex-col bg-[#F8FAFC] font-sans ring-1 ring-black/5">
          
//           {/* --- HEADER --- */}
//           <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-5 py-4 flex items-center justify-between shrink-0 shadow-md z-10">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
//                   <Bot className="h-6 w-6 text-white" />
//                 </div>
//                 <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-emerald-700 rounded-full"></span>
//               </div>
//               <div>
//                 <h2 className="font-bold text-white text-lg leading-tight tracking-wide text-shadow-sm">
//                   Agri Mitra
//                 </h2>
//                 <p className="text-[11px] text-emerald-100 font-medium opacity-90">AI Farming Assistant</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-1">
//               <button onClick={handleReset} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Reset Chat">
//                 <RefreshCcw className="h-4 w-4" />
//               </button>
//               <button onClick={() => setIsOpen(false)} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
//                 <ChevronDown className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* --- CHAT AREA --- */}
//           <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 relative">
//              {/* Background Pattern (Optional subtle texture) */}
//              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

//             {!language ? (
//               <LanguageSelection onSelect={handleLanguageSelect} />
//             ) : (
//               <>
//                 <div className="flex justify-center my-4">
//                     <span className="text-[10px] font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
//                         Today
//                     </span>
//                 </div>

//                 <AnimatePresence initial={false}>
//                   {messages.map((msg) => (
//                     <motion.div
//                       key={msg.id}
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       transition={{ duration: 0.2 }}
//                       className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
//                     >
//                       <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        
//                         {/* Avatar */}
//                         {msg.role === 'model' && (
//                             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-white">
//                                 <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
//                             </div>
//                         )}

//                         {/* Bubble */}
//                         <div className={`px-4 py-2.5 shadow-sm text-[14px] leading-relaxed relative ${
//                           msg.role === 'user' 
//                             ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl rounded-tr-sm' 
//                             : 'bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-sm'
//                         }`}>
//                           <span className="whitespace-pre-wrap">{msg.content}</span>
//                           <div className={`text-[9px] mt-1.5 text-right font-medium opacity-70 ${msg.role === 'user' ? 'text-emerald-50' : 'text-gray-400'}`}>
//                             {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>

//                 {/* Typing Indicator */}
//                 {isLoading && (
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start pl-8 mb-2">
//                      <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm flex gap-1.5 items-center">
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
//                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" />
//                      </div>
//                   </motion.div>
//                 )}
//               </>
//             )}
//           </div>

//           {/* --- INPUT AREA --- */}
//           {language && (
//             <div className="p-4 bg-white border-t border-gray-100/50 shadow-[0_-4px_20px_rgb(0,0,0,0.03)] z-20">
//               <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
//                 <div className="relative flex-1 group">
//                     <Input 
//                         ref={inputRef} 
//                         value={input} 
//                         onChange={(e) => setInput(e.target.value)} 
//                         placeholder={language === 'english' ? "Ask anything..." : "काहीही विचारा..."}
//                         className="w-full pl-5 pr-12 py-6 rounded-full border-gray-200 bg-gray-50/50 shadow-inner focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 text-base placeholder:text-gray-400"
//                         disabled={isLoading}
//                         autoComplete="off"
//                     />
//                     <div className="absolute right-2 top-1.5">
//                         <Button 
//                         type="submit" 
//                         size="icon" 
//                         disabled={isLoading || !input.trim()} 
//                         className={`h-9 w-9 rounded-full transition-all duration-300 shadow-sm ${
//                             input.trim() 
//                             ? 'bg-emerald-600 hover:bg-emerald-700 text-white hover:scale-105 active:scale-95' 
//                             : 'bg-gray-200 text-gray-400'
//                         }`}
//                         >
//                         {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 ml-0.5" />}
//                         </Button>
//                     </div>
//                 </div>
//               </form>
//             </div>
//           )}

//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }




















'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, RefreshCcw, Sparkles, Loader2, ChevronDown } from 'lucide-react';
import ChatIcon from './ChatIcon';
import LanguageSelection from './LanguageSelection';
import { Message, Language } from '@/types/chatbot';
import { sendMessage } from '@/actions/chatActions';
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<Language | null>(null);
  
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading, language]);

  useEffect(() => {
    if (isOpen && language && !isLoading) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, language, isLoading]);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    let welcomeText = '';
    if (lang === 'marathi') welcomeText = "नमस्कार! मी **'अॅग्री मित्र'** आहे. आज मी तुमची कशी मदत करू शकतो? \n\nतुम्ही मला झाडांची लागवड, खते किंवा रोपवाटिकेबद्दल प्रश्न विचारू शकता.";
    else if (lang === 'hindi') welcomeText = "नमस्ते! मैं **'एग्री मित्रा'** हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ? \n\nआप मुझसे पौधों की देखभाल या खेती के बारे में पूछ सकते हैं.";
    else welcomeText = "Hello! I'm **'Agri Mitra'**. How can I help you with your farming needs today?";
    
    setMessages([{ id: uuidv4(), role: 'model', content: welcomeText, createdAt: new Date() }]);
  };

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !language) return;

    const userMessage: Message = { id: uuidv4(), role: 'user', content: input, createdAt: new Date() };
    const newHistory = [...messages, userMessage];
    
    setMessages(newHistory);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    const response = await sendMessage(newHistory, currentInput, language);
    
    if (response.success && response.aiMessage) {
      setMessages(prev => [...prev, response.aiMessage!]);
    } else {
      const errorMsg: Message = { id: uuidv4(), role: 'model', content: response.error || "Connection error.", createdAt: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    }
    setIsLoading(false);
  };

  const handleReset = () => {
    setMessages([]);
    setLanguage(null);
    setIsLoading(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <ChatIcon isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[380px] p-0 gap-0 overflow-hidden rounded-[24px] border-0 shadow-2xl h-[650px] max-h-[85vh] flex flex-col bg-[#F8FAFC] font-sans ring-1 ring-black/5">
          
          {/* HEADER */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 px-5 py-4 flex items-center justify-between shrink-0 shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h2 className="font-bold text-white text-lg leading-tight tracking-wide">Agri Mitra</h2>
                <p className="text-[11px] text-emerald-100 font-medium opacity-90">Bajbalkar Ropvatika Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={handleReset} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <RefreshCcw className="h-4 w-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* CHAT AREA */}
          <div ref={scrollAreaRef} className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 relative">
            {!language ? (
              <LanguageSelection onSelect={handleLanguageSelect} />
            ) : (
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {msg.role === 'model' && (
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 border border-white">
                          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                      )}

                      <div className={`px-4 py-2.5 shadow-sm text-[14px] leading-relaxed rounded-2xl ${
                        msg.role === 'user' 
                          ? 'bg-emerald-600 text-white rounded-tr-sm' 
                          : 'bg-white text-gray-700 border border-gray-100 rounded-tl-sm'
                      }`}>
                        {/* THE CLEAN FORMATTING FIX */}
                        <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'prose-invert' : ''}`}>
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                              strong: ({ children }) => <b className="font-bold text-emerald-900">{children}</b>,
                              ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                              li: ({ children }) => <li className="mb-1">{children}</li>,
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                        <div className={`text-[9px] mt-1.5 text-right opacity-60`}>
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
            {isLoading && (
               <div className="flex justify-start pl-8">
                 <Loader2 className="h-5 w-5 animate-spin text-emerald-500" />
               </div>
            )}
          </div>

          {/* INPUT AREA */}
          {language && (
            <div className="p-4 bg-white border-t border-gray-100/50">
              <form onSubmit={handleSendMessage} className="relative flex items-center gap-2">
                <Input 
                    ref={inputRef} 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask Agri Mitra..."
                    className="flex-1 rounded-full bg-gray-50 border-gray-200 focus:ring-emerald-500"
                    disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="rounded-full bg-emerald-600 hover:bg-emerald-700">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}