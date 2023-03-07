import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Notes for me: Maybe update it in the future to be a card game that increase difficulty from easy to medium if the user keep answering correct. 
const flashcards = [
  {
    title: "Porsche 911",
    imageUrl: "https://i.imgur.com/zHUKc6l.png",
    difficulty: "hard"
  },
  {
    title: "Mitsubishi",
    imageUrl: "https://files.grizly.com/storage/Question/886/conversions/Mitsubishi-primary.jpg",
    difficulty: "medium"
  },
  {
    title: "Lexus",
    imageUrl: "https://files.grizly.com/storage/Question/887/conversions/Lexus-primary.jpg",
    difficulty: "easy"
  },
  {
    title: "BMW",
    imageUrl: "https://files.grizly.com/storage/Question/869/conversions/BMW-primary.jpg",
    difficulty: "easy"
  },
  {
    title: "Chevrolet",
    imageUrl: "https://files.grizly.com/storage/Question/882/conversions/Chevrolet-primary.jpg",
    difficulty: "easy"
  },
  {
    title: "Mazda",
    imageUrl: "https://files.grizly.com/storage/Question/873/conversions/mazda-primary.jpg",
    difficulty: "medium"
  },
  {
    title: "Lamborghini",
    imageUrl: "https://files.grizly.com/storage/Question/894/conversions/lamborghini-primary.jpg",
    difficulty: "easy"
  },
  {
    title: "Mercedes-Benz",
    imageUrl: "https://files.grizly.com/storage/Question/866/conversions/mercedes-primary.jpg",
    difficulty: "easy"
  },
  {
    title: "Subaru",
    imageUrl: "https://files.grizly.com/storage/Question/891/conversions/Subaru-primary.jpg",
    difficulty: "medium"
  },
  {
    title: "Volkswagen",
    imageUrl: "https://files.grizly.com/storage/Question/870/conversions/Volkswagen-primary.jpg",
    difficulty: "easy"
  },
  {    
    title: "Suzuki",
    imageUrl: "https://files.grizly.com/storage/Question/884/conversions/Suzuki-primary.jpg",
    difficulty: "hard"
  }
];


function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(1);
  const { title, imageUrl, difficulty} = flashcards[currentCardIndex];
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    if(currentCardIndex <= 9){
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if(currentCardIndex > 1){
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const backStyle = {
    backgroundColor: difficulty === "hard" ? "red" : difficulty === "medium" ? "yellow" : "green"
  };

  return (
    <div className="App">
      <div className="head">
        <h1>Guess The Car Name</h1>
        <h2>Can You Name These Car Companies Based On Their Logo?</h2>
        <h3>Card Number: {currentCardIndex}/10</h3>
      </div>
      <div className={`card ${isFlipped? "flipped" : ""}`} onClick={handleClick}>
        <div className="front">
          <img src={imageUrl}></img>
        </div>
        <div className="back" style={backStyle}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className='tail'>
        <button onClick={handlePrevCard}>Back</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
