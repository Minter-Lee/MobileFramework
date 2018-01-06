import { Component } from 'React';

const HOCLoadingComponent = (WrappedComponent) =>
    class extends WrappedComponent {

        render() {
            if (this.loadingStore.loading) {
                return (
                    <div>{"loading"}</div>
                )
            } else {
                return super.render();
            }
        }
    }

export default HOCLoadingComponent;

