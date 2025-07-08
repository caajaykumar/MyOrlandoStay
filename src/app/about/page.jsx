export const metadata = {
  title: 'About Us - My Website',
  description: 'Learn more about our company, values, and mission',
};

export default function AboutPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our company! We are dedicated to providing the best services to our customers.
      </p>
      <p className="mb-4">
        Our mission is to create quality products that bring value to people’s lives.
      </p>
      <p>
        Feel free to contact us for more information or follow us on social media.
      </p>
    </main>
  );
}
