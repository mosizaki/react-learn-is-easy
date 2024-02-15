import ImageReact from "./assets/react-core-concepts.png"


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

const Header2 = () => {
    return (
        <header>
        <img src={ImageReact} alt="Stylized atom" />
        <h1>React Essentials as a second time</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} {`this is also react ${reactDescriptions[genRandomInt(2)]}`} React concepts you will need for almost any app you are
          going to build! but the second time
          </p>
      </header>
    )
}

export default Header2;