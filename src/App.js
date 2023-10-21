import { useState } from 'react';
import './App.css';
import colorArray from './color.js';
import List from './List';

function App() {
    const [color, setColor] = useState(colorArray);
    const [showList, setShowList] = useState(false);

    const handleButtonClick = () => {
        setShowList(!showList);
    };

    return ( <
        center >




        <
        div id = 'container' > {
            showList && < List colors = { color }
            />} <
            /div>



            <
            p > Color Picker < /p>


            <
            h3 id = "display" > < /h3> <
            button onClick = { handleButtonClick } > Pick a color < /button>





            <
            /center>

        );
    }

    export default App;