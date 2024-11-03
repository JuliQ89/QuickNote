import React from "react";
import note_undraw from "../assets/images/note_undraw.svg";
import CardsContainer from "../components/card-section/CardsContainer";

const HomePage = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headerColLeft">
          <div className="headerTextContainer">
            <h1>Quicknote your Notes!</h1>
            <h3>Hier kannst du deine Notizen erstellen und verwalten!</h3>
            <p>
              Quicknote hilft dir, deine Gedanken zu organisieren und wichtige
              Informationen schnell und einfach zu speichern. Ob berufliche
              Aufgaben, persönliche Projekte oder spontane Ideen – mit Quicknote
              hast du deine Notizen immer griffbereit. Behalte den Überblick und
              nutze Quicknote, um jederzeit auf deine Inhalte zuzugreifen und
              sie übersichtlich zu verwalten.
            </p>
          </div>
        </div>
        <div className="headerColRight">
          <img src={note_undraw} alt="" />
        </div>
      </div>
      <CardsContainer />
    </>
  );
};

export default HomePage;
