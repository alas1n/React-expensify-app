import React from 'react'
import ReactDOM from 'react-dom'


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePickFunc = this.handlePickFunc.bind(this)
        this.handleAddFunc = this.handleAddFunc.bind(this)
        this.handleDeletOption = this.handleDeletOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const loadedDataJson = localStorage.getItem('options')
            const loadedDataObj = JSON.parse(loadedDataJson)
            this.setState(() => ({ options: loadedDataObj }))
        } catch (error) {
            //do nothing 
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const jsonOptions = JSON.stringify(this.state.options)
            localStorage.setItem('options', jsonOptions)
        }
    }
    handleDeletOption(removeOption) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => removeOption !== option)
            }
        })
    }
    handleAddFunc(option) {
        if (this.state.options.includes(option)) {
            return 'this item is tekrari'
        } else if (!option.trim()) {
            return 'add dorost value'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
    handleRemoveAll() {
        this.setState(() => ({ options: [] }))
    }
    handlePickFunc() {
        this.setState(() => alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]))
    }
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    activeButton={!!this.state.options}
                    showPopUp={this.handlePickFunc}
                />
                <Options
                    options={this.state.options}
                    removeButtonFunc={this.handleRemoveAll}
                    handleDeletOption={this.handleDeletOption}
                />
                <AddOption
                    addOptionProp={this.handleAddFunc}
                />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1> {props.title} </h1>
            <h2> {props.subtitle} </h2>
        </div>
    )
}


const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.showPopUp}
                disabled={!props.activeButton}
            >
                what should I do?
             </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeButtonFunc} > Remove all</button>
            {props.options && props.options.length === 0 && <p> add new Item</p>}
            {
                props.options.map((option) => {
                    return (
                        <Option
                            key={option}
                            text={option}
                            removeOptionFunction={props.handleDeletOption}
                        />
                    )
                })
            }
        </div>
    )
}


const Option = (props) => {


    return (
        <div>
            <button onClick={
                () => {
                    props.removeOptionFunction(props.text)
                }
            }>×</button>
            {props.text}
        </div>
    )
}



class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.addOptionFunc = this.addOptionFunc.bind(this)
        this.state = {
            error: undefined
        }

    }
    addOptionFunc(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOptionProp(option);

        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOptionFunc}>
                    <input type='text' name='option'></input>
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app-root'))
