import { MbtiCode, MbtiDefinition } from '@/types/mbti-definitions';

export const MBTI_MAP: Record<MbtiCode, MbtiDefinition> = {
  // Analysts
  INTJ: { code: 'INTJ', label: 'Architect', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=INTJ&backgroundColor=b6e3f4' },
  INTP: { code: 'INTP', label: 'Logician', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=INTP&backgroundColor=b6e3f4' },
  ENTJ: { code: 'ENTJ', label: 'Commander', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ENTJ&backgroundColor=b6e3f4' },
  ENTP: { code: 'ENTP', label: 'Debater', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ENTP&backgroundColor=b6e3f4' },

  // Diplomats
  INFJ: { code: 'INFJ', label: 'Advocate', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=INFJ&backgroundColor=c0aede' },
  INFP: { code: 'INFP', label: 'Mediator', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=INFP&backgroundColor=c0aede' },
  ENFJ: { code: 'ENFJ', label: 'Protagonist', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ENFJ&backgroundColor=c0aede' },
  ENFP: { code: 'ENFP', label: 'Campaigner', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ENFP&backgroundColor=c0aede' },

  // Sentinels
  ISTJ: { code: 'ISTJ', label: 'Logistician', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ISTJ&backgroundColor=d1d4f9' },
  ISFJ: { code: 'ISFJ', label: 'Defender', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ISFJ&backgroundColor=d1d4f9' },
  ESTJ: { code: 'ESTJ', label: 'Executive', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ESTJ&backgroundColor=d1d4f9' },
  ESFJ: { code: 'ESFJ', label: 'Consul', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ESFJ&backgroundColor=d1d4f9' },

  // Explorers
  ISTP: { code: 'ISTP', label: 'Virtuoso', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ISTP&backgroundColor=ffdfbf' },
  ISFP: { code: 'ISFP', label: 'Adventurer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ISFP&backgroundColor=ffdfbf' },
  ESTP: { code: 'ESTP', label: 'Entrepreneur', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ESTP&backgroundColor=ffdfbf' },
  ESFP: { code: 'ESFP', label: 'Entertainer', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ESFP&backgroundColor=ffdfbf' },
};

export const MBTI_LIST = Object.values(MBTI_MAP);

export const MBTI_QUESTIONS: Record<MbtiCode, string[]> = {
  // --- ANALYSTS ---
  INTJ: [
    "A colleague suggests a popular but inefficient workflow. How do you logically dismantle their argument?",
    "Describe your 10-year plan for global or industry dominance.",
    "Someone calls your master plan 'too cold.' How do you justify the necessity of your strategy?",
    "How do you handle a team member who prioritizes emotions over the project's success?",
    "What is your immediate reaction to a 'last-minute' change in a project you've perfected?",
    "Describe the perfect system for organizing a chaotic library.",
    "How do you feel about small talk at corporate networking events?",
    "A project is failing; how do you identify the single point of failure?",
    "How do you decide which people are worth your time and energy?",
    "What is the most 'logical' way to handle a breakup?"
  ],
  INTP: [
    "Explain a complex theoretical concept you've been obsessing over lately.",
    "A friend asks for emotional support, but you see a clear logical solution. What do you say?",
    "You find a logical loophole in a company's policy. Do you exploit it or fix it?",
    "How do you react when someone tells you to 'just trust your gut' without data?",
    "Describe your ideal 'deep dive' research rabbit hole.",
    "How do you handle being forced to follow a routine that makes no sense to you?",
    "What is your process for 'rethinking' a widely accepted fact?",
    "How do you organize your thoughts when your brain has 50 tabs open?",
    "Why is accuracy more important than social harmony?",
    "Describe the ultimate experiment you would run if ethics and budget weren't factors."
  ],
  ENTJ: [
    "You are given a failing department to turn around in 30 days. What is your first move?",
    "How do you deal with a talented employee who has a bad attitude?",
    "Describe your philosophy on 'efficiency vs. empathy.'",
    "What is the most effective way to command a room of skeptics?",
    "How do you react to a leader who is indecisive?",
    "What does 'winning' look like to you in a professional setting?",
    "How do you optimize your daily schedule for maximum output?",
    "Give a speech to motivate a tired team to work through the weekend.",
    "How do you handle a situation where you are not the one in charge?",
    "What is your strategy for negotiating a massive salary increase?"
  ],
  ENTP: [
    "Play devil's advocate: why is a bad idea actually a good one?",
    "You're bored in a meeting. How do you stir the pot to make it interesting?",
    "How do you convince someone of a radical new idea you just came up with?",
    "What do you do when you realize your current 'brilliant' project is actually impossible?",
    "Describe your process for winning a debate you don't actually care about.",
    "How do you handle rules that you find restrictive or boring?",
    "A friend is being too sensitive about a joke. How do you respond?",
    "What is the most interesting 'what if' scenario you can think of right now?",
    "How do you stay focused when a new, shinier idea comes along?",
    "How would you disrupt an industry that hasn't changed in 50 years?"
  ],

  // --- DIPLOMATS ---
  INFJ: [
    "What is the deeper meaning behind a recurring dream or life pattern you've noticed?",
    "How do you protect your energy when you feel everyone else's emotions?",
    "Describe your vision for a world that is truly at peace.",
    "A friend is acting out; what is the 'hidden' reason they are behaving this way?",
    "How do you handle the conflict between your need for solitude and your desire to help?",
    "What is the most 'soulful' connection you've ever had with another person?",
    "How do you react when someone violates your core values?",
    "Describe your 'inner sanctum' or the place you go to escape the world.",
    "What is the one thing humanity needs to change to evolve?",
    "How do you balance your high ideals with the messy reality of life?"
  ],
  INFP: [
    "Describe a world that exists only in your imagination.",
    "What does 'authenticity' mean to you in a world of social media filters?",
    "How do you express your deepest feelings when words aren't enough?",
    "A project requires you to compromise your morals for money. What do you do?",
    "How do you find beauty in something most people find ugly or mundane?",
    "What is the most 'human' thing about being an outsider?",
    "How do you deal with the 'harshness' of the modern world?",
    "Describe your ideal creative retreat.",
    "How do you know if someone is being their true self with you?",
    "What is a cause you would be willing to sacrifice everything for?"
  ],
  ENFJ: [
    "How do you bring a fractured group of people together for a common goal?",
    "What is the best way to help someone realize their hidden potential?",
    "A friend is making a huge life mistake. How do you gently guide them back?",
    "How do you balance your own needs with the needs of the community?",
    "What does a 'perfectly harmonious' social gathering look like to you?",
    "How do you handle it when someone refuses to be helped?",
    "Give a pep talk to someone who has just lost their confidence.",
    "How do you use your influence to make a positive social change?",
    "How do you feel when you realize you've accidentally hurt someone's feelings?",
    "What is the key to being a truly inspiring leader?"
  ],
  ENFP: [
    "You see a stranger looking sad. How do you brighten their day without being intrusive?",
    "What is the most exciting possibility you see in the world right now?",
    "How do you handle the feeling of being 'trapped' in a 9-to-5 routine?",
    "Describe your process for starting a new hobby you'll probably quit in a week.",
    "How do you connect two completely unrelated ideas to create something new?",
    "What does 'freedom' mean to you?",
    "How do you keep your spirits up when life feels heavy or boring?",
    "Tell a story that captures the 'magic' of a spontaneous adventure.",
    "How do you handle people who tell you to 'grow up' or 'be realistic'?",
    "What is the most important thing to look for in a new friend?"
  ],

  // --- SENTINELS ---
  ISTJ: [
    "What is the most efficient way to organize a tax filing system?",
    "A deadline is approaching, and the team is slacking. How do you enforce the schedule?",
    "Why are traditions and past experiences important for making current decisions?",
    "How do you handle a situation where the instructions provided are vague?",
    "What is your reaction to someone being 15 minutes late to a meeting?",
    "Describe your ideal morning routine for a productive day.",
    "How do you ensure that every detail in a 50-page report is accurate?",
    "What is the value of 'duty' in today's society?",
    "How do you feel when plans change at the very last minute?",
    "What is the most reliable way to build a long-term savings account?"
  ],
  ISFJ: [
    "How do you remember the small details about your friends that make them feel special?",
    "A family tradition is being ignored. How do you help restore it?",
    "How do you feel when your hard work behind the scenes goes unnoticed?",
    "What is the best way to provide practical comfort to a grieving friend?",
    "How do you maintain a sense of 'home' no matter where you are?",
    "Why is it important to follow established rules and social norms?",
    "How do you handle a conflict between two people you care about?",
    "Describe your process for preparing a holiday meal for 10 people.",
    "What does 'loyalty' look like in a long-term friendship?",
    "How do you react when someone is being loud and disruptive in a quiet space?"
  ],
  ESTJ: [
    "How do you organize a large-scale event with multiple moving parts?",
    "What do you do when a subordinate ignores a clear directive?",
    "How do you define 'common sense' in a workplace?",
    "What is the most effective way to manage a budget for a non-profit?",
    "How do you handle people who are 'all talk and no action'?",
    "What is the standard for 'excellence' in your field?",
    "Describe your method for evaluating a person's reliability.",
    "Why is a clear hierarchy necessary for a successful organization?",
    "How do you deal with 'laziness' in a professional environment?",
    "What is the first thing you do when you walk into a disorganized room?"
  ],
  ESFJ: [
    "How do you ensure everyone feels included at a party?",
    "A neighbor is going through a hard time. How do you mobilize the community to help?",
    "What is the most important social etiquette rule people often forget?",
    "How do you handle a 'difficult' person at a family dinner?",
    "Describe the perfect way to welcome a new employee to the team.",
    "How do you feel when you can't reach a consensus with a group?",
    "What role does 'hospitality' play in your life?",
    "How do you keep track of everyone's birthdays and special occasions?",
    "What is the best way to give constructive feedback without hurting feelings?",
    "How do you react to someone who is being intentionally 'rebellious'?"
  ],

  // --- EXPLORERS ---
  ISTP: [
    "Something is broken. How do you figure out how to fix it without a manual?",
    "Describe the feeling of being 'in the zone' while working with your hands.",
    "How do you react to a crisis that requires immediate, practical action?",
    "Why do you prefer to work alone rather than in a large committee?",
    "What is the most 'daring' thing you've done just to see if you could?",
    "How do you handle people who are being overly emotional during a technical problem?",
    "What is your philosophy on 'rules' that get in the way of results?",
    "How do you optimize a machine or a process for better performance?",
    "Describe your ideal workspace (tools, layout, atmosphere).",
    "How do you stay calm when everything around you is falling apart?"
  ],
  ISFP: [
    "Describe a sensory experience (sight, sound, smell) that moved you deeply.",
    "How do you express your identity through your personal style or space?",
    "What is the best way to 'live in the moment' during a stressful week?",
    "How do you react when someone tries to box you into a specific category?",
    "Describe a piece of art or music that perfectly captures your current mood.",
    "How do you show love to someone through actions rather than words?",
    "What is your 'quiet place' where you go to recharge your creativity?",
    "How do you handle a situation where you feel your freedom is being restricted?",
    "What does 'inner harmony' feel like to you?",
    "If you could spend a day doing anything purely for the joy of it, what would it be?"
  ],
  ESTP: [
    "You have 5 minutes to convince a crowd to join you on a spontaneous trip. What's the pitch?",
    "How do you use your surroundings to your advantage in a high-stakes situation?",
    "Describe the thrill of taking a calculated risk that paid off.",
    "How do you handle a person who is taking forever to get to the point?",
    "What is the most effective way to 'read' someone's body language?",
    "How do you react when you are told that something is 'impossible'?",
    "What's your strategy for winning a physical or mental competition?",
    "How do you keep people entertained when the energy in the room is low?",
    "Describe a time you had to 'think on your feet' to avoid a disaster.",
    "What is the best way to live life to the absolute fullest?"
  ],
  ESFP: [
    "The spotlight is on you. How do you make sure everyone has a great time?",
    "How do you turn a boring chore into an exciting game?",
    "Describe your process for making a grand entrance.",
    "How do you use your 'people skills' to get out of a sticky situation?",
    "What is the most vibrant and exciting memory you have?",
    "How do you handle it when the 'party' is over and things get quiet?",
    "What is the best way to encourage someone to 'come out of their shell'?",
    "How do you stay positive when you're facing a lot of negativity?",
    "Describe your ideal 'life of the party' outfit and why it works.",
    "What's the most impulsive (but fun) thing you've ever done?"
  ]
};