export default function NewsletterCTA() {
  return (
    <section className="bg-pink-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">हमारे न्यूज़लेटर के लिए सदस्यता लें</h2>
      <p className="mb-4 text-gray-600">ताज़ा लेख, समाचार और बहुत कुछ सीधे आपके इनबॉक्स में।</p>
      <form className="flex justify-center gap-2 flex-wrap">
        <input
          type="email"
          placeholder="आपका ईमेल"
          className="p-2 border rounded w-64"
        />
        <button className="bg-pink-600 text-white px-4 py-2 rounded">
          सदस्यता लें
        </button>
      </form>
    </section>
  );
}
