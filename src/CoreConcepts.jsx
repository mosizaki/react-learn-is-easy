import CoreConcept from './CoreConcept.jsx'
import {CORE_CONCEPTS} from "./data.js"

export default function CoreConcepts () {
    return (
        <div>
            <section id="core-concepts">
                <h2>Time to get started for a second time!</h2>
                <ul>
                    {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
                    ))}
                </ul>
            </section>
        </div>
    );
}


