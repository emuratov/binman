import React from 'react';
import './MainLine.css';
import shape from './img/shape.svg'


function MainLine() {
    return (
        <div className='section'>
            <div>
                <h2>Ваши соискатели</h2>
                <p>Всего соискателей: 67</p>
            </div>
            <button className='button_fav'>
                <object className = 'qwe' data={shape} type="image/svg+xml" ></object>
                Избранные
            </button>
        </div>
    );
}
export default MainLine;