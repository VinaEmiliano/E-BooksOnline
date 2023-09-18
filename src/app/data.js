import ebookCover from "../../public/ebookCover.png"
import psyCover from "../../public/psyCover.jpg"
import logoFacebook from "../../public/logoFacebook.jpg"
import logotiktok from "../../public/logoTikTok.png"
import logoInstagram from "../../public/logoInstagram.png"

/* HOMEPAGE */

export const homePageData = [
  {
    title:'Market Page',
    desc:"Welcome to our world of reading! Explore our curated selection of books available for you. Ready to find your next favorite read? Click the button and discover all the books waiting for you on our marketplace page. Let's start exploring together!",
    link:'/market',
  },
  {
    title:'About Page',
    desc:"We want you to get to know us better. On our 'About' page, you'll find official information about our mission, vision, objectives, and the passionate creators behind this community of readers. Discover what drives us and how we're here to enrich your reading experience. Click the button to learn more about us!",
    link:'/about'
  },
  {
    title:'Contact Page',
    desc:"Connect with us on all our platforms! On our contact page, you'll find links to our social media and communities where we share exclusive content, updates, and literary events. Join our community of book lovers and stay informed about everything related to books. Click the button to access our profiles and join the conversation!",
    link:'/contact'
  },
]

export const categories = [
  {
    id:1,
    title: 'E-books',
    desc: '',
    img:'buscar imagen',
  },
  {
    id:2,
    title:'Physical books',
    desc:'',
    img:'buscar imagen',
  }
]

/* MARKET */

export const productType = [
  {
    title:"Ebooks",
    desc:"Explore our ebooks",
    img:ebookCover,
    tag:"virtualEbooks"
  },
  {
    title: "Physical Books",
    desc:"Explore our physical books",
    img:psyCover,
    tag:"physicalbooks"
  }
]

/* ABOUT */

export const aboutData = [
  {
    title:"Our Story",
    desc:"Founded in 2023, E-books-Online was born from the vision of Emiliano Viña, who aimed to create a space where people could explore a wide range of literary genres, from timeless classics to contemporary authors. Over the years, we've grown and evolved, but our commitment to excellence in book selection and the shopping experience has always remained steadfast."
  },
  {
    title:"Our Mission",
    desc:"Our mission is simple yet powerful: to foster a love for reading and make books accessible to everyone, anytime, anywhere. We believe in the transformative power of printed words and how books can inspire, educate, and entertain. Whether you're seeking an exciting escape, valuable information, or creative inspiration, we're here to help you find the perfect book for every occasion." 
  },
  {
    title:"Our Selection",
    desc:"Explore our carefully curated selection of books spanning a wide variety of genres: from gripping novels that will keep you on the edge of your seat to non-fiction books that will challenge your way of thinking. Our team consists of passionate readers committed to providing you with a collection that's not only diverse but also filled with literary gems you might not have discovered yet."
  },
  {
    title:"Shopping Experience",
    desc:"We want your shopping experience to be as enjoyable as diving into the pages of a book. Our online platform is designed to be intuitive and easy to navigate, giving you the convenience of exploring our catalog from the comfort of your home. Additionally, we strive to offer detailed descriptions and honest reviews to help you make informed decisions."
  },
  {
    title:'Join Our Community',
    desc:"More than just a store, we're a community of book enthusiasts. Join us on @E-books-Online to stay updated on the latest literary releases, engage in exciting conversations, and share your own recommendations. We also host online events such as book clubs and author talks, allowing you to connect with others who share your passion for books."
  },
]

/* CONTACT */

export const contactData = [
  {
    logo:logoFacebook,
    title: 'FaceBook',
    desc:'Welcome to the Facebook e-books-online profile! We are passionate about reading and want to share with you a wide selection of exciting titles. From best-selling novels to literary classics, here you will find a variety of books for every taste.',
    link:'#'
  },
  {
    logo:logoInstagram,
    title:'Instagram',
    desc:'We offer a thoughtful selection of titles ranging from the most exciting bestsellers to the most revered literary classics. Our goal is to inspire you through the magic of printed words. Join our community of readers and discover your next adventure within the pages of a book. 🌟 #ReadingOnInstagram #BooksForEveryone',
    link:'#',
  },
  {
    logo:logotiktok,
    title:'TikTok',
    desc:'Welcome to our literary TikTok profile! 📚💫 Here, the magic of literature comes to life in short and creative clips. Explore book reviews, reading recommendations, literary challenges, and more. Join us to discover a world of captivating stories in fun formats. The adventure begins with every swipe! #LiteratureOnTikTok #BookLovers',
    link:'#',
  },
]