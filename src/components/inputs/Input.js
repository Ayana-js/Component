import React from 'react';
import '../inputs/Input.css';
import '../libs/fontawesome/all.min.css';


function Input() {
    return (
        <div className='inputs'>
            <div className='form-input'>
                <div className='main-input'>
                    <span className='input-icon'><i class="fas fa-search"></i></span>
                    <input type='text' className='main-input-content' placeholder='Введите название' />
                </div>
                <div className='input-content'>
                    <input type='text' required className='ant-input' />
                    <label for='text' className='label-name'>Введите название</label>
                </div>
            </div>
            <div class="form_radio_group">
                <div class="form_radio_group-item">
                    <input id="radio-1" type="radio" name="radio" value="1" checked />
                    <label for="radio-1">Button Left</label>
                </div>
                <div class="form_radio_group-item">
                    <input id="radio-2" type="radio" name="radio" value="2" />
                    <label for="radio-2">Button Right</label>
                </div>
            </div>
        </div>
    );
}

export default Input;
