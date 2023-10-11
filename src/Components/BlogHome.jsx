import React, { useEffect, useState } from 'react'
import '../App.css';
import Container from 'react-bootstrap/Container'
import {useNavigate} from 'react-router-dom' 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch} from "react-redux";
import {moreInfo} from '../reducer'





export const BlogHome = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [value, setValue] = useState([])
    const [load, loading] = useState(true)
    useEffect(() => {
        async function loadData() {
            let response = await fetch('/getBlog');
            let data = await response.json();
            setValue(data)
            loading(false)
            console.log(data);
        }
        loadData();
    }, []);


    function handle1() {
        navigate('/createBlog')

    }
    function view(ele){
        dispatch(moreInfo(ele))
        navigate('/view')
    }

    if (load) {
        return (
            <div className='App'>
                <Container>
                    <img src="https://media.giphy.com/media/AAO7CYEKrIGfGphpFO/giphy.gif" alt="gif" />
                </Container>
            </div>
        )
    }

    return (
        <div className='App'>
            <nav className="bg-dark navbar-dark">
                <div className="container">
                    <a href="" className="navbar-brand"><i className="fas fa-tree mr-2"></i>Home</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-0" type="search" placeholder="Search Blog" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section id="header" className="jumbotron">
                <h4 className="display-3 text-center">welcome to blog website</h4>
                <button className="btn btn-primary " onClick={() => handle1()}>Create Blog </button>

            </section>
            <Row>
                {value.data.map((ele) =>
                    <Col sm={4}>
                        <Card style={{ width: '18rem' ,marginTop:"40px",marginLeft:"40px" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{ele.title}</Card.Title>
                                <Card.Text>
                                   {ele.description}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>view(ele)}>view Detail</Button>
                            </Card.Body>
                        </Card>

                    </Col>


                )}
            </Row>



        </div>
    )
}
