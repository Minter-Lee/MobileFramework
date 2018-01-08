import { Component } from 'React';
import { Route } from 'react-router-dom';
import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';

import HomePageView from './HomePageView';
import BindAlipayView from './BindAlipay/IndexPageView';

import LoadingStore from '../store/LoadingStore';
import HOCLoadingComponent from './common/HOCComponent/HOCLoadingComponent';

useStrict(true);

class IndexStore {
    @observable isBound = false;
    @action confirmBindState = () => {
        fetch('./test/confirmBindState.json')
            .then((response) => response.json())
            .then(action((json) => {
                this.isBound = json.data.isBound;
                loadingStore.endLoading();
            }));
    }
}

const indexStore = new IndexStore();

const loadingStore = new LoadingStore();

@observer
@HOCLoadingComponent
export default class IndexPageView extends Component {
    constructor( props, context ) {
        super(props, context);
        this.loadingStore = loadingStore;
    }

    componentDidMount() {
        if(loadingStore.loading) {
            indexStore.confirmBindState();
        }
    }

    render() {
        const { isBound } = indexStore;
        let RenderView = HomePageView;
        if(!isBound) {
            RenderView = BindAlipayView;
        }
        return <RenderView />;  
    }
}








