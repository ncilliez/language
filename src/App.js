import React from "react";
import Langues from './components/langues/langues'
import Contenu from './components/contenu/contenu'
import '../src/App.css';
import LangContext from "./components/context/langContext";

function App() {
  return (
    
<div>
<LangContext>
  <Langues />
  <Contenu />
</LangContext>
        


</div>
  );
}

export default App;