import React, { useState, useEffect } from 'react';
import './BuzzAssistant.css'; // Create a CSS file for styling


const BuzzAssistant = ({ currentSection }) => {
  const [dialogue, setDialogue] = useState("");

  // Update dialogue based on the current section
  useEffect(() => {
    switch (currentSection) {
      case "Home":
        setDialogue(<>
          Greetings, Earthlings!<br />
          I’m <span className="buzz-name">Buzz LightYear</span><br/> your cosmic guide!
        </>)
        break;
      case "About":
        setDialogue(<><span className="buzz-name1">Om</span> is a tech wizard, crafting cool solutions and always ready to code the future</>);
        break;
      case "Missions":
        setDialogue(
          <>Let me take you through Om’s <span className="buzz-name2">Cosmic Missions</span> where technology meets creativity</>
        );
        break;
        case "Cosmic Power":
          setDialogue(
            <>Om’s <span className="buzz-name3">Cosmic Powers</span> is shaping the future with cutting-edge tech!</>
          );
          break;
      default:
        setDialogue("To infinity and beyond!");
    }
  }, [currentSection]);

  return (
    <div className="buzz-assistant">
      <img src="/images/buzz1.gif" alt="Buzz Lightyear" className="buzz-image" style={{ width: '180px', height: 'auto' }} />
      <div className="dialogue-box">
        <p>{dialogue}</p>
      </div>
    </div>
  );
};

export default BuzzAssistant;


