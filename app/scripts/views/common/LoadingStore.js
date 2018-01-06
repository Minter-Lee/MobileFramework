import { observable, action, useStrict } from 'mobx';

useStrict(true);

export default class LoadingStore {
    @observable loading = true;
    @action completedLoading = () => {
        this.loading = false;
    }
}