import Worker from 'worker-loader!./worker';

class Controller {
    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._worker = new Worker();
        this._view.setOnChange(this.onChange);
        this._view

    }

    onChange = (id, value) => {
        this._model.setValue(id, value);
        this._worker.postMessage(this._model.getValues());
    }

    onGetResult = e => {
        const { data } = e;

        
    }
}

export default Controller;