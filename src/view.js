class View {
    
    constructor() {
        this._root = document.getElementById('root');
        this._first = this.createInput('first');
        this._second = this.createInput('second');
        this._result = this.createInput('result');
        this._result.readOnly = true;

        this._root.append(this._first);
        this._root.append(this._second);
        this._result.append(his._result);
    }
    
    
    constructInput = id => {
        const input = document.getElementById('input');
        input.setAttribute('type', 'number');
        input.setAttribute('id', id);

        return id;
    }

    setOnChange = cb => {
        this._first.onchange = e => {
            const { id, value } = e.target;
            
            cb(id, value);
        }

        this._second.onchange = e => {
            const { id, value } = e.target;
            
            cb(id, value);
        }
    }

    showResult = value => {

    }
}

export default View;