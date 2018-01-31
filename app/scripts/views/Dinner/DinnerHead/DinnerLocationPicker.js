import { Component } from 'react';
import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';
import less from '../../../../style/Dinner/DinnerHead/dinnerLocationPicker.less';

import { Picker } from 'antd-mobile';

import LoadingStore from '../../../store/LoadingStore';
import HOCLoadingComponent from '../../common/HOCComponent/HOCLoadingComponent';

useStrict(true);
class DinnerLocationStore {
    @observable data;
    @action getLocationData = () => {
        fetch('./test/getLocationData.json')
            .then((response) => response.json())
            .then(action((json) => {
                this.getDefaultCity(json.data);
            }))
    }
    @observable currentCity;
    @action setCurrentCity = (value) => {
        this.currentCity = value;
    }
    @action getDefaultCity = (data) => {
        fetch('../test/getDefaultCity.json')
            .then((response) => response.json())
            .then(action((json) => {
                this.data = data;
                this.setCurrentCity(json.defaultCity);
                loadingStore.endLoading();
            }))
    }
}

const dinnerLocationStore = new DinnerLocationStore(),
      loadingStore = new LoadingStore();

/**
 * @author: MinterLee@hotmail.com
 * @description: 用餐地区选择器
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:42:04
 **/ 
@observer
@HOCLoadingComponent
export default class DinnerLocationPicker extends Component {
    constructor (props, context) {
        super(props, context);
        this.loadingStore = loadingStore;
        this.handlerOk = this.handlerOk.bind(this);
    }

    static propTypes = {

    }

    handlerOk(val) {
        console.info(val);
        dinnerLocationStore.setCurrentCity(val[0]);
    }

    componentDidMount() {
        if(loadingStore.loading) {
            dinnerLocationStore.getLocationData();
        }
    }

    render() {
        const {data, currentCity} = dinnerLocationStore;
        return <Picker cols={1} data={data} onOk={this.handlerOk} value={[currentCity]}>
            <div className='dinner-location-picker-text'>
                {currentCity.split('_')[1]}
                <img src='../../../../images/arrow_down.svg' className='dinner-location-picker-img' />
            </div>
        </Picker>
    }
}