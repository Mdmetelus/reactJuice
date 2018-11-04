const TypesOfFruits = () => {
    return(
        <div>
            <h2> Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>BlueBerries</li>
                <li>Straw...</li>
                <li>Bananas</li>
            </ul>
        </div>
    );

};
const TypesOfVeggies = () => {
    return(
        <div>
            <h2> Veggies:</h2>
            <ul>
                <li>Kale</li>
                <li>Broccolli</li>
                <li>Spinich</li>
                <li>Eggplant</li>
            </ul>
        </div>
    );

};
const TypesOfMeats = () => {
    return(
        <div>
            <h2> Meats</h2>
            <ul>
                <li>chicken</li>
                <li>Turkey</li>
                <li>Beef</li>
                <li>Lamb</li>
            </ul>
        </div>
    );

};


const FruitsAnVeggies = () => {
    return(
        <div>
            <TypesOfFruits />
            <TypesOfVeggies />

        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Types of Food:</h1>
                <FruitsAnVeggies />
                <TypesOfMeats />
            </div>

        );
    }
};

