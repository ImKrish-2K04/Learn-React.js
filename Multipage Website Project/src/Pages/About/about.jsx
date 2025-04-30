import countryFacts from "@/Services/data/CountryData.json";
import { Card } from "@/Components/UI/Cards/cards";

export const AboutPage = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        <span>Here are the Interesting facts</span>
        <span>we're proud of</span>
      </h2>

      <div className="gradient-cards">
        {countryFacts.map((currFact) => (
          <Card key={currFact.id} currCard={currFact} />
        ))}
      </div>
    </section>
  );
};
