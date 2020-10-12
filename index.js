const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

document.getElementById('increment').addEventListener('click', function(){
    //execute code to add one to state
    dispatch({ type: "CHANGEVALUE", value: 1 });
})

document.getElementById('increment5').addEventListener('click', function(){
    //execute code to add one to state
    dispatch({ type: "CHANGEVALUE", value: 5 });
})

document.getElementById('decrement').addEventListener('click', function(){
    //execute code to subtract one from state
    dispatch({ type: "CHANGEVALUE", value: -1 });
})

document.getElementById('decrement5').addEventListener('click', function(){
    //execute code to subtract one from state
    dispatch({ type: "CHANGEVALUE", value: -5 });
})

document.getElementById('colors').addEventListener('change', function(e){
    //execute code to change color
    console.log(e.target.value);
    dispatch({ type: "CHANGECOLOR", color: e.target.value })
})