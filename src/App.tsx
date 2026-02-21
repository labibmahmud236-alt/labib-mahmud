/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Heart, 
  GraduationCap, 
  HandHelping, 
  Droplets, 
  Trees, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2,
  Users,
  Search,
  PlusCircle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRINCIPLES, OBJECTIVES, ACTIVITIES, BLOOD_GROUPS } from './constants';
import { Donor, BloodRequest } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [logoUrl, setLogoUrl] = useState('https://picsum.photos/seed/islamic/200/200');
  const [showBloodPortal, setShowBloodPortal] = useState(false);
  const [bloodPortalView, setBloodPortalView] = useState<'register' | 'request' | 'donors' | 'requests'>('register');

  // Mock data for blood portal
  const [donors, setDonors] = useState<Donor[]>([
    { id: '1', name: 'আব্দুল্লাহ', bloodGroup: 'O+', location: 'ঢাকা', lastDonation: '২০২৪-০১-১০', phone: '01711XXXXXX' },
    { id: '2', name: 'ওমর ফারুক', bloodGroup: 'A+', location: 'চট্টগ্রাম', lastDonation: '২০২৩-১১-১৫', phone: '01822XXXXXX' },
  ]);
  const [requests, setRequests] = useState<BloodRequest[]>([
    { id: '1', patientName: 'রহিমা বেগম', bloodGroup: 'B+', bags: 2, date: '২০২৪-০৩-০১', hospital: 'ঢাকা মেডিকেল', phone: '01933XXXXXX' },
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ id, children }: { id: string, children: React.ReactNode }) => (
    <button 
      onClick={() => scrollToSection(id)}
      className="text-slate-700 hover:text-islamic-green font-medium transition-colors"
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen font-sans islamic-pattern">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <img 
                  src={logoUrl} 
                  alt="Logo" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-islamic-green shadow-sm"
                  onClick={() => {
                    const password = prompt('এডমিন পাসওয়ার্ড দিন:');
                    if (password === 'admin123') {
                      const newUrl = prompt('নতুন লোগো URL দিন:');
                      if (newUrl) setLogoUrl(newUrl);
                    } else {
                      alert('ভুল পাসওয়ার্ড!');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <PlusCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink id="home">হোম</NavLink>
              <NavLink id="about">আমাদের সম্পর্কে</NavLink>
              <NavLink id="principles">মূলনীতি</NavLink>
              <NavLink id="activities">কার্যক্রম</NavLink>
              <NavLink id="contact">যোগাযোগ</NavLink>
              <button 
                onClick={() => scrollToSection('donate')}
                className="bg-islamic-green text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md"
              >
                অনুদান করুন
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                <NavLink id="home">হোম</NavLink>
                <NavLink id="about">আমাদের সম্পর্কে</NavLink>
                <NavLink id="principles">মূলনীতি</NavLink>
                <NavLink id="activities">কার্যক্রম</NavLink>
                <NavLink id="contact">যোগাযোগ</NavLink>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="bg-islamic-green text-white px-6 py-3 rounded-xl font-semibold w-full text-center"
                >
                  অনুদান করুন
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/mosque/1920/1080" 
              alt="Islamic Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-islamic-gold text-2xl font-serif mb-4">বিসমিল্লাহির রাহমানির রাহিম</p>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                আলোর অভিসারী ফাউন্ডেশন
              </h2>
              <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                (একটি শিক্ষা, সেবা, মানবকল্যাণে নিবেদিত অরাজনৈতিক ও অলাভজনক সংগঠন)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('join')}
                  className="bg-islamic-green text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
                >
                  আমাদের সাথে যুক্ত হন <ChevronRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('donate')}
                  className="bg-white text-islamic-green px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                >
                  অনুদান করুন
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-1 bg-islamic-green-light text-islamic-green rounded-full text-sm font-bold mb-4">
                  আমাদের সম্পর্কে জানুন
                </div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">আলোর অভিসারী ফাউন্ডেশন</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>
                    আলোর অভিসারী ফাউন্ডেশন একটি শিক্ষা, সেবা ও মানবকল্যাণে নিবেদিত অরাজনৈতিক ও অলাভজনক সংগঠন। সমাজের সর্বস্তরের মানুষের মাঝে দ্বীনী ও নৈতিক শিক্ষার আলো ছড়িয়ে দেওয়া, মানবিক মূল্যবোধ জাগ্রত করা এবং অসহায় ও সুবিধাবঞ্চিত মানুষের পাশে দাঁড়ানো—এই তিনটি লক্ষ্যকে সামনে রেখেই আমাদের পথচলা।
                  </p>
                  <p>
                    আমরা বিশ্বাস করি, সঠিক শিক্ষা মানুষকে আলোকিত করে, আর সেবামূলক কাজ সমাজকে মানবিক করে তোলে। তাই কুরআন ও সুন্নাহভিত্তিক দ্বীনী শিক্ষা বিস্তার, নৈতিকতা উন্নয়নমূলক কার্যক্রম, দাওয়াহ ও সচেতনতামূলক উদ্যোগের পাশাপাশি সমাজকল্যাণমূলক বিভিন্ন সেবামূলক কার্যক্রম পরিচালনা করাই আমাদের মূল উদ্দেশ্য।
                  </p>
                  <p>
                    আলোর অভিসারী ফাউন্ডেশন কোনো রাজনৈতিক কর্মকাণ্ডের সাথে জড়িত নয় এবং সম্পূর্ণভাবে স্বেচ্ছাসেবী ও অলাভজনক ভিত্তিতে পরিচালিত। আল্লাহর সন্তুষ্টি অর্জনের নিয়তে, স্বচ্ছতা ও আমানতের সাথে আমরা আমাদের কার্যক্রম পরিচালনার অঙ্গীকার করি।
                  </p>
                  <p>
                    আমাদের প্রত্যাশা—এই উদ্যোগের মাধ্যমে ব্যক্তি, পরিবার ও সমাজ আলোকিত হবে; অজ্ঞতা, অনৈতিকতা ও অসচেতনতার অন্ধকার দূর হয়ে একটি সুন্দর, মানবিক ও ন্যায়ভিত্তিক সমাজ গড়ে উঠবে।
                  </p>
                  <p className="font-bold text-islamic-green">
                    আলোর অভিসারী ফাউন্ডেশন— <br />
                    আলো ছড়াই, জীবন গড়ি।
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://picsum.photos/seed/charity/800/600" 
                  alt="Charity" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-islamic-green text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                  <p className="text-4xl font-bold">১০০%</p>
                  <p className="text-sm opacity-80">স্বচ্ছতা ও আমানতদারি</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section id="principles" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">আমাদের মূলনীতি</h2>
              <div className="w-20 h-1 bg-islamic-green mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRINCIPLES.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-islamic-green-light text-islamic-green rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-islamic-green">{p.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Goals & Objectives Section */}
        <section className="py-20 bg-islamic-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4">আমাদের লক্ষ্য</h2>
                <p className="text-2xl font-serif leading-relaxed italic">
                  "আলোর অভিসারী ফাউন্ডেশনের মূল লক্ষ্য হলো—কুরআন ও সুন্নাহভিত্তিক শিক্ষা, মানবিক সেবা ও নৈতিক মূল্যবোধের মাধ্যমে একটি আলোকিত, সচেতন ও মানবিক সমাজ গড়ে তোলা।"
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4">আমাদের উদ্দেশ্যসমূহ</h2>
                <div className="space-y-4">
                  {OBJECTIVES.map((obj) => (
                    <div key={obj.id} className="flex gap-4 items-start">
                      <div className="mt-1">
                        <CheckCircle2 className="w-5 h-5 text-islamic-gold" />
                      </div>
                      <p className="text-lg opacity-90">{obj.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">আমাদের কার্যক্রম</h2>
              <div className="w-20 h-1 bg-islamic-green mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ACTIVITIES.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-islamic-green group-hover:text-white transition-colors">
                    {activity.icon === 'BookOpen' && <BookOpen className="w-10 h-10" />}
                    {activity.icon === 'Heart' && <Heart className="w-10 h-10" />}
                    {activity.icon === 'GraduationCap' && <GraduationCap className="w-10 h-10" />}
                    {activity.icon === 'HandHelping' && <HandHelping className="w-10 h-10" />}
                    {activity.icon === 'Droplets' && <Droplets className="w-10 h-10" />}
                    {activity.icon === 'Trees' && <Trees className="w-10 h-10" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{activity.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{activity.description}</p>
                  {activity.id === 'blood' && (
                    <button 
                      onClick={() => setShowBloodPortal(true)}
                      className="mt-auto bg-islamic-green text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                    >
                      পোর্টাল খুলুন
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blood Portal Modal */}
        <AnimatePresence>
          {showBloodPortal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
              >
                <div className="p-6 border-b flex justify-between items-center bg-islamic-green text-white">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-red-400 fill-red-400" />
                    <h2 className="text-xl font-bold">স্বেচ্ছায় রক্তদান পোর্টাল</h2>
                  </div>
                  <button onClick={() => setShowBloodPortal(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 lg:p-10">
                  <div className="flex flex-wrap gap-4 mb-8">
                    <button 
                      onClick={() => setBloodPortalView('register')}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${bloodPortalView === 'register' ? 'bg-islamic-green text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      রক্তদাতা নিবন্ধন
                    </button>
                    <button 
                      onClick={() => setBloodPortalView('request')}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${bloodPortalView === 'request' ? 'bg-islamic-green text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      রক্তের আবেদন
                    </button>
                    <button 
                      onClick={() => setBloodPortalView('donors')}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${bloodPortalView === 'donors' ? 'bg-islamic-green text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      রক্তদাতার তালিকা
                    </button>
                    <button 
                      onClick={() => setBloodPortalView('requests')}
                      className={`px-6 py-2 rounded-full font-semibold transition-all ${bloodPortalView === 'requests' ? 'bg-islamic-green text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      আবেদনকারীর তালিকা
                    </button>
                  </div>

                  {bloodPortalView === 'register' && (
                    <div className="grid lg:grid-cols-2 gap-10">
                      <div>
                        <h3 className="text-2xl font-bold mb-6 text-slate-800">রক্তদাতা নিবন্ধন ফর্ম</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                              <label className="block text-sm font-semibold mb-1">পূর্ণ নাম</label>
                              <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none" placeholder="আপনার নাম লিখুন" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">জন্ম তারিখ</label>
                              <input type="date" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">বয়স</label>
                              <input type="number" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none" placeholder="বয়স" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">লিঙ্গ</label>
                              <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none">
                                <option>পুরুষ</option>
                                <option>মহিলা</option>
                                <option>অন্যান্য</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">রক্তের গ্রুপ</label>
                              <select className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none">
                                {BLOOD_GROUPS.map(bg => <option key={bg}>{bg}</option>)}
                              </select>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold mb-1">মোবাইল নম্বর</label>
                              <input type="tel" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none" placeholder="017XXXXXXXX" />
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">জেলা/থানা</label>
                              <input type="text" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-islamic-green outline-none" placeholder="আপনার এলাকা" />
                            </div>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl space-y-3">
                            <p className="font-bold text-slate-700">স্বাস্থ্য সংক্রান্ত তথ্য</p>
                            <div className="flex items-center gap-4">
                              <label className="flex items-center gap-2">
                                <input type="checkbox" className="w-4 h-4 text-islamic-green" /> আপনি কি বর্তমানে সুস্থ?
                              </label>
                            </div>
                            <div>
                              <label className="block text-sm font-semibold mb-1">শেষ রক্তদানের তারিখ</label>
                              <input type="date" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                              <input type="checkbox" className="w-4 h-4 text-islamic-green" /> আমি স্বেচ্ছায় ও বিনামূল্যে রক্তদানে সম্মত হচ্ছি।
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                              <input type="checkbox" className="w-4 h-4 text-islamic-green" /> প্রদত্ত তথ্য সঠিক ও সত্য বলে ঘোষণা করছি।
                            </label>
                          </div>
                          <button type="button" className="w-full bg-islamic-green text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all">
                            নিবন্ধন সম্পন্ন করুন
                          </button>
                        </form>
                      </div>
                      <div className="bg-slate-50 p-8 rounded-3xl h-fit">
                        <h4 className="text-xl font-bold mb-4 text-islamic-green flex items-center gap-2">
                          <Info className="w-5 h-5" /> রক্তদান সম্পর্কে
                        </h4>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                          <p>আলোর অভিসারী ফাউন্ডেশন মানবকল্যাণমূলক কার্যক্রমের অংশ হিসেবে স্বেচ্ছায় রক্তদান কর্মসূচি পরিচালনা করে থাকে। জরুরি মুহূর্তে রক্তের অভাবে যেন কোনো জীবন ঝুঁকির মুখে না পড়ে—এই লক্ষ্যকে সামনে রেখে আমরা স্বেচ্ছাসেবী রক্তদাতাদের একটি ডাটাবেজ তৈরি করছি।</p>
                          <p>রক্তদান একটি মহান মানবিক কাজ। এটি শুধু একটি চিকিৎসা সহায়তা নয়, বরং একজন মানুষের জীবন রক্ষার সম্ভাবনা তৈরি করে। সুস্থ ও যোগ্য ব্যক্তির স্বেচ্ছায় রক্তদান সমাজে সহমর্মিতা ও মানবতার উজ্জ্বল দৃষ্টান্ত স্থাপন করে।</p>
                          <div className="bg-white p-4 rounded-2xl border border-slate-200 text-sm space-y-2">
                            <p className="font-bold text-red-600">⚠ গুরুত্বপূর্ণ নির্দেশনা:</p>
                            <ul className="list-disc list-inside space-y-1">
                              <li>রক্তদান সম্পূর্ণ স্বেচ্ছামূলক।</li>
                              <li>রক্তদানের পূর্বে চিকিৎসকের পরামর্শ ও শারীরিক যোগ্যতা নিশ্চিত করা আবশ্যক।</li>
                              <li>সংগঠন রক্ত সংগ্রহ বা সংরক্ষণ করে না; কেবল রক্তদাতা ও গ্রহীতার মধ্যে সমন্বয় করে।</li>
                              <li>কোনো প্রকার আর্থিক লেনদেন বা বাণিজ্যিক কার্যক্রম অনুমোদিত নয়।</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {bloodPortalView === 'request' && (
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-2xl font-bold mb-6 text-slate-800">রক্তের জন্য আবেদন ফর্ম</h3>
                      <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <label className="block text-sm font-semibold mb-1">রোগীর নাম</label>
                            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-islamic-green" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-1">রক্তের গ্রুপ</label>
                            <select className="w-full p-3 rounded-xl border border-slate-200 outline-none">
                              {BLOOD_GROUPS.map(bg => <option key={bg}>{bg}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-1">প্রয়োজনীয় ব্যাগ সংখ্যা</label>
                            <input type="number" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-1">প্রয়োজনের তারিখ</label>
                            <input type="date" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-1">হাসপাতালের নাম</label>
                            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold mb-1">আবেদনকারীর নাম</label>
                            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold mb-1">মোবাইল নম্বর</label>
                            <input type="tel" className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
                          </div>
                        </div>
                        <button type="button" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                          রক্তের আবেদন পাঠান
                        </button>
                      </form>
                    </div>
                  )}

                  {bloodPortalView === 'donors' && (
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-slate-800">নিবন্ধিত রক্তদাতার তালিকা</h3>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input type="text" placeholder="গ্রুপ বা এলাকা খুঁজুন" className="pl-10 pr-4 py-2 rounded-full border border-slate-200 outline-none focus:ring-2 focus:ring-islamic-green" />
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50">
                              <th className="p-4 font-bold border-b">নাম</th>
                              <th className="p-4 font-bold border-b">রক্তের গ্রুপ</th>
                              <th className="p-4 font-bold border-b">এলাকা</th>
                              <th className="p-4 font-bold border-b">শেষ দান</th>
                              <th className="p-4 font-bold border-b">যোগাযোগ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donors.map(donor => (
                              <tr key={donor.id} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 border-b">{donor.name}</td>
                                <td className="p-4 border-b"><span className="px-3 py-1 bg-red-100 text-red-600 rounded-full font-bold">{donor.bloodGroup}</span></td>
                                <td className="p-4 border-b">{donor.location}</td>
                                <td className="p-4 border-b">{donor.lastDonation}</td>
                                <td className="p-4 border-b"><button className="text-islamic-green font-bold flex items-center gap-1 hover:underline"><Phone className="w-4 h-4" /> কল করুন</button></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {bloodPortalView === 'requests' && (
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-slate-800">রক্তের আবেদনের তালিকা</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {requests.map(req => (
                          <div key={req.id} className="bg-white p-6 rounded-2xl border-2 border-red-50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">{req.patientName}</h4>
                                <p className="text-sm text-slate-500">{req.hospital}</p>
                              </div>
                              <div className="bg-red-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl">
                                {req.bloodGroup}
                              </div>
                            </div>
                            <div className="space-y-2 text-sm text-slate-600 mb-6">
                              <p className="flex items-center gap-2"><Droplets className="w-4 h-4 text-red-500" /> প্রয়োজনীয় ব্যাগ: {req.bags}</p>
                              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> {req.hospital}</p>
                            </div>
                            <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                              রক্ত দিতে চাই
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Join Us Section */}
        <section id="join" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid lg:grid-cols-2">
              <div className="p-10 lg:p-20">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">স্বেচ্ছাসেবক হিসেবে যুক্ত হন</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  দ্বীন ও মানবতার সেবায় আমাদের সাথে যুক্ত হয়ে আপনিও হতে পারেন সমাজের পরিবর্তনের কারিগর। নিচের ফর্মটি পূরণ করে আপনার আগ্রহের ক্ষেত্রটি আমাদের জানান।
                </p>
                <form className="space-y-4">
                  <input type="text" placeholder="আপনার নাম" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-islamic-green outline-none" />
                  <input type="tel" placeholder="মোবাইল নাম্বার" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-islamic-green outline-none" />
                  <input type="text" placeholder="ঠিকানা" className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-islamic-green outline-none" />
                  <select className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-islamic-green outline-none">
                    <option>আগ্রহের ক্ষেত্র নির্বাচন করুন</option>
                    <option>দাওয়াহ কার্যক্রম</option>
                    <option>সামাজিক সেবা</option>
                    <option>শিক্ষা কার্যক্রম</option>
                    <option>রক্তদান</option>
                  </select>
                  <button className="w-full bg-islamic-green text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
                    আবেদন জমা দিন
                  </button>
                </form>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://picsum.photos/seed/volunteer/800/1000" 
                  alt="Volunteer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-islamic-green/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donate" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">অনুদান / দান সেকশন</h2>
              <div className="w-20 h-1 bg-islamic-green mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                “আপনার অনুদান আমাদের কার্যক্রমকে এগিয়ে নিতে সহায়তা করে।”
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-islamic-green-light p-8 rounded-3xl border-2 border-islamic-green/10">
                  <h3 className="text-xl font-bold mb-6 text-islamic-green">পেমেন্ট অপশন</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center font-bold text-pink-600">b</div>
                        <span className="font-bold">bKash</span>
                      </div>
                      <span className="text-sm font-mono">01540025991</span>
                    </div>
                    <div className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">n</div>
                        <span className="font-bold">Nagad</span>
                      </div>
                      <span className="text-sm font-mono">01540025991</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-white/50 rounded-2xl text-sm text-slate-600">
                    <p className="font-bold mb-2">নির্দেশনা:</p>
                    <p>উপরোক্ত নাম্বারে 'Send Money' করার পর নিচের ফর্মটি পূরণ করুন।</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-slate-50 p-8 lg:p-12 rounded-[40px] border border-slate-100">
                  <h3 className="text-2xl font-bold mb-8 text-slate-900">অনুদান নিশ্চিতকরণ ফর্ম</h3>
                  <form className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">আপনার নাম</label>
                      <input type="text" className="w-full p-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-islamic-green outline-none" placeholder="নাম লিখুন" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">মোবাইল নাম্বার</label>
                      <input type="tel" className="w-full p-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-islamic-green outline-none" placeholder="01XXXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">অনুদান পরিমাণ (টাকা)</label>
                      <input type="number" className="w-full p-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-islamic-green outline-none" placeholder="৫০০" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">ট্রানজ্যাকশন আইডি (TxID)</label>
                      <input type="text" className="w-full p-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-islamic-green outline-none" placeholder="ABC123XYZ" />
                    </div>
                    <div className="md:col-span-2">
                      <button className="w-full bg-islamic-green text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all">
                        তথ্য জমা দিন
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl font-bold mb-10">যোগাযোগ করুন</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-islamic-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">ঠিকানা</h4>
                      <p className="text-white/60">ঢাকা, বাংলাদেশ (বিস্তারিত ঠিকানা এখানে বসবে)</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-islamic-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">ফোন</h4>
                      <p className="text-white/60">01540025991</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-islamic-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">ইমেইল</h4>
                      <p className="text-white/60">info@alorabhisari.org</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10">
                  <input type="text" placeholder="নাম" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-islamic-green outline-none" />
                  <input type="email" placeholder="ইমেইল" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-islamic-green outline-none" />
                  <textarea placeholder="আপনার বার্তা" rows={4} className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-islamic-green outline-none"></textarea>
                  <button className="w-full bg-islamic-green text-white py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                    বার্তা পাঠান
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-islamic-green">আলোর অভিসারী ফাউন্ডেশন</h2>
            <p className="text-white/40 max-w-md">
              একটি শিক্ষা, সেবা ও মানবকল্যাণে নিবেদিত অরাজনৈতিক ও অলাভজনক সংগঠন।
            </p>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-white/60">
            <a href="#" className="hover:text-white transition-colors">ফেসবুক</a>
            <a href="#" className="hover:text-white transition-colors">ইউটিউব</a>
            <a href="#" className="hover:text-white transition-colors">টুইটার</a>
          </div>
          <p className="text-white/20 text-sm">
            © ২০২৪ আলোর অভিসারী ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </footer>
    </div>
  );
}
