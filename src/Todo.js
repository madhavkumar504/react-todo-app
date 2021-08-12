import React, { useState, useEffect } from 'react';

// get local storge items
const getLocalstorageItem = () =>{
    let list = localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    }else{
        return [];
    }
}
function Todo() {
    
    const[inputItem, setInputItem] = useState('');
    const[item, setItem] = useState(getLocalstorageItem());
    
    const addTodo = () =>{
        if(!inputItem){
            alert('Input can not be empty');
        // spread operator
        }else{
        setItem([...item, inputItem]);
        setInputItem('');
        }
    }
    const deleteBtn = (id) =>{
        const updatedItems = item.filter((ele, ind)=>{
            return ind !== id;
        })
        if(!updatedItems){
            <p>No data for delete</p>
        }else{
            setItem(updatedItems);

        }
    }
    const editBtn = (id) => {
        let edit = item.find(function(ele,index){
            return ele.id;
        });
        console.log(edit);
    }

    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(item));
    }, [item]);


    return (
        <div>
            <div className="container w-25 my-4">
            <div className="row ">
            <div className="col-xl-9">
                <input type="email" value={inputItem} onChange={ (e) => setInputItem(e.target.value) } className="form-control border-0" id="email" placeholder="Add items" name="email" />
            </div>
            <div className="col-xl-3">
                <button className="btn btn-warning" onClick={addTodo}>Add</button>
            </div>
            </div>
            </div>
            <h2>Todo List</h2>
            <div className="container w-25 my-4">
                {
                    item.map(function(currElement,index){
                        return( 
                        <div className="row border" key={index}>
                            <div className="col-xl-8 col-md-10 pt-2" >
                                <p className="text-left">{currElement}</p>
                            </div>
                            <div className="col-xl-2 col-md-12 mt-2">
                                {/* <button className="btn btn-danger h-100 d-inline-block" > */}
                                <i className="fa fa-edit" onClick={()=>editBtn(index)}></i>     
                                {/* </button> */}
                            </div>
                            <div className="col-xl-2 col-md-12 mt-2">
                                {/* <button className="btn btn-danger h-100 d-inline-block" > */}
                                    <i className="fa fa-trash" onClick={()=>deleteBtn(index)}></i>
                                {/* </button> */}
                            </div>
                            
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo
