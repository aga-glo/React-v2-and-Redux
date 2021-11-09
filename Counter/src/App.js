import { connect } from "react-redux";
import Counter from "./Counter";

//pl:powiazanie stanu z wlasciwoscia komponentu
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

//actions
var increaseAction = { type: "increase"};
var decreaseAction = { type: "decrease"};

//pl:powiazanie akcji z wlasciwosciami komponentu
function mapDispatchToProps (dispatch) {
    return {
        increaseCount: function() {
            return dispatch(increaseAction);
        },
        decreaseCount: function() {
            return dispatch(decreaseAction);
        }
    };
}

//pl:component wyzszego rzedu
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;