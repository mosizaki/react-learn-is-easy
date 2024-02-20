import { useState } from "react";

import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS, EXAMPLES} from "./data.js"
import TabButton from "./tabbutton";

const Main2 = () => {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }

    return (
      <main> 
        <section id="core-concepts">
          <h2>Time to get started for a second time!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>state</TabButton>
          </menu>

          {!selectedTopic ? (<p>Please select a topic</p>)  : (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>)}

        </section>
      </main>
    )
}

export default Main2;