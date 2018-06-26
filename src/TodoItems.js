import React, { Component } from "react";
//import InlineEdit from 'react-edit-inline';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'ReactInline demo'
          }
        this.createTasks = this.createTasks.bind(this);
        this.dataChanged = this.dataChanged.bind(this);
    }
    createTasks(item, i) {
        var tdClass = "item " + item.textDecor;
        return <tr className="a"draggable="true">
            <td><input type="checkbox" onChange={this.todoCompleted.bind(this, i)} /></td>
            <td className={tdClass}>{item.text}</td>
            <td><button src="../src/trash.svg" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.delete(item.key)}}>
            <i class="fas fa-trash-alt"></i>
            </button></td>
            <td><button src="../src/edit.svg" onClick={()=> this.customValidateText(item.data, item.text)} validate={this.customValidateText} activeClassName="editing"
              text={this.state.message}
              paramName="message"
              change={this.dataChanged}>
            <i class="fas fa-edit"></i>
            </button></td>

        </tr>
    }

    /*-------------------------------------Drag and drop-----------------------------*/
    
    /*-------------------------------------Drag and drop-----------------------------*/
    delete(key) {
        this.props.delete(key);
    }

    todoCompleted(item, i) {
        this.props.todoCompleted(item, i);
    }

    
    dataChanged(data) {
        console.log(data)
        this.setState({...data})
    }
    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <tbody>
                {listItems}
            </tbody>
                
        )
    }
}
export default TodoItems;