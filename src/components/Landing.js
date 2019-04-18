import React, {Component} from 'react'
import logo from '../styles/assets/whiteNoBack.png'
import {Link} from 'react-router-dom'

export default class Landing extends Component{
    constructor(props) {
        super(props)

        props.update('white');
    }

    render() {
        return (
            <div className='landing'>
                <div className='landing-logo'>
                    <img src={logo} alt='Mirrored Memories QC Logo' className='logo' />
                </div>
                <div className='landing-links'>
                    <Link to='/about' onClick={() => this.props.update('black')}>
                        <div className='holder about'>
                            <div className='down'>
                                <h3 className='title'>ABOUT</h3>
                            </div>
                            <div className='up'></div>
                        </div>
                    </Link>
                    <Link to='/gallery' onClick={() => this.props.update('black')}>    
                        <div className='holder gallery'>
                            <div className='down'>
                                <h3 className='title'>GALLERY</h3>
                            </div>
                            <div className='up'></div>
                        </div>
                    </Link>
                    <Link to='/quote' onClick={() => this.props.update('black')}>    
                        <div className='holder quote'>
                            <div className='down'>
                                <h3 className='title'>REQUEST A QUOTE</h3>
                            </div>
                            <div className='up'></div>
                        </div>
                    </Link>
                    <Link to='/packages' onClick={() => this.props.update('black')}>    
                        <div className='holder packages'>
                            <div className='down'>
                                <h3 className='title'>PACKAGES</h3>
                            </div>
                            <div className='up'></div>
                        </div>
                    </Link>
                    <Link to='/contact' onClick={() => this.props.update('black')}>    
                        <div className='holder contact'>
                            <div className='down'>
                                <h3 className='title'>CONTACT US</h3>
                            </div>
                            <div className='up'></div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
