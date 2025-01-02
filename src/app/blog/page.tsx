import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

const blogs = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence: What's Next?",
    description: "As AI continues to evolve at a rapid pace, it's crucial to understand where this technology is headed. In this blog post, we explore the future of artificial intelligence, from machine learning breakthroughs to ethical dilemmas, and how AI might shape industries, economies, and our daily lives in the next decade.",
    image: '/future.png',
    fullText: "Artificial Intelligence (AI) has come a long way in the last few decades. It is now integrated into many aspects of daily life, from virtual assistants like Siri and Alexa to complex applications in healthcare, finance, and automotive industries. As AI evolves, the future of this technology is both exciting and uncertain. \n In the coming years, we expect AI to become more human-like in its ability to understand and interact with the world. Deep learning algorithms will continue to improve, allowing AI to solve increasingly complex problems. Additionally, we may see a rise in AI-driven automation across industries, leading to higher productivity but also raising questions about job displacement and the future workforce.\n Ethics will play a key role in the development of AI. Questions about data privacy, algorithmic bias, and the potential for AI to make autonomous decisions will need to be addressed as we continue to integrate this technology into our lives.\n In conclusion, the future of AI is full of opportunities and challenges. By embracing innovation while addressing ethical concerns, we can ensure that AI benefits society as a whole.",
  },
  {
    id: 2,
    title: "10 Simple Habits for a Healthier Lifestyle",
    description: "Living a healthy lifestyle doesn’t have to be complicated. In this post, we break down 10 easy habits that can make a significant difference in your health and well-being..",
    image: '/healthy.jpeg',
    fullText: "Adopting a healthy lifestyle is a goal that many people aspire to, but it can feel daunting. The truth is that small, consistent changes can lead to big results over time. In this blog, we'll share 10 simple habits that anyone can incorporate into their daily routine to improve their physical and mental health.\n Drink More Water: Staying hydrated is essential for overall health. Aim to drink at least 8 glasses of water per day to keep your body functioning properly.\n Eat a Balanced Diet: Focus on a variety of nutrient-rich foods, including fruits, vegetables, lean proteins, and whole grains. Avoid overly processed foods high in sugar and unhealthy fats.\n Exercise Regularly: Aim for at least 30 minutes of physical activity most days of the week. Whether it’s walking, cycling, or strength training, regular exercise is key to maintaining a healthy body.\n Get Enough Sleep: Quality sleep is crucial for recovery, mood regulation, and cognitive function. Aim for 7-9 hours of sleep per night.\n Practice Mindfulness: Mindfulness practices like meditation or yoga can help reduce stress and improve mental clarity. Just a few minutes per day can have a significant impact.\n Limit Screen Time: Too much screen time, especially before bed, can negatively affect sleep quality. Set boundaries for screen time to avoid burnout and improve focus.\n Take Breaks: Whether you're working or studying, regular breaks are essential for maintaining focus and preventing fatigue. Try the Pomodoro Technique or simply take a few minutes to stretch.\n Stay Social: Building and maintaining relationships with friends and family is important for mental well-being. Socializing can boost your mood and reduce feelings of loneliness.\n Practice Gratitude: Taking time each day to reflect on what you're grateful for can improve your overall outlook on life. Try keeping a gratitude journal.\n Stay Organized: Keeping a tidy living and working space can reduce stress and increase productivity. Regularly declutter your environment to maintain a sense of order.\n By incorporating these simple habits into your daily life, you can improve your physical and mental health and build a foundation for a happier, healthier future.",
  },
  {
    id: 3,
    title: "How Remote Work is Transforming the Global Job Market.",
    description: "Remote work has become a game-changer for businesses and employees alike. This blog delves into the impact of remote work on the global job market, exploring the benefits and challenges it brings to employers, workers, and entire industries, and how it’s reshaping the future of work.",
    image: '/remote.jpg',
    fullText: "Remote work, once seen as a temporary solution, has become a permanent fixture for many companies across the globe. The COVID-19 pandemic accelerated this shift, but the benefits of remote work have proven to be long-lasting, leading to a reimagining of the workplace as we know it.\n For businesses, remote work has opened up the opportunity to tap into a global talent pool. Companies are no longer limited by geographic location when hiring, allowing them to find the best candidates for the job, regardless of where they are located. This also means that businesses can reduce overhead costs related to office space, utilities, and other operational expenses.\n On the employee side, remote work offers flexibility, improved work-life balance, and the ability to work from anywhere. Many workers report increased productivity when working from home, as they are able to structure their day to fit personal needs and avoid long commutes.\n However, remote work also brings its own set of challenges. The lack of in-person communication can lead to feelings of isolation, and some employees may struggle to separate their work and personal lives. Companies must invest in technology and communication tools to ensure that teams remain connected and that employees feel supported.\n The global job market has also been transformed by remote work. Many individuals are now seeking jobs that allow them to work from anywhere, and some are even relocating to countries with lower living costs while maintaining their remote positions with companies in higher-cost regions.\n In conclusion, remote work is reshaping the future of work in profound ways. While there are challenges to overcome, the benefits for both businesses and employees are undeniable. The rise of remote work will continue to have a lasting impact on the global job market and how we define the modern workplace.",
  },];

const BlogPage = () => {
  return (
    <><Header></Header>
        <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
            <Link href={`/blog/${blog.id}`} legacyBehavior>
              <a className="text-2xl font-semibold text-gray-600 mb-2">{blog.title}</a>
            </Link>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <div className="w-full max-w-sm mb-4">
              <Image
                src={blog.image}
                alt={`Image for ${blog.title}`}
                className="rounded-lg shadow-lg"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
    </div></>

  );
};

export default BlogPage;
