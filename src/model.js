class Model {
    _firstValue;
    _firstValue;

    getValue = () => ({ firstValue: this._firstValue, secondValue: this._secondValue  });
    setValue = (key, value) => {
        switch(key) {
            case 'first':
            this._firstValue = value; break
           
            case 'second':
            this._secondValue = value; break

            default:
                break;
            
        }
    }
}