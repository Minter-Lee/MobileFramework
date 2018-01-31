import { ListView } from 'antd-mobile';
import { Component } from 'react';
import { PropTypes } from 'mobx-react';
import FinCard from '../common/UI/FinCard';

import less from '../../../style/Dinner/dinnerList.less';

import { observable, action, useStrict } from 'mobx';
import { observer } from 'mobx-react';

useStrict(true);

class DinnerListStore {
    listData = [];
    rowData = [];
    NUM_ROWS = 6;
    pageIndex = 0;
    genData = (pIndex = 0) => {
        const dataBlob = {},
        { listData, NUM_ROWS } = this;
        for( let i = 0; i < NUM_ROWS; i++) {
            const ii = (pIndex * NUM_ROWS) + i;
            if(ii >= listData.length) break;
            dataBlob[`${ii}`] = `row-${ii}`;
        }
        return dataBlob;
    };
    @observable loadData = {
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        }),
        isLoading: true
    };
    @action getDinnerListData = (param) => {
        this.loadData.isLoading = true;
        fetch('../test/getDinnerListData.json')
            .then((response)=> response.json())
            .then(action((json) => {
                this.listData = this.listData.concat(json.data);
                this.rowData = { ...this.rowData, ...this.genData(this.pageIndex++) };
                this.loadData = {
                    dataSource: this.loadData.dataSource.cloneWithRows(this.rowData),
                    isLoading: false
                };
            }));
    }
}

const dinnerListStore = new DinnerListStore();

/**
 * @author: MinterLee@hotmail.com
 * @description: 用餐列表
 * @Last Modified by: MinterLee@hotmail.com
 * @Last Modified time: 2018-01-31 14:41:59
 **/
@observer
export default class DinnerListView extends Component {
    constructor(props, context) {
        super(props, context);
        this.onEndReached = this.onEndReached.bind(this);
        // const dataSource = new ListView.DataSource({
        //     rowHasChanged: (row1, row2) => row1 !== row2
        // });

        // this.state = {
        //     dataSource,
        //     isLoading: true
        // }
    }

    componentDidMount() {
        // this.rData = genData();
        dinnerListStore.getDinnerListData();
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
        //     isLoading: false
        // });
    }

    onEndReached() {
        dinnerListStore.getDinnerListData();
        // this.rData = {...this.rData, ...genData(++pageIndex)}
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
        //     isLoading: false
        // })
    }

    render () {

        const { isLoading, listData, NUM_ROWS, loadData } = dinnerListStore,

              renderFooter = () => <div style={{
                    padding: 30, 
                    textAlign:'center'
              }}>{loadData.isLoading ? 'Loading...' : 'Loaded'}</div>,
              
              row = (rowData, sectionID, rowID) => {
                  console.info(rowData);
                  const data = listData[rowData.split('-')[1]];
                  return <div style={{
                      borderBottom: '0.1rem solid #f3f4f5'
                  }}><FinCard key={rowID} size='lg' {...data} /></div>
              } 

        console.info(listData, loadData.dataSource);

        return <ListView 
            dataSource={loadData.dataSource}
            renderFooter={renderFooter}
            renderRow={row}
            pageSize={NUM_ROWS}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
            className='dinner-list'
        />
    }
}