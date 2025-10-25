export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "🐧 How do you introduce yourself at parties?",
    options: [
      { text: "I use Arch btw 😎", points: 45 },
      { text: "I code in Rust, the superior language 🦀", points: 40 },
      { text: "I'm a developer... *awkwardly shuffles away*", points: 30 },
      { text: "I actually have social skills", points: 5 },
    ],
  },
  {
    id: 2,
    question: "📝 What's your text editor of choice?",
    options: [
      { text: "Vim - I still don't know how to exit", points: 50 },
      { text: "Emacs - it's an OS that happens to edit text", points: 45 },
      { text: "VSCode with 80 extensions that slow my PC to death", points: 35 },
      { text: "Notepad++ because I hate myself", points: 40 },
    ],
  },
  {
    id: 3,
    question: "💀 You get a segmentation fault. What's your reaction?",
    options: [
      { text: "Stare at the screen until it fixes itself", points: 50 },
      { text: "Add printf() debugging like it's 1975", points: 40 },
      { text: "Blame it on cosmic rays flipping bits", points: 45 },
      { text: "Use a debugger like a functional human being", points: 10 },
    ],
  },
  {
    id: 4,
    question: "🗑️ How big is your node_modules folder?",
    options: [
      { text: "Bigger than my will to live (3GB+)", points: 50 },
      { text: "It has its own gravitational pull (1-3GB)", points: 40 },
      { text: "Only slightly larger than the sun (500MB-1GB)", points: 30 },
      { text: "I use Deno, what's node_modules?", points: 20 },
    ],
  },
  {
    id: 5,
    question: "🦀 The Rust borrow checker rejected your code. How do you feel?",
    options: [
      { text: "Add .clone() to literally everything until it compiles", points: 50 },
      { text: "Wrap everything in Rc<RefCell<Arc<Mutex<T>>>> and cry", points: 45 },
      { text: "Go back to JavaScript where pointers can't hurt me", points: 40 },
      { text: "Actually understand ownership and lifetimes", points: 5 },
    ],
  },
  {
    id: 6,
    question: "🐳 What's your Docker/Kubernetes experience?",
    options: [
      { text: "I have 47 dangling containers consuming all my RAM", points: 45 },
      { text: "My yaml files are longer than the Bible", points: 40 },
      { text: "It works on my machine, that's the container's problem now", points: 50 },
      { text: "I actually read the f*cking documentation", points: 10 },
    ],
  },
  {
    id: 7,
    question: "🤬 Someone suggests using Angular for a new project:",
    options: [
      { text: "Block them on all platforms immediately", points: 50 },
      { text: "Assume they're a time traveler from 2015", points: 45 },
      { text: "Silently judge them while nodding politely", points: 35 },
      { text: "Each framework has its use case!", points: 5 },
    ],
  },
  {
    id: 8,
    question: "🔒 You have a race condition. Your debugging strategy:",
    options: [
      { text: "Add random sleep() calls until it goes away", points: 50 },
      { text: "Sacrifice a keyboard to the computing gods", points: 45 },
      { text: "Add more mutexes and hope for the best", points: 40 },
      { text: "Use proper synchronization primitives", points: 10 },
    ],
  },
  {
    id: 9,
    question: "🗑️ Your opinion on null pointer exceptions?",
    options: [
      { text: "They're a billion dollar mistake that haunts my dreams", points: 45 },
      { text: "Just add if (ptr != NULL) everywhere lmao", points: 40 },
      { text: "Let it crash in production, users are free testers", points: 50 },
      { text: "Use Option types like a civilized developer", points: 15 },
    ],
  },
  {
    id: 10,
    question: "☁️ Somebody asks you to 'just deploy it to the cloud':",
    options: [
      { text: "Which f*cking cloud? There's like 50 of them", points: 40 },
      { text: "Sure, let me just spend $10k on AWS Lambda cold starts", points: 45 },
      { text: "Kubernetes! Because we need 47 microservices for a TODO app", points: 50 },
      { text: "Let's discuss requirements and choose the right platform", points: 10 },
    ],
  },
  {
    id: 11,
    question: "📦 How do you manage dependencies?",
    options: [
      { text: "npm install --force until something works", points: 50 },
      { text: "Copy paste from StackOverflow CDN links", points: 45 },
      { text: "Vendor everything, we're going full hermit mode", points: 40 },
      { text: "Use a proper lock file and semantic versioning", points: 10 },
    ],
  },
  {
    id: 12,
    question: "🔥 Production is on fire. What's your move?",
    options: [
      { text: "Git revert, git push --force, delete evidence", points: 50 },
      { text: "Pretend my internet is down", points: 45 },
      { text: "Blame it on the intern who left 6 months ago", points: 40 },
      { text: "Check logs and fix the actual issue", points: 5 },
    ],
  },
];
