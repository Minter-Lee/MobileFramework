import { Component } from 'React';
import { Icon } from 'antd-mobile';
import less from '../../../../style/common/hoc/loading.less';

const HOCLoadingComponent = (WrappedComponent) =>
    class extends WrappedComponent {
        render() {
            if (this.loadingStore.loading) {
                return <div className='centerLoading'>
                    <Icon type={'loading'} size='lg' />
                </div>
            } else {
                return super.render();
            }
        }
    }

export default HOCLoadingComponent;

