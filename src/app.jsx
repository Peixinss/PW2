import React, { useState } from 'react';
import Nome from './Nome';
import Contador from './Contador';

function App(){
    return(
        <div>
            <div>
                <h2>O nome é:</h2>
                <Nome nome= "Renan" />
            </div>

            <div>
                <Contador/>
            </div>
        </div>
    );
}

export default App;