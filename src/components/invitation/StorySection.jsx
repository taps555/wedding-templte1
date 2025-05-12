import "./StorySection.css";
import { Heart } from "lucide-react";

const StorySection = () => {
  const storyTimeline = [
    {
      year: "2018",
      title: "Awal pertemuan",
      content:
        "Kami pertama kali bertemu di pesta ulang tahun teman bersama. Itu adalah pertemuan singkat, tetapi kami berdua merasakan sesuatu yang istimewa.",
    },
    {
      year: "2019",
      title: "Mulai Berpacaran",
      content:
        "Setelah beberapa kali bertemu, akhirnya kami pergi berkencan pertama kali. Sisanya, seperti yang mereka katakan, adalah sejarah.",
    },
    {
      year: "2021",
      title: "Tinggal Bersama",
      content:
        "Kami memutuskan untuk melangkah lebih jauh dalam hubungan kami dan pindah bersama ke sebuah apartemen yang nyaman di kota.",
    },
    {
      year: "2023",
      title: "Lamaran",
      content:
        "Pada saat matahari terbenam yang indah di pantai, Rahmat berlutut dan meminta Anisa untuk menghabiskan sisa hidupnya bersamanya.",
    },
  ];

  return (
    <section id="story" className="section story-section">
      <div className="container">
        <div className="section-header">
          <h2 className="cursive section-title">Kisah Cinta kami</h2>
          <p className="section-subtitle">The journey that led us here</p>
        </div>

        <div className="timeline">
          {storyTimeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-dot">
                  <Heart size={16} />
                </div>
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-text">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
