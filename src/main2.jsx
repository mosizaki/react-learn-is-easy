import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "./data.js"

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


      </main>
    )
}

export default Main2;