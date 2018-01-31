import { Component } from "react";
import PropTypes from 'prop-types';
import DinnerLocationPicker from './DinnerLocationPicker';
import { SearchBar } from 'antd-mobile';

import less from '../../../../style/Dinner/DinnerHead/indexPage.less';

/**
 * @author: MinterLee@hotmail.com
 * @description: 用餐头部主页
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:42:02
 **/ 
export default class DinnerHeadView extends Component {
    constructor(props, context) {
        super(props, context);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    static propTypes = {

    }
    
    handlerSubmit( value ) {
        console.info(value);
    }

    render() {
        return <div className='dinner-head-content'>
            <DinnerLocationPicker />
            <div className='content-search'>
                <SearchBar placeholder='餐厅名称' onSubmit={this.handlerSubmit}/>
            </div>
        </div>
    }
}
