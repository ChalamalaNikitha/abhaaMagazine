export default function SecondSection() {
    const sections = [
        {
            title: "परिवार",
            borderColor: "border-pink-500",
            bgHover: "hover:bg-pink-50",
            items: [
                {
                    title: "‘ईर्ष्या’ एक ऐसी सामाजिक बुराई जो...",
                    desc: "राष्ट्रीय समरसता भोपाल, मध्य प्रदेशस्थत जीवन के सभी पहलुओं में जिम्मेदारियों और महत्व पर ज़ोर देता है...",
                    img: "/sadGirl.jpg",
                },
                {
                    title: "परिवार: एक स्वस्थ समाज की नींव...",
                    desc: "हम स्पष्ट रूप से देख सकते हैं कि व्यक्तिवाद एकजुटता पर हावी...",
                    img: "/family.svg",
                },
                {
                    title: "खुशहाल परिवार में महिला की भूमिका...",
                    desc: "समझ आता है कि मातृत्व जिन कठोर समस्याओं से जूझ रही...",
                    img: "/familyHappiness.jpg",
                },
            ],
        },
        {
            title: "युवा",
            borderColor: "border-blue-500",
            bgHover: "hover:bg-blue-50",
            items: [
                {
                    title: "संतुलित जीवन : एक ऐसा सफ़र...",
                    desc: "संतुलित जीवन: एक तलाश जो थकावट में खो गई है...",
                    img: "/youth_balancedLife.svg",
                },
                {
                    title: "शिक्षा : शैक्षणिक दबाव का स्याह...",
                    desc: "आईआईटी कानपुर के एक छात्र ने आत्महत्या कर ली...",
                    img: "/Education.jpg",
                },
            ],
        },
        {
            title: "राजनीति",
            borderColor: "border-green-500",
            bgHover: "hover:bg-green-50",
            items: [
                {
                    title: "शाकाहार वर्चस्व की राजनीति का प्रतिरोध...",
                    desc: "समान्य अहिंसात्मक मीडिया सेक्टर की स्वतंत्रता होनी चाहिए...",
                    img: "/VegitarianPolitics.jpg",
                },
                {
                    title: "...जब देश की संसद में वक्फ...",
                    desc: "संसद के बजट सत्र के दूसरे चरण की शुरुआत हुई...",
                    img: "/rajaneethi.svg",
                },
                {
                    title: "महिलाओं की राजनीति में हिस्सेदारी और...",
                    desc: "महिलाओं की भागीदारी का सवाल सदियों पुराना है...",
                    img: "/WomenParticipation.jpg",
                },
            ],
        },
    ];

    return (
        <section className="websiteBackground py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sections.map((section, idx) => (
                        <div key={idx}>
                            <h2 className={`text-2xl font-bold mb-4 border-b-2 ${section.borderColor} pb-1`}>
                                {section.title}
                            </h2>
                            {section.items.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex gap-4 mb-6 p-4 ${section.bgHover} rounded-md transition`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-700 leading-snug line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
