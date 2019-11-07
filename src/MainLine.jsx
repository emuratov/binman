import React from 'react';
import './MainLine.css'


function MainLine() {
    return (
        <div className='section'>
            <div>
                <h2>Ваши соискатели</h2>
                <p>Всего соискателей: {67}</p>
            </div>

            <div className = "buttonLine">
                <button className='button_fav'>
                    <svg width="12px" height="16px" viewBox="0 0 12 16" version="1.1">
                        <path d="M12 16L12 2C12 2 12 0 10 1.13687e-13L2 0C0 0 0 2 0 2L0 16L6 12L12 16Z" />
                    </svg>
                    <span>Избранные</span>
                </button>

                <button className="buttom_addUser">
                    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1">
                        <path d="M7 5L7 1C7 1 7 0 6 0C5 1.22465e-16 5 1 5 1L5 5L1 5C1 5 0 5 0 6C6.12323e-17 7 1 7 1 7L5 7L5 11C5 11 5 12 6 12C7 12 7 11 7 11L7 7L11 7C11 7 12 7 12 6C12 5 11 5 11 5L7 5Z"/>
                    </svg>
                    <span>Добавить соискателя</span>
                </button>
            </div>
        </div >
    );
}
export default MainLine;