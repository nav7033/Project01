import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import '../App.css';
import axios from 'axios'
//import { useHistory } from 'react-router-dom';
//import { NavLink,useNavigate} from 'react-router-dom';
//import axios from 'axios'

export const Createblog = () => {
    const dispatch = useDispatch()
    const update = useSelector((state) => state.update)
    console.log(update._id)
    //const history = useNavigate();
    const [text, setText] = useState({
        title: "",
        imageUrl: "",
        description: ""

    })

    const [err, setErr] = useState({
        title: "",
        imageUrl: "",
        description: ""
    })

    const isValid = function (value) {
        if (typeof value == 'undefined' || value == null) return false
        if (typeof value == 'string' && value.trim.length == 0) return false
        return true
    }
    const onText = (ele) => {
        //console.log("submitted")
        const { value, name } = ele.target
        setText({ ...text, [name]: value })

    }
    console.log(text)

    const onSubmit = async function () {

        if (update._id != undefined) {
            const { title, imageUrl, description } = text
            // const res = await fetch(`/updateBlog?userId=${update._id}`, {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ title, imageUrl, description })
            // });
            await axios.post(`/updateBlog?userId=${update._id}`, {
                title: title,
                imageUrl: imageUrl,
                description:description
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

           
              
            if (text.title == "") {
                setErr((ele) => ({ ...ele, title: "required title*" }))
            }
            else if (text.imageUrl == "") {
                setErr((ele) => ({ ...ele, imageUrl: "required imageUrl*" }))
            }
            else if (text.description == "") {
                setErr((ele) => ({ ...ele, description: "required description*" }))
            }
            else {
                window.alert("Successfully updated")
                console.log("Successfully updated")
            }
        }
        else{
            const { title, imageUrl, description } = text
            const res = await fetch('/create', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, imageUrl, description })
            });
            const res1 = await res.json()
            if (text.title == "") {
                setErr((ele) => ({ ...ele, title: "required title*" }))
            }
            else if (text.imageUrl == "") {
                setErr((ele) => ({ ...ele, imageUrl: "required imageUrl*" }))
            }
            else if (text.description == "") {
                setErr((ele) => ({ ...ele, description: "required description*" }))
            }

            else if (res1.status == 400) {
                window.alert("Invalid request")
                console.log("Invalid request")
            }
            else {
                window.alert("Successfully created")
                console.log("Successfully created")
            }
            
        }



    }








    return (
        <div className="card App" style={{ width: "24rem", marginLeft: "35%", padding: "50px" }}>
            <div className="card-header">
                <p>Blog</p>
            </div>
            <div className="card-body from">
                <input type="text" name='title' id="form12" class="form-control" value={text.title} onChange={onText} />
                <label class="form-label" for="form12">Title</label>
                {err.title && (<div>
                    <p style={{ color: 'red' }}>{err.title}</p>
                </div>)}

                <input type="text" name='imageUrl' id="form12" class="form-control" value={text.imageUrl} onChange={onText} />
                <label class="form-label" for="form12">ImageUrl</label>
                {err.imageUrl && (<div>
                    <p style={{ color: 'red' }}>{err.imageUrl}</p>
                </div>)}

                <textarea class="form-control" name='description' id="textAreaExample1" rows="4" value={text.description} onChange={onText}></textarea>
                <label class="form-label" for="textAreaExample">Description</label>
                {err.description && (<div>
                    <p style={{ color: 'red' }}>{err.description}</p>
                </div>)}
            </div>
            <div className="card-footer">
                <button className='btn btn-primary' onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
}
