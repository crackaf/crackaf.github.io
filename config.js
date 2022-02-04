module.exports = {
  pathPrefix: '',
  siteUrl: 'https://crackaf.github.io/',
  siteTitle: 'Hunzlah Malik',
  siteDescription: 'Portfolio of a Software Developer',
  author: 'Hunzlah ',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || '#', // 'https://crackaf.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    project: 'projects',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/crackaf',
    facebook: 'https://www.facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/hunzlahmalik/',
    linkedIn: 'https://www.linkedin.com/in/hunzlahmalik/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/758b7a1b-7fa6-459c-aa7f-7c54c4556a8a',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '#',
  tags: {
    project: {
      name: 'Project',
      description: 'Some past projects from freelancing and university.',
      color: '#ab34ea',
    },
    javascript: {
      name: 'javascript',
      description:
        'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
    django: {
      name: 'django',
      description: 'A framework written in python for web develpoment',
      color: '#1f6318',
    },
    cpp: {
      name: 'C++',
      description:
        'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes.',
      color: '#3b6deb',
    },
    c: {
      name: 'C',
      description:
        'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.',
      color: '#3b6deb',
    },
    smallproject: {
      name: 'Small Project',
      description: 'Some past projects from freelancing and university.',
      color: '#ab34ea',
    },
    mediumproject: {
      name: 'Medium Project',
      description: 'Some past projects from freelancing and university.',
      color: '#ab34ea',
    },
    largeproject: {
      name: 'Large Project',
      description: 'Some past projects from freelancing and university.',
      color: '#ab34ea',
    },
  },
};
