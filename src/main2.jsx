import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "./data.js"
import TabButton from "./tabbutton";

const Main2 = () => {
    return (
      <main>
        <section id="core-concepts">
          <h2>Time to get started for a second time!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>jsx</TabButton>
            <TabButton>props</TabButton>
            <TabButton>state</TabButton>
          </menu>
        </section>
      </main>
    )
}

export default Main2;