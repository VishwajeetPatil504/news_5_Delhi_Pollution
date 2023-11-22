import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Marginal dip in pollution levels in Delhi; AQI in 'very poor' category",
    date: '07 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `The national capital's Air Quality Index stood at 394, a marginal improvement from 421 recorded at 4 p.m. on November 7.`,
    content: `Pollution levels in Delhi marginally dipped on Tuesday morning (November 7) and were recorded in the "very poor" category after five consecutive days of severe air quality.

    The national capital's Air Quality Index (AQI) stood at 394, a marginal improvement from 421 recorded at 4 p.m. on November 7.
    
    Despite a marginal dip, the concentration of PM2.5 – fine particulate matter capable of penetrating deep into the respiratory system and triggering health problems – exceeded the government-prescribed safe limit of 60 micrograms per cubic metre by seven to eight times in the capital.
    
    It was 30 to 40 times the healthy limit of 15 micrograms per cubic metre set by the World Health Organization (WHO).
    
    Several cities in neighbouring Haryana, Rajasthan, and Uttar Pradesh have also reported hazardous air quality. Ghaziabad recorded an AQI of 338, Gurugram 364, Noida 348, Greater Noida 439 and Faridabad 382. The Delhi government on Monday announced the return of its flagship odd-even scheme after four years, anticipating further deterioration of air quality post-Deepavali. The odd-even scheme allows cars to operate on alternate days based on their odd or even number plates.
    
    The Energy Policy Institute at the University of Chicago and Evidence for Policy Design had analysed the impact of the odd-even system in 2016 and found that Delhi saw a 14-16% reduction in PM2.5 levels during the hours it remained in force in January that year. However, there was no reduction in pollution when the scheme was brought back in April that year.
    
    To protect the health of schoolchildren, the government also decided to suspend in-person classes in all schools, except for students in grades X and XII preparing for board exams, until November 10.
    
    According to the Ministry of Earth Sciences' Air Quality Early Warning System for Delhi-NCR, the region is likely to experience severe air quality for another five to six days.
    
    “Breathing in the polluted air of Delhi is equivalent to the harmful effects of smoking approximately 10 cigarettes a day,” said Rajesh Chawla, senior consultant in pulmonology and critical care at Indraprastha Apollo Hospital.
    
    The doctor said prolonged exposure to high levels of pollution can cause or exacerbate respiratory problems such as asthma, bronchitis, and chronic obstructive pulmonary disease (COPD) and can dramatically raise the risk of cardiovascular disease.
    
    Stringent restrictions mandated under the final stage of the Central government's air pollution control plan for Delhi-NCR, called the Graded Response Action Plan (GRAP), have also been implemented in Delhi.
    
    The restrictions under stage IV of GRAP, including a ban on all kinds of construction work and the entry of polluting trucks into the capital, took effect on Sunday after air quality in the capital dropped to "severe plus" (AQI above 450) levels.
    
    GRAP categorises actions into four stages: Stage I - 'Poor' (AQI 201-300); Stage II - 'Very Poor' (AQI 301-400); Stage III - 'Severe' (AQI 401-450); and Stage IV - 'Severe Plus' (AQI above 450).
    
    Unfavourable meteorological conditions, combined with vehicular emissions, paddy straw burning, firecrackers, and other local pollution sources, contribute to hazardous air quality levels in Delhi-NCR during the winter every year.
    
    According to a Delhi Pollution Control Committee (DPCC) analysis, the capital experiences peak pollution from November 1 to November 15 when the number of stubble-burning incidents in Punjab and Haryana increases.
    
    Air quality in Delhi-NCR declined over the last 10 days due to a gradual drop in temperatures, calm winds that trap pollution, and a surge in post-harvest paddy straw burning across Punjab and Haryana. Delhi's air quality ranks among the worst in the world's capital cities.
    
    A report by the Energy Policy Institute at the University of Chicago (EPIC) in August said that air pollution is shortening lives by almost 12 years in Delhi.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
