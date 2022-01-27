import React from 'react';
import '../buttons/Button.css'

function Button() {
    return (
        <div className='main-btn'>
            <div className='buttons'>
                <form className='form'>
                    <a className='ant-btn btn-primary'>
                        <span>Main Button</span>
                    </a>
                    <a className='ant-btn ant-btn-link'>
                        <span><i class="fas fa-chevron-left"></i></span>
                    </a>
                    <a className='ant-btn'>
                        <span>Button</span>
                    </a>
                </form>

                <form className='content'>
                    <a className='ant-btn btn-vertical'>
                        <span>Contetn Button</span>
                    </a>
                    <a className='ant-btn btn-vertical'>
                        <span>Contetn Button</span>
                    </a>
                    <a className='ant-btn btn-vertical'>
                        <span>Contetn Button</span>
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Button;
